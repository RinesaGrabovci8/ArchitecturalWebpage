import React from 'react'
import './projectprop.scss'

const ProjectProp = (props) => {
    const { title, desc, button } = props;
  return (
    <div className='projectprop'>
        <h1>{title}</h1>
        <p>{desc}</p>
        <button>{button}</button>
    </div>
  )
}

export default ProjectProp