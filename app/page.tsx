
import Card from './components/Card';
import Team from './components/Team';
import Header from './components/Header.js';
import Footer from './components/Footer.js';


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import React from 'react';

export default function Home() {
  return ( 
     <div>
        <Header />
    <div>
  {/* Hero Section */}
  <div className="flex flex-col lg:flex-row items-center justify-between p-0">
    <div className="lg:w-1/2 text-left p-10">
      <h1 className="font-roboto text-[56px] font-bold leading-[67.2px]">
        Learn new skills<br /> online with ease
      </h1>
      <p className="font-roboto text-[18px] font-normal leading-[27px] mt-4">
        Discover a wide range of courses covering a variety<br />
        of subjects, taught by expert instructors.
      </p>
      <div className="mt-6">
        <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 border border-black rounded">
          Start Learning Now
        </button>
        <button className="m-4 bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 border border-black rounded">
          Explore Courses
        </button>
      </div>
    </div>
    <div className="lg:w-1/2 mt-8 lg:mt-0">
      <img src="./assets/Image.png" alt="Skill learning illustration" className="w-full" />
    </div>
  </div>

  {/* Trusted Companies Section */}
  <div className="bg-[#F7F7F7] py-10">
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold">Trusted by 2000+ companies worldwide</h2>
    </div>
    <div className="flex flex-wrap justify-center gap-8">
      {["logo1", "logo2", "logo3", "logo4", "logo5", "logo6"].map((logo, index) => (
        <img
          key={index}
          src={`./assets/${logo}.png`}
          alt={`Company logo ${index + 1}`}
          className="w-24 h-auto"
        />
      ))}
    </div>
  </div>

  {/* Course Categories Section */}
  <div className="py-10">
    <div className="text-center mb-6">
      <h2 className="text-2xl font-bold">Explore Courses By Category</h2>
      <p className="text-gray-600">
        Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
      </p>
    </div>
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { img: "./assets/cat1.png", title: "Design & Development", courses: "50+ Courses Available", bgColor: "bg-white", textColor: "text-black" },
          { img: "./assets/cat2.png", title: "Marketing", courses: "50+ Courses Available", bgColor: "bg-white", textColor: "text-black" },
          { img: "./assets/cat3.png", title: "Development", courses: "50+ Courses Available", bgColor: "bg-white", textColor: "text-black" },
          { img: "./assets/cat4.png", title: "Communication", courses: "50+ Courses Available", bgColor: "bg-white", textColor: "text-black" },
          { img: "./assets/cat5.png", title: "Digital Marketing", courses: "50+ Courses Available", bgColor: "bg-white", textColor: "text-black" },
          { img: "./assets/cat6.png", title: "Self Development", courses: "50+ Courses Available", bgColor: "bg-white", textColor: "text-black" },
          { img: "./assets/cat7.png", title: "Business", courses: "50+ Courses Available", bgColor: "bg-white", textColor: "text-black" },
          { img: "./assets/cat8.png", title: "Finance", courses: "50+ Courses Available", bgColor: "bg-white", textColor: "text-black" },
          { img: "./assets/cat9.png", title: "Consulting", courses: "50+ Courses Available", bgColor: "bg-white", textColor: "text-black" },
        ].map((category, index) => (
          <div
            key={index}
            className={`flex items-center ${category.bgColor} p-4 rounded-md shadow-md`}
          >
            <img src={category.img} alt={category.title} className="w-16 h-16" />
            <div className="ml-4">
              <h3 className={`text-lg font-bold ${category.textColor}`}>{category.title}</h3>
              <p className={`${category.textColor}`}>{category.courses}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
<div>

</div>
{/*Our Achievements  Section */}
<div className="py-10 bg-gray-100">

  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold">Our Achievements</h2>
    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-4xl font-bold text-black-500">200k</h3>
      <p className="text-gray-600 mt-2">Courses</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-4xl font-bold text-black-500">50k</h3>
      <p className="text-gray-600 mt-2">Mentors</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-4xl font-bold text-black-500">370k</h3>
      <p className="text-gray-600 mt-2">Students</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-4xl font-bold text-black-500">100+</h3>
      <p className="text-gray-600 mt-2">Recognition</p>
    </div>
  </div>
</div>
{/*Courese Section */}
<div>    <h1 className="text-3xl font-bold mb-6 text-black text-center mb-6">Courses</h1>
<p className='text-center mb-6'>Your Ultimate Guide to learning</p>

<button className="text-center m-4 bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 border border-black rounded">
          Popular
        </button>
        <button className="m-4 bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 border border-black rounded">
          Recommended
        </button>
        <button className="m-4 bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 border border-black rounded">
          Best Price
        </button>

       

    <div className="container mx-auto p-8">
  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        <Card
          image="/assets/card1.png"
         topic="Design"
         rate="5"
          title="UX/UI Design 201"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.."
        price="$400"
        />
        <Card
          image="/assets/card2.png"
          topic="Programmimg"
             rate="5"
          title="Introduction to Python"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.."
          price="$400"
        />
        <Card
          image="/assets/card3.png"
          topic="Business"
   rate="5"
          title="Data Analysis for Beginners"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.."
          price="$400"
        />
        <Card
          image="/assets/card4.png"
          topic="Art"
             rate="5"
          title="Art Specialization"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          price="$400"
        />
          <Card
          image="/assets/card5.png"
          topic="Law"
             rate="5"
          title="Rule of Law"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          price="$400"
        />
          <Card
          image="/assets/card6.png"
          topic="Tech"
             rate="5"
          title="Introduction to webflow"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.."
          price="$400"
        />
      </div>
    </div>
<div className='text-center'> <button className="m-4 bg-white hover:bg-gray-300 text-black  py-2 px-4 border border-black rounded">
          View all Courses
        </button></div>
   

</div>
</div>
{/**OUR TEAM SECTION */}
<div className='bg-[#F7F7F7] container mx-auto p-8'><h2 className='text-3xl font-bold mb-6 text-black text-center mb-6'>OUR TEAM</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>

<Team
image="./assets/team1.png"
name="James Nduku"
designation="Marketing Coordinator"
/>
<Team
image="./assets/team2.png"
name="Joseph Munyambu"
designation="Nursing Assistant"
/>
<Team
image="./assets/team3.png"
name="Joseph Ngumbau"
designation="Medical Assistant"
/>

<Team
image="./assets/team4.png"
name="Erick Kipkemboi"
designation="Web Designer"
/>
<Team
image="./assets/team5.png"
name="Stephen Kerubo"
designation="President of Sales"
/>
<Team
image="./assets/team6.png"
name="John Leboo"
designation="Dog Trainer"
/>
{/*CUSTOMER TESTIMONIALS */}
<div  className="w-full" >
<div><h1 className='text-3xl font-bold mb-6 text-black text-center mb-6'>Customer testimonials</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
<div>

<Carousel className="center">

<CarouselContent className="">
    <CarouselItem  className=""><div className='border  p-8'>
    <div className="flex gap-2">
  {[...Array(5)].map((_, index) => (
    <img 
      key={index} 
      src="./assets/Vector.png" 
      alt="Star icon" 
      className="w-6 h-6"
    />
  ))}
</div><div className='pt-4'>
<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
</div>
<div className='flex'>
    <div><img src="./assets/team3.png"></img></div>
    <div className='text-center m-6'><h5 className='text-lg font-semibold'>James Nduku</h5><p>Software Developer</p></div>
</div>
</div>
     </CarouselItem>
     <CarouselItem  className=""><div className='border  p-8'>
    <div className="flex gap-2">
  {[...Array(5)].map((_, index) => (
    <img 
      key={index} 
      src="./assets/Vector.png" 
      alt="Star icon" 
      className="w-6 h-6"
    />
  ))}
</div><div className='pt-4'>
<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
</div>
<div className='flex'>
    <div><img src="./assets/team1.png"></img></div>
    <div className='text-center m-6'><h5 className='text-lg font-semibold'>James Nduku</h5><p>Software Developer</p></div>
</div>
</div></CarouselItem>

<CarouselItem  className=""><div className='border  p-8'>
    <div className="flex gap-2">
  {[...Array(5)].map((_, index) => (
    <img 
      key={index} 
      src="./assets/Vector.png" 
      alt="Star icon" 
      className="w-6 h-6"
    />
  ))}
</div><div className='pt-4'>
<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
</div>
<div className='flex'>
    <div><img src="./assets/team6.png"></img></div>
    <div className='text-center m-6'><h5 className='text-lg font-semibold'>James Nduku</h5><p>Software Developer</p></div>
</div>
</div></CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
  <CarouselNext />
</Carousel>



</div>

  
</div>


</div>


</div>

<Footer />

    </div>







   );
}