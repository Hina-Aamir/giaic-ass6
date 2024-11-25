import React from 'react';

const Test= ({ }) => ({name,designation}) =>{
  return (
   <div className='border border-solid-10px'>
    <div className="flex gap-2">
  {[...Array(5)].map((_, index) => (
    <img 
      key={index} 
      src="./assets/Vector.png" 
      alt="Star icon" 
      className="w-6 h-6"
    />
  ))}
</div>


   </div>
  );
};

export default Test;