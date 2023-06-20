/** @arg {import('./CommandManager').CommandManager} commands */
export function register(commands) {
  commands.register({
    name: 'test',
    description: 'テスト',
  }, (sender) => {
    sender.sendMessage('Hello World');
  });
}