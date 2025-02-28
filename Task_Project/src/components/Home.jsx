import { useState } from "react";

export function Homepage() {
  const [addProject, setAddProject] = useState(false);
  const languages = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "C#",
    "Go",
    "Rust",
    "Swift",
    "Kotlin",
    "PHP",
    "Ruby",
    "TypeScript",
    "Dart",
    "HTML",
    "XML",
    "Markdown",
    "SQL",
    "GraphQL",
    "Bash",
    "PowerShell",
    "Lua",
    "R",
    "Julia",
  ];

  return (
    <>
      <div className="dashboard-container">
        <button
          onClick={() => {
            setAddProject(true);
          }}
        >
          {" "}
          +{" "}
        </button>
        {addProject && (
          <div>
            <form className="project-add-section">
              <label htmlFor="project-title">Project Title: </label>
              <input
                type="text"
                name="project-title"
                id="project-title"
                placeholder="Project title..."
              />
              <label htmlFor="project-description">Description: </label>
              <input
                type="text"
                name="project-description"
                id="project-description"
                placeholder="put you're description here..."
              />
              <label htmlFor="project-languages">Language</label>
              <select name="project-languages" id="project-languages">
                <option value=""></option>
                {languages.map((e) => (
                  <option value={e}>{e}</option>
                ))}
              </select>

              <button
                onClick={() => {
                  setAddProject(false);
                }}
              >
                Add project
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
