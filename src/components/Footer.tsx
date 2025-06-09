import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20">
      <div className="w-full flex flex-col md:flex-row items-center justify-between mb-4 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">
          SkillsCapital<span className="text-green-500">.</span>
        </h2>
        <div className="flex-col md:flex items-center space-x-2">
          <p>Follow our socials</p>
          <Image
            src="/Social Media Icon.png"
            alt="logo"
            height={100}
            width={100}
            className=""
          />
        </div>
      </div>

      <div className="flex items-center justify-center mb-8">
        <div className="w-full flex flex-col md:flex-row items-center justify-between md:px-[160px] md:py-[80px] text-center space-y-6 md:space-y-0 md:space-x-12">
          <div className="flex items-start flex-col">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="flex items-start flex-col space-y-1 text-sm">
              <li>SAP Talen Cloud</li>
              <li>Enterprise Talent Cloud</li>
              <li>AI-Powered Vetting</li>
              <li>Tech Talent Solution</li>
              <li>About US</li>
            </ul>
          </div>

          <div className="flex items-start flex-col">
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <ul className="flex items-start flex-col space-y-1 text-sm">
              <li>Help</li>
              <li>Condition</li>
              <li>Privacy</li>
              <li>Policy</li>
            </ul>
          </div>

          <div className="flex items-start flex-col">
            <h3 className="text-lg font-semibold mb-2">Get In Touch</h3>
            <ul className="flex items-start flex-col space-y-1 text-sm">
              <li>📞 +91 123 465 789</li>
              <li>📧 info@skillscapital.io</li>
              <li>📍 Pune, India</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center text-xs mt-10">
        Copyright © 2025 All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
