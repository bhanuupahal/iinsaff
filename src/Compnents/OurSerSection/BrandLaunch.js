import React from 'react';
import { 
  FaRocket, 
  FaChartLine, 
  FaBullseye, 
  FaUsers, 
  FaBullhorn, // Changed from FaMegaphone
  FaHandshake 
} from 'react-icons/fa';

const BrandLaunch = () => {
  const features = [
    {
      icon: <FaRocket />,
      title: "Strategic Launch Planning",
      description: "Comprehensive launch strategy tailored to your brand's unique positioning and target market"
    },
    {
      icon: <FaChartLine />,
      title: "Market Analysis",
      description: "In-depth market research and competitor analysis to identify opportunities and challenges"
    },
    {
      icon: <FaBullseye />,
      title: "Audience Targeting",
      description: "Precise audience segmentation and targeting strategies for maximum impact"
    },
    {
      icon: <FaUsers />,
      title: "Community Building",
      description: "Build and engage with your brand community from day one"
    },
    {
      icon: <FaBullhorn />, // Changed from FaMegaphone
      title: "Multi-Channel Promotion",
      description: "Coordinated promotion across social media, PR, and digital platforms"
    },
    {
      icon: <FaHandshake />,
      title: "Partnership Development",
      description: "Strategic partnerships and collaborations to amplify your launch"
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Brand Launch Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your brand vision into reality with our comprehensive launch services. 
            We combine strategic planning, market insights, and creative execution to ensure 
            a successful brand launch.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-blue-600 text-3xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Launch Process</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 text-blue-600 rounded-full p-3 w-12 h-12 flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="text-xl font-semibold">Discovery & Strategy</h3>
                <p className="text-gray-600">Understanding your brand vision and developing a tailored launch strategy</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 text-blue-600 rounded-full p-3 w-12 h-12 flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="text-xl font-semibold">Planning & Preparation</h3>
                <p className="text-gray-600">Creating detailed timelines, content calendars, and marketing materials</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 text-blue-600 rounded-full p-3 w-12 h-12 flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="text-xl font-semibold">Launch Execution</h3>
                <p className="text-gray-600">Coordinated implementation across all channels and platforms</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 text-blue-600 rounded-full p-3 w-12 h-12 flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="text-xl font-semibold">Monitoring & Optimization</h3>
                <p className="text-gray-600">Real-time tracking and adjustments for maximum impact</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Brand?</h2>
          <p className="text-xl mb-6">Let's create a memorable launch that sets your brand up for success</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandLaunch;

