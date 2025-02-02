import React from "react";
import "./project.css";
import vehicleImg from "../../Assets/vehicle.jpg"; // Add your images here
import codeAnalysisImg from "../../Assets/github.png";
import healthImg from "../../Assets/healthcare.jpg";
import hangmanImg from "../../Assets/hangman.jpg";
import githubimg from "../../Assets/Githublogo.png"
const projects = [
  {
    title: "Vehicle Rental System",
    description: "Manage rentals for SUVs, trucks, and cars with inventory tracking and customer records.",
    image: vehicleImg,
    github: "https://github.com/naik1601/Vehicle-Rental-System-ShreyeshNaik.git"
  },
  {
    title: "Static Code Analysis Tool",
    description: "Analyze Git repositories for code quality using JGit and PMD. Export results to CSV.",
    image: githubimg,
    github: "https://github.com/naik1601/StaticCodeAnalysisTool.git"
  },
  {
    title: "Health Prediction System",
    description: "Predict diseases using Flask, MySQL, and machine learning with a 93% accuracy rate.",
    image: healthImg,
    github: "https://github.com/naik1601/Health_Proj.git"
  },
  {
    title: "Hangman Game",
    description: "A Python-based word-guessing game with real-time feedback and scoring.",
    image: hangmanImg,
    github: "https://github.com/naik1601/HangmanGame.git"
  }
];

const ProjectCard = ({ title, description, image, github }) => (
  <div className="project-card">
    
    <img src={image} alt={title} className="project-image" />
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={github} target="_blank" rel="noopener noreferrer" className="github-link">
      <button className="github-button">
        <img src={githubimg} alt="GitHubLogo" className="github-logo" />
        Open in GitHub
      </button>
    </a>
  </div>
);

const ProjectList = () => {
  return (
    <div id="project-container">
      <h2 className="project-title">Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard 
          key={index} 
          title={project.title} 
          description={project.description} 
          image={project.image} 
          github={project.github} 
        />
      ))}
    </div>
  );
};

export default ProjectList;
