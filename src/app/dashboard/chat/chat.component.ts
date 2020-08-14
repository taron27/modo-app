import { Component, OnInit } from '@angular/core';
import { ChatService } from './shared/chat.service';
import Messages from './shared/messages.model';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messages: Messages[] = [];
  message = '';

  userId = 1;
  constructor(public chatService: ChatService, public dashboardComponent: DashboardComponent) {
    this.changeDashboardSettings();
    chatService.getMessages().then(data => {
      this.messages = data;
    });
  }

  ngOnInit(): void {
    this.toChatBottom();
  }

  changeDashboardSettings(): void {
    this.dashboardComponent.isIpadContent = false;
    this.dashboardComponent.isFixedHeader = true;
    this.dashboardComponent.isMobileFixedHeader = false;
    this.dashboardComponent.isTransparentHeader = false;
    this.dashboardComponent.title = 'Chat';
    this.dashboardComponent.currentInfoDescription = 'Chat';
    this.dashboardComponent.isShowInfoIcon = false;
    this.dashboardComponent.isShowShareIcon = false;
  }

  enterMessage(event): void {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
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
