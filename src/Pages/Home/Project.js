import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import video1 from './videos/video1.mp4'

const Project = ({project}) => {
    const {id,name,clientLink,img}=project;
   
    const navigate = useNavigate()
    const handleProject=(project)=>{
        navigate(`/singleproject/${project.id}`)
    }
    return (
        
           
            <div className="card w-full max-w-sm bg-lime-700 mx-8 zoom">
            <figure>
                <img src={img} alt="project" />
           
            </figure>
            <div className="card-body">
                {/* <h2 className="text-center text-blue-900 font-extrabold">{name}</h2> */}
               
                <a target="_blank" className="text-white text-2xl hover:text-rose-900 text-center" href={clientLink}>Live Site </a>
                <div className="card-actions justify-center">
                    <button className="btn  btn-ghost hover:scale-x-125 transition delay-400 ease-in-out  cursor-progress text-xl hover:text-rose-900 	" onClick={()=>handleProject(project)} >Details</button>
                </div>
            </div>
       
        </div>
    );
};

export default Project;