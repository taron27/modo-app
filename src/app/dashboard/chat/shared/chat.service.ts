import { Injectable } from '@angular/core';
import { MESSAGES } from './mock-messages';
import Messages from './messages.model';

@Injectable({
  providedIn: 'root'
})

export class ChatService {
  getMessages(): Promise<Messages[]> {
    return Promise.resolve<Messages[]>(MESSAGES);
  }
}
