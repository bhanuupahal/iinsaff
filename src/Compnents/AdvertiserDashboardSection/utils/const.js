// Base URL for API calls
export const baseUrl = "https://api.example.com/api/"; // Replace with your actual API URL

// Function to load Razorpay script
export const loadRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      resolve(window.Razorpay);
    };
    document.body.appendChild(script);
  });
};


