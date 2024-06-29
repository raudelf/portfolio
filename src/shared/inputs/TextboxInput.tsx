import { FieldError, Input, Label, TextField } from "react-aria-components";
import { TextboxInputProps } from "../types";

const TextboxInput = (props: TextboxInputProps) => {
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
      <Input className={inputClassName} placeholder={placeHolder} />
      <FieldError className={errorClassName}>
        {({ validationDetails }) =>
          validationDetails.valueMissing
            ? `Please enter a ${label}`
            : validationDetails.typeMismatch
            ? `Please enter a valid ${label}`
            : " "
        }
        {}
      </FieldError>
    </TextField>
  );
};

export default TextboxInput;
