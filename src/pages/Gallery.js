import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import GalleryGrid from '../components/GalleryGrid';
import Heading from '../components/Heading';
import Enquiry from '../components/Enquiry';
import v1 from '../assets/videos/video1.mp4'
import v2 from '../assets/videos/video2.mp4'
import v3 from '../assets/videos/video3.mp4'


  const Gallery = () => {
      const sectionRef = useRef(null);
      const location = useLocation();
    
      useEffect(() => {
        if (location.hash === "#target-section" && sectionRef.current) {
          sectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, [location]);
    const [galleryItems, setGalleryItems] = useState([]);
    const fetchGalleryItems = async () => {
      try {
        // Check if data is already in localStorage
        const cachedData = localStorage.getItem('galleryItems');
        
        if (cachedData) {
          // If cached data exists, use it
          console.log('Using cached gallery items');
          setGalleryItems(JSON.parse(cachedData));  // Parse the cached JSON data
        } else {
          // If no cached data, fetch from the API
          const res = await fetch('https://api.dhanamschool.com/gallery/', {
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              "Access-Control-Allow-Origin": "*",
            },
          });
    
          const data = await res.json();
          console.log('Fetched new gallery items', data);
    
          // Cache the fetched data in localStorage
          localStorage.setItem('galleryItems', JSON.stringify(data));
          
          // Set the gallery items state
          setGalleryItems(data);
        }
      } catch (error) {
        console.error('Error fetching gallery items:', error);
      }
    };
    

    const videoArr = [v1,v2,v3]

    const renderYouTubeVideo = (videoLink) => {
      console.log("hi")
      const youtubeId = videoLink.split('v=')[1]?.split('&')[0];
      console.log(youtubeId)
      if (youtubeId) {
        return (
          <iframe
            className='w-72 h-64'
            src={`https://www.youtube.com/embed/${youtubeId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        );
      }
      return <p>Invalid YouTube URL</p>;
    };

    useEffect(()=>{
      fetchGalleryItems()
    },[])

    const [layout, setLayout] = useState('grid');
    const imageGalleryItems = galleryItems.filter((item) => item.type === 'image')
    const videoGalleryItems = galleryItems.filter((item) => item.type === 'video')

    return (
      <div className="space-y-6 md:mx-16">
        <Enquiry/>
        <div id="target-section"
        ref={sectionRef} className='my-16'>
        <Heading name={"Photos"}/>
        </div>
        <div>
        <GalleryGrid items={imageGalleryItems} />
        </div>
        <div className='my-16'>
          <Heading name={"Videos"}/>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-3 mx-5 md:mx-0 '>
          {videoGalleryItems.map((v1,index)=>(
            <div className='mx-auto my-10 w-96 h-96'>
{v1.file && renderYouTubeVideo(v1.file)}
            </div>
          ))}
            {videoArr.map((video,index)=>(
              <video className='w-96 h-96 my-10' controls>
              <source src={video}/>
            </video>
            ))}
        </div>
      </div>
    );
  };

export default Gallery;