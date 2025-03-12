import { useEffect, useState } from "react";
import { MultiSelect } from "primereact/multiselect";

import "./Projects.css";

export function ProjectsPage() {
  const [addProject, setAddProject] = useState(false);
  const [projectInfo, setProjectInfo] = useState(null);

  // use a language array and a optionChange to load project obj with updated info
  const languages = [
    // Linguaggi di programmazione
    { value: "JavaScript", label: "JavaScript" },
    { value: "TypeScript", label: "TypeScript" },
    { value: "Python", label: "Python" },
    { value: "Java", label: "Java" },
    { value: "C", label: "C" },
    { value: "C++", label: "C++" },
    { value: "C#", label: "C#" },
    { value: "Go", label: "Go" },
    { value: "Rust", label: "Rust" },
    { value: "Swift", label: "Swift" },
    { value: "Kotlin", label: "Kotlin" },
    { value: "Dart", label: "Dart" },
    { value: "PHP", label: "PHP" },
    { value: "Ruby", label: "Ruby" },
    { value: "Perl", label: "Perl" },
    { value: "Lua", label: "Lua" },
    { value: "R", label: "R" },
    { value: "Julia", label: "Julia" },
    { value: "Haskell", label: "Haskell" },
    { value: "Scala", label: "Scala" },
    { value: "Elixir", label: "Elixir" },
    { value: "Clojure", label: "Clojure" },
    { value: "F#", label: "F#" },
    { value: "Objective-C", label: "Objective-C" },
    { value: "Shell Script", label: "Shell Script" },
    { value: "PowerShell", label: "PowerShell" },
    { value: "Bash", label: "Bash" },
    { value: "SQL", label: "SQL" },
    { value: "GraphQL", label: "GraphQL" },

    // Linguaggi di markup
    { value: "HTML", label: "HTML" },
    { value: "XML", label: "XML" },
    { value: "Markdown", label: "Markdown" },
    { value: "LaTeX", label: "LaTeX" },

    // Linguaggi di styling
    { value: "CSS", label: "CSS" },
    { value: "Sass", label: "Sass" },
    { value: "LESS", label: "LESS" },
    { value: "Stylus", label: "Stylus" },

    // Altri linguaggi specializzati
    { value: "MATLAB", label: "MATLAB" },
    { value: "COBOL", label: "COBOL" },
    { value: "Fortran", label: "Fortran" },
    { value: "Lisp", label: "Lisp" },
    { value: "Prolog", label: "Prolog" },
    { value: "Erlang", label: "Erlang" },
    { value: "Ada", label: "Ada" },
    { value: "Assembly", label: "Assembly" },
    { value: "ABAP", label: "ABAP" },
    { value: "RPG", label: "RPG" },
    { value: "Forth", label: "Forth" },
    { value: "Tcl", label: "Tcl" },
    { value: "Scheme", label: "Scheme" },
    { value: "VBScript", label: "VBScript" },
    { value: "VHDL", label: "VHDL" },
    { value: "Verilog", label: "Verilog" },
    { value: "Rexx", label: "Rexx" },
    { value: "D", label: "D" },
    { value: "XQuery", label: "XQuery" },
  ];

  const [languageArray, setLanguageArray] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setProjectInfo((eprev) => ({ ...eprev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const sendProjectInfo = async () => {
      try {
        const response = await fetch("http://localhost:5000/projects", {
          method: "POST",
          body: JSON.stringify(projectInfo),
          headers: { "content-type": "application/JSON" },
        });

        if (!response.ok) {
          console.error("An error is occured response: ", response.ok);
        }
        log;
      } catch (error) {
        console.error("failed to load new project", error);
      }
    };
    sendProjectInfo();
  };

  return (
    <>
      <div className="dashboard-container">
        <button
          className="project-add-button"
          onClick={() => {
            setAddProject(true);
          }}
        >
          {" "}
          +{" "}
        </button>
        {addProject && (
          <div className="bgDiv">
            <div className="project-add-container">
              <form className="project-add-section" onSubmit={handleSubmit}>
                <h2>Add A New Project Info </h2>
                <label htmlFor="project-title">
                  Project Title:
                  <input
                    type="text"
                    name="title"
                    id="projectTitle"
                    placeholder="Project title..."
                    onChange={onChange}
                  />
                </label>
                <label htmlFor="project-description">
                  Description:
                  <textarea
                    type="text"
                    name="description"
                    id="projectDescription"
                    placeholder="put you're description here..."
                    onChange={onChange}
                  />
                </label>
                <label htmlFor="projectMultiselect">
                  <MultiSelect
                    className="projectMultiselect"
                    name="projectMultiselect"
                    id="projectMultiselect"
                    options={languages}
                    placeholder="Select language..."
                    optionLabel="label"
                    value={languageArray}
                    onChange={(e) => {
                      setLanguageArray(e.value);
                      setProjectInfo((eprev) => ({
                        ...eprev,
                        language: e.value,
                      }));
                    }}
                    display="chip"
                    filter
                  />
                </label>
                <button type="submit">Add project</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
