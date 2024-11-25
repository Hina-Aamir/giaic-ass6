import React from 'react';
import { Button } from "@/components/ui/button"
const Header = () => {
  return (
    <header className="bg-white text-black p-8 m-2">
{/* header 1 */}
<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
<div> <p className="font-roboto text-[14px] font-normal leading-[21px] text-left underline decoration-auto"
>Phone Number: 956 742 455 678</p></div>
<div><p> Email:info@ddsgnr.com</p></div>
<div className='flex justify-end pr-8'><img src="./assets/Facebook.png"/><img src="./assets/Instagram.png"/><img src="./assets/LinkedIn.png"/>
<img src="./assets/Twitter.png"/>
</div>
</div>
{/* header2 */}
<div className='flex '><div className='w-1/3 p-2'><img src="./assets/logo.png" alt="logo"/></div>
<div className='flex flex-col md:flex-row justify-end items-end p-2 gap-6 w-full md:w-2/3 '>
<div><h6>Home</h6></div>
<div><h6>Courses</h6></div>
<div><h6>Services</h6></div>
<div><h6>Achievement</h6></div>
<div><h6>About Us</h6></div>
<div><h6>Testimonial</h6></div>
<div><Button variant="secondary">Login</Button></div>
<div><Button>Sign UP</Button></div>
</div>

</div>








    </header>
  );
};

export default Header;