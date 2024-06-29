import ContactForm from "../components/ContactForm";
import BaseLayout from "../shared/BaseLayout";

const ContactPage = () => {
  return (
    <>
      <BaseLayout>
        <div className="container contact-page">
          <h1 className="contact-page__title">Contact</h1>

          <ContactForm />
        </div>
      </BaseLayout>
    </>
  );
};

export default ContactPage;
