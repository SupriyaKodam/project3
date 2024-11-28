import React from "react";

const Footer = () => {
  return (
    <footer className="bg-yellow-400 text-gray-800 py-8">
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 px-4">
        {/* Products Column */}
        <div>
          <h4 className="font-semibold mb-4">Products</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Why Mailchimp?</a></li>
            <li><a href="#" className="hover:underline">Product Updates</a></li>
            <li><a href="#" className="hover:underline">Email Marketing</a></li>
            <li><a href="#" className="hover:underline">Websites</a></li>
            <li><a href="#" className="hover:underline">Transactional Email</a></li>
            <li><a href="#" className="hover:underline">How We Compare</a></li>
            <li><a href="#" className="hover:underline">GDPR Compliance</a></li>
            <li><a href="#" className="hover:underline">Security</a></li>
            <li><a href="#" className="hover:underline">Status</a></li>
            <li><a href="#" className="hover:underline">Mobile App</a></li>
          </ul>
        </div>

        {/* Resources Column */}
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Marketing Library</a></li>
            <li><a href="#" className="hover:underline">Free Marketing Tools</a></li>
            <li><a href="#" className="hover:underline">Marketing Glossary</a></li>
            <li><a href="#" className="hover:underline">Integrations Directory</a></li>
          </ul>
        </div>

        {/* Community Column */}
        <div>
          <h4 className="font-semibold mb-4">Community</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Agencies & Freelancers</a></li>
            <li><a href="#" className="hover:underline">Developers</a></li>
            <li><a href="#" className="hover:underline">Events</a></li>
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Our Story</a></li>
            <li><a href="#" className="hover:underline">Newsroom</a></li>
            <li><a href="#" className="hover:underline">Give Where You Live</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Accessibility</a></li>
          </ul>
        </div>

        {/* Help Column */}
        <div>
          <h4 className="font-semibold mb-4">Help</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Hire an Expert</a></li>
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Talk to Sales</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-300 pt-4 text-center">
        <p className="text-sm">
          ©2024 All Rights Reserved. Mailchimp® is a registered trademark of The Rocket Science Group. 
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Cookie Preferences</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
