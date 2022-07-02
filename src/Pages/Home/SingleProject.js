import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';



const SingleProject = () => {

    const { id } = useParams()
    const [projectsData, setProjectsData] = useState([])
    useEffect(() => {
        fetch('/projectdata.json')
            .then(res => res.json())
            .then(data => {
                const project = data.filter(p => p.id === JSON.parse(id))
                setProjectsData(project[0])
            })
        console.log(projectsData);
    }, [])

    return (
        <div className='bg-sky-200' data-theme="cupcake" >
            <h1 className='text-3xl text-center font-bold mt-3 mb-6'>Project Name : {projectsData.name}</h1>

            <div className='flex justify-center'>
            <div class="carousel shadow-xl h-4/4 w-1/2">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src={projectsData?.slide?.img1} alt=''  class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src={projectsData?.slide?.img2} alt=''  class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src={projectsData?.slide?.img3} alt='' class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full">
                    <img src={projectsData?.slide?.img3} class="w-full" alt=''  />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            </div>

            <div className='flex justify-center mx-6 py-6'>
                <div class="card w-2/3 bg-sky-900 text-white shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title uppercase">{projectsData.name} Features : </h2>
                       <div>
                       <ul>
                            <li>{projectsData?.featuresPart?.feature1}</li>
                            <li>{projectsData?.featuresPart?.feature1}</li>
                            <li>{projectsData?.featuresPart?.feature1}</li>
                        </ul>
                       </div>
                        <div class="card-actions justify-center">
                            <a target='_blank' href={projectsData.link} >
                                <button class="mt-3 btn btn-primary text-white">Code Link</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SingleProject;