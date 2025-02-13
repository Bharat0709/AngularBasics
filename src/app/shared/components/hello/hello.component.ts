import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})
export class HelloComponent {
  @Input() message: string = '';

  @Output() messageUpdated = new EventEmitter<string>();

  sendMessageToParent() {
    this.messageUpdated.emit('Hello from Child!');
  }
}
