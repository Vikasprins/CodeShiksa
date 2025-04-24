import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#045e52] text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold">Code <span className='text-yellow-500'>शिक्षा</span></h3>
            <p className="text-gray-400 text-sm mt-2">Empowering developers to build great applications.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="text-gray-400 text-sm mt-2 space-y-2">
              <li><a href="#" className="hover:text-gray-200">Home</a></li>
              <li><a href="#" className="hover:text-gray-200">About</a></li>
              <li><a href="#" className="hover:text-gray-200">Courses</a></li>
              <li><a href="#" className="hover:text-gray-200">Projects</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="text-gray-400 text-sm mt-2 space-y-2">
              <li><a href="#" className="hover:text-gray-200">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-200">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gray-200">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-3">
              <a href="#" className="text-gray-400 hover:text-gray-200"><FaFacebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-200"><FaTwitter size={20} /></a>
              <a href="https://www.linkedin.com/in/vikasprins/" className="text-gray-400 hover:text-gray-200"><FaLinkedin size={20} /></a>
              <a href="https://github.com/Vikasprins" className="text-gray-400 hover:text-gray-200"><FaGithub size={20} /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} codeshiksa. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
