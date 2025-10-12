import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import AchievementBox from '../components/AchievementBox'
import Enquiry from '../components/Enquiry'
import AOS from "aos";
import "aos/dist/aos.css";

const Achievements = () => {
  const [achievements, setAchievements] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  const parseToList = (data) => {
    if (Array.isArray(data)) return data;
    if (Array.isArray(data?.achievements)) return data.achievements;
    if (Array.isArray(data?.results)) return data.results;
    if (Array.isArray(data?.data)) return data.data;
    if (Array.isArray(data?.items)) return data.items;
    // Try to pull array-ish from first object value
    const first = data && typeof data === 'object' ? Object.values(data)[0] : null;
    if (Array.isArray(first)) return first;
    return [];
  }

  const getAchievements = async () => {
    setIsLoading(true);
    try {
      // Primary endpoint (singular)
      let res = await fetch("https://api.dhanamschool.com/achievement/", {
        method: 'GET',
        headers: { 'Content-type': 'application/json', "Access-Control-Allow-Origin": "*" },
      });
      let list = [];
      if (res.ok) {
        const data = await res.json();
        list = parseToList(data);
      }

      // Fallback to plural endpoint if empty
      if ((!list || list.length === 0)) {
        res = await fetch("https://api.dhanamschool.com/achievements/", {
          method: 'GET',
          headers: { 'Content-type': 'application/json', "Access-Control-Allow-Origin": "*" },
        });
        if (res.ok) {
          const data = await res.json();
          list = parseToList(data);
        }
      }

      // Fallback to /home for embedded achievements if still empty
      if ((!list || list.length === 0)) {
        res = await fetch("https://api.dhanamschool.com/home/", {
          method: 'GET',
          headers: { 'Content-type': 'application/json', "Access-Control-Allow-Origin": "*" },
        });
        if (res.ok) {
          const data = await res.json();
          list = parseToList(data);
        }
      }

      setAchievements(Array.isArray(list) ? list : []);
    } catch (err) {
      console.log({ error: err });
      setAchievements([]);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getAchievements()
  }, [])

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
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight">
                  Student <span className="gradient-text bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Achievements</span>
                </h1>
              </div>
              
              {/* Subtitle with decorative elements */}
              <div data-aos="fade-up" data-aos-delay={400} className="flex items-center justify-center space-x-4">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <p className="text-xl md:text-2xl font-display text-secondary font-medium">
                  Celebrating Excellence & Success
                </p>
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
              </div>
              
              {/* Description */}
              <div data-aos="fade-up" data-aos-delay={600}>
                <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Discover the remarkable achievements of our students who have excelled academically and made us proud with their outstanding performance.
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

      <Enquiry />

      {/* Achievements Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-padding">
          <div className="text-center mb-16">
            <div data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Outstanding <span className="gradient-text bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Results</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-primary/80 max-w-2xl mx-auto">
                Explore the remarkable achievements of our students across different academic years
              </p>
            </div>
          </div>

          {isLoading ? (
            <div className="text-center text-primary/60">Loading achievements…</div>
          ) : achievements.length === 0 ? (
            <div className="text-center text-primary/60">Achievements will be updated soon.</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="group">
                  <AchievementBox achievement={achievement} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary to-accent">
        <div className="container-padding text-center">
          <div data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Join Our <span className="gradient-text bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">Success Story</span>
            </h2>
            <div className="w-24 h-1 bg-white rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Be part of our tradition of excellence and achieve your academic goals with us
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-secondary bg-white text-secondary hover:bg-gray-100">
                Apply Now
              </a>
              <a href="/about" className="btn-outline border-white text-white hover:bg-white hover:text-secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Achievements
