import { useEffect, useState } from "react";
import { MultiSelect } from "primereact/multiselect";

import "./Projects.css";

export function ProjectsPage() {
  const [addProject, setAddProject] = useState(false);
  const [projectInfo, setProjectInfo] = useState(null);
  const [projectList, setProjectList] = useState(null);

  //i take all the language info in an array and send it to select options
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

  //i use a onchange function to update projectInfo with values from titlte e description input fields
  const onChange = (e) => {
    const { name, value } = e.target;
    setProjectInfo((eprev) => ({ ...eprev, [name]: value }));
  };

  //i use a handlesubmit function to POST whole projectIfo object to server
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
      } catch (error) {
        console.error("failed to load new project", error);
      }
    };
    sendProjectInfo();
  };

  //ii use a fetch function to fetch all project data from fdatabase
  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/projects");

        if (!response.ok) {
          console.error("Error in fetching data");
          return;
        }

        const data = await response.json();
        setProjectList(data);
      } catch (error) {
        console.error("Error in fetching data:", error);
      }
    };

    getProjects();
  }, []);

  console.log(projectList);

  return (
    <>
      <div className="dashboard-container">
        {projectList &&
          projectList.map((project) => (
            <div key={project.id} className="project-info-container">
              <h3 className="project-info-title">{project.title}</h3>
              <p className="project-info-description">{project.description}</p>
              <ul>
                {project.language.map((language) => (
                  <li key={language.index}>{language}</li>
                ))}
              </ul>
            </div>
          ))}
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
                <div className="form-header">
                  <h2>Add A New Project Info </h2>
                  <button
                    className="close-button"
                    onClick={() => {
                      setAddProject(false);
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <line
                        x1="4"
                        y1="4"
                        x2="20"
                        y2="20"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                      <line
                        x1="20"
                        y1="4"
                        x2="4"
                        y2="20"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                </div>
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
