import { Button, Form } from "react-aria-components";
import TextboxInput from "../shared/inputs/TextboxInput";
import TextAreaInput from "../shared/inputs/TextAreaInput";

const ContactForm = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    console.log(e.currentTarget, "woah");
    const formData = new FormData(e.currentTarget);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
    <div className="contact-page__form-container">
      <Form className="contact-page__form" onSubmit={handleSubmit}>
        <TextboxInput
          wrapperClassName="contact-page__input-wrapper"
          inputClassName="contact-page__input"
          errorClassName="contact-page__error"
          name="name"
          label="Name"
          placeHolder="Name"
          isRequired
        />

        <TextboxInput
          wrapperClassName="contact-page__input-wrapper"
          inputClassName="contact-page__input"
          errorClassName="contact-page__error"
          name="emai"
          label="Email"
          type="email"
          placeHolder="Email"
          isRequired
        />

        <TextAreaInput
          wrapperClassName="contact-page__text-area-wrapper"
          inputClassName="contact-page__text-area"
          errorClassName="contact-page__error"
          name="message"
          label="Message"
          placeHolder="Message"
          isRequired
        />

        <Button type="submit" className="btn btn--big contact-page__btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
