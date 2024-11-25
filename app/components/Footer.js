import React from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
const Footer = () => {
  return (
    <footer className="bg-white-600 text-black p-2">
{/* newsletter section */}
<div className='flex flex-col md:flex-row justify-between items-center gap-4 px-6 py-4 bg-gray-100'>
      <div className='  justify-center md:justify-start gap-4'><h6>Subscribe to our newsletter</h6> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>     </div>
      <div className='flex-col ' >
        <div className='flex justify-center md:justify-end gap-4'>
        <Input/>
      <Button variant="secondary">Subscribe</Button></div><div><p>By subscribing you agree to with our Privacy Policy</p></div>
      
      </div>

</div>

{/* logo section */}
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center sm:text-left'>
    <div className='p-4'><img src="./assets/logo.png"/></div>
    <div className='p-4 '><h4>Courses</h4><p>Business</p><p>Development</p>
    <p>Technology</p><p>Design</p><p>Technology</p></div>
    <div className='p-4 '><h4>Resources</h4>
    <p>Career</p><p>Resume</p><p>Learning</p><p>Interview Preparation</p><p>Jobs</p>
    </div>
    <div className='p-4 '><h4>ABOUT US</h4>
    <p>Contact</p>  <p>Help/Support</p>  <p>FAQ</p>  <p>Terms and Conditions</p>  <p>Partners</p>
    </div>
</div>












        {/* lastrights section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 py-4 bg-gray-100">
      <div className='flex flex-wrap justify-center md:justify-start gap-4'>
      <p>2023 Ddsgnr. All right reserved.</p>
      <p>Privacy Policy</p>
      <p>Terms of Service</p>
      <p>Cookies Settings</p></div>
   
      <div className='flex justify-center md:justify-end gap-4'>
        <img src="./assets/Facebook.png"/>
        <img src="./assets/Instagram.png"/>
        <img src="./assets/LinkedIn.png"/>
<img src="./assets/Twitter.png"/>
</div></div>
   
    </footer>
  );
};

export default Footer;
