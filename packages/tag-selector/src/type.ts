export interface Value {
  key: string;
  text: string;
  refText?: string;
  value?: number;
  editable?: boolean;
}

export interface Item {
  key: string;
  title: string;
  value: Value[];
  inputVisible?: boolean;
}
