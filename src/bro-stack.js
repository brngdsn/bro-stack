import {ComponentMetadata as Component, ViewMetadata as View} from 'angular2/angular2';
import {BroStacks} from 'bro-stacks';
import {BroStackEditor} from 'bro-stack-editor';

@Component({
  selector: 'bro-stack'
})

@View({
  directives: [BroStacks,BroStackEditor],
  templateUrl: 'bro-stack.html'
})

export class BroStack {

  constructor() {
    console.info('bro-stack Component Mounted Successfully');
  }

}
