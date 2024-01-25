import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'shared-input',
  templateUrl: './input.component.html',
})
export class InputComponent {

  @Input()
  public placeholder: string = '';

  @Input()
  public Icon?: IconProp;

  @Output()
  public saveInputValue: EventEmitter<string> = new EventEmitter();

  @ViewChild('reminderInput')
  public reminderInput!: ElementRef<HTMLInputElement>;

  public saveInput = (value: string) => {
    if(value === '') return;

    this.saveInputValue.emit(value);
    this.reminderInput.nativeElement.value = '';
  };

}
