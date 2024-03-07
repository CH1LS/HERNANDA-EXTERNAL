 import React, { useState } from "react";
import Project from "./Project";
import { projectAPI } from "./ProjectAPI";

const ProjectForm = ({project: IntialProject, onSave, oncancel}) => {
    const[project, setproject] = useState(IntialProject);

    const handleSumbit = (event) => {
        // console.log();
        event.preventDefault()
        onSave(project)
    }
    const handleChange = (event)=> {
        const {type, name, value, chacked} =event.target;
        let updateValue = type === "checkbox" ? chacked : value;

        if(type === "number"){
            updateValue = Number (updateValue)
        }
        const Change = {
            [name] : updateValue
        }
        // projectapi
        projectAPI.put(project)
        let updateProject
        setproject((p)=>{
            updateProject = new Project ({...p, ...Change})
            return updateProject    
        })

    }
    return (
        <form action="" className="input-group vertical" onSubmit={handleSumbit}>
            <label htmlFor="name">Project Name</label>
            <input type="text" name="name" placeholder="Enter Name" defaultValue={project.name}/>
            <label htmlFor="description">Project Deskription</label>
            <textarea name="description" placeholder="Enter Deskription" defaultValue={project.description} cols="30" rows="10" value={Project.
            description} onChange={handleChange}></textarea>
            <label htmlFor="budget">Project Budget</label>
            <input type="number" name="budget" placeholder="Enter Budget" defaultValue={project.budget} />
            <label htmlFor="isActive">Active ?</label>
            <input type="checkbox" name="isActive"defaultValue={project.isActive} />
            <div className="input-group">
                <button className="primary bordered medium">
                    save
                </button>
                <span />
                <button type="button" className="danger bordered medium" onClick={oncancel}>
                    cancel
                </button>
            </div>
        </form>
    )
            }
export default ProjectForm