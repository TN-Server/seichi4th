import { main } from '../index.js';

main.commands.register({
  name: 'test',
  description: 'テスト',
}, (sender) => {
  sender.sendMessage('Hello World');
});