import React from 'react';
import { 
  FaClipboardList, 
  FaChartPie, 
  FaUsers, 
  FaSearchLocation,
  FaMobileAlt,
  FaFileAlt,
  FaRegLightbulb,
  FaRegChartBar
} from 'react-icons/fa';

const Survey = () => {
  const surveyTypes = [
    {
      icon: <FaUsers />,
      title: "Market Research",
      description: "Comprehensive market analysis and consumer behavior studies",
      features: [
        "Consumer preferences analysis",
        "Market trend identification",
        "Competitor analysis",
        "Brand perception studies"
      ]
    },
    {
      icon: <FaClipboardList />,
      title: "Opinion Polls",
      description: "Gather public opinion on various topics and issues",
      features: [
        "Political surveys",
        "Social issue analysis",
        "Community feedback",
        "Public sentiment tracking"
      ]
    },
    {
      icon: <FaSearchLocation />,
      title: "Local Surveys",
      description: "Region-specific data collection and analysis",
      features: [
        "Geographic targeting",
        "Local market insights",
        "Community needs assessment",
        "Regional trend analysis"
      ]
    },
    {
      icon: <FaMobileAlt />,
      title: "Digital Surveys",
      description: "Online and mobile-based survey solutions",
      features: [
        "Mobile-friendly surveys",
        "Real-time data collection",
        "Social media integration",
        "Digital response tracking"
      ]
    }
  ];

  const methodologies = [
    {
      title: "Data Collection",
      points: [
        "Online surveys",
        "Phone interviews",
        "Face-to-face interviews",
        "Focus groups",
        "Mobile surveys"
      ]
    },
    {
      title: "Analysis Methods",
      points: [
        "Statistical analysis",
        "Qualitative research",
        "Cross-tabulation",
        "Trend analysis",
        "Demographic segmentation"
      ]
    },
    {
      title: "Reporting",
      points: [
        "Interactive dashboards",
        "Custom reports",
        "Real-time updates",
        "Visual presentations",
        "Executive summaries"
      ]
    }
  ];

  const benefits = [
    {
      icon: <FaRegLightbulb />,
      title: "Informed Decision Making",
      description: "Make data-driven decisions based on reliable survey insights"
    },
    {
      icon: <FaChartPie />,
      title: "Market Understanding",
      description: "Gain deep insights into market trends and consumer behavior"
    },
    {
      icon: <FaFileAlt />,
      title: "Comprehensive Reports",
      description: "Receive detailed analysis and actionable recommendations"
    },
    {
      icon: <FaRegChartBar />,
      title: "Performance Metrics",
      description: "Track and measure key performance indicators"
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Survey Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional survey solutions for gathering valuable insights and making data-driven decisions
          </p>
        </div>

        {/* Survey Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {surveyTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-blue-600 text-3xl mb-4">
                {type.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
              <p className="text-gray-600 mb-4">{type.description}</p>
              <ul className="space-y-2">
                {type.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Methodology Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Survey Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methodologies.map((method, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">{method.title}</h3>
                <ul className="space-y-3">
                  {method.points.map((point, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 text-3xl mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Survey Project?</h2>
          <p className="text-xl mb-6">Let us help you gather the insights you need</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Get Started
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-16">
          {[
            { number: "1000+", label: "Surveys Conducted" },
            { number: "50K+", label: "Respondents Reached" },
            { number: "95%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Survey;


