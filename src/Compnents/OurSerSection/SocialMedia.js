import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaYoutube,
  FaChartLine,
  FaBullhorn,
  FaUserFriends,
  FaPencilAlt,
  FaCamera,
  FaVideo,
  FaHashtag
} from 'react-icons/fa';

const SocialMedia = () => {
  const platforms = [
    {
      icon: <FaFacebookF />,
      name: "Facebook",
      features: ["Page Management", "Ad Campaigns", "Community Building", "Content Strategy"]
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      features: ["Feed Curation", "Story Management", "Reels Creation", "Influencer Collaboration"]
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      features: ["Tweet Strategy", "Engagement Growth", "Trend Analysis", "Crisis Management"]
    },
    {
      icon: <FaLinkedinIn />,
      name: "LinkedIn",
      features: ["Professional Networking", "B2B Marketing", "Thought Leadership", "Lead Generation"]
    },
    {
      icon: <FaYoutube />,
      name: "YouTube",
      features: ["Video Production", "Channel Management", "SEO Optimization", "Community Engagement"]
    }
  ];

  const services = [
    {
      icon: <FaChartLine />,
      title: "Strategy Development",
      description: "Custom social media strategies aligned with your business goals",
      features: [
        "Platform Selection",
        "Target Audience Analysis",
        "Content Calendar Planning",
        "KPI Setting"
      ]
    },
    {
      icon: <FaPencilAlt />,
      title: "Content Creation",
      description: "Engaging content that resonates with your audience",
      features: [
        "Copywriting",
        "Graphic Design",
        "Video Production",
        "Story Creation"
      ]
    },
    {
      icon: <FaBullhorn />,
      title: "Social Media Advertising",
      description: "Targeted ad campaigns for maximum ROI",
      features: [
        "Ad Strategy",
        "Campaign Management",
        "Performance Tracking",
        "Budget Optimization"
      ]
    },
    {
      icon: <FaUserFriends />,
      title: "Community Management",
      description: "Active engagement and community building",
      features: [
        "Comment Management",
        "Message Response",
        "Community Guidelines",
        "Crisis Management"
      ]
    }
  ];

  const contentTypes = [
    {
      icon: <FaCamera />,
      type: "Photography",
      description: "Professional photo shoots and editing"
    },
    {
      icon: <FaVideo />,
      type: "Videography",
      description: "High-quality video content creation"
    },
    {
      icon: <FaPencilAlt />,
      type: "Copywriting",
      description: "Engaging captions and posts"
    },
    {
      icon: <FaHashtag />,
      type: "Strategy",
      description: "Hashtag and engagement strategy"
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Social Media Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elevate your brand's social media presence with our comprehensive management and strategy services
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {platforms.map((platform, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-blue-600 text-3xl mb-4 flex justify-center">
                {platform.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">{platform.name}</h3>
              <ul className="space-y-2">
                {platform.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600 text-sm">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-600 text-3xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Content Creation Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Content Creation</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {contentTypes.map((content, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 text-3xl mb-4 flex justify-center">
                  {content.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{content.type}</h3>
                <p className="text-gray-600">{content.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: "500+", label: "Active Campaigns" },
            { number: "1M+", label: "Social Reach" },
            { number: "98%", label: "Client Retention" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Social Media Presence?</h2>
          <p className="text-xl mb-6">Let's create a strategy that works for your brand</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
