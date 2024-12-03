import React from "react";

const Resources = () => {
  return (
    <div className="flex flex-col md:flex-row py-12 mt-[120px] px-6 md:px-12">
      {/* Left side with scrollable content */}
      <div className="w-full md:w-1/2 h-auto md:h-screen overflow-y-auto mb-8 md:mb-0">
        <h2 className="text-3xl font-semibold mb-6">Resources</h2>

        {/* Grid layout for the sections */}
        <div className="grid grid-cols-1 gap-8">
          {/* Section 1 */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Learn with Mailchimp</h3>
            <ul className="space-y-2">
              <li>E-commerce</li>
              <li>Digital content</li>
              <li>Marketing automations</li>
              <li>Audience management</li>
              <li>Websites</li>
              <li>Email marketing</li>
              <li>Social media</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Mailchimp Presents</h3>
            <ul className="space-y-2">
              <li>Podcasts</li>
              <li>Series</li>
              <li>Films</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h3 className="font-semibold text-xl mb-4">For Developers</h3>
            <ul className="space-y-2">
              <li>Marketing API</li>
              <li>Transactional API</li>
              <li>Release notes</li>
              <li>Transactional email</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/2 h-auto md:h-screen px-4 md:px-12 flex flex-col space-y-6 bg-slate-50">
        {/* Help Center */}
        <div className="flex items-center space-x-4">
          <span className="text-xl">📚</span>
          <span>Help Center</span>
        </div>

        {/* Case Studies */}
        <div className="flex items-center space-x-4">
          <span className="text-xl">📄</span>
          <span>Case Studies</span>
        </div>

        {/* Events */}
        <div className="flex items-center space-x-4">
          <span className="text-xl">🎉</span>
          <span>Events</span>
        </div>

        {/* Professional Services */}
        <h3 className="text-xl font-semibold mt-4">Professional Services</h3>
        <ul className="space-y-2 ml-6">
          <li>Hire an Expert</li>
          <li>Personalized Onboarding</li>
          <li>Customer Success</li>
          <li>Switch to Mailchimp</li>
        </ul>
      </div>
    </div>
  );
};

export default Resources;
