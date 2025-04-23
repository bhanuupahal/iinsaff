import React from 'react';
import { 
  FaUserCheck, 
  FaHandshake, 
  FaBullhorn, 
  FaChartLine,
  FaUsers,
  FaSearchDollar
} from 'react-icons/fa';

const Influencing = () => {
  const features = [
    {
      icon: <FaUserCheck />,
      title: "Influencer Matching",
      description: "Connect with relevant influencers who align with your brand values and target audience"
    },
    {
      icon: <FaHandshake />,
      title: "Partnership Management",
      description: "End-to-end management of influencer relationships and campaign coordination"
    },
    {
      icon: <FaBullhorn />,
      title: "Content Strategy",
      description: "Develop engaging content strategies that resonate with your target audience"
    },
    {
      icon: <FaChartLine />,
      title: "Performance Tracking",
      description: "Real-time monitoring and analytics of campaign performance and engagement"
    },
    {
      icon: <FaUsers />,
      title: "Audience Analysis",
      description: "In-depth analysis of audience demographics and engagement patterns"
    },
    {
      icon: <FaSearchDollar />,
      title: "ROI Optimization",
      description: "Maximize return on investment through data-driven campaign optimization"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Discovery & Strategy",
      description: "Understanding your brand and defining campaign objectives",
      details: [
        "Brand analysis and goal setting",
        "Target audience identification",
        "Campaign strategy development",
        "Budget planning and allocation"
      ]
    },
    {
      step: 2,
      title: "Influencer Selection",
      description: "Finding the perfect influencer match for your brand",
      details: [
        "Influencer research and vetting",
        "Audience alignment analysis",
        "Engagement rate evaluation",
        "Brand value compatibility check"
      ]
    },
    {
      step: 3,
      title: "Campaign Execution",
      description: "Managing and implementing influencer campaigns",
      details: [
        "Content brief development",
        "Campaign timeline management",
        "Content review and approval",
        "Real-time campaign monitoring"
      ]
    },
    {
      step: 4,
      title: "Analysis & Optimization",
      description: "Measuring success and optimizing performance",
      details: [
        "Performance metrics tracking",
        "Engagement analysis",
        "ROI measurement",
        "Campaign optimization"
      ]
    }
  ];

  const benefits = [
    {
      stat: "85%",
      label: "Brand Trust Increase"
    },
    {
      stat: "3x",
      label: "Engagement Rate"
    },
    {
      stat: "65%",
      label: "Lead Generation Growth"
    },
    {
      stat: "90%",
      label: "Client Satisfaction"
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Influencer Marketing Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with influential voices and amplify your brand message through strategic influencer partnerships and campaigns.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-purple-600 text-3xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Influencer Marketing Process</h2>
          <div className="space-y-8">
            {processSteps.map((step) => (
              <div key={step.step} className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-purple-100 text-purple-600 rounded-full p-4 w-16 h-16 flex items-center justify-center font-bold text-xl">
                    {step.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {step.details.map((detail, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
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
        <div className="bg-purple-50 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Campaign Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">{benefit.stat}</div>
                <div className="text-gray-700">{benefit.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Amplify Your Brand?</h2>
          <p className="text-xl mb-6">Let us help you create impactful influencer marketing campaigns</p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Influencing;
