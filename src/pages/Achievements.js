import React, { useEffect, useState,useRef } from 'react';
import { useLocation } from 'react-router-dom';
import i1 from '../assets/images/tamilcentum.png';
import AchievementBox from '../components/AchievementBox';
import Enquiry from '../components/Enquiry';
import AOS from "aos";
import "aos/dist/aos.css";

const Achievements = () => {
    const sectionRef = useRef(null);
    const location = useLocation();
    const [isExpanded, setIsExpanded] = useState(false);
  
    useEffect(() => {
      if (location.hash === "#target-section" && sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, [location]);
   useEffect(() => {
      AOS.init({
        disable: "phone",
        duration: 700,
        easing: "ease-out-cubic",
      });
    }, []);
  const [achievements, setAchievements] = useState([]);
  const getAchievements = async () => {
    const res = await fetch('https://api.dhanamschool.com/achievement/', {
      method: 'GET',
      headers: { 'Content-type': 'application/json','Access-Control-Allow-Origin': '*', }
    })
    if (res.ok) {
      const achievementArr = await res.json()
      setAchievements(achievementArr)
      // console.log(achievementArr)
    } else {
      alert('Failed to load achievements. Kindly contact support')
    }
  }
  useEffect(()=>{
    getAchievements()
  },[])
  return (
    <section>
      <Enquiry/>
      <div id="target-section"
        ref={sectionRef} className='mx-5 md:mx-52 my-16'>
        <div className='flex justify-between'>
          <div className='font-bold text-xl'>
            Academic Excellence
          </div>
          <div>
           
          </div>
        </div>
        <div data-aos="zoom-in" className='grid grid-cols-1 md:grid-cols-3 gap-10 my-10'>
        {achievements.slice(0, Math.ceil(achievements.length / 2)).map((achievement, index) => (
  <AchievementBox topic={achievement.topic} content={achievement.description} marks={achievement.marks} image={achievement.file} />
))}

        </div>
        <div className='md:flex my-16'>
          <div className='my-auto md:w-[50%]'>
            <img src={i1}/>
          </div>
          <div className='my-auto mx-auto md:w-[50%] md:px-10'>
            <div className='font-bold text-xl'>Centum in Tamil</div>
            <div className='font-bold my-3'>G. Lakshaya Shree</div>
            <table>
              <tr className='border-[1px] border-primary '>
                <td className='px-5 py-2 border-r-[1px] border-primary'>Tamil</td>
                <td className='px-5'>100</td>
              </tr>
              <tr className='border-[1px] border-primary '>
                <td className='px-5 py-2 border-r-[1px] border-primary'>English</td>
                <td className='px-5'>96</td>
              </tr>
              <tr className='border-[1px] border-primary '>
                <td className='px-5 py-2 border-r-[1px] border-primary'>Economics</td>
                <td className='px-5'>100</td>
              </tr>
              <tr className='border-[1px] border-primary '>
                <td className='px-5 py-2 border-r-[1px] border-primary'>Commerce</td>
                <td className='px-5'>99</td>
              </tr>
              <tr className='border-[1px] border-primary '>
                <td className='px-5 py-2 border-r-[1px] border-primary'>Accountancy</td>
                <td className='px-5'>100</td>
              </tr>
              <tr className='border-[1px] border-primary '>
                <td className='px-5 py-2 border-r-[1px] border-primary'>Computer Applications</td>
                <td className='px-5'>100</td>
              </tr>
            </table>
            <div className='font-bold text-center my-3'>Total : 595/600</div>
            <p
                className={`overflow-hidden transition-all ${isExpanded ? 'line-clamp-none' : 'line-clamp-6'
                  }`}
              >

              
            <div className='my-5'> 🌟 2023-2024 கல்வியாண்டின் சிறந்த கல்வி சாதனைகள் 🌟

✨ 12ம் வகுப்பு தேர்வில் மாவட்ட முதலிடம்
எங்கள் பள்ளி மாவட்ட அளவில் முதலிடம் பெற்றுள்ளதற்காக மிகுந்த பெருமிதம் அடைகின்றோம். இது கல்வி மேம்பாட்டில் எங்கள் பள்ளியின் முன்னணிக் கதவை உறுதிப்படுத்துகிறது.

✨ அரக்கோணத்தில் முதலிடம்
எங்கள் மாணவர்கள் அரக்கோணம் பகுதியில் மீண்டும் முதலிடம் பிடித்து, இளைய தலைமுறைக்கு ஒரு முக்கியமான மைல்கல்லை ஏற்படுத்தியுள்ளனர்.

✨ சிறப்பு உயர் மதிப்பெண்கள்

முதல் மதிப்பெண்: எங்கள் முன்னணி மாணவர் 595/600 எனும் சிறப்பான மதிப்பெண்களை பெற்றுள்ளார்.
தமிழில் நூற்றுக்கு நூறு: 100 மதிப்பெண்கள் தமிழ் பாடத்தில் பெற்றது மாணவர்களின் உழைப்பிற்கும் ஆசிரியர்களின் அர்ப்பணிப்பிற்கும் சான்றாகும்.

✨ சிறப்புடன் தொடரும் பாரம்பரியம்
2023-2024 கல்வியாண்டிலும் எங்கள் பள்ளி தொடர்ந்து 100% தேர்ச்சி விகிதத்தை பெற்று, மாணவர்களும் ஆசிரியர்களும் இணைந்து செய்த உழைப்பின் வெளிப்பாடாக திகழ்கிறது.

🎉 எங்கள் சாதனையாளர்களுக்கு வாழ்த்துகள்
இந்த அசாதாரண சாதனைகள் எங்கள் மாணவர்களின் உறுதிமொழியையும், ஆசிரியர்களின் அர்ப்பணிப்பையும், பெற்றோர்களின் ஆதரவையும் வெளிப்படுத்துகின்றன.

வெற்றியின் இந்த பாரம்பரியத்தை தொடர்ந்து வருங்காலத்தில் மேலும் உயர்ந்த இலக்குகளை நோக்கி பாய்ச்சுவோம்! 🌟

2022-2023
G. Lakshaya Shree
Accountancy

Tamil: 100/100
English: 96/100
Economics: 100/100
Commerce: 99/100
Accountancy: 100/100
Computer Applications: 100/100
Total: 595/600
</div>
</p>
<button
                className="mt-4 text-sm underline"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? 'Show Less' : 'Read More'}
              </button>
          </div>
        </div>
        <div data-aos="zoom-out" className='grid md:grid-cols-3 gap-10 my-16'>
        {achievements.slice(Math.ceil(achievements.length / 2)).map((achievement, index) => (
  <AchievementBox topic={achievement.topic} marks={achievement.marks} content={achievement.description} image={achievement.file} />
))}

        </div>
      </div>
    </section>
  );
};

export default Achievements;
