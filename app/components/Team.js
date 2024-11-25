import React from 'react';

const Team = ({ image,name,designation}) => {
  return (
    <div className="image-center bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 text-center">
      <img src={image} alt={name}className="w-[100px] h-[100px]  mx-auto mt-4 " />
      <div className="p-4">
        <div className=" ">   <h4 className=" text-lg font-semibold">{name}</h4><p className=" text-gray-600">{designation}</p> </div>
        <div className='flex justify-center gap-4 mt-4'> <img src="./assets/LinkedIn.png"></img>
          <img src="./assets/Dribble.png"></img>
          <img src="./assets/Vector.png"></img>
          </div>
         
       
       
     
      </div>
    </div>
  );
};

export default Team;