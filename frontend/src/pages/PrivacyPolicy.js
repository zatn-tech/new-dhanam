import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <div className="relative mt-20 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90"></div>
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 animate-pulse" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='50' cy='50' r='3'/%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='80' cy='80' r='2'/%3E%3Ccircle cx='20' cy='80' r='2'/%3E%3Ccircle cx='80' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container-padding relative z-10">
          <div className="py-20 text-center">
            <div className="space-y-6">
              {/* Main Title with Animation */}
              <div data-aos="fade-down" data-aos-delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                  Privacy <span className="gradient-text bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Policy</span>
                </h1>
              </div>
              
              {/* Subtitle */}
              <div data-aos="fade-up" data-aos-delay={400} className="flex items-center justify-center space-x-4">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <p className="text-xl md:text-2xl font-display text-secondary font-medium">
                  Your Privacy Matters to Us
                </p>
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
              </div>
              
              {/* Description */}
              <div data-aos="fade-up" data-aos-delay={600}>
                <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Learn how we collect, use, and protect your personal information at Dhanam Pachaiyappan Matriculation Higher Secondary School.
                </p>
              </div>

              {/* Decorative line */}
              <div data-aos="fade-up" data-aos-delay={800} className="flex justify-center">
                <div className="w-32 h-1 bg-gradient-to-r from-secondary via-accent to-secondary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave effect */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                  fill="white" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                  fill="white" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                  fill="white"></path>
          </svg>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <div data-aos="fade-up" className="card p-8 lg:p-12 bg-white shadow-large">
              
              {/* Last Updated */}
              <div className="mb-8 p-4 bg-primary/5 rounded-lg border-l-4 border-secondary">
                <p className="text-primary/80 text-sm font-medium">
                  <strong>Last Updated:</strong> December 2024
                </p>
              </div>

              {/* Introduction */}
              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold text-primary mb-4">Introduction</h2>
                <p className="text-primary/80 leading-relaxed mb-4">
                  Dhanam Pachaiyappan Matriculation Higher Secondary School ("we," "our," or "us") is committed to protecting the privacy and security of our students, parents, staff, and website visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with our school.
                </p>
                <p className="text-primary/80 leading-relaxed">
                  By using our website or services, you consent to the data practices described in this policy.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold text-primary mb-4">Information We Collect</h2>
                
                <h3 className="text-xl font-display font-semibold text-primary mb-3">Personal Information</h3>
                <ul className="list-disc list-inside text-primary/80 space-y-2 mb-4">
                  <li>Student names, dates of birth, and contact information</li>
                  <li>Parent/guardian names, addresses, phone numbers, and email addresses</li>
                  <li>Academic records, grades, and assessment results</li>
                  <li>Medical information and emergency contact details</li>
                  <li>Attendance records and disciplinary information</li>
                  <li>Photographs and videos for school activities and yearbooks</li>
                </ul>

                <h3 className="text-xl font-display font-semibold text-primary mb-3">Technical Information</h3>
                <ul className="list-disc list-inside text-primary/80 space-y-2">
                  <li>IP addresses and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              {/* How We Use Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold text-primary mb-4">How We Use Your Information</h2>
                <ul className="list-disc list-inside text-primary/80 space-y-2">
                  <li>Providing educational services and maintaining academic records</li>
                  <li>Communicating with parents and students about school activities</li>
                  <li>Processing admissions and enrollment applications</li>
                  <li>Managing school operations and administrative tasks</li>
                  <li>Ensuring student safety and security</li>
                  <li>Complying with legal and regulatory requirements</li>
                  <li>Improving our website and services</li>
                  <li>Conducting research and analytics (anonymized data only)</li>
                </ul>
              </div>

              {/* Information Sharing */}
              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold text-primary mb-4">Information Sharing and Disclosure</h2>
                <p className="text-primary/80 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-primary/80 space-y-2">
                  <li>With authorized school staff and administrators</li>
                  <li>With parents/guardians regarding their children's education</li>
                  <li>When required by law or legal process</li>
                  <li>To protect the safety and security of our students and staff</li>
                  <li>With trusted service providers who assist in school operations (under strict confidentiality agreements)</li>
                  <li>In case of emergency situations involving student welfare</li>
                </ul>
              </div>

              {/* Data Security */}
              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold text-primary mb-4">Data Security</h2>
                <p className="text-primary/80 leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside text-primary/80 space-y-2">
                  <li>Secure data storage and transmission</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and user authentication</li>
                  <li>Staff training on data protection practices</li>
                  <li>Incident response procedures</li>
                </ul>
              </div>

              {/* Your Rights */}
              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold text-primary mb-4">Your Rights</h2>
                <p className="text-primary/80 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-primary/80 space-y-2">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Request deletion of personal information (subject to legal and educational requirements)</li>
                  <li>Withdraw consent for certain data processing activities</li>
                  <li>File a complaint with relevant authorities</li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold text-primary mb-4">Contact Us</h2>
                <p className="text-primary/80 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-primary/5 p-6 rounded-lg">
                  <p className="text-primary/80 mb-2"><strong>Dhanam Pachaiyappan Matriculation Higher Secondary School</strong></p>
                  <p className="text-primary/80 mb-2">Ashok Nagar, Arakkonam - 631 001</p>
                  <p className="text-primary/80 mb-2">Phone: +91 123 456 7890</p>
                  <p className="text-primary/80">Email: privacy@dhanamschool.com</p>
                </div>
              </div>

              {/* Policy Updates */}
              <div className="border-t border-primary/10 pt-8">
                <h2 className="text-2xl font-display font-bold text-primary mb-4">Policy Updates</h2>
                <p className="text-primary/80 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy
