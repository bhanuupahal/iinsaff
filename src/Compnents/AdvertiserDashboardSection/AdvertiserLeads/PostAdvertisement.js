import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl, loadRazorpay } from "../utils/const";
import {
  FaUpload,
  FaMoneyBillWave,
  FaTag,
  FaCheckCircle,
  FaTimesCircle
} from "react-icons/fa";

// Helper Components
const FormSection = ({ title, children }) => (
  <div className="p-4 border rounded-lg shadow-md bg-white space-y-4">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    {children}
  </div>
);

const AdOverview = ({ formData, totalCost, savedAmount }) => (
  <div className="sticky top-4 p-4 border rounded-lg shadow-md bg-white space-y-4">
    <h2 className="text-xl font-semibold mb-2 border-b pb-2">Advertisement Overview</h2>
    
    {/* Media Preview */}
    {(formData.image || formData.video) && (
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Media Preview:</h3>
        <div className="border rounded-lg overflow-hidden bg-gray-50">
          {formData.image && (
            <img 
              src={URL.createObjectURL(formData.image)} 
              alt="Ad Preview" 
              className="w-full h-auto max-h-48 object-contain"
            />
          )}
          {formData.video && (
            <video 
              src={URL.createObjectURL(formData.video)} 
              controls
              className="w-full h-auto max-h-48"
            />
          )}
        </div>
      </div>
    )}
    
    <div className="space-y-3">
      {formData.channelType && (
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Channel:</span>
          <span className="text-gray-900 font-medium">{formData.channelType}</span>
        </div>
      )}
      {formData.adType && (
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Ad Type:</span>
          <span className="text-gray-900 font-medium">{formData.adType}</span>
        </div>
      )}
      {formData.startDate && (
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Start Date:</span>
          <span className="text-gray-900 font-medium">{formData.startDate}</span>
        </div>
      )}
      {formData.endDate && (
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">End Date:</span>
          <span className="text-gray-900 font-medium">{formData.endDate}</span>
        </div>
      )}
      {formData.requiredViews && (
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Views:</span>
          <span className="text-gray-900 font-medium">{formData.requiredViews}</span>
        </div>
      )}
      {formData.adLength && (
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Duration:</span>
          <span className="text-gray-900 font-medium">{formData.adLength}s</span>
        </div>
      )}
      {formData.adArea.adState && (
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Location:</span>
          <span className="text-gray-900 font-medium">
            {formData.adArea.adCity ? `${formData.adArea.adCity}, ${formData.adArea.adState}` : formData.adArea.adState}
          </span>
        </div>
      )}
      {formData.createdBy && (
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Created By:</span>
          <span className="text-gray-900 font-medium">{formData.createdBy === "iinsaf" ? "IINSAF" : "Self"}</span>
        </div>
      )}
      {formData.mediaType && formData.createdBy === "self" && (
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Media Type:</span>
          <span className="text-gray-900 font-medium capitalize">{formData.mediaType}</span>
        </div>
      )}
      {formData.adDescription && (
        <div className="text-sm">
          <span className="text-gray-500 block mb-1">Description:</span>
          <span className="text-gray-900 text-xs">{formData.adDescription}</span>
        </div>
      )}
      {formData.mediaDescription && formData.createdBy === "self" && (
        <div className="text-sm">
          <span className="text-gray-500 block mb-1">Media Description:</span>
          <span className="text-gray-900 text-xs">{formData.mediaDescription}</span>
        </div>
      )}
      <div className="border-t pt-3 mt-3">
        <div className="flex justify-between font-bold">
          <span>Total Cost:</span>
          <span className="text-blue-600">₹{totalCost.toFixed(2)}</span>
        </div>
        {savedAmount && (
          <div className="flex justify-between text-sm text-green-500 mt-1">
            <span>Savings:</span>
            <span>₹{savedAmount.toFixed(2)}</span>
          </div>
        )}
      </div>
    </div>
  </div>
);

