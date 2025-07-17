import React, { useEffect, useState } from "react"
import {
  Shield,
  Server,
  Video,
  Network,
  Cloud,
  Database,
  Lock,
  Camera,
  Fingerprint,
  Mic,
  Monitor,
  Headphones,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Globe,
  Star,
  Users,
  Award,
  Calendar,
  MessageCircle,
  ArrowRight,
} from "lucide-react"
import TrustBuildersSection from "./components/TrustBuildersSection"

// Utility function for class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ")
}

// UI Components
// Update Button variants to use logo colors
const Button = ({
  children,
  className = "",
  variant = "default",
  size = "default",
  onClick,
  disabled = false,
  type = "button",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F24E1E] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"

  const variants = {
    default: "bg-[#F24E1E] text-white hover:bg-[#d63e13]",
    outline: "border border-[#F24E1E] text-[#F24E1E] hover:bg-[#FFF6EC] bg-transparent",
    secondary: "bg-[#FFF6EC] text-[#1A355D] hover:bg-[#FFD9C0]",
    ghost: "hover:bg-[#FFD9C0] hover:text-[#F24E1E]",
    link: "underline-offset-4 hover:underline text-[#F24E1E]",
  }

  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
  }

  const classes = cn(baseClasses, variants[variant], sizes[size], className)

  return (
    <button className={classes} onClick={onClick} disabled={disabled} type={type} {...props}>
      {children}
    </button>
  )
}

const Card = ({ children, className = "", ...props }) => {
  return (
    <div className={cn("rounded-lg border bg-white text-gray-900 shadow-sm", className)} {...props}>
      {children}
    </div>
  )
}

const CardHeader = ({ children, className = "", ...props }) => {
  return (
    <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props}>
      {children}
    </div>
  )
}

const CardTitle = ({ children, className = "", ...props }) => {
  return (
    <h3 className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props}>
      {children}
    </h3>
  )
}

const CardDescription = ({ children, className = "", ...props }) => {
  return (
    <p className={cn("text-sm text-gray-600", className)} {...props}>
      {children}
    </p>
  )
}

const CardContent = ({ children, className = "", ...props }) => {
  return (
    <div className={cn("p-6 pt-0", className)} {...props}>
      {children}
    </div>
  )
}

const Input = ({ className = "", type = "text", placeholder = "", value, onChange, disabled = false, ...props }) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...props}
    />
  )
}

