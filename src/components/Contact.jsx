import { Loader, Mail, MapPin, Phone } from "lucide-react";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({
      ...p,
      [name]: value,
    }));

    if (formErrors[name])
      setFormErrors((p) => ({
        ...p,
        [name]: "",
      }));
  };

  const isValidForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Inavlid email.";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidForm()) return;
    try {
      setIsSubmitting(true);
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      toast.success("Message sent successfully!");
      setFormData((p) => ({}));
    } catch (error) {
      toast.error("Failed to send message!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="mb-16 text-center opacity-0 animate-fade-in"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get in touch
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-400">
            {" "}
            Whether you have a project in mind or just want to connect, I'd love
            to hear from you. Feel free to reach out using the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <div className="bg-gray-800 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="rounded-full bg-blue-900/30 p-3 text-blue-400">
                    <Mail size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium text-lg">Email</h4>
                    <a
                      href="https://mail.google.com/mail/?view=cm&to=bharaths14051803@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      aria-label="Email"
                    >
                      bharaths14051803@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-blue-900/30 p-3 text-blue-400">
                    <Phone size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium text-lg">Phone</h4>
                    <a
                      href="tel:+919361864050"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      aria-label="Phone"
                    >
                      +91 93618 64050
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-blue-900/30 p-3 text-blue-400">
                    <MapPin size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium text-lg">Location</h4>
                    <p className="text-gray-400 ">Madurai, Tamil nadu, India</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <h4 className="text-lg text-white font-medium mb-4">
                  Connect with me
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/bharaths1803"
                    key="Github"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-700 hover:bg-blue-900/30 rounded-full text-gray-300 hover:text-blue-400 transition-colors"
                    aria-label="Github"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      width={"24"}
                      height={"24"}
                    >
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/bharathseshadrir"
                    key="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-700 hover:bg-blue-900/30 rounded-full text-gray-300 hover:text-blue-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg
                      height="24"
                      width="24"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 382 382"
                      xmlSpace="preserve"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          style={{ fill: "#0077B7" }}
                          d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z"
                        ></path>{" "}
                      </g>
                    </svg>
                  </a>
                  <a
                    href="https://x.com/BharathS1037828"
                    key="X"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-700 hover:bg-blue-900/30 rounded-full text-gray-300 hover:text-blue-400 transition-colors"
                    aria-label="X"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="28"
                      height="28"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://mail.google.com/mail/?view=cm&to=bharaths14051803@gmail.com"
                    key="Email"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-700 hover:bg-blue-900/30 rounded-full text-gray-300 hover:text-blue-400 transition-colors"
                    aria-label="Email"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="25"
                      height="25"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#4caf50"
                        d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                      ></path>
                      <path
                        fill="#1e88e5"
                        d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                      ></path>
                      <polygon
                        fill="#e53935"
                        points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                      ></polygon>
                      <path
                        fill="#c62828"
                        d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                      ></path>
                      <path
                        fill="#fbc02d"
                        d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/9361864050"
                    key="Whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-700 hover:bg-blue-900/30 rounded-full text-gray-300 hover:text-blue-400 transition-colors"
                    aria-label="Whatsapp"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      fill="#000000"
                      width={"25"}
                      height={"25"}
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <defs>
                          {" "}
                          <path
                            id="a"
                            d="M1023.941 765.153c0 5.606-.171 17.766-.508 27.159-.824 22.982-2.646 52.639-5.401 66.151-4.141 20.306-10.392 39.472-18.542 55.425-9.643 18.871-21.943 35.775-36.559 50.364-14.584 14.56-31.472 26.812-50.315 36.416-16.036 8.172-35.322 14.426-55.744 18.549-13.378 2.701-42.812 4.488-65.648 5.3-9.402.336-21.564.505-27.15.505l-504.226-.081c-5.607 0-17.765-.172-27.158-.509-22.983-.824-52.639-2.646-66.152-5.4-20.306-4.142-39.473-10.392-55.425-18.542-18.872-9.644-35.775-21.944-50.364-36.56-14.56-14.584-26.812-31.471-36.415-50.314-8.174-16.037-14.428-35.323-18.551-55.744-2.7-13.378-4.487-42.812-5.3-65.649-.334-9.401-.503-21.563-.503-27.148l.08-504.228c0-5.607.171-17.766.508-27.159.825-22.983 2.646-52.639 5.401-66.151 4.141-20.306 10.391-39.473 18.542-55.426C34.154 93.24 46.455 76.336 61.07 61.747c14.584-14.559 31.472-26.812 50.315-36.416 16.037-8.172 35.324-14.426 55.745-18.549 13.377-2.701 42.812-4.488 65.648-5.3 9.402-.335 21.565-.504 27.149-.504l504.227.081c5.608 0 17.766.171 27.159.508 22.983.825 52.638 2.646 66.152 5.401 20.305 4.141 39.472 10.391 55.425 18.542 18.871 9.643 35.774 21.944 50.363 36.559 14.559 14.584 26.812 31.471 36.415 50.315 8.174 16.037 14.428 35.323 18.551 55.744 2.7 13.378 4.486 42.812 5.3 65.649.335 9.402.504 21.564.504 27.15l-.082 504.226z"
                          ></path>{" "}
                        </defs>{" "}
                        <linearGradient
                          id="b"
                          gradientUnits="userSpaceOnUse"
                          x1="512.001"
                          y1=".978"
                          x2="512.001"
                          y2="1025.023"
                        >
                          {" "}
                          <stop offset="0" stopColor="#61fd7d"></stop>{" "}
                          <stop offset="1" stopColor="#2bb826"></stop>{" "}
                        </linearGradient>{" "}
                        <use
                          xlinkHref="#a"
                          overflow="visible"
                          fill="url(#b)"
                        ></use>{" "}
                        <g>
                          <path
                            fill="#FFF"
                            d="M783.302 243.246c-69.329-69.387-161.529-107.619-259.763-107.658-202.402 0-367.133 164.668-367.214 367.072-.026 64.699 16.883 127.854 49.017 183.522l-52.096 190.229 194.665-51.047c53.636 29.244 114.022 44.656 175.482 44.682h.151c202.382 0 367.128-164.688 367.21-367.094.039-98.087-38.121-190.319-107.452-259.706zM523.544 808.047h-.125c-54.767-.021-108.483-14.729-155.344-42.529l-11.146-6.612-115.517 30.293 30.834-112.592-7.259-11.544c-30.552-48.579-46.688-104.729-46.664-162.379.066-168.229 136.985-305.096 305.339-305.096 81.521.031 158.154 31.811 215.779 89.482s89.342 134.332 89.312 215.859c-.066 168.243-136.984 305.118-305.209 305.118zm167.415-228.515c-9.177-4.591-54.286-26.782-62.697-29.843-8.41-3.062-14.526-4.592-20.645 4.592-6.115 9.182-23.699 29.843-29.053 35.964-5.352 6.122-10.704 6.888-19.879 2.296-9.176-4.591-38.74-14.277-73.786-45.526-27.275-24.319-45.691-54.359-51.043-63.543-5.352-9.183-.569-14.146 4.024-18.72 4.127-4.109 9.175-10.713 13.763-16.069 4.587-5.355 6.117-9.183 9.175-15.304 3.059-6.122 1.529-11.479-.765-16.07-2.293-4.591-20.644-49.739-28.29-68.104-7.447-17.886-15.013-15.466-20.645-15.747-5.346-.266-11.469-.322-17.585-.322s-16.057 2.295-24.467 11.478-32.113 31.374-32.113 76.521c0 45.147 32.877 88.764 37.465 94.885 4.588 6.122 64.699 98.771 156.741 138.502 21.892 9.45 38.982 15.094 52.308 19.322 21.98 6.979 41.982 5.995 57.793 3.634 17.628-2.633 54.284-22.189 61.932-43.615 7.646-21.427 7.646-39.791 5.352-43.617-2.294-3.826-8.41-6.122-17.585-10.714z"
                          ></path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <form className="space-y-6" onSubmit={handleSubmit} ref={formRef}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleChange}
                  value={formData.name}
                  placeholder="Your name"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    formErrors.name
                      ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                  } bg-gray-800 text-white transition-colors`}
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    formErrors.email
                      ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                  } bg-gray-800 text-white transition-colors`}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.email}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  value={formData.message}
                  placeholder="Your message"
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    formErrors.message
                      ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                  } bg-gray-800 text-white transition-colors resize-none`}
                ></textarea>
                {formErrors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center items-center px-6 py-3 rounded-lg font-medium text-white transition-colors ${
                  isSubmitting
                    ? "bg-blue-400 cursor-wait"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {isSubmitting ? (
                  <Loader size={20} className="animate-spin" />
                ) : (
                  "Send message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
