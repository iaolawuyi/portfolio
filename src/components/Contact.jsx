
// components/Contact.jsx
import React from "react";

function Contact() {
  return (
    <section className="mt-16 text-center">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <p className="text-gray-400 mb-2">Let's connect!</p>
      <div className="flex justify-center gap-4">
        <a
          href="mailto:olaism02@gmail.com"
          className="text-blue-400 hover:underline"
        >
          Email
        </a>
        <a
          href="https://github.com/iaolawuyi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          GitHub
        </a>
        <a
          href="www.linkedin.com/in/ismail-olawuyi-3ab475208"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;