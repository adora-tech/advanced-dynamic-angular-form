import {Injectable} from '@angular/core';
import {FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {of} from 'rxjs';
import {FormField} from './form-field';

@Injectable({
  providedIn: 'root'
})
export class FormfieldControlService {

  constructor() {
  }

  toFormGroup(inputs: FormField<string>[]): FormGroup {
    const group: any = {};
    inputs.forEach(input => {
      const validator: ValidatorFn[] = input.required ? [Validators.required] : [];
      switch (input.validator) {
        case 'prenume':
          validator.push(Validators.minLength(3));
          break;
        case 'nume':
          validator.push(Validators.minLength(3));
          break;
        case 'telefon':
          validator.push(Validators.pattern('^[0-9]*$'));
          validator.push(Validators.minLength(10));
          validator.push(Validators.maxLength(10));
          break;
        case 'email':
          validator.push(Validators.email);
          break;
        case 'nascut':
          validator.push(Validators.pattern(/^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-[0-9]{4}$/));
          break;
        case 'functie':
          validator.push(Validators.pattern('[a-zA-Z ()/]*'));
          break;
        case 'observatii':
          validator.push(Validators.minLength(3));
          break;
        case 'gdpr':
          validator.push(Validators.requiredTrue);
          break;
        default:
          break;
      }
      group[input.key] = validator.length > 0 ? new FormControl(input.value || '', validator)
        : new FormControl(input.value || '');
    });

    return new FormGroup(group);
  }

  getFormFields() {

    const inputs: FormField<string>[] = [

      new FormField<string>({
        controlType: 'prenume',
        key: 'prenume',
        label: 'Prenume',
        placeholder: 'Completează...',
        required: true,
        validatorRequiredMessage: 'Prenumele este obligatoriu',
        validator: 'prenume',
        order: 1
      }),

      new FormField<string>({
        controlType: 'nume',
        key: 'nume',
        label: 'Nume',
        placeholder: 'Completează...',
        required: true,
        validatorRequiredMessage: 'Numele este obligatoriu',
        validator: 'nume',
        order: 2
      }),

      new FormField<string>({
        controlType: 'telefon',
        key: 'telefon',
        label: 'Telefon',
        placeholder: '0XXXYYYZZZ',
        required: true,
        validatorRequiredMessage: 'Telefonul este obligatoriu',
        validator: 'telefon',
        order: 3
      }),

      new FormField<string>({
        controlType: 'email',
        key: 'email',
        label: 'E-mail',
        placeholder: 'prenume.nume@domeniu.tld',
        type: 'email',
        required: true,
        validatorRequiredMessage: 'E-mailul este obligatoriu',
        validator: 'email',
        order: 4
      }),

      new FormField<string>({
        controlType: 'nascut',
        key: 'nascut',
        label: 'Născut',
        placeholder: 'ZZ-LL-AAAA',
        required: true,
        validatorRequiredMessage: 'Data nașterii este obligatorie',
        validator: 'nascut',
        order: 5
      }),

      new FormField<string>({
        controlType: 'functie',
        key: 'functie',
        label: 'Funcție',
        placeholder: 'Scrie pentru a căuta...',
        datalists: [
          {value: 'Programator / Developer'},
          {value: 'Front End (Web) Developer'},
          {value: 'Automated Quality Assurance Specialist'},
          {value: 'Manual Quality Assurance Specialist'},
          {value: 'Technical Support / Helpdesk Engineer'}
        ],
        required: true,
        validatorRequiredMessage: 'Funcția este obligatorie',
        validator: 'functie',
        order: 7
      }),

      new FormField<string>({
        controlType: 'oras',
        key: 'oras',
        label: 'Oraș',
        options: [
          {key: 'bucuresti', value: 'București'},
          {key: 'cluj', value: 'Cluj'},
          {key: 'constanta', value: 'Constanța'}
        ],
        required: true,
        validatorRequiredMessage: 'Orașul este obligatoriu',
        order: 7
      }),

      new FormField<string>({
        controlType: 'observatii',
        key: 'observatii',
        label: 'Observații',
        placeholder: 'Completează...',
        type: 'observatii',
        required: true,
        validatorRequiredMessage: 'Observațiile sunt obligatorii',
        validator: 'observatii',
        order: 8
      }),

      new FormField<string>({
        controlType: 'tipApel',
        key: 'tipApel',
        label: 'Tip Apel',
        type: 'tipApel',
        required: true,
        validatorRequiredMessage: 'Tip apel este obligatoriu',
        options: [
          {key: 'informatii', value: 'Informații'},
          {key: 'intrerupt', value: 'Întrerupt'}
        ],
        order: 9
      }),

      new FormField<string>({
        controlType: 'gdpr',
        key: 'gdpr',
        label: 'Gdpr',
        checkLabel: 'Acceptă prelucrarea datelor cu caracter personal',
        type: 'gdpr',
        required: true,
        validatorRequiredMessage: 'Confirmarea este obligatorie',
        validator: 'gdpr',
        order: 10
      })

    ];

    return of(inputs.sort((a, b) => a.order - b.order));
  }

}
