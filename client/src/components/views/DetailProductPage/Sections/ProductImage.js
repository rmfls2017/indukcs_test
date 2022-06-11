import React, {useState, useEffect} from 'react'
import ImageGallery from 'react-image-gallery';
import dotenv from 'dotenv';

dotenv.config();

export default function ProductImage(props) {
    const [Images, setImages] = useState([])
    useEffect(() => {
        
        if(props.detail.images && props.detail.images.length > 0) {
            let images = []

            props.detail.images.map(item => {
                images.push({
                    original: `http://localhost:8080/${item}`,
                    thumbnail: `http://localhost:8080/${item}`
                })
            })
            setImages(images)
        }
    }, [props.detail])
    
  


  return (
    <div>
        <ImageGallery items={Images}/>
    </div>
  )
}
