import ContactForm from "@/components/ContactForm";
import { Helmet } from "react-helmet"; // اختياري: لتحسين SEO

const ContactPage = () => {
  return (
    <div className="max-w-3xl p-6 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-center">اتصل بنا</h1>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
