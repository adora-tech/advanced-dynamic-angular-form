export class FormField<T> {
  value: T;
  key: string;
  label: string;
  checkLabel: string;
  placeholder: string;
  required: boolean;
  validator: string;
  validatorRequiredMessage: string;
  order: number;
  controlType: string;
  type: string;
  options: { key: string; value: string }[];
  datalists: { value: string }[];

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      checkLabel?: string;
      placeholder?: string;
      required?: boolean;
      validator?: string;
      validatorRequiredMessage?: string;
      order?: number;
      controlType?: string;
      type?: string;
      options?: { key: string; value: string }[];
      datalists?: { value: string }[];
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.checkLabel = options.checkLabel || '';
    this.placeholder = options.placeholder || '';
    this.required = !!options.required;
    this.validatorRequiredMessage = options.validatorRequiredMessage || '';
    this.validator = options.validator || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
    this.datalists = options.datalists || [];
  }
}
