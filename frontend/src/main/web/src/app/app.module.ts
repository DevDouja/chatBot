import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { PruebaChatbotComponent } from './components/prueba-chatbot/prueba-chatbot.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatBoxComponent,
    PruebaChatbotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
