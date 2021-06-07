import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormField} from '../form-field';

declare var $: any;

@Component({
  selector: 'app-dynamic-form-input',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.css']
})
export class DynamicFormInputComponent implements OnInit {

  @Input() formField: FormField<string>;
  @Input() form: FormGroup;

  @Input() isSubmitted: boolean;

  ngOnInit() {
  }

  get nameFieldControl() {
    return this.form.controls[this.formField.name];
  }

  onlyNumbers = (event: any) => {
    const pattern = /[0-9+\- ]/;
    const inputChar = String.fromCharCode(event.keyCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
