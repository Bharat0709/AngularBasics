import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})

export class CounterComponent {
  messages: string[] = [
    'Welcome to Angular!',
    'Parent to Child communication is done using @Input()',
    'Child to Parent communication is done using @Output() and EventEmitter',
    'Angular uses Dependency Injection for services',
    'Standalone Components make Angular projects modular',
    'Directives like *ngIf and *ngFor control the UI',
    'Angular uses Observables for async operations',
    'Routing in Angular is managed using RouterModule',
    'Angular Signals improve state management',
    'Happy coding with Angular!',
  ];

  currCount = 0;
  currMessage = this.messages[this.currCount];
  newMessage = '';

  addMessage() {
    if (this.newMessage.trim()) {
      this.messages = [...this.messages, this.newMessage]; // Immutable update
      this.currCount = this.messages.length - 1; // Correct index
      this.currMessage = this.messages[this.currCount];
      this.newMessage = '';
    }
  }

  nextMessage() {
    if (this.currCount < this.messages.length - 1) {      // Prevent out-of-bounds
      this.currCount++;
      this.currMessage = this.messages[this.currCount];
    }
  }

  prevMessage() {
    if (this.currCount > 0) {
      this.currCount--;
      this.currMessage = this.messages[this.currCount];
    }
  }
}
