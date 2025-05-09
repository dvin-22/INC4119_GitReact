import React from 'react'

const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      {image && <img src={image} alt={title} />}
      <p>{description}</p>
    </div>
  )
}

export default ProjectCard
