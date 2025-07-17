import React, { useEffect } from 'react';
import { Star, Shield, Award, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CEO, TechCorp",
    text: "This solution transformed our business operations completely. The results exceeded all expectations.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Michael Chen",
    title: "CTO, InnovateLabs",
    text: "Outstanding service and incredible attention to detail. Highly recommended for any serious business.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    title: "Marketing Director, GrowthCo",
    text: "The team's expertise and dedication made all the difference. We saw immediate improvements.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "David Thompson",
    title: "Founder, StartupX",
    text: "Professional, efficient, and results-driven. This partnership has been invaluable to our growth.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Lisa Park",
    title: "Operations Manager, ScaleCorp",
    text: "Exceptional quality and customer service. They truly understand what businesses need to succeed.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
  }
];

function InfiniteTestimonials() {
  const scrollRef = React.useRef();
  
  useEffect(() => {
    let frame;
    let x = 0;
    function animate() {
      if (scrollRef.current) {
        const scrollWidth = scrollRef.current.scrollWidth;
        const visibleWidth = scrollRef.current.offsetWidth;
        const totalScroll = scrollWidth / 2 - visibleWidth;
        const frames = 1000; // ~1.5 seconds at 60fps
        const speed = totalScroll / frames;
        x += speed;
        scrollRef.current.scrollLeft = x;
        // Do not reset, let it scroll infinitely to the right
        // When x exceeds scrollWidth, keep increasing scrollLeft (browser will clamp to max)
      }
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);
  
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];
  
  return (
    <div className="relative overflow-hidden mb-16">
      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 overflow-x-hidden"
        style={{ scrollBehavior: 'auto' }}
      >
        {extendedTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-72 sm:w-80 lg:w-96 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 lg:p-8 border border-gray-100"
          >
            {/* Name and Pic Top Left */}
            <div className="flex items-center mb-4 sm:mb-6">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
              />
              <div>
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                  {testimonial.name}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500">
                  {testimonial.title}
                </p>
              </div>
            </div>
            
            {/* Testimonial Text */}
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 min-h-[60px] sm:min-h-[80px]">
              "{testimonial.text}"
            </p>
            
            {/* Stars Bottom Center */}
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Badge component for security badges
const Badge = ({ variant = "default", className = "", children }) => {
  const baseClasses = "inline-flex items-center rounded-full border transition-colors";
  const variantClasses = variant === "outline" 
    ? "border-gray-200 bg-white text-gray-700 hover:bg-gray-50" 
    : "border-transparent bg-blue-600 text-white hover:bg-blue-700";
  
  return (
    <div className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </div>
  );
};

function TrustBuildersSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Trusted by Industry Leaders. Built for the Future.
          </h2>
        </div>
        
        {/* Testimonials */}
        <InfiniteTestimonials />
        
        {/* Security Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          <Badge variant="outline" className="px-4 py-2 text-sm">
            <Shield className="w-4 h-4 mr-2" />
            ISO 27001 Certified
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm">
            <Award className="w-4 h-4 mr-2" />
            AWS Partner
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm">
            <CheckCircle className="w-4 h-4 mr-2" />
            Enterprise Security
          </Badge>
        </div>
      </div>
    </section>
  );
}

export default TrustBuildersSection;