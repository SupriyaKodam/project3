import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DomainIcon from "@mui/icons-material/Domain";
import AssistantIcon from "@mui/icons-material/Assistant"; // AI-related icon
import CreateIcon from "@mui/icons-material/Create";
import GridOnIcon from "@mui/icons-material/GridOn";

const SolutionsAndServices = () => {
  return (
    <div className="flex flex-wrap py-12 h-screen mt-[120px] ml-20">
      {/* Left side part with scroll bar */}
      <div className=" w-full md:w-1/2 px-6 flex flex-col h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
        <h2 className="text-3xl font-semibold">Solutions & Services</h2>
        <p className="text-xl mt-4">See what’s new</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
          {/* Row 1 */}
          <div className="flex items-center space-x-4 mb-6">
            <EmailIcon fontSize="large" />
            <div>
              <h3 className="font-semibold">Email marketing</h3>
              <p>Send personalized emails that convert</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <SettingsIcon fontSize="large" />
            <div>
              <h3 className="font-semibold">Marketing automation</h3>
              <p>Deliver the right message at the right time</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <AssistantIcon fontSize="large" />
            <div>
              <h3 className="font-semibold">AI marketing tools</h3>
              <p>Say hello to your AI growth assistant</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex items-center space-x-4 mb-6">
            <DomainIcon fontSize="large" />
            <div>
              <h3 className="font-semibold">Websites</h3>
              <p>Create your branded web presence</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <CreateIcon fontSize="large" />
            <div>
              <h3 className="font-semibold">Content Creation Tools</h3>
              <p>Build content that captivates and converts</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <GridOnIcon fontSize="large" />
            <div>
              <h3 className="font-semibold">See all features</h3>
              <p>See all our product offerings in one place</p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex items-center space-x-4 mb-6">
            <ThumbUpIcon fontSize="large" />
            <div>
              <h3 className="font-semibold">Social media marketing</h3>
              <p>Amplify the conversation across multiple channels</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <AssistantIcon fontSize="large" />
            <div>
              <h3 className="font-semibold">Reporting & Analytics</h3>
              <p>Track sales & campaign performance</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <EmailIcon fontSize="large" />
            <div>
              <h3 className="font-semibold">Audience management</h3>
              <p>Target and segment customers</p>
            </div>
          </div>

          {/* Row 4 with templates */}
          <div className="flex items-center space-x-4 mb-6 col-span-3">
            <img className="w-10" src="./Images/templates.jpeg" />
            <div>
              <h3 className="font-semibold">Templates</h3>
              <p>Customize predesigned layouts</p>
            </div>
          </div>
        </div>

        {/* New Row for additional 5 images */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-6 text-gray-700">
          {/* Item 1 */}
          <div className="flex flex-col items-center space-y-2">
            <img
              className="rounded-full w-full h-20"
              src="./Images/canva.jpeg"
              alt="Canva"
            />
            <p className="text-center text-sm">Canva</p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center space-y-2">
            <img
              className="rounded-full w-[100px] h-[100px]"
              src="./Images/shopsy.jpeg"
              alt="Tool 1"
            />
            <p className="text-center text-sm">Shopsy</p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center space-y-2">
            <img
              className="rounded-full w-[100px] h-[100px]"
              src="./Images/salesforce.png"
              alt="Tool 2"
            />
            <p className="text-center text-sm">Salesforce</p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center space-y-2">
            <img
              className="rounded-full w-[100px] h-[100px]"
              src="./Images/wix.png"
              alt="Tool 3"
            />
            <p className="text-center text-sm">Wix</p>
          </div>

          {/* Item 5 */}
          <div className="flex flex-col items-center space-y-2">
            <img
              className="rounded-full w-[100px] h-[100px]"
              src="./Images/woo.png"
              alt="Tool 4"
            />
            <p className="text-center text-sm">woo</p>
          </div>
        </div>
      </div>

      {/* Right side part */}
      <div className="w-full md:w-1/2 px-10 md:pl-12 bg-slate-50">
        {/* Industry section */}
        <h3 className="text-2xl font-semibold">For Your Industry</h3>
        <div className="mt-6 grid grid-cols-1 gap-6">
          <div className="flex items-center space-x-4">
            <EmailIcon fontSize="large" />
            <span>E-commerce and retail</span>
          </div>
          <div className="flex items-center space-x-4">
            <SettingsIcon fontSize="large" />
            <span>Service-based Business</span>
          </div>
          <div className="flex items-center space-x-4">
            <AssistantIcon fontSize="large" />
            <span>Mobile and web apps</span>
          </div>
          <div className="flex items-center space-x-4">
            <DomainIcon fontSize="large" />
            <span>Start-ups</span>
          </div>
          <div className="flex items-center space-x-4">
            <CreateIcon fontSize="large" />
            <span>Agencies and freelancers</span>
          </div>
          <div className="flex items-center space-x-4">
            <GridOnIcon fontSize="large" />
            <span>Developers</span>
          </div>
          <div className="flex items-center space-x-4">
            <ThumbUpIcon fontSize="large" />
            <span>Professional Services</span>
          </div>
          <div className="flex items-center space-x-4">
            <EmailIcon fontSize="large" />
            <span>Hire an Expert</span>
          </div>
          <div className="flex items-center space-x-4">
            <SettingsIcon fontSize="large" />
            <span>Personalized onboarding</span>
          </div>
          <div className="flex items-center space-x-4">
            <AssistantIcon fontSize="large" />
            <span>Customer success</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsAndServices;
