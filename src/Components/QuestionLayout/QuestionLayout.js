import React from 'react';

const QuestionLayout = ({option,correctAnswer,handleClick}) => {

    

    return (
        

        <div className='flex'>
         
            <button onClick={()=>handleClick(option)} className={'radio mr-5 bg-rose-900 w-full p-2 ml-5 mb-3 hover:bg-blue-600 hover:text-white '}> {option}</button>

       
            
        </div>
    );
};

export default QuestionLayout;