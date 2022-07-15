import React, { useEffect, useState } from 'react';
import Project from './Project';
import './zoom.css'

const MyProjects = () => {
    const [projectsData, setProjectsData] = useState([])
    useEffect(()=>{
        fetch('projectdata.json')
        .then(res=>res.json())
        .then(data=>setProjectsData(data))
    },[])
    return (
        <div>
            <h1 className='text-5xl font-bold text-center mb-16 hover:scale-110 transition delay-400 cursor-context-menu hover:text-rose-900'>My Works</h1>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-y-32 mb-32'>
            
            {
                projectsData.map(project=><Project
                key={project.id}
                project={project}
                ></Project>)
            }
          
        </div>
        </div>
    );
};

export default MyProjects;