import Messages from './messages.model';

export const MESSAGES: Messages[] = [
  {userId: 1, message: 'Hello', userName: 'John'},
  {userId: 2, message: 'Hello', userName: 'Jack'},
  {userId: 2, message: 'How are you', userName: 'Jack'},
  {userId: 1, message: 'Fine. Thanks', userName: 'John'},
  {userId: 1, message: 'And you', userName: 'John'},
  {
    userId: 2,
    message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
      'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when' +
      ' an unknown printer took a galley of type and scrambled it to make a type specimen' +
      ' book. It has survived not only five centuries, but also the leap into electronic ' +
      'typesetting, remaining essentially unchanged. It was popularised in the 1960s with' +
      ' the release of Letraset sheets containing Lorem Ipsum passages, and more recently ' +
      'with desktop publishing software like Aldus PageMaker including versions of Lorem ' +
      'Ipsum.',
    userName: 'Jack'
  },
  {
    userId: 1,
    message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
      'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when' +
      ' an unknown printer took a galley of type and scrambled it to make a type specimen' +
      ' book. It has survived not only five centuries, but also the leap into electronic ' +
      'Ipsum.',
    userName: 'John'
  },
];
