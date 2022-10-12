import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../Assets/hero1.jpg';

const Home = () => {
    return (
        <div>
         <div>
         <h1 className='text-5xl font-bold text-rose-900 m-5 p-3'>Game On</h1>
            <h1 className='text-2xl mb-4 pb-4 text-rose-900'>Give smart answer!Get reward!</h1>
            <div className="flex flex-wrap justify-center">
         <Link to="/topics">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded-full  text-white hover:bg-blue-600 bg-rose-900">
                Start Quiz
              </button>
            </Link>

            </div>

            
       
         </div>

         <section className='flex items-center justify-center'>
            <img className='bg-cover bg-center' src={heroImg} alt=''/>
         </section>

        </div>
    );
};

export default Home;