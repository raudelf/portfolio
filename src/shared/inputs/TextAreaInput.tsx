import { FieldError, Label, TextArea, TextField } from "react-aria-components";
import { TextboxInputProps } from "../types";

const TextAreaInput = (props: TextboxInputProps) => {
  const {
    wrapperClassName,
    inputClassName,
    errorClassName,
    label,
    placeHolder,
  } = props;

  return (
    <TextField className={wrapperClassName} {...props}>
      <Label className="visually-hidden">{label}</Label>
      <TextArea className={inputClassName} placeholder={placeHolder} />
      <FieldError className={errorClassName}>
        {({ validationDetails }) =>
          validationDetails.valueMissing ? `Please enter a ${label}` : ""
        }
      </FieldError>
    </TextField>
  );
};

export default TextAreaInput;
