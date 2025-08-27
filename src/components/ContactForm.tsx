import { useState } from "react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    try {
      const response = await fetch("https://formspree.io/f/myzdzwdj", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset(); // مسح الحقول بعد الإرسال
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  if (submitted) {
    return (
      <div className="p-6 text-center text-green-700 bg-green-50 rounded-lg">
        ✅ تم إرسال الرسالة بنجاح! شكرًا لتواصلك معنا.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 text-red-700 bg-red-50 rounded">
          ❌ حدث خطأ أثناء الإرسال. حاول مرة أخرى.
        </div>
      )}

      <div>
        <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
          الاسم
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          placeholder="أدخل اسمك"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
          البريد الإلكتروني
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
          الرسالة
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          placeholder="اكتب رسالتك هنا..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
      >
        إرسال الرسالة
      </button>
    </form>
  );
};

export default ContactForm;
