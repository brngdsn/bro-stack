import {ComponentMetadata as Component, ViewMetadata as View} from 'angular2/angular2';

@Component({
  selector: 'bro-stack-editor'
})

@View({
  templateUrl: 'bro-stack-editor.html'
})

export class BroStackEditor {

  constructor() {
    console.info('bro-stack-editor Component Mounted Successfully');
  }

}
