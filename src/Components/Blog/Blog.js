import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='bg-rose-900 text-white rounded-full p-8 mt-3'>
                 <h1 className='font-bold text-3xl p-3'>What is the purpose of react router?</h1>
                 <p className='p-3'>React Router isn't just about matching a url to a function or component: it's about building a full user interface that maps to the URL, so it might have more concepts in it than you're used to. We'll go into detail on the three main jobs of React Router:
                 Subscribing and manipulating the history stack
                 Matching the URL to your routes
                 Rendering a nested UI from the route matches</p>
            </div>


                <div className='bg-rose-900 text-white rounded-full p-8 mt-3'>
                 <h1 className='font-bold text-3xl p-3'>How does context api work?</h1>
                 <p className='p-3'>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. </p>
            </div>


            <div className='bg-rose-900 text-white rounded-full p-8 mt-3'>
                 <h1 className='font-bold text-3xl p-3'> About useRef?</h1>
                 <p className='p-3'>The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.</p>
            </div>
            
        </div>
    );
};

export default Blog;