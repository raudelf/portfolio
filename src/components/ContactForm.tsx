import { useState } from "react";
import { Button, Form } from "react-aria-components";
import TextboxInput from "../shared/inputs/TextboxInput";
import TextAreaInput from "../shared/inputs/TextAreaInput";
import LoadingDots from "../shared/LoadingDots";

const ContactForm = () => {
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const formKey = import.meta.env.VITE_FORM_API_KEY;

    formData.append("access_key", `${formKey}`);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then((res) => res.json())
      .catch((error) => console.error(error));

    if (res.success) {
      setSubmitSuccess(true);
    }
    setIsSubmitting(false);
  };

  return (
    <>
      {submitSuccess ? (
        <div className="contact-page__success-container" aria-live="polite">
          <h2>Form Submitted!</h2>
          <p>I will get back to you as soon as I can.</p>
        </div>
      ) : (
        <div className="contact-page__form-container">
          <Form className="contact-page__form" onSubmit={handleSubmit}>
            <TextboxInput
              wrapperClassName="contact-page__input-wrapper"
              inputClassName="contact-page__input"
              errorClassName="contact-page__error"
              name="name"
              label="Name"
              isRequired
            />

            <TextboxInput
              wrapperClassName="contact-page__input-wrapper"
              inputClassName="contact-page__input"
              errorClassName="contact-page__error"
              name="emai"
              label="Email"
              type="email"
              isRequired
            />

            <TextAreaInput
              wrapperClassName="contact-page__text-area-wrapper"
              inputClassName="contact-page__text-area"
              errorClassName="contact-page__error"
              name="message"
              label="Message"
              isRequired
            />

            <Button
              type="submit"
              className="btn btn--big contact-page__btn"
              isDisabled={isSubmitting}
            >
              Submit
            </Button>
            {isSubmitting && <LoadingDots />}
          </Form>
        </div>
      )}
    </>
  );
};

export default ContactForm;
