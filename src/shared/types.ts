import { TextFieldProps } from "react-aria-components";

export interface TextboxInputProps extends TextFieldProps {
  label: string;
  wrapperClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
  placeHolder?: string;
  isRequired?: boolean;
}

export interface ToolTypes {
  tool: string;
}

export interface BaseLayoutProps {
  children: React.ReactNode;
}