const PostAdvertisement = () => {
  const navigate = useNavigate();
  
  // State Management
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [totalCost, setTotalCost] = useState(0);
  const [savedAmount, setSavedAmount] = useState(null);
  const [pricing, setPricing] = useState(null);
  const [adTypes, setAdTypes] = useState([]);
  const [channelType, setChannelType] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedMediaType, setSelectedMediaType] = useState("image");
  const [minAdLength, setMinAdLength] = useState(0);
  const [maxAdLength, setMaxAdLength] = useState(0);
  const [minViews, setMinViews] = useState(100);
  const [maxViews, setMaxViews] = useState(10000);

  // Form Data State
  const [formData, setFormData] = useState({
    channelType: "",
    adType: "",
    requiredViews: "1000",
    adArea: { adState: "", adCity: "" },
    createdBy: "",
    adDescription: "",
    adNote: "",
    couponCode: "",
    mediaType: "image",
    mediaDescription: "",
    adLength: "5",
    image: null,
    video: null,
  });

  // Effects
  useEffect(() => {
    // Temporarily use hardcoded states instead of JSON
    setStates(["Maharashtra", "Delhi", "Karnataka", "Tamil Nadu"]);
  }, []);

  useEffect(() => {
    const fetchPricingData = async () => {
      try {
        // Mock pricing data for now
        const mockPricingData = {
          adType: [
            { name: "Banner", price: 1.5 },
            { name: "Video", price: 2.0 },
            { name: "Sponsored", price: 2.5 }
          ],
          channelType: [
            { name: "Social Media", price: 1.2 },
            { name: "Website", price: 1.0 },
            { name: "Mobile App", price: 1.5 }
          ],
          views: 0.01,
          adLength: 0.5,
          minAdLength: 5,
          maxAdLength: 60,
          minViews: 1000,
          maxViews: 100000,
          self: 1.0,
          iinsaf: 1.5
        };
        
        setAdTypes(mockPricingData.adType);
        setChannelType(mockPricingData.channelType);
        setPricing(mockPricingData);
        setMinAdLength(mockPricingData.minAdLength);
        setMaxAdLength(mockPricingData.maxAdLength);
        setMinViews(mockPricingData.minViews);
        setMaxViews(mockPricingData.maxViews);
        setFormData(prev => ({
          ...prev,
          adLength: mockPricingData.minAdLength.toString(),
        }));
      } catch (error) {
        console.error("Error fetching pricing data:", error);
      }
    };

    fetchPricingData();
  }, []);

  useEffect(() => {
    if (pricing) {
      calculateTotalCost();
    }
  }, [formData, pricing]);

  // Helper Functions
  const calculateTotalCost = (discount = 0) => {
    if (pricing && pricing.adType && formData) {
      const adTypePrice = pricing.adType.find(ad => ad.name === formData.adType)?.price || 1;
      const viewsCost = formData.requiredViews * pricing.views;
      const adLengthCost = formData.adLength * pricing.adLength;
      const creatorCost = pricing[formData.createdBy] || 1;

      let total = (viewsCost + adLengthCost) * creatorCost * adTypePrice;

      if (discount > 0) {
        const saved = (total * discount) / 100;
        setSavedAmount(saved);
        total = total - saved;
      } else {
        setSavedAmount(null);
      }

      setTotalCost(total);
    }
  };

  const getCityName = (cityObj) => 
    typeof cityObj === "string" ? cityObj : cityObj.city;

  // Event Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("adArea.")) {
      const key = name.split(".")[1];
      setFormData(prev => ({
        ...prev,
        adArea: { ...prev.adArea, [key]: value },
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    // Mock cities data
    const mockCities = {
      "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
      "Delhi": ["New Delhi", "North Delhi", "South Delhi"],
      "Karnataka": ["Bangalore", "Mysore", "Hubli"],
      "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"]
    };
    
    const stateCities = mockCities[selectedState] || [];
    setFormData(prev => ({
      ...prev,
      adArea: {
        adState: selectedState,
        adCity: stateCities[0] || "",
      },
    }));
    setCities(stateCities.map(city => ({ city })));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    
    if (!file) return;

    const maxSize = selectedMediaType === 'image' ? 2 * 1024 * 1024 : 100 * 1024 * 1024;
    
    if (file.size > maxSize) {
      console.error(`File size should be less than ${maxSize/(1024*1024)}MB`);
      e.target.value = '';
      return;
    }

    setFormData(prev => ({
      ...prev,
      image: name === "image" ? file : null,
      video: name === "video" ? file : null,
    }));
  };

  const handleMediaTypeChange = (e) => {
    setSelectedMediaType(e.target.value);
    setFormData(prev => ({ ...prev, mediaType: e.target.value }));
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const applyCouponCode = async (e) => {
    e.preventDefault();
    if (!formData.couponCode) {
      console.error("Please enter a coupon code.");
      return;
    }

    try {
      // Verify coupon with backend
      const response = await axios.post(`${baseUrl}advertiser/verify-coupon`, {
        couponCode: formData.couponCode,
        totalAmount: totalCost
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      console.log(response.data.message);
      calculateTotalCost(response.data.coupon.couponDiscount);
    } catch (error) {
      console.error("Failed to apply coupon", error.response?.data?.message || error.message);
    }
  };

  const handlePayment = async (razorpayOrderId, adCost) => {
    try {
      // Load Razorpay script
      const Razorpay = await loadRazorpay();
      
      // Get user details from localStorage
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      
      // Create payment options
      const options = {
        key: 'rzp_test_your_key_here', // Replace with your Razorpay key
        amount: adCost * 100, // Amount in paisa
        currency: 'INR',
        name: 'IINSAF',
        description: 'Advertisement Payment',
        order_id: razorpayOrderId,
        handler: async function (response) {
          // Send payment verification to backend
          try {
            const verifyResponse = await axios.post(`${baseUrl}advertiser/verify-payment`, {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature
            }, {
              headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
              }
            });
            
            console.log("Payment verified successfully!", verifyResponse.data);
            navigate("/advertiser/leads-status");
          } catch (error) {
            console.error("Payment verification failed", error);
          }
        },
        prefill: {
          name: user.name || '',
          email: user.email || '',
          contact: user.phone || ''
        },
        theme: {
          color: '#3399cc'
        }
      };
      
      // Create Razorpay instance and open payment modal
      const razorpayInstance = new Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      console.error("Failed to initialize payment", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isChecked) {
      console.error("Please accept terms and conditions");
      return;
    }

    try {
      setIsSubmitting(true);
      
      // Create FormData object for file uploads
      const adData = new FormData();
      
      // Add all form fields to FormData
      Object.keys(formData).forEach(key => {
        if (key === 'image' || key === 'video') {
          // Only append files if they exist
          if (formData[key]) {
            adData.append(key, formData[key]);
          }
        } else if (key === 'adArea') {
          // Handle nested object
          adData.append('adState', formData.adArea.adState);
          adData.append('adCity', formData.adArea.adCity);
        } else {
          // Add all other fields
          adData.append(key, formData[key]);
        }
      });
      
      // Add total cost to FormData
      adData.append('totalCost', totalCost);
      
      // Send data to backend API
      const response = await axios.post(`${baseUrl}advertiser/post-advertisement`, adData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      console.log("Advertisement created successfully!", response.data);
      
      // If payment is required, initiate payment
      if (response.data.requiresPayment) {
        await handlePayment(response.data.orderId, totalCost);
      } else {
        // If no payment required, redirect to status page
        navigate("/advertiser/leads-status");
      }
    } catch (error) {
      console.error("Failed to create advertisement", error.response?.data || error.message);
      // Handle specific error cases
      if (error.response?.status === 401) {
        // Unauthorized - redirect to login
        navigate("/auth/login");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render Component
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Post Advertisement</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <FormSection title="Advertisement Details">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Channel Type
                  </label>
                  <select
                    name="channelType"
                    value={formData.channelType}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Select Channel Type</option>
                    {channelType.map((channel, index) => (
                      <option key={index} value={channel.name}>
                        {channel.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ad Type
                  </label>
                  <select
                    name="adType"
                    value={formData.adType}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Select Ad Type</option>
                    {adTypes.map((type, index) => (
                      <option key={index} value={type.name}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    End Date
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                  Reach People
                  </label>
                  <input
                    type="number"
                    name="requiredViews"
                    value={formData.requiredViews}
                    onChange={handleChange}
                    min={minViews}
                    max={maxViews}
                    step="1000"
                    className="w-full p-2 border rounded"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ad Length (seconds)
                  </label>
                  <div className="flex items-center">
                    <input
                      type="range"
                      name="adLength"
                      value={formData.adLength}
                      onChange={handleChange}
                      min={minAdLength}
                      max={maxAdLength}
                      className="w-3/4 mr-2"
                    />
                    <span>{formData.adLength}s</span>
                  </div>
                </div>
              </div>
            </FormSection>
            
            <FormSection title="Location">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State
                  </label>
                  <select
                    name="adArea.adState"
                    value={formData.adArea.adState}
                    onChange={handleStateChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Select State</option>
                    {states.map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <select
                    name="adArea.adCity"
                    value={formData.adArea.adCity}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    disabled={!formData.adArea.adState}
                  >
                    <option value="">Select City</option>
                    {cities.map((city, index) => (
                      <option key={index} value={getCityName(city)}>
                        {getCityName(city)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </FormSection>
            
            <FormSection title="Creator Information">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Created By
                </label>
                <select
                  name="createdBy"
                  value={formData.createdBy}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select Creator</option>
                  <option value="self">Self</option>
                  <option value="iinsaf">IINSAF</option>
                </select>
              </div>
              
              {formData.createdBy === "iinsaf" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Ad Description
                    </label>
                    <textarea
                      name="adDescription"
                      value={formData.adDescription}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                      rows="3"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Ad Note
                    </label>
                    <textarea
                      name="adNote"
                      value={formData.adNote}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                      rows="2"
                    ></textarea>
                  </div>
                </>
              )}
              
              {formData.createdBy === "self" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Media Type
                    </label>
                    <div className="flex space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="mediaType"
                          value="image"
                          checked={selectedMediaType === "image"}
                          onChange={handleMediaTypeChange}
                          className="mr-2"
                        />
                        <span>Image</span>
                      </label>
                      
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="mediaType"
                          value="video"
                          checked={selectedMediaType === "video"}
                          onChange={handleMediaTypeChange}
                          className="mr-2"
                        />
                        <span>Video</span>
                      </label>
                    </div>
                  </div>
                  
                  {selectedMediaType === "image" ? (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Upload Image
                      </label>
                      <input
                        type="file"
                        name="image"
                        onChange={handleFileChange}
                        accept="image/*"
                        className="w-full p-2 border rounded"
                      />
                    </div>
                  ) : (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Upload Video
                      </label>
                      <input
                        type="file"
                        name="video"
                        onChange={handleFileChange}
                        accept="video/*"
                        className="w-full p-2 border rounded"
                      />
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Media Description
                    </label>
                    <textarea
                      name="mediaDescription"
                      value={formData.mediaDescription}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                      rows="3"
                      placeholder="Describe your media content"
                    ></textarea>
                  </div>
                </>
              )}
            </FormSection>
            
            <FormSection title="Payment">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Coupon Code
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      name="couponCode"
                      value={formData.couponCode}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-l"
                      placeholder="Enter coupon code"
                    />
                    <button
                      type="button"
                      onClick={applyCouponCode}
                      className="bg-blue-500 text-white px-4 rounded-r"
                    >
                      Apply
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center">
                  <div className="text-lg font-bold">
                    Total Cost: ₹{totalCost.toFixed(2)}
                  </div>
                  {savedAmount && (
                    <div className="text-green-500 text-sm">
                      You saved: ₹{savedAmount.toFixed(2)}
                    </div>
                  )}
                </div>
              </div>
            </FormSection>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                I agree to the terms and conditions
              </label>
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-2 rounded-md ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white font-medium`}
              >
                {isSubmitting ? "Processing..." : "Submit Advertisement"}
              </button>
            </div>
          </form>
        </div>
        
        <div className="lg:col-span-1">
          <AdOverview 
            formData={formData}
            totalCost={totalCost}
            savedAmount={savedAmount}
          />
        </div>
      </div>
    </div>
  );
};

export default PostAdvertisement;

