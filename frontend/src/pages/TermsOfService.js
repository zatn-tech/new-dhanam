import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const TermsOfService = () => {
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
                  Terms of <span className="gradient-text bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Service</span>
                </h1>
              </div>
              
              {/* Subtitle */}
              <div data-aos="fade-up" data-aos-delay={400} className="flex items-center justify-center space-x-4">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <p className="text-xl md:text-2xl font-display text-secondary font-medium">
                  Terms and Conditions
                </p>
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
              </div>
              
              {/* Description */}
              <div data-aos="fade-up" data-aos-delay={600}>
                <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Please read these terms and conditions carefully before using our website or enrolling in our school.
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

      {/* Terms of Service Content */}
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
                  Welcome to Dhanam Pachaiyappan Matriculation Higher Secondary School. These Terms of Service ("Terms") govern your use of our website, services, and enrollment in our educational programs. By accessing our website or enrolling in our school, you agree to be bound by these Terms.
                </p>
                <p className="text-primary/80 leading-relaxed">
                  If you do not agree to these Terms, please do not use our website or services.
                </p>
              </div>

              {/* School Services */}
              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold text-primary mb-4">School Services</h2>
                <p className="text-primary/80 leading-relaxed mb-4">
                  Dhanam Pachaiyappan Matriculation Higher Secondary School provides educational services including but not limited to:
                </p>
                <ul className="list-disc list-inside text-primary/80 space-y-2">
                  <li>Primary and secondary education programs</li>
                  <li>Extra-curricular activities and sports</li>
                  <li>Transportation services</li>
                  <li>Meal services (where applicable)</li>
                  <li>Library and computer facilities</li>
                  <li>Counseling and support services</li>
                  <li>Parent-teacher communication systems</li>
                </ul>
              </div>

              {/* Enrollment Terms */}
              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold text-primary mb-4">Enrollment Terms</h2>
                
                <h3 className="text-xl font-display font-semibold text-primary mb-3">Admission Requirements</h3>
                <ul className="list-disc list-inside text-primary/80 space-y-2 mb-4">
                  <li>Submission of complete application forms and required documents</li>
                  <li>Payment of applicable fees and charges</li>
                  <li>Compliance with age and academic requirements</li>
                  <li>Medical clearance and immunization records</li>
                  <li>Acceptance of school policies and code of conduct</li>
                </ul>

                <h3 className="text-xl font-display font-semibold text-primary mb-3">Fees and Payments</h3>
                <ul className="list-disc list-inside text-primary/80 space-y-2">
                  <li>All fees must be paid according to the schedule provided</li>
                  <li>Late payment charges may apply for overdue amounts</li>
                  <li>Refund policies are subject to school regulations</li>
                  <li>Fee increases may occur with proper notice</li>
                </ul>
              </div>

              {/* Student Conduct */}
              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold text-primary mb-4">Student Conduct and Discipline</h2>
                <p className="text-primary/80 leading-relaxed mb-4">
                  Students are expected to maintain high standards of behavior and academic performance. The school reserves the right to:
                </p>
                <ul className="list-disc list-inside text-primary/80 space-y-2">
                  <li>Enforce disciplinary measures for misconduct</li>
                  <li>Require improvement in academic performance</li>
                  <li>Suspend or expel students for serious violations</li>
                  <li>Implement dress codes and uniform requirements</li>
                  <li>Regulate attendance and punctuality</li>
                </ul>
              </div>

              {/* Parent Responsibilities */}
              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold text-primary mb-4">Parent/Guardian Responsibilities</h2>
                <ul className="list-disc list-inside text-primary/80 space-y-2">
                  <li>Ensure regular attendance and punctuality of students</li>
                  <li>Support the school's educational objectives</li>
                  <li>Participate in parent-teacher meetings and school events</li>
                  <li>Provide accurate and updated contact information</li>
                  <li>Cooperate with school staff and administration</li>
                  <li>Pay fees and charges on time</li>
                  <li>Inform the school of any medical conditions or special needs</li>
                </ul>
              </div>

              {/* Website Usage */}
              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold text-primary mb-4">Website Usage</h2>
                
                <h3 className="text-xl font-display font-semibold text-primary mb-3">Acceptable Use</h3>
                <p className="text-primary/80 leading-relaxed mb-4">
                  When using our website, you agree to:
                </p>
                <ul className="list-disc list-inside text-primary/80 space-y-2 mb-4">
                  <li>Provide accurate and truthful information</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not engage in any illegal or harmful activities</li>
                  <li>Not attempt to gain unauthorized access to systems</li>
                  <li>Not upload malicious software or content</li>
                </ul>

                <h3 className="text-xl font-display font-semibold text-primary mb-3">Content Ownership</h3>
                <p className="text-primary/80 leading-relaxed">
                  All content on our website, including text, images, logos, and software, is owned by Dhanam Pachaiyappan Matriculation Higher Secondary School and is protected by copyright and other intellectual property laws.
                </p>
              </div>

              {/* Privacy and Data Protection */}
              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold text-primary mb-4">Privacy and Data Protection</h2>
                <p className="text-primary/80 leading-relaxed mb-4">
                  We are committed to protecting your privacy and personal information. Our collection, use, and protection of personal data is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                </p>
                <p className="text-primary/80 leading-relaxed">
                  By using our services, you consent to the collection and use of information as described in our Privacy Policy.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold text-primary mb-4">Limitation of Liability</h2>
                <p className="text-primary/80 leading-relaxed mb-4">
                  To the maximum extent permitted by law, Dhanam Pachaiyappan Matriculation Higher Secondary School shall not be liable for:
                </p>
                <ul className="list-disc list-inside text-primary/80 space-y-2">
                  <li>Any indirect, incidental, or consequential damages</li>
                  <li>Loss of data, profits, or business opportunities</li>
                  <li>Damages resulting from third-party actions</li>
                  <li>Force majeure events beyond our control</li>
                  <li>Student performance or academic outcomes</li>
                </ul>
              </div>

              {/* Termination */}
              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold text-primary mb-4">Termination</h2>
                <p className="text-primary/80 leading-relaxed mb-4">
                  We reserve the right to terminate or suspend services for:
                </p>
                <ul className="list-disc list-inside text-primary/80 space-y-2">
                  <li>Violation of these Terms of Service</li>
                  <li>Non-payment of fees or charges</li>
                  <li>Misconduct or inappropriate behavior</li>
                  <li>Failure to meet academic standards</li>
                  <li>Any other reason deemed necessary by the school administration</li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold text-primary mb-4">Contact Information</h2>
                <p className="text-primary/80 leading-relaxed mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-primary/5 p-6 rounded-lg">
                  <p className="text-primary/80 mb-2"><strong>Dhanam Pachaiyappan Matriculation Higher Secondary School</strong></p>
                  <p className="text-primary/80 mb-2">Ashok Nagar, Arakkonam - 631 001</p>
                  <p className="text-primary/80 mb-2">Phone: +91 123 456 7890</p>
                  <p className="text-primary/80">Email: info@dhanamschool.com</p>
                </div>
              </div>

              {/* Governing Law */}
              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold text-primary mb-4">Governing Law</h2>
                <p className="text-primary/80 leading-relaxed">
                  These Terms of Service are governed by the laws of India and the state of Tamil Nadu. Any disputes arising from these Terms shall be subject to the jurisdiction of the courts in Tamil Nadu.
                </p>
              </div>

              {/* Policy Updates */}
              <div className="border-t border-primary/10 pt-8">
                <h2 className="text-2xl font-display font-bold text-primary mb-4">Terms Updates</h2>
                <p className="text-primary/80 leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after changes constitutes acceptance of the new Terms.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsOfService
