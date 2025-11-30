import Image from "next/image";
import Link from "next/link";
import logo1 from "public/logo1.png"
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#008dc0] text-white py-8 rounded-t-2xl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            {/* <h3 className="text-lg font-semibold">Code <span className='text-yellow-500'>शिक्षा</span></h3> */}
            <Image src={logo1} alt="logo" height={60} />
            <p className="text-gray-100 text-sm mt-2">Empowering developers to build great applications.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="text-gray-100 text-sm mt-2 space-y-2">
              <li><Link href="/" className="hover:text-gray-200">Home</Link></li>
              <li><Link href="/about" className="hover:text-gray-200">About</Link></li>
              <li><Link href="/courses" className="hover:text-gray-200">Courses</Link></li>
              <li><Link href="/projects" className="hover:text-gray-200">Projects</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="text-gray-100 text-sm mt-2 space-y-2">
              <li><Link href="#" className="hover:text-gray-200">Help Center</Link></li>
              <li><Link href="#" className="hover:text-gray-200">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-gray-200">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-gray-200">Contact Us</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-3">
              <Link href="#" className="text-gray-100 hover:text-gray-200"><FaFacebook size={20} /></Link>
              <Link href="#" className="text-gray-100 hover:text-gray-200"><FaTwitter size={20} /></Link>
              <Link href="https://www.linkedin.com/in/vikasprins/" className="text-gray-100 hover:text-gray-200"><FaLinkedin size={20} /></Link>
              <Link href="https://github.com/Vikasprins" className="text-gray-100 hover:text-gray-200"><FaGithub size={20} /></Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 mt-6 pt-4 text-center text-sm text-gray-100">
          © {new Date().getFullYear()} codeshiksa. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
