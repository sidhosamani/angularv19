import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: false,
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  message: string = '';

  sendMessage() {
    console.log('Message sent:', this.message);
  }
}
   