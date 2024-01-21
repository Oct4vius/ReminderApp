import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'shared-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input()
  public placeholder: string = '';

  @Output()
  public saveInputValue: EventEmitter<string> = new EventEmitter();

  @ViewChild('reminderInput')
  public reminderInput!: ElementRef<HTMLInputElement>;

  public saveInput = (value: string) => {
    this.saveInputValue.emit(value);

    this.reminderInput.nativeElement.value = '';
  };
}
