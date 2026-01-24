import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import GalleryGrid from '../components/GalleryGrid';
import Heading from '../components/Heading';
import Enquiry from '../components/Enquiry';
import v1 from '../assets/videos/video1.mp4'
import v2 from '../assets/videos/video2.mp4'
import v3 from '../assets/videos/video3.mp4'
import { MdDoubleArrow } from 'react-icons/md'

const Gallery = () => {
  const sectionRef = useRef(null);
  const location = useLocation();

  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.hash === "#target-section" && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const [galleryItems, setGalleryItems] = useState([]);
  const fetchGalleryItems = async () => {
    try {
      const cachedData = localStorage.getItem('galleryItems');
      if (cachedData) {
        const parsed = JSON.parse(cachedData);
        setGalleryItems(parsed);
      } else {
        const res = await fetch('https://dhanamschool.com/api/gallery/', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            "Access-Control-Allow-Origin": "*",
          },
        });
        const data = await res.json();
        localStorage.setItem('galleryItems', JSON.stringify(data));
        setGalleryItems(data);
      }
    } catch (error) {
      console.error('Error fetching gallery items:', error);
    }
  };

  const videoArr = [v1, v2, v3]

  const renderYouTubeVideo = (videoLink) => {
    const youtubeId = videoLink.split('v=')[1]?.split('&')[0];
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

  useEffect(() => {
    fetchGalleryItems()
  }, [])

  const imageGalleryItems = galleryItems.filter((item) => item.type === 'image')
  const videoGalleryItems = galleryItems.filter((item) => item.type === 'video')

  const openViewer = (item, idx) => {
    const safeIndex = typeof idx === 'number' && idx >= 0 ? idx : 0;
    setCurrentIndex(safeIndex);
    setIsViewerOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeViewer = () => {
    setIsViewerOpen(false);
    document.body.style.overflow = '';
  };

  const goPrev = () => {
    setCurrentIndex(prev => (prev === 0 ? imageGalleryItems.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex(prev => (prev === imageGalleryItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary via-primary to-primary/90 relative overflow-hidden mt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="container-padding relative z-10">
          <div className="py-16 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                Gallery
              </h1>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <p className="text-lg md:text-xl font-display text-secondary">
                  Capturing Moments of Excellence & Growth
                </p>
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
              </div>
              <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
                Explore our visual journey through photos and videos showcasing the vibrant life, achievements, and activities at Dhanam Pachaiyappan School.
              </p>
            </div>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-secondary via-accent to-secondary"></div>
      </div>

      <div className="space-y-6 md:mx-16">
        <Enquiry/>
        <div id="target-section" ref={sectionRef} className='my-16'>
          <Heading name={"Photos"}/>
        </div>
        <div>
          <GalleryGrid items={imageGalleryItems} onImageClick={openViewer} />
        </div>
        <div className='my-16'>
          <Heading name={"Videos"}/>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-3 mx-5 md:mx-0 '>
          {videoGalleryItems.map((v1,index)=>(
            <div key={index} className='mx-auto my-10 w-96 h-96'>
              {v1.file && renderYouTubeVideo(v1.file)}
            </div>
          ))}
          {videoArr.map((video,index)=>(
            <video key={index} className='w-96 h-96 my-10' controls>
              <source src={video}/>
            </video>
          ))}
        </div>
      </div>

      {/* Full-screen viewer */}
      {isViewerOpen && imageGalleryItems.length > 0 && (
        <div className="fixed inset-0 bg-black/90 z-[1000] flex items-center justify-center">
          <button
            className="absolute top-3 right-3 text-white text-5xl z-[1002] cursor-pointer"
            onClick={closeViewer}
            aria-label="Close"
            title="Close"
          >
            ×
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary w-12 h-12 rounded-full shadow-md flex items-center justify-center z-[1001]"
            onClick={goPrev}
            aria-label="Previous"
            title="Previous"
          >
            <MdDoubleArrow className='rotate-180' size={22} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary w-12 h-12 rounded-full shadow-md flex items-center justify-center z-[1001]"
            onClick={goNext}
            aria-label="Next"
            title="Next"
          >
            <MdDoubleArrow size={22} />
          </button>
          <img
            src={`https://dhanamschool.com/files/${imageGalleryItems[currentIndex]?.file}`}
            alt={imageGalleryItems[currentIndex]?.title}
            className="w-screen h-screen object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;