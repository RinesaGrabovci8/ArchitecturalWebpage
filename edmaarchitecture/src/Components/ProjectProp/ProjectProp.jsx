import React from 'react'
import './projectprop.scss'

const ProjectProp = (props) => {
    const { title, desc, button, onchange } = props;
  return (
    <div className='projectprop'>
        <h1>{title}</h1>
        <p>{desc}</p>
        <button onClick={onchange}>{button}</button>
    </div>
  )
}

export default ProjectProp