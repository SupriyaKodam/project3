import React from "react";
import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DomainIcon from "@mui/icons-material/Domain";
import AssistantIcon from "@mui/icons-material/Assistant";
import CreateIcon from "@mui/icons-material/Create";
import GridOnIcon from "@mui/icons-material/GridOn";
import { useEffect } from "react";

const SolutionsAndServices = ({closeSolutions}) => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);  // Scrolls the page to the top
  }, []);

  const items = [
    {
      Icon: EmailIcon,
      title: "Email marketing",
      description: "Send personalized emails that convert",
      path: "/email-marketing",
    },
    {
      Icon: SettingsIcon,
      title: "Marketing automation",
      description: "Deliver the right message at the right time",
      path: "/marketing-automation",
    },
    {
      Icon: AssistantIcon,
      title: "AI marketing tools",
      description: "Say hello to your AI growth assistant",
      path: "/ai-marketing-tools",
    },
    {
      Icon: DomainIcon,
      title: "Websites",
      description: "Create your branded web presence",
      path: "/websites",
    },
    {
      Icon: CreateIcon,
      title: "Content Creation Tools",
      description: "Build content that captivates and converts",
      path: "/content-creation-tools",
    },
    {
      Icon: GridOnIcon,
      title: "See all features",
      description: "See all our product offerings in one place",
      path: "/see-all-features",
    },
    {
      Icon: ThumbUpIcon,
      title: "Social media marketing",
      description: "Amplify the conversation across multiple channels",
      path: "/social-media-marketing",
    },
    {
      Icon: AssistantIcon,
      title: "Reporting & Analytics",
      description: "Track sales & campaign performance",
      path: "/reporting-analytics",
    },
    {
      Icon: EmailIcon,
      title: "Audience management",
      description: "Target and segment customers",
      path: "/audience-management",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row flex-wrap py-12 h-full mt-28 px-4 md:px-20 ">
      <div className="w-full md:w-1/2 px-4 md:px-6 flex flex-col h-full overflow-y-auto">
        <h2 className="text-2xl md:text-3xl font-semibold">Solutions & Services</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 text-gray-700">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 cursor-pointer hover:text-blue-600"
              onClick={() =>{
                console.log(item.path);
                 navigate(item.path);
                 closeSolutions();
                }}
            >
              <item.Icon fontSize="large" />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional items */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-6 text-gray-700">
          {[{
            src: "./Images/canva.jpeg",
            label: "Canva"
          }, {
            src: "./Images/shopsy.jpeg",
            label: "Shopsy"
          }, {
            src: "./Images/salesforce.png",
            label: "Salesforce"
          }, {
            src: "./Images/wix.png",
            label: "Wix"
          }, {
            src: "./Images/woo.png",
            label: "Woo"
          }].map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <img
                className="rounded-full w-20 h-20"
                src={item.src}
                alt={item.label}
              />
              <p className="text-center text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right-side content */}
      <div className="w-full md:w-1/2 px-4 md:px-10 bg-slate-50 mt-10 md:mt-0">
        <h3 className="text-xl md:text-2xl font-semibold">For Your Industry</h3>
        <div className="mt-6 grid grid-cols-1 gap-4 text-gray-700">
          {[{
            Icon: EmailIcon,
            label: "E-commerce and retail"
          }, {
            Icon: SettingsIcon,
            label: "Service-based Business"
          }, {
            Icon: AssistantIcon,
            label: "Mobile and web apps"
          }, {
            Icon: DomainIcon,
            label: "Start-ups"
          }, {
            Icon: CreateIcon,
            label: "Agencies and freelancers"
          }, {
            Icon: GridOnIcon,
            label: "Developers"
          }, {
            Icon: ThumbUpIcon,
            label: "Professional Services"
          }, {
            Icon: EmailIcon,
            label: "Hire an Expert"
          }, {
            Icon: SettingsIcon,
            label: "Personalized onboarding"
          }, {
            Icon: AssistantIcon,
            label: "Customer success"
          }].map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <item.Icon fontSize="large" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionsAndServices;
