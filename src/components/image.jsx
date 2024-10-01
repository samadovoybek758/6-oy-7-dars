import React, { useEffect, useState } from 'react';
import placeholder_img from '../assets/user_img.png';

const Image = () => {
    
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API dan rasm olish
    const fetchImage = async () => {
      try {
        const response = await fetch('https://strapi-store-server.onrender.com/api/products');
        const data = await response.json();

        // API dan olingan ma'lumotlarni tekshirish
        console.log(data);

        // Birinchi mahsulotning rasm URL sini olish
        if (data.data && data.data.length > 0) {
          const imageUrl = data.data[0].attributes.image; // Bu joyda atribut nomini tekshiring
          setImage(imageUrl);
        }
      } catch (error) {
        console.error('Rasmni yuklashda xato:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  return (
    <div className="card">
      {loading ? (
        <img src={placeholder_img} alt="Muqobil rasm" /> // Muqobil rasm
      ) : (
        image ? <img src={image} alt="Asosiy rasm" /> : <p>No image available</p> // Agar rasm bo'lmasa, xabar ko'rsatish
      )}
    </div>
  );
};

export default Image;
