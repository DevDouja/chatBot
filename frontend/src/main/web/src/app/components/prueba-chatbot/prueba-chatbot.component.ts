
import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {PartialObserver} from "rxjs";
import {mergeNsAndName} from "@angular/compiler";
import { MessageService } from 'src/app/message.service';
import { Message } from 'src/app/message';

@Component({
  selector: 'app-prueba-chatbot',
  templateUrl: './prueba-chatbot.component.html',
  styleUrls: ['./prueba-chatbot.component.css']
})
export class PruebaChatbotComponent implements OnInit {

  message: Message;
  response: Message[];
  history: Message[][];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private messageService: MessageService) {
                this.history = [];
  }

  ngOnInit() {
    //Iniciamos la conversación automáticamente al entrar
    let mensajeInicial = new Message();
    mensajeInicial.text = "hola";
    this.messageService.sendMessage(mensajeInicial).subscribe(result => {
      this.response = result;
      this.response.map(x => x.owner = "Watson");
      this.history.push(this.response);
    });
  }

  onSubmit(query: string) {

    this.message = new Message();
    this.message.response_type = 'text';
    this.message.text = query;
    this.message.owner = 'Usuario';

    this.history.push([this.message]);

    this.messageService.sendMessage(this.message).subscribe(result => {

      this.response = result;
      this.response.map(x => x.owner = "Watson");
      this.history.push(this.response);
      console.log(this.history);
    });

  }

}
