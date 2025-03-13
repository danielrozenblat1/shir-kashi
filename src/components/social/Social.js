import React from 'react';
import { Instagram, Phone } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import styles from './Social.module.css';

const SocialLinks = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+972545588683";
    const message = "היי שיר הגעתי מהדף, אני רוצה לשמוע ממך עוד על..";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/shir.kashi/", "_blank");
  };

  const handleTikTokClick = () => {
    window.open("https://www.tiktok.com/@shir.kashi", "_blank");
  };

  const socialIcons = [
    { 
      icon: <Instagram className={styles.iconSvg} size={24} strokeWidth={1} />, 
      name: 'instagram',
      onClick: handleInstagramClick
    },
    { 
      icon: <FaTiktok className={styles.iconSvg} size={22} strokeWidth={1} />, 
      name: 'tiktok',
      onClick: handleTikTokClick
    },
    { 
      icon: <Phone className={styles.iconSvg} size={24} strokeWidth={1} />, 
      name: 'whatsapp',
      onClick: handleWhatsAppClick
    }
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>אני נמצאת גם כאן: </h2>
      <div className={styles.socialContainer}>
        {socialIcons.map((social, index) => (
          <div 
            key={index} 
            className={styles.socialIcon}
            onClick={social.onClick}
          >
            {social.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;