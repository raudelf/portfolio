import { useState } from "react";
import { FieldError, Label, TextArea, TextField } from "react-aria-components";
import { TextboxInputProps } from "../types";
import classNames from "classnames";

const TextAreaInput = (props: TextboxInputProps) => {
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
      <TextArea
        className={inputClassName}
        placeholder={placeHolder}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <FieldError className={errorClassName}>
        {({ validationDetails }) =>
          validationDetails.valueMissing ? `Please enter a ${label}` : ""
        }
      </FieldError>
    </TextField>
  );
};

export default TextAreaInput;
