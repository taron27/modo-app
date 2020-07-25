import { Component, OnInit } from '@angular/core';
import { ChatService } from './shared/chat.service';
import Messages from './shared/messages.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messages: Messages[] = [];
  message = '';

  userId = 1;
  constructor(public chatService: ChatService) {
    chatService.getMessages().then(data => {
      this.messages = data;
    });
  }

  ngOnInit(): void {
    this.toChatBottom();
  }

  sendMessage(): void {
    if (this.message.length) {
      const payload = {
        userName: 'John',
        userId: this.userId,
        message: this.message
      };
      this.messages.push(payload);
      this.message = '';
      this.toChatBottom();
    }
  }

  toChatBottom(): void {
    setTimeout(() => {
      const element = document.getElementById('message-content');
      element.scrollTop = element.scrollHeight;
    }, 0);
  }

}
