import React from 'react';
import img from '../images/Web-developer.svg';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='about' >

                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <img alt="card img" className="rounded-t float-right" src={img} />
                        </div>
                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                            
                            <h3 className="text-3xl  text-blue-900 font-bold">Our foundation is based on ethics, transparency and value</h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>Fast efficient and experienced Commodities trading in London</p>
                            </div>
                            
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>Established to bring better outcomes to a market dominated by expensive business-as-usual traditions, Total Commodities has existed as a professional, London-based business for over 15 years and enjoys a team of experienced commodity traders who specialise in recovered or redundant commodities including papers, plastics and metals (ferrous and non-ferrous).</p>
                            </div>


                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>Nationally, we support local businesses of any size with their exporting needs. Internationally, we partner with customers who have significant sourcing needs. We enjoy strong relationships with a network of useful industry figures domestically and abroad, and we extend this benefit to our customers, creating a platform to support your long-term goals.</p>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Intro;