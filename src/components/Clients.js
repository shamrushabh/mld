import React from 'react';
import kws from '../images/clients/city.png';
import geps from '../images/clients/earth.png';
import protergia from '../images/clients/paperex.png';

const clientImage = {
    height: '10rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}

const Clients = () => {
    return (
        <div className="mt-8 bg-gray-100">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
                        We want to keep you informed of the latest news from the commodity field
                    </h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                </div>

                <div className="p-16" data-aos="fade-in" data-aos-delay="600">
                    <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center text-center">
                            <div style={clientImage} className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                                <img src={kws} alt="client" />
                            </div>
                            <p className="mt-2 text-gray-700 text-sm font-medium">How has the commodity sector been affected by Covid</p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                                <img src={protergia} alt="client" />
                            </div>
                            <p className="mt-2 text-gray-700 text-sm font-medium">Paperex Conference 2023, India</p>
                        </div> 

                        <div className="flex flex-col items-center text-center">
                            <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                                <img src={geps} alt="client" />
                            </div>
                            <p className="mt-2 text-gray-700 text-sm font-medium">Exporting and waste commodity trends</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clients;
