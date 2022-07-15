import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaCaretRight } from "react-icons/fa";


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
        <div className='bg-transparent' data-theme="cupcake" >
            <h1 className='text-3xl text-center text-orange-200 hover:scale-110 transition delay-400 cursor-context-menu font-bold mt-3 mb-6 hover:text-orange-900'>{projectsData.name}</h1>

            <div className='flex justify-center'>
                <div className="carousel shadow-xl h-4/4  w-1/2 ">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={projectsData?.slide?.img1} alt='' className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={projectsData?.slide?.img2} alt='' className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={projectsData?.slide?.img3} alt='' className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={projectsData?.slide?.img3} className="w-full" alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center mx-6 py-6'>
                <div className="card sm:w-full lg:w-2/3 bg-teal-800 text-white shadow-xl hover:scale-110 transition duration-500 delay-300">
                    <div className="card-body ">
                        <h2 className="card-title uppercase"> Features : </h2>
                        <div>
                            <ul>
                                <div className='flex '><FaCaretRight className='mt-1 mr-2' />
                                    <li>
                                        {projectsData?.featuresPart?.feature1}</li>
                                </div>
                                <div className='flex   '><FaCaretRight className='mt-1 mr-2' />
                                    <li>{projectsData?.featuresPart?.feature2}</li>
                                </div>
                                <div className='flex  '><FaCaretRight className='mt-1 mr-2' />
                                    <li>{projectsData?.featuresPart?.feature3}</li>
                                </div>



                            </ul>
                        </div>
                        <div className="card-actions justify-center">
                            <a target='_blank' href={projectsData?.githubClient} >
                                <button className="mt-3 btn bg-emerald-600 border-0 text-white  hover:bg-emerald-900 hover:scale-110 rounded-sm ">code (client)</button>
                            </a>


                            <a target='_blank' href={projectsData?.githubServer} >
                                <button className="mt-3 btn bg-emerald-600 border-0 text-white hover:bg-emerald-900 hover:scale-110 rounded-sm">Code (server)</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SingleProject;