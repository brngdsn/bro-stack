import {ComponentMetadata as Component, ViewMetadata as View} from 'angular2/angular2';

@Component({
  selector: 'bro-stacks'
})

@View({
  templateUrl: 'bro-stacks.html'
})

export class BroStacks {

  constructor() {
    console.info('bro-stacks Component Mounted Successfully');
  }

}
