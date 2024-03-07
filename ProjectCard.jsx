import React from "react";

const FormatDescription = (description)=>{
    return description.substring(0, 60) + "..."
}

const ProjectCard = (props) => {
    const {project, onEdit} = props
    const handleEditClick = (projectbeingEdited) => {
        onEdit(projectbeingEdited);
    }
    
    return (
        <div className="card">
            <img src={project.imageUrl} alt={project.name}/>
            <section className="section dark">
                <h5 className="strong">
                    <strong>{project.name}</strong>
                </h5>
                    <p>{FormatDescription(project.description)}</p>
                    <p>Budget : {project.budget.toLocaleString()}</p>
                <button className="borered" onClick={()=>handleEditClick(project)}>
                    <span className="icon-edit"></span>
                    Edit
                </button>
            </section>
        </div>
    )
}
export default ProjectCard