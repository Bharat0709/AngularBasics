import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './shared/components/hello/hello.component';
import { CounterComponent } from './shared/components/counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloComponent, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  counterValue = 5;
  parentMessage = 'Hello form Parent Component!!!';
  childMessage = '';
  handleChildMessage(messageGot: string) {
    this.childMessage = messageGot;
  }
  handleCountReached(count: number) {
    alert(`Counter reached: ${count}`);
  }

  handleMessageUpdate(updatedMessage: string) {
    this.childMessage = updatedMessage;
  }
}
