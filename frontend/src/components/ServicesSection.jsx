import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Globe,
  Phone,
  TreeStructure,
  Cloud,
  Broadcast,
  CheckCircle,
  Thermometer,
} from "phosphor-react";
import {
  Shield,
  Video,
  Network,
  Database,
  Lock,
  Camera,
  Fingerprint,
  Mic,
  Monitor,
  Headphones,
  Zap,
  Server,
} from "lucide-react";
import Button from "./Button";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ServicesSection = ({ 
  onButtonClick,
  customStyles = {},
  animationConfig = {},
  className = ""
}) => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const serviceRefs = useRef([]);

  // Default animation configuration
  const defaultAnimationConfig = {
    headerDelay: 0.2,
    serviceStagger: 0.1,
    duration: 0.8,
    triggerStart: "top 70%",
    headerTriggerStart: "top 80%",
    ease: "power3.out",
    ...animationConfig
  };

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const serviceElements = serviceRefs.current;

    if (!section || !header) return;

    // Header animation
    gsap.fromTo(
      header.children,
      {
        opacity: 0,
        y: 50,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: defaultAnimationConfig.duration,
        stagger: defaultAnimationConfig.headerDelay,
        ease: defaultAnimationConfig.ease,
        scrollTrigger: {
          trigger: header,
          start: defaultAnimationConfig.headerTriggerStart,
          toggleActions: "play none none reverse"
        }
      }
    );

    // Service cards animation
    serviceElements.forEach((service, index) => {
      if (!service) return;

      const isEven = index % 2 === 0;
      const content = service.querySelector('.service-content');
      const image = service.querySelector('.service-image');
      const features = service.querySelectorAll('.feature-item');

      // Set initial states
      gsap.set(content, {
        opacity: 0,
        x: isEven ? -100 : 100,
        scale: 0.95
      });

      if (image) {
        gsap.set(image, {
          opacity: 0,
          x: isEven ? 100 : -100,
          scale: 0.95,
          rotationY: isEven ? -15 : 15
        });
      }

      gsap.set(features, {
        opacity: 0,
        y: 30,
        scale: 0.9
      });

      // Create timeline for this service
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: service,
          start: defaultAnimationConfig.triggerStart,
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate content (heading/description)
    //   tl.to(content, {
    //     opacity: 1,
    //     x: 0,
    //     scale: 1,
    //     duration: 0.6,
    //     ease: defaultAnimationConfig.ease
    //   });

      // Animate image and features together
      if (image) {
        tl.to([content,image, features], {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotationY: 0,
          duration: 2,
          stagger: {
            each: 0.1,
            amount: 0
          },
          ease: defaultAnimationConfig.ease
        }, "+=0"); // starts right after content
      } else {
        tl.to(features, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0,
          ease: defaultAnimationConfig.ease
        }, "+=0");
      }

      // Add hover animations
      const hoverElements = service.querySelectorAll('.hover-element');
      hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          gsap.to(element, { scale: 1.05, duration: 0.3, ease: "power2.out" });
        });
        element.addEventListener('mouseleave', () => {
          gsap.to(element, { scale: 1, duration: 0.3, ease: "power2.out" });
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [defaultAnimationConfig]);

  const addToRefs = (el) => {
    if (el && !serviceRefs.current.includes(el)) {
      serviceRefs.current.push(el);
    }
  };

  const handleButtonClick = (service) => {
    if (onButtonClick) {
      onButtonClick(service);
    } else {
      console.log(`Clicked: ${service}`);
    }
  };

  return (
    <section 
      ref={sectionRef} 
      id="solutions" 
      className={`py-16 md:py-24 bg-gray-50 overflow-hidden ${className} ${customStyles.section || ''}`}
    >
      <div className={`container mx-auto px-4 max-w-7xl ${customStyles.container || ''}`}>
        <div ref={headerRef} id="it" className={`text-center mb-16 ${customStyles.header || ''}`}>
          <p className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight drop-shadow-sm">
            Our Core <span className="text-orange-500">Competencies</span>
          </p>
          <p className="text-lg sm:text-xl text-gray-600 max-w-5xl mx-auto">
            Comprehensive technology solutions designed to transform how your
            business operates
          </p>
        </div>

        <div className="space-y-16">
          {/* IT Infrastructure */}
          <div ref={addToRefs} className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="service-content relative w-full">
              <div className="block lg:hidden absolute inset-0 z-0 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="IT Infrastructure visualization"
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
              <div className="relative z-10 p-2 sm:p-0">
                <div className="flex items-center mb-4 sm:mb-6 hover-element">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                    <Cloud className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-2xl md:text-3xl font-bold text-gray-900">
                    IT Infrastructure
                  </h3>
                </div>
                <p className="text-xs sm:text-lg text-[#F24E1E] font-medium mb-2 sm:mb-4">
                  "Digital foundations built for agility and scale."
                </p>
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-base">
                  Modern businesses need more than just devices—they need a
                  scalable, secure digital backbone. We deliver
                  enterprise-grade IT solutions tailored to your goals.
                </p>

                <div className="space-y-4 sm:space-y-6 mb-4 sm:mb-8">
                  {/* Network Architecture */}
                  <div className="feature-item border-l-4 border-[#F24E1E] pl-2 sm:pl-4 hover-element">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0 shadow-md">
                        <Network className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xs sm:text-base">
                          Network Architecture
                        </h4>
                        <div className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                          <p>• LAN/WAN design and deployment</p>
                          <p>• High-performance Wi-Fi (mesh, enterprise-grade)</p>
                          <p>• VPNs, firewalls, SD-WAN configuration</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Server & Storage Solutions */}
                  <div className="feature-item border-l-4 border-[#F24E1E] pl-2 sm:pl-4 hover-element">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0 shadow-md">
                        <Cloud className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xs sm:text-base">
                          Server & Storage Solutions
                        </h4>
                        <div className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                          <p>• On-prem and cloud server setups (AWS, Azure, GCP)</p>
                          <p>• Virtualization: VMware, Proxmox, Hyper-V</p>
                          <p>• NAS/SAN storage with redundancy</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Endpoint & Access Security */}
                  <div className="feature-item border-l-4 border-[#F24E1E] pl-2 sm:pl-4 hover-element">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0 shadow-md">
                        <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xs sm:text-base">
                          Endpoint & Access Security
                        </h4>
                        <div className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                          <p>• SSO, LDAP, Azure AD</p>
                          <p>• Role-based access controls</p>
                          <p>• Patch and asset management</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Continuity & Recovery */}
                  <div className="feature-item border-l-4 border-[#F24E1E] pl-2 sm:pl-4 hover-element">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0 shadow-md">
                        <Database className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xs sm:text-base">
                          Continuity & Recovery
                        </h4>
                        <div id="security" className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                          <p>• Backup strategy (cloud/local/hybrid)</p>
                          <p>• Disaster recovery plans</p>
                          <p>• Monitoring and failover systems</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <blockquote className="border-l-4 border-[#F24E1E] pl-2 sm:pl-4 italic text-gray-700 mb-4 sm:mb-6 text-xs sm:text-base bg-white/50 py-2 rounded">
                  "We don't just install servers. We build systems that carry your ambitions."
                </blockquote>
              </div>
            </div>

            <div className="service-image hidden lg:block relative">
              <div className="rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="IT Infrastructure visualization"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#F24E1E]/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Facilities Security */}
          <div ref={addToRefs} className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="service-content relative w-full lg:order-2">
              <div className="block lg:hidden absolute inset-0 z-0 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Security system visualization"
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
              <div className="relative z-10 p-2 sm:p-0">
                <div className="flex items-center mb-4 sm:mb-6 hover-element">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-2xl md:text-3xl font-bold text-gray-900">
                    Facilities Security
                  </h3>
                </div>
                <p className="text-xs sm:text-lg text-[#F24E1E] font-medium mb-2 sm:mb-4">
                  "Smart environments that sense, protect, and evolve."
                </p>
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-base">
                  We turn physical spaces into intelligent environments with
                  integrated security systems that are proactive, not reactive.
                </p>

                <div className="space-y-4 sm:space-y-6 mb-4 sm:mb-8">
                  {/* Surveillance Systems */}
                  <div className="feature-item border-l-4 border-[#F24E1E] pl-2 sm:pl-4 hover-element">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0 shadow-md">
                        <Camera className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xs sm:text-base">
                          Surveillance Systems
                        </h4>
                        <div className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                          <p>• IP CCTV: PTZ, fisheye, thermal</p>
                          <p>• VMS software and cloud-based archiving</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Access Control */}
                  <div className="feature-item border-l-4 border-[#F24E1E] pl-2 sm:pl-4 hover-element">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0 shadow-md">
                        <Fingerprint className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xs sm:text-base">
                          Access Control
                        </h4>
                        <div className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                          <p>• Biometrics: fingerprint, facial</p>
                          <p>• RFID, NFC, mobile credentials</p>
                          <p>• Zonal control and visitor workflow integration</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="feature-item border-l-4 border-[#F24E1E] pl-2 sm:pl-4 hover-element">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0 shadow-md">
                        <Lock className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xs sm:text-base">
                          Building Management Systems (BMS)
                        </h4>
                        <div className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                          <p>• HVAC, fire alarm, lighting automation</p>
                          <p>• Central dashboard for energy and environment control</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="feature-item border-l-4 border-[#F24E1E] pl-2 sm:pl-4 hover-element">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0 shadow-md">
                        <Monitor className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xs sm:text-base">
                          Monitoring & Reporting
                        </h4>
                        <div className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                          <p>• Real-time dashboards</p>
                          <p>• Remote diagnostics and alerts</p>
                          <p>• Compliance-ready audit trails</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <blockquote className="border-l-4 border-[#F24E1E] pl-2 sm:pl-4 italic text-gray-700 mb-4 sm:mb-6 text-xs sm:text-base bg-white/50 py-2 rounded">
                  "Security isn't about fear—it's about freedom to focus."
                </blockquote>
              </div>
            </div>

            <div className="service-image hidden lg:block relative lg:order-1">
              <div className="rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Security system visualization"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#F24E1E]/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Audio & Video Conferencing */}
          <div ref={addToRefs} className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="service-content relative w-full">
              <div className="block lg:hidden absolute inset-0 z-0 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="AV conferencing setup"
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
              <div className="relative z-10 p-2 sm:p-0">
                <div className="flex items-center mb-4 sm:mb-6 hover-element">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                    <Video className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-2xl md:text-3xl font-bold text-gray-900">
                    Audio & Video Conferencing
                  </h3>
                </div>
                <p className="text-xs sm:text-lg text-[#F24E1E] font-medium mb-2 sm:mb-4">
                  "Spaces that connect with clarity, ease, and presence."
                </p>
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-base">
                  Whether it's boardrooms or remote workspaces, we engineer
                  communication environments that feel effortless and immersive.
                </p>

                <div className="space-y-4 sm:space-y-6 mb-4 sm:mb-8">
                  <div className="feature-item border-l-4 border-[#F24E1E] pl-2 sm:pl-4 hover-element">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0 shadow-md">
                        <Monitor className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xs sm:text-base">
                          Room Design & Acoustics
                        </h4>
                        <div className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                          <p>• Sightline and acoustic optimization</p>
                          <p>• Lighting for engagement</p>
                          <p>• Noise control treatments</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="feature-item border-l-4 border-[#F24E1E] pl-2 sm:pl-4 hover-element">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0 shadow-md">
                        <Headphones className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xs sm:text-base">
                          Platform Integration
                        </h4>
                        <div className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                          <p>• Zoom, Teams, Webex</p>
                          <p>• AV control (Crestron, Extron)</p>
                          <p>• BYOD and calendar sync</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="feature-item border-l-4 border-[#F24E1E] pl-2 sm:pl-4 hover-element">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0 shadow-md">
                        <Mic className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xs sm:text-base">
                          Hardware Setup
                        </h4>
                        <div className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                          <p>• PTZ cameras, ceiling mics, smart displays</p>
                          <p>• Wireless presentation, voice tracking</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <blockquote className="border-l-4 border-[#F24E1E] pl-2 sm:pl-4 italic text-gray-700 mb-4 sm:mb-6 text-xs sm:text-base bg-white/50 py-2 rounded">
                  "A great conversation shouldn't depend on your geography."
                </blockquote>
              </div>
            </div>

            <div className="service-image hidden lg:block relative">
              <div className="rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="AV conferencing setup"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#F24E1E]/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Telecom Infrastructure Solutions */}
          <div ref={addToRefs} className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="service-image hidden lg:block relative">
              <div className="rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Telecom Infrastructure visualization"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#F24E1E]/20 to-transparent"></div>
              </div>
            </div>

            <div className="service-content relative w-full">
              <div className="block lg:hidden absolute inset-0 z-0 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Telecom Infrastructure visualization"
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
              <div className="relative z-10 p-2 sm:p-0">
                <div className="flex items-center mb-4 sm:mb-6 hover-element">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                    <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-2xl md:text-3xl font-bold text-gray-900">
                    Telecom Infrastructure Solutions
                  </h3>
                </div>
                <p className="text-xs sm:text-lg text-[#F24E1E] font-medium mb-2 sm:mb-4">
                  "Smart, Scalable Communication Systems for Modern Enterprises"
                </p>
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-base">
                  Procedo Infosystems offers end-to-end telecom infrastructure
                  designed to support seamless voice and data communication
                  across organizations. Our solutions are built for clarity,
                  reliability, and future-ready scalability—ideal for
                  startups, corporates, and multi-location teams.
                </p>

                <div className="space-y-4 sm:space-y-6 mb-4 sm:mb-8">
                  <div className="feature-item border-l-4 border-[#F24E1E] pl-2 sm:pl-4 hover-element">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0 shadow-md">
                        <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xs sm:text-base">
                          IP EPABX Systems
                        </h4>
                        <div className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                          <p>• Advanced call management: IVR, voicemail, call forwarding, internal routing</p>
                          <p>• Customized to suit your operational needs</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="feature-item border-l-4 border-[#F24E1E] pl-2 sm:pl-4 hover-element">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0 shadow-md">
                        <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xs sm:text-base">
                          IP Phones & SIP Terminals
                        </h4>
                        <div className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                          <p>• High-definition voice endpoints</p>
                          <p>• Secure connectivity, remote provisioning</p>
                          <p>• Seamless integration into existing networks</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="feature-item border-l-4 border-[#F24E1E] pl-2 sm:pl-4 hover-element">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0 shadow-md">
                        <TreeStructure className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xs sm:text-base">
                          Structured Cabling (CAT6/Fiber)
                        </h4>
                        <div className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                          <p>• Professional design and installation for voice/data transmission</p>
                          <p>• Ensures optimal performance and uptime</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="feature-item border-l-4 border-[#F24E1E] pl-2 sm:pl-4 hover-element">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0 shadow-md">
                        <Cloud className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xs sm:text-base">
                          Telecom Rack Setup
                        </h4>
                        <div className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                          <p>• Centralized racks for EPABX, switches, routers, power backup</p>
                          <p>• Organized for easy access and long-term reliability</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="feature-item border-l-4 border-[#F24E1E] pl-2 sm:pl-4 hover-element">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0 shadow-md">
                        <Broadcast className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xs sm:text-base">
                          LAN/WAN Integration for Voice Traffic
                        </h4>
                        <div className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                          <p>• Network design/configuration for VoIP, internal comms, multi-branch connectivity</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="feature-item border-l-4 border-[#F24E1E] pl-2 sm:pl-4 hover-element">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0 shadow-md">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xs sm:text-base">
                          Support & Maintenance
                        </h4>
                        <div className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                          <p>• Ongoing technical support, troubleshooting, and upgrades</p>
                          <p>• Keeps your telecom systems running smoothly</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <blockquote className="border-l-4 border-[#F24E1E] pl-2 sm:pl-4 italic text-gray-700 mb-4 sm:mb-6 text-xs sm:text-base bg-white/50 py-2 rounded">
                  "Communication is the backbone of every modern business—make yours future-ready."
                </blockquote>

                <button
                  className="bg-[#F24E1E] hover:bg-[#d63e13] text-white text-xs sm:text-base px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover-element"
                  onClick={() => handleButtonClick("Telecom Solutions")}
                >
                  Learn More About Telecom Solutions
                </button>
              </div>
            </div>
          </div>

          {/* Power & Precision Systems */}
          <div ref={addToRefs} className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="service-content relative w-full">
              <div className="block lg:hidden absolute inset-0 z-0 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Power and Infrastructure Systems"
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
              <div className="relative z-10 p-2 sm:p-0">
                <div className="flex items-center mb-4 sm:mb-6 hover-element">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-2xl md:text-3xl font-bold text-gray-900">
                    Power & Precision Systems
                  </h3>
                </div>
                <p className="text-xs sm:text-lg text-[#F24E1E] font-medium mb-2 sm:mb-4">
                  "UPS • Cooling • Racks — Scalable Infrastructure for Uptime and Control"
                </p>
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-base">
                  At Procedo Infosystems, we deliver infrastructure that
                  powers continuity and reflects your operational values.
                  Whether you are running a high-density datacentre, a compact
                  office, or a workspace, our services are engineered for
                  resilience, efficiency, and enforceable support.
                </p>

                <div className="space-y-4 sm:space-y-6 mb-4 sm:mb-8">
                  <div className="feature-item border-l-4 border-[#F24E1E] pl-2 sm:pl-4 hover-element">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0 shadow-md">
                        <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xs sm:text-base">
                          UPS & Power
                        </h4>
                        <div className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                          <p>• Online and modular UPS systems tailored to runtime and load</p>
                          <p>• Battery banks with optimized sizing and SLA-bound reliability</p>
                          <p>• Intelligent PDUs, surge protection, and dual-feed failover architecture</p>
                          <p>• Generator integration and AMC structures with retention logic</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="feature-item border-l-4 border-[#F24E1E] pl-2 sm:pl-4 hover-element">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0 shadow-md">
                        <Thermometer className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xs sm:text-base">
                          Cooling
                        </h4>
                        <div className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                          <p>• Rack-level and room-level cooling for high-density or compact setups</p>
                          <p>• Redundant configurations (N+1, 2N) with temperature and humidity monitoring</p>
                          <p>• HVAC integration for energy-efficient climate control</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="feature-item border-l-4 border-[#F24E1E] pl-2 sm:pl-4 hover-element">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0 shadow-md">
                        <Server className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xs sm:text-base">
                          Server, Network & Smart Racks
                        </h4>
                        <div className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                          <p><strong>Server Racks:</strong> High-density enclosures with airflow optimization and cable management</p>
                          <p><strong>Network Racks:</strong> Structured patching, secure access, and modular layout</p>
                          <p><strong>Smart Racks:</strong> Integrated UPS, cooling, PDUs, and sensors with real-time dashboards and remote control</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <blockquote className="border-l-4 border-[#F24E1E] pl-2 sm:pl-4 italic text-gray-700 mb-4 sm:mb-6 text-xs sm:text-base bg-white/50 py-2 rounded">
                  "Power without precision is chaos. Precision without power is limitation. We deliver both."
                </blockquote>
              </div>
            </div>

            <div className="service-image hidden lg:block relative">
              <div className="rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Power and Infrastructure Systems"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#F24E1E]/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;