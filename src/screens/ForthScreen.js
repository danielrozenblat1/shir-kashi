import React from 'react';
import { 
  Search, 
  Gift, 
  Clock, 
  Heart, 
  TrendingUp,
  Compass
} from 'lucide-react';
import styles from './ForthScreen.module.css';
import Button from '../components/button/Button';

const BackgroundGlass = () => {
  const items = [
    {
      text: "לדעת איפה כדאי לכם להתמקד יותר",
      icon: <Compass className={styles.icon} />
    },
    {
      text: "לדעת מה החוזקות והחולשות שלכם",
      icon: <Gift className={styles.icon} />
    },
    {
      text: "להבין מה מעכב אתכם מלהתפתח אישית ולהצליח",
      icon: <TrendingUp className={styles.icon} />
    },
    {
      text: "לגלות מה הייעוד שלכם מבחינת קריירה",
      icon: <Search className={styles.icon} />
    },
    {
      text: "לקבל ייעוץ על התקופה הנוכחית בחייכם",
      icon: <Clock className={styles.icon} />
    },
    {
      text: "להבין מתי הזמן הכי טוב עבורכם לפעול ולעשות דברים שחשבתם עליהם כבר תקופה",
      icon: <Heart className={styles.icon} />
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage} />
      
      <div className={styles.content}>
        <h1 className={styles.title}>:אז אם אתם רוצים</h1>
        
        <div className={styles.cardsGrid}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardContent}>
                <span className={styles.cardText}>{item.text}</span>
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button text="לחצו כאן ובואו נדבר!"/>
    </div>
  );
};

export default BackgroundGlass;