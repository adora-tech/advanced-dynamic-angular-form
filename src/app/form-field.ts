export class FormField<T> {
  value: T;
  name: string;
  label: string;
  checkLabel: string;
  placeholder: string;
  required: boolean;
  validator: string;
  validatorRequiredMessage: string;
  validatorMinLengthMessage: string;
  validatorMaxLengthMessage: string;
  validatorPatternMessage: string;
  validatorEmailMessage: string;
  order: number;
  fieldType: string;
  type: string;
  options: { key: string; value: string }[];
  datalists: { value: string }[];

  constructor(
    options: {
      value?: T;
      name?: string;
      label?: string;
      checkLabel?: string;
      placeholder?: string;
      required?: boolean;
      validator?: string;
      validatorRequiredMessage?: string;
      validatorMinLengthMessage?: string;
      validatorMaxLengthMessage?: string;
      validatorPatternMessage?: string;
      validatorEmailMessage?: string;
      order?: number;
      fieldType?: string;
      type?: string;
      options?: { key: string; value: string }[];
      datalists?: { value: string }[];
    } = {}
  ) {
    this.value = options.value;
    this.name = options.name || '';
    this.label = options.label || '';
    this.checkLabel = options.checkLabel || '';
    this.placeholder = options.placeholder || '';
    this.required = !!options.required;
    this.validatorRequiredMessage = options.validatorRequiredMessage || '';
    this.validatorMinLengthMessage = options.validatorMinLengthMessage || '';
    this.validatorMaxLengthMessage = options.validatorMaxLengthMessage || '';
    this.validatorPatternMessage = options.validatorPatternMessage || '';
    this.validatorEmailMessage = options.validatorEmailMessage || '';
    this.validator = options.validator || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.fieldType = options.fieldType || '';
    this.type = options.type || '';
    this.options = options.options || [];
    this.datalists = options.datalists || [];
  }
}
