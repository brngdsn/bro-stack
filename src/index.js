import {ComponentMetadata as Component, ViewMetadata as View, bootstrap} from 'angular2/angular2';
import {BroStack} from 'bro-stack';

@Component({
  selector: 'main'
})

@View({
  directives: [BroStack],
  template: `
    <bro-stack></bro-stack>
  `
})

class Main {

}

bootstrap(Main);
