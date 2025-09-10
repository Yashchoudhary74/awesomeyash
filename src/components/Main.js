import imageData from '../api/imageData';
import { useEffect, useState } from 'react';   
import '../styles/style.css'

export const Main = () => {

    useEffect(() => {
        setTimeout(() => {
            setLoading({ display: 'none' })
        }, 3000);
    }, [])

    const [loading, setLoading] = useState({ display: 'flex' });

    document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    });

    return (
        <>
            <div className='main'>
                <h1>Photo Gallery</h1>
                <span> Yash's photos</span>

                <div className='image-gallery'>
                    {imageData.map((data, index) => {
                        return (
                            <div className='image-card' key={index}>
                                <ImageWithBlur src={data.src} alt={`Photo ${index + 1}`} />
                            </div>
                        )
                    })}
                </div>

                <span className='footer-text'>Designed by Yash Choudhary</span>
            </div>

            <div style={loading} className='loading-screen'>
                <div className='loader'>
                    <span className='loading-text'>YC</span>
                </div>
            </div>
        </>
    );
};


// 👇 Blur loader 
const ImageWithBlur = ({ src, alt }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <img
            className="gallery-image"  
            src={src}
            alt={alt}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            style={{
                filter: loaded ? "none" : "blur(20px)",
                transition: "filter 0.4s ease-out",
                width: "100%",
                height: "auto"
            }}
        />
    );
};
