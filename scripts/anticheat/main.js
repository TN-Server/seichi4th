import { Base } from '../util/Base';
import * as config from './config';

import { Nuker } from './Nuker';

export class AntiCheat extends Base {
  /** @arg {import('../index').Main} main */
  constructor(main) {
    super(main);
    
    this.nuker = new Nuker(config.nuker);
  }
}