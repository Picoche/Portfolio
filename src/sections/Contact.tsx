import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const { alert, showAlert, hideAlert } = useAlert();

  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    await emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Fabien",
          from_email: form.email,
          to_email: "fabien.hombert.pro@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Votre message a bien été envoyé !",
            type: "success",
          });
          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "Votre message n'a pas pu être envoyé, veuillez réessayer.",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Contact</h3>
          <p className="text-lg text-white-600 mt-3">
            Je suis toujours à la recherche d'un nouveau challenge. N'hésitez
            pas à me contacter !
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Nom *</span>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                id="name"
                className="field-input"
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email *</span>
              <input
                type="text"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                id="name"
                className="field-input"
                placeholder="john.doe@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Message *</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                id="message"
                className="field-input"
                placeholder="Bonjour, je vous contacte..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Envoi..." : "Envoyer"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
