import React,{Fragment, useState} from "react";
import DAFTAR_PROJECT from "./DaftarProject";
import ProjectList from "./ProjectList";
import Project from "./Project";
import { computeHeadingLevel } from "@testing-library/react";

const ProjectPage = () => {
    let stringJSON = JSON.stringify(DAFTAR_PROJECT, null, " ")
    let data = JSON.parse(stringJSON)

    const [projects, setProjects] = useState(DAFTAR_PROJECT)

    const SaveProject = (project) => {
        console.log(project);
        let updateProjects = projects.map((p) => {
            return p.id === project.id ? project : p
        })
        setProjects(updateProjects)
    }

    return (
        <Fragment>
            <div>
                {/* <h1>Project</h1> */}
                <h2>{data[0].name}</h2>
                {/* <pre>{JSON.stringify(DAFTAR_PROJECT, null, " ")}</pre> */}
                <ProjectList projects={DAFTAR_PROJECT} onSave={SaveProject}/>
            </div>
        </Fragment>
        
    )

}
export default ProjectPage