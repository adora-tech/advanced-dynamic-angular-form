import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormField} from '../form-field';

@Component({
  selector: 'app-dynamic-form-input',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.css']
})
export class DynamicFormInputComponent {

  @Input() input: FormField<string>;
  @Input() form: FormGroup;

  @Input() isSubmitted: boolean;

  get key() {
    return this.form.controls[this.input.key];
  }

  onlyNumbers = (event: any) => {
    const pattern = /[0-9+\- ]/;
    const inputChar = String.fromCharCode(event.keyCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
