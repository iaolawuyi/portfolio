// components/ProjectCard.jsx
import React from "react";

function ProjectCard({ repo }) {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg p-4">
      <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
      <p className="text-gray-400 text-sm mb-3">{repo.description}</p>
      <div className="flex justify-between items-center text-sm">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          View on GitHub
        </a>
        <span>⭐ {repo.stargazers_count}</span>
      </div>
    </div>
  );
}

export default ProjectCard;