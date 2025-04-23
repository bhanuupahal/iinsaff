import React from 'react';
import { 
  FaChartLine, 
  FaCogs, 
  FaCalendarAlt, 
  FaChartBar,  // Changed from FaAnalytics
  FaUsers, 
  FaBullseye 
} from 'react-icons/fa';

const CampaignManagement = () => {
  const features = [
    {
      icon: <FaChartLine />,
      title: "Strategic Planning",
      description: "Develop comprehensive campaign strategies aligned with your business objectives and target audience"
    },
    {
      icon: <FaCogs />,
      title: "Campaign Execution",
      description: "Professional implementation across multiple channels with consistent messaging and branding"
    },
    {
      icon: <FaCalendarAlt />,
      title: "Timeline Management",
      description: "Efficient scheduling and coordination of campaign activities with detailed milestone tracking"
    },
    {
      icon: <FaChartBar />,  // Changed from FaAnalytics
      title: "Performance Analytics",
      description: "Real-time monitoring and detailed reporting on campaign metrics and ROI"
    },
    {
      icon: <FaUsers />,
      title: "Audience Engagement",
      description: "Active audience interaction and community management throughout the campaign"
    },
    {
      icon: <FaBullseye />,
      title: "Goal Tracking",
      description: "Systematic monitoring of campaign objectives and key performance indicators"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Campaign Strategy Development",
      description: "We analyze your goals, target audience, and market position to create a tailored campaign strategy",
      details: [
        "Market research and competitor analysis",
        "Target audience definition",
        "Campaign objectives setting",
        "Channel strategy planning"
      ]
    },
    {
      step: 2,
      title: "Content Creation & Planning",
      description: "Development of compelling campaign content and detailed execution timeline",
      details: [
        "Creative content development",
        "Message optimization",
        "Content calendar creation",
        "Resource allocation"
      ]
    },
    {
      step: 3,
      title: "Campaign Execution",
      description: "Professional implementation across chosen channels with continuous optimization",
      details: [
        "Multi-channel deployment",
        "Real-time monitoring",
        "Performance optimization",
        "Engagement management"
      ]
    },
    {
      step: 4,
      title: "Analysis & Reporting",
      description: "Comprehensive analysis of campaign performance with actionable insights",
      details: [
        "Performance metrics tracking",
        "ROI analysis",
        "Insight generation",
        "Recommendation development"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Campaign Management Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end campaign planning, execution, and monitoring services designed to maximize your marketing impact and ROI.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-green-600 text-3xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Campaign Management Process</h2>
          <div className="space-y-8">
            {processSteps.map((step) => (
              <div key={step.step} className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-green-100 text-green-600 rounded-full p-4 w-16 h-16 flex items-center justify-center font-bold text-xl">
                    {step.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {step.details.map((detail, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-green-50 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Campaign Management Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-700">Campaign Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">40%</div>
              <div className="text-gray-700">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">2x</div>
              <div className="text-gray-700">Engagement Growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-700">Campaign Monitoring</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-green-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Campaign?</h2>
          <p className="text-xl mb-6">Let us help you create and manage successful marketing campaigns</p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignManagement;