const Badge = ({ children, className = "", variant = "default", ...props }) => {
  const baseClasses =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"

  const variants = {
    default: "border-transparent bg-emerald-600 text-white hover:bg-emerald-700",
    secondary: "border-transparent bg-gray-100 text-gray-900 hover:bg-gray-200",
    destructive: "border-transparent bg-red-600 text-white hover:bg-red-700",
    outline: "text-gray-900 border-gray-300",
  }

  const classes = cn(baseClasses, variants[variant], className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}


// Main App Component
function App() {
  const handleButtonClick = (action) => {
    console.log(`${action} clicked`)
    // Add your navigation or action logic here
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted")
    // Add your form submission logic here
  }

  const [scrolled, setScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
      const hero = document.querySelector(".hero-section");
      if (hero) {
        const heroHeight = hero.offsetHeight;
        setShowScrollTop(window.scrollY > heroHeight * 0.5);
      } else {
        setShowScrollTop(window.scrollY > 300); // fallback
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`
          fixed top-0 w-full z-50 border-b border-[rgba(242,78,30,0.08)]
          bg-[rgba(255,246,236,0.85)] backdrop-blur-md transition-all duration-300
          ${scrolled ? "py-2 shadow-md" : "py-4"}
        `}
      >
        <div className="container mx-auto px-4 flex items-center justify-between max-w-7xl transition-all duration-300">
          <div className="flex items-center space-x-3">
            <img
              src="/Procedo-logo.png"
              alt="Procedo Logo"
              className={scrolled ? "w-35 h-10 transition-all duration-300" : "w-40 h-12 transition-all duration-300"}
            />
            {/* <div>
              <span className="text-2xl font-bold text-[#F24E1E] leading-tight">procedo</span>
              <div className="text-xs font-semibold text-[#1A355D] tracking-wide" style={{ letterSpacing: "0.15em" }}>
                IT SOLUTIONS
              </div>
            </div> */}
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Solutions
            </a>
            <a href="#about" className="text-gray-600 hover:text-emerald-600 transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Contact
            </a>
            {/* Update all Button usages to use logo theme colors */}

            {/* 1. Navigation Button */}
            <Button
              className="bg-[#F24E1E] hover:bg-[#d63e13] text-white"
              onClick={() => handleButtonClick("Book Consultation")}
            >
              <Phone className="w-4 h-4 mr-2" />
              Book Consultation
            </Button>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
            alt="Modern tech control room"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl my-5 mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              We Design Systems That Work <span className="text-[#ec5d32]">Intelligently</span>—So You Can Focus on
              What Matters
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              From secure IT infrastructure to advanced building automation and AV ecosystems—we help businesses operate
              smarter, safer, and more connected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* 2. Hero Section Buttons */}
              <Button
                size="lg"
                className="bg-[#F24E1E] hover:bg-[#d63e13] text-lg px-8 py-3 text-white"
                onClick={() => handleButtonClick("Explore Solutions")}
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Explore Our Solutions
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-[#F24E1E] text-[#F24E1E] hover:bg-[#FFF6EC] bg-transparent"
                onClick={() => handleButtonClick("Book Consultation")}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Free Consultation
              </Button>

            </div>
            <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                15+ Years Experience
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                24/7 Support
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                Enterprise Grade
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-[#F24E1E] hover:bg-[#d63e13] text-white rounded-full shadow-lg p-3 transition-opacity duration-500 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowRight className="transform -rotate-90 w-6 h-6" />
        </button>
      )}

      {/* About Us Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Built on Precision. Driven by Purpose.
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We are a team of system integrators, IT engineers, and AV experts who believe technology should
                enable—not complicate—business. With decades of combined experience, we craft digital and physical
                environments that enhance performance, safety, and communication.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#FFF6EC] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-[#F24E1E]" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">15+</CardTitle>
                  <CardDescription className="text-gray-600">Years of Experience</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#FFF6EC] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-[#F24E1E]" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">500+</CardTitle>
                  <CardDescription className="text-gray-600">Projects Delivered</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#FFF6EC] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-[#F24E1E]" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">98%</CardTitle>
                  <CardDescription className="text-gray-600">Client Retention Rate</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Three Pillars of Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform how your business operates
            </p>
          </div>

          <div className="space-y-16">
            {/* IT Infrastructure */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-4">
                    <Server className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">IT Infrastructure</h3>
                </div>
                <p className="text-lg text-[#F24E1E] font-medium mb-4">
                  "Crafted systems that think, protect, and connect—designed with intention."
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Modern businesses need more than just devices—they need a scalable, secure digital backbone. We
                  deliver enterprise-grade IT solutions tailored to your goals.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Network className="w-5 h-5 text-lg text-[#F24E1E] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Networking</h4>
                      <p className="text-gray-600 text-sm">LAN, WAN, Wi-Fi infrastructure</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Cloud className="w-5 h-5 text-lg text-[#F24E1E] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Cloud & Server Setup</h4>
                      <p className="text-gray-600 text-sm">AWS, Azure, GCP, on-premises solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Database className="w-5 h-5 text-lg text-[#F24E1E] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Data Backup & Recovery</h4>
                      <p className="text-gray-600 text-sm">Disaster recovery and business continuity</p>
                    </div>
                  </div>
                </div>

                <blockquote className="border-l-4 border-[#F24E1E] pl-4 italic text-gray-700 mb-6">
                  "We don't just install servers. We build systems that carry your ambitions."
                </blockquote>

                {/* 3. Solutions/Features/Contact/CTA Buttons */}
                <Button
                  className="bg-[#F24E1E] hover:bg-[#d63e13] text-white"
                  onClick={() => handleButtonClick("IT Solutions")}
                >
                  Learn More About IT Solutions
                </Button>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="IT Infrastructure visualization"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>

            {/* Facilities Security */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Facilities Security</h3>
                </div>
                <p className="text-lg text-[#F24E1E] font-medium mb-4">
                  "Where safety meets sophistication—turning buildings into sentient environments."
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We turn physical spaces into smart environments with integrated security systems that are proactive,
                  not reactive.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Camera className="w-5 h-5 text-lg text-[#F24E1E] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">CCTV & IP Surveillance</h4>
                      <p className="text-gray-600 text-sm">Advanced monitoring and analytics</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Fingerprint className="w-5 h-5 text-lg text-[#F24E1E] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Biometric Access Control</h4>
                      <p className="text-gray-600 text-sm">Smart access and mobile credentials</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Lock className="w-5 h-5 text-lg text-[#F24E1E] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Building Management</h4>
                      <p className="text-gray-600 text-sm">HVAC, lighting, fire safety integration</p>
                    </div>
                  </div>
                </div>

                <blockquote className="border-l-4 border-[#F24E1E] pl-4 italic text-gray-700 mb-6">
                  "Security isn't about fear—it's about freedom to focus."
                </blockquote>

                <Button
                  className="bg-[F24E1E] hover:bg-[#d63e13]"
                  onClick={() => handleButtonClick("Security Solutions")}
                >
                  Explore Security Solutions
                </Button>
              </div>

              <div className="relative lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Security system visualization"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>

            {/* Audio & Video Conferencing */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-4">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Audio & Video Conferencing</h3>
                </div>
                <p className="text-lg text-[#F24E1E] font-medium mb-4">
                  "Environments that foster clarity, presence, and collaboration—whether across the hallway or
                  continents."
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Whether it's boardrooms or remote workspaces, we engineer communication environments that feel
                  effortless and immersive.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Monitor className="w-5 h-5 text-lg text-[#F24E1E] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Tailored AV Room Design</h4>
                      <p className="text-gray-600 text-sm">Custom boardroom and conference solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Headphones className="w-5 h-5 text-lg text-[#F24E1E] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Platform Integration</h4>
                      <p className="text-gray-600 text-sm">Zoom, Teams, Webex unification</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mic className="w-5 h-5 text-lg text-[#F24E1E] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Acoustic Treatment</h4>
                      <p className="text-gray-600 text-sm">Professional soundproofing and audio optimization</p>
                    </div>
                  </div>
                </div>

                <blockquote className="border-l-4 border-[#F24E1E] pl-4 italic text-gray-700 mb-6">
                  "A great conversation shouldn't depend on your geography."
                </blockquote>

                <Button
                  className="bg-[F24E1E] hover:bg-[#d63e13]"
                  onClick={() => handleButtonClick("AV Solutions")}
                >
                  Discover AV Solutions
                </Button>
              </div>

              <div className="relative">
                <img
                  src="video.png"
                  alt="AV conferencing setup"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Builders */}
      <TrustBuildersSection/>

      {/* Call to Action */}
<section className="py-16 md:py-24 bg-gradient-to-br bg-[rgba(255,225,219,0.82)] text-[#1A355D]">
  <div className="container mx-auto px-4 text-center max-w-7xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Future-Proof Your Business?</h2>
    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
      Whether you're starting from scratch or upgrading legacy systems, our experts are ready to guide you through
      every step of your digital transformation journey.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
      <Button
        size="lg"
        variant="default"
        className="text-lg px-8 py-3 bg-[#F24E1E] hover:bg-[#d63e13] text-white shadow-md"
        onClick={() => handleButtonClick("Schedule Audit")}
      >
        <Calendar className="w-5 h-5 mr-2" />
        Schedule a Free Audit
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="text-lg px-8 py-3 border-[#F24E1E] text-[#F24E1E] hover:bg-[#FFF6EC] hover:text-[#F24E1E] bg-transparent shadow-md"
        onClick={() => handleButtonClick("Contact Us")}
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        Contact Us
      </Button>
    </div>

    <div className="flex items-center justify-center space-x-6 text-sm opacity-80">
      <span className="flex items-center gap-1"><span role="img" aria-label="chat">💬</span> <span className="text-[#F24E1E] font-semibold">Live Chat Available</span></span>
      <span className="flex items-center gap-1"><span role="img" aria-label="phone">📞</span> <span className="text-[#F24E1E] font-semibold">Instant Callback</span></span>
      <span className="flex items-center gap-1"><span role="img" aria-label="rocket">🚀</span> <span className="text-[#F24E1E] font-semibold">Quick Response</span></span>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-xl text-gray-600">Ready to transform your business? Let's start the conversation.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#FFF6EC] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#F24E1E]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-600">info@techsystems.com</p>
                    <p className="text-gray-600">support@techsystems.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#FFF6EC] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#F24E1E]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-gray-600">+91-XXXXXXXXXX</p>
                    <p className="text-gray-600 text-sm">Mon-Fri 9AM-6PM IST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#FFF6EC] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#F24E1E]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
                    <p className="text-gray-600">123 Tech Street</p>
                    <p className="text-gray-600">Bangalore, Karnataka 560001</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#FFF6EC] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Globe className="w-6 h-6 text-[#F24E1E]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Online</h3>
                    <p className="text-gray-600">www.techsystems.com</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleFormSubmit}>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <Input placeholder="First Name" />
                      <Input placeholder="Last Name" />
                    </div>
                    <div className="mb-4">
                      <Input placeholder="Email Address" type="email" />
                    </div>
                    <div className="mb-4">
                      <Input placeholder="Phone Number" type="tel" />
                    </div>
                    <div className="mb-4">
                      <Input placeholder="Company Name" />
                    </div>
                    <div className="mb-4">
                      <textarea
                        className="w-full p-3 border border-gray-300 rounded-md resize-none h-32 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <Button type="submit" className="w-full bg-[#F24E1E] hover:bg-[#d63e13] text-white">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FFF6EC] text-[#F24E1E] py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex justify-center items-center space-x-2 mb-4">
                <img
                  src="/Procedo-logo.png"
                  alt="Procedo Logo"
                  className="w-40 h-14 object-contain rounded-lg"
                />
              </div>
              <p className="text-[#1A355D] text-sm">
                Designing intelligent systems that empower businesses to focus on what matters most.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    IT Infrastructure
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Facilities Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    AV Conferencing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support Services
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  YouTube
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#F24E1E] pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#1A355D] text-sm">© {new Date().getFullYear()} TechSystems. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-[#1A355D] mt-4 md:mt-0">
              <a href="#" className="hover:text-[#F24E1E] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#F24E1E] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#F24E1E] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
