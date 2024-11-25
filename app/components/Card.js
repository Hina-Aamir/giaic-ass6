import React from 'react';

const Card = ({ image,topic,rate, title, description,price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex w-1/2 items-center space-x-60 ">   <h5 className="text-black">{topic}</h5>
        <div className="flex w-1/2 justify-end items-center space-x-2 "> <img src="./assets/star.png"/><p>{rate}</p></div></div>
        
       
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="flex items-center"> <button className="m-4 bg-white hover:bg-gray-300 text-black  py-2 px-4 border border-black rounded">
          Enroll Now
        </button> <p className="p-4">{price}</p> </div>
        
         
       
       
     
      </div>
    </div>
  );
};

export default Card;
