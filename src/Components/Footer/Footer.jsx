import React from 'react';
import logo from '../../assets/logo (2).png'
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo + Website Name */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 text-xl font-bold">
            <img className='w-14 h-14' src={logo} alt="" />
            <span>BoiBaksho</span>
          </div>
          <p className="text-sm mt-2 text-gray-400">
            Your digital bookshelf, all your books in one place.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li><FaEnvelope className="inline mr-2" /> support@boibaksho.com</li>
            <li>📍 Dhaka, Bangladesh</li>
            <li>📞 +880 1869452239</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-2">Useful Links</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Social + Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <div className="flex justify-center space-x-4 mb-2">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-400"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-300"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400"><FaInstagram /></a>
        </div>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} BoiBaksho. All rights reserved.
        </p>
      </div>
    </footer>
    );
};

export default Footer;