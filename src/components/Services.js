import React from 'react';
import img from '../images/scrap paper.png'; 
import img2 from '../images/plastic.png';
import img3 from '../images/scrapmetal.png';

const Services = () => {
    return (
        <div id="services" className="bg-gray-100 py-12">
            <section data-aos="zoom-in-down" className="w-full max-w-6xl mx-auto text-center">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-3xl text-blue-900 uppercase font-bold">Product</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-xl lg:text-2xl font-semibold text-blue-900">
                        We move a broad range of scrap and recovered fibres, redundant stock lots and finished products to India and the Far East
                    </h2>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="bg-white overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 text-center">
                            <div className="m-2 text-sm">
                                <img alt="card img" className="rounded-t mx-auto" src={img} />
                                <h2 className="font-semibold my-4 text-2xl">Scrap Paper</h2>
                                <p className="text-md font-medium">
                                    We source various grades of paper and OCC grades for Paper Mills across the globe.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 text-center">
                            <div className="m-2 text-sm">
                                <img alt="card img" className="rounded-t mx-auto" src={img2} />
                                <h2 className="font-semibold my-4 text-2xl">Plastics</h2>
                                <p className="text-md font-medium">
                                    We supply a broad range of scrap and recovered plastic material that can be widely recycled.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 text-center">
                            <div className="m-2 text-sm">
                                <img alt="card img" className="rounded-t mx-auto" src={img3} />
                                <h2 className="font-semibold my-4 text-2xl">Scrap Metal</h2>
                                <p className="text-md font-medium">
                                    We have access to a broad range of scrap metal (ferrous and non-ferrous) metal grades.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
