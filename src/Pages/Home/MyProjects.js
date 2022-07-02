import React, { useEffect, useState } from 'react';
import Project from './Project';

const MyProjects = () => {
    const [projectsData, setProjectsData] = useState([])
    useEffect(()=>{
        fetch('projectdata.json')
        .then(res=>res.json())
        .then(data=>setProjectsData(data))
    },[])
    return (
        <div>
            <h1 className='text-5xl font-bold text-center mb-16'>My Works</h1>
            <div className=''>
            
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