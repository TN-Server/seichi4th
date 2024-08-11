import { world, BlockLocation } from '@minecraft/server';
import { ActionFormData } from '@minecraft/server-ui';

world.say('loaded: welcome.js')
const pos = {
  register: new BlockLocation(23, 5, -132)
}

const form = new ActionFormData()
  .title('Welcome!')
  .body([
    'TN Serverへようこそ！',
    '',
    '自然の地形やスキルを使った整地ができる整地サーバーです',
    'まずはルールを読んでロビーに行こう！',
    ' '
  ].join('\n'))
  .button('OK');

world.events.buttonPush.subscribe(ev => {
  const { block, source } = ev;
  
  if (block.location.equals(pos.register)) {
    form.show(source);
  }
});