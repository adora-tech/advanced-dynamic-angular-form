import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../form-field';
import { FormfieldControlService } from '../formfield-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() formFields: FormField<string>[] = [];
  form: FormGroup;
  payLoad = '';
  isSubmitted = false;

  constructor(private formfieldService: FormfieldControlService) { }

  ngOnInit(): void {
    this.form = this.formfieldService.toFormGroup(this.formFields);
  }

  onSubmit = (): void => {
    this.isSubmitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
      console.log('FAILED!!');
      return;
    }
    this.payLoad = JSON.stringify(this.form.getRawValue());
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
  }

  onReset = (): void => {
    this.isSubmitted = false;
    this.form.reset();
  }

}
