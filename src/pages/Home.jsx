// pages/Home.jsx
import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

function Home() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/iaolawuyi/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Hi, I'm Ismail A. Olawuyi</h1>
        <p className="text-lg text-gray-400 mt-2">Deep Learning Enthusiast & Final Year CS Student</p>
      </header>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
      </section>

      <footer className="text-center text-gray-500 mt-16">
        © {new Date().getFullYear()} Ismail A. Olawuyi
      </footer>
    </div>
  );
}

export default Home;
