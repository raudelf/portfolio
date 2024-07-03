import { useState } from "react";
import { FieldError, Input, Label, TextField } from "react-aria-components";
import { TextboxInputProps } from "../types";
import classNames from "classnames";

const TextboxInput = (props: TextboxInputProps) => {
  const {
    wrapperClassName,
    inputClassName,
    errorClassName,
    label,
    placeHolder,
  } = props;

  const [value, setValue] = useState<string>("");

  return (
    <TextField className={wrapperClassName} {...props}>
      <Label
        className={classNames("contact-page__input-label", {
          "contact-page__input-label--filled": value,
        })}
      >
        {label}
      </Label>
      <Input
        className={inputClassName}
        placeholder={placeHolder}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <FieldError className={errorClassName}>
        {({ validationDetails }) =>
          validationDetails.valueMissing
            ? `Please enter a ${label}`
            : validationDetails.typeMismatch
            ? `Please enter a valid ${label}`
            : " "
        }
      </FieldError>
    </TextField>
  );
};

export default TextboxInput;
