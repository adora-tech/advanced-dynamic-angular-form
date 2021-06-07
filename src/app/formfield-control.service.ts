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

  toFormGroup(formFields: FormField<string>[]): FormGroup {
    const fieldsGroup: any = {};
    formFields.forEach(formField => {
      const validator: ValidatorFn[] = formField.required ? [Validators.required] : [];
      switch (formField.validator) {
        case 'prenumeValidator':
          validator.push(Validators.minLength(3));
          break;
        case 'numeValidator':
          validator.push(Validators.minLength(3));
          break;
        case 'telefonValidator':
          validator.push(Validators.pattern('^[0-9]*$'));
          validator.push(Validators.minLength(10));
          validator.push(Validators.maxLength(10));
          break;
        case 'emailValidator':
          validator.push(Validators.email);
          break;
        case 'nascutValidator':
          validator.push(Validators.pattern(/^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-[0-9]{4}$/));
          break;
        case 'functieValidator':
          validator.push(Validators.pattern('[a-zA-Z ()/]*'));
          break;
        case 'observatiiValidator':
          validator.push(Validators.minLength(3));
          break;
        case 'gdprValidator':
          validator.push(Validators.requiredTrue);
          break;
        default:
          break;
      }
      fieldsGroup[formField.name] = validator.length > 0 ? new FormControl(formField.value || '', validator)
        : new FormControl(formField.value || '');
    });
    return new FormGroup(fieldsGroup);
  }

  getFormFields() {
    const formFieldsArray: FormField<string>[] = [
      new FormField<string>({
        fieldType: 'type-text',
        name: 'prenume',
        label: 'Prenume',
        type: 'text',
        placeholder: 'Completează...',
        required: true,
        validatorRequiredMessage: 'Prenumele este obligatoriu',
        validatorMinLengthMessage: 'Lungimea minimă este de 3 caractere',
        validator: 'prenumeValidator',
        order: 1
      }),
      new FormField<string>({
        fieldType: 'type-text',
        name: 'nume',
        label: 'Nume',
        type: 'text',
        placeholder: 'Completează...',
        required: true,
        validatorRequiredMessage: 'Numele este obligatoriu',
        validatorMinLengthMessage: 'Lungimea minimă este de 3 caractere',
        validator: 'numeValidator',
        order: 2
      }),
      new FormField<string>({
        fieldType: 'type-tel',
        name: 'telefon',
        label: 'Telefon',
        type: 'tel',
        placeholder: '0XXXYYYZZZ',
        required: true,
        validatorRequiredMessage: 'Telefonul este obligatoriu',
        validatorMinLengthMessage: 'Lungimea minimă este de 10 cifre',
        validatorMaxLengthMessage: 'Lungimea maximă este de 10 cifre',
        validatorPatternMessage: 'Exclusiv cifre',
        validator: 'telefonValidator',
        order: 3
      }),
      new FormField<string>({
        fieldType: 'type-email',
        name: 'email',
        label: 'E-mail',
        type: 'email',
        placeholder: 'prenume.nume@domeniu.tld',
        required: true,
        validatorRequiredMessage: 'E-mailul este obligatoriu',
        validatorEmailMessage: 'Trebuie să fie o adresă de e-mail validă',
        validator: 'emailValidator',
        order: 4
      }),
      new FormField<string>({
        fieldType: 'type-date',
        name: 'nascut',
        label: 'Născut',
        type: 'date',
        placeholder: 'ZZ-LL-AAAA',
        required: true,
        validatorRequiredMessage: 'Data nașterii este obligatorie',
        validatorPatternMessage: 'Trebuie să fie o dată validă, în formatul ZZ-LL-AAAA',
        validator: 'nascutValidator',
        order: 5
      }),
      new FormField<string>({
        fieldType: 'type-datalist',
        name: 'functie',
        label: 'Funcție',
        type: 'text',
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
        validatorPatternMessage: 'Sunt permise doar litere și caracterele speciale / ( )',
        validator: 'functieValidator',
        order: 7
      }),
      new FormField<string>({
        fieldType: 'type-select',
        name: 'oras',
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
        fieldType: 'type-textarea',
        name: 'observatii',
        label: 'Observații',
        placeholder: 'Completează...',
        required: true,
        validatorRequiredMessage: 'Observațiile sunt obligatorii',
        validatorMinLengthMessage: 'Lungimea minimă este de 3 caractere',
        validator: 'observatiiValidator',
        order: 8
      }),
      new FormField<string>({
        fieldType: 'type-radio',
        name: 'tipApel',
        label: 'Tip Apel',
        required: true,
        validatorRequiredMessage: 'Tip apel este obligatoriu',
        options: [
          {key: 'informatii', value: 'Informații'},
          {key: 'intrerupt', value: 'Întrerupt'}
        ],
        order: 9
      }),
      new FormField<string>({
        fieldType: 'type-checkbox',
        name: 'gdpr',
        label: 'Gdpr',
        checkLabel: 'Acceptă prelucrarea datelor cu caracter personal',
        required: true,
        validatorRequiredMessage: 'Confirmarea este obligatorie',
        validator: 'gdprValidator',
        order: 10
      })
    ];
    return of(formFieldsArray.sort((a, b) => a.order - b.order));
  }

}
