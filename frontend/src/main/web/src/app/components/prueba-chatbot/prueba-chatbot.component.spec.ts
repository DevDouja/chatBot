import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaChatbotComponent } from './prueba-chatbot.component';

describe('PruebaChatbotComponent', () => {
  let component: PruebaChatbotComponent;
  let fixture: ComponentFixture<PruebaChatbotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaChatbotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
