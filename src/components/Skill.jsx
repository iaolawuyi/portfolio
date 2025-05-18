// components/Skills.jsx
import React from "react";

function Skills() {
  const skills = ["TensorFlow", "PyTorch", "Keras", "OpenCV", "Scikit-learn", "Pandas"];

  return (
    <section className="my-16">
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-blue-600 px-4 py-2 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;