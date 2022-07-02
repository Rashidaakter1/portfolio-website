import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Project = ({project}) => {
    const {id,name,link,img}=project;
   
    const navigate = useNavigate()
    const handleProject=(project)=>{
        navigate(`/singleproject/${project.id}`)
    }
    return (
        
           
            <div class="card bg-teal-600 shadow-xl mx-8 my-12">
            <figure><img src={img} alt="project" /></figure>
            <div class="card-body">
                <h2 class="text-black text-center font-extrabold">{name}</h2>
               
                <a target="_blank" class="text-black text-center" href={link}>Live Site </a>
                <div class="card-actions justify-center">
                    <button class="btn btn-success btn-ghost" onClick={()=>handleProject(project)} >Details</button>
                </div>
            </div>
       
        </div>
    );
};

export default Project;