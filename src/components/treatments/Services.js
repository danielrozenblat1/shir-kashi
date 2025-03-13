// Services.js
import React from 'react';
import styles from './Services.module.css';
import Button from '../button/Button';
import basic from "../../images/ייעוץ בסיסי.jpg"
import pro from "../../images/מפה מורחבת.jpg"
import map from "../../images/מפה בסיסית.jpg"
import couple from "../../images/מפה זוגית ומורחבת.jpg"
import coupleMap from "../../images/מפה זוגית.jpg"
import consult from "../../images/שירות ייעוץ.jpg"
import FormScreen from '../form/FormScreen';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "מפה בסיסית",
      forWhom: "לאנשים שרוצים את הידע הבסיסי והכלים מתאריך הלידה שלהם",
      includes: "שביל היעוד, מתנות מולדות, שנים אישיות ועיתויים, פירוש השם, ריבוע פיתגורס ועוד",
      image: map, // Replace with actual image path
      message: "היי שיר הגעתי מהדף, אשמח לשמוע עוד על מפה בסיסית"
    },
    {
      id: 2,
      title: "מפה מורחבת",
      forWhom: "לאנשים שאוהבים להעמיק ולקבל עוד ידע אודות הדרך שלהם, האופי ודרכי הפעולה",
      includes: "מספרים קארמתיים, פירוש שם משפחה, צירופים מהשם המלא, השליחות המקודשת, התאמה זוגית ועוד",
      image:pro, // Replace with actual image path
      message: "היי שיר הגעתי מהדף, אשמח לשמוע עוד על מפה מורחבת"
    },
    {
      id: 3,
      title: "מפה זוגית",
      forWhom: "לזוגות שרוצים לפתור משברים או לבדוק התאמה אנרגטית ביניהם",
      includes: "הבנת האתגרים המשותפים, המלצות לפעילויות משותפות, סוג התקשורת, היכרות מגלגולים קודמים",
      image: couple, // Replace with actual image path
      message: "היי שיר הגעתי מהדף, אשמח לשמוע עוד על מפה זוגית"
    },
    {
      id: 4,
      title: "חבילת מפה בסיסית + זוגית",
      forWhom: "לזוגות שרוצים להבין את עצמם ואת מערכת היחסים שלהם",
      includes: "מפה זוגית משותפת + מפה בסיסית",
      image:basic, // Replace with actual image path
      message: "היי שיר הגעתי מהדף, אשמח לשמוע עוד על חבילת מפה בסיסית + זוגית"
    },
    {
      id: 5,
      title: "חבילת מפה מורחבת + זוגית",
      forWhom: "לזוגות שרוצים העמקה מקסימלית בהבנת עצמם והקשר ביניהם",
      includes: "מפה זוגית משותפת מפורטת + מפה מורחבת",
      image:coupleMap, // Replace with actual image path
      message: "היי שיר הגעתי מהדף, אשמח לשמוע עוד על חבילת מפה מורחבת + זוגית"
    },
    {
      id: 6,
      title: "מפה לטעימה",
      forWhom: "למי שרוצה להתנסות בעולם הנומרולוגיה בלי להתחייב לפגישה מלאה",
      includes: "קובץ מפה כתובה בלבד (ללא פגישה) עם מידע על האתגרים והמתנות שלך",
      image: consult, // Replace with actual image path
      message: "היי שיר הגעתי מהדף, אשמח לשמוע עוד על מפה לטעימה"
    }
  ];

  return <>
    <div className={styles.servicesContainer}>
      <h2 className={styles.servicesTitle}>השירותים שלי</h2>
      <p className={styles.servicesSubtitle}>ריכזתי עבורכם את סוגי השירותים שאני נותנת, מוזמנים לגלול וברגע שמצאתם את הדבר שהכי מדוייק לכם - פשוט תלחצו על הכפתור שמחתיו :)</p>
      
      <div className={styles.servicesGrid}>
        {services.map((service) => (
          <div key={service.id} className={styles.serviceCard}>
            <div className={styles.serviceImageContainer}>
              <img 
                src={service.image} 
                alt={service.title} 
                className={styles.serviceImage} 
              />
            </div>
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>

              <div className={styles.serviceDetails}>
                <div className={styles.serviceDetailItem}>
                  <div className={styles.serviceDetailIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className={styles.serviceDetailText}>
                    <p className={styles.serviceDetailLabel}>למי הכי מתאים:</p>
                    <p className={styles.serviceDetailValue}>{service.forWhom}</p>
                  </div>
                </div>
                <div className={styles.serviceDetailItem}>
                  <div className={styles.serviceDetailIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                  </div>
                  <div className={styles.serviceDetailText}>
                    <p className={styles.serviceDetailLabel}>מה כולל:</p>
                    <p className={styles.serviceDetailValue}>{service.includes}</p>
                  </div>
                </div>
              </div>
              <div className={styles.serviceButtonContainer}>
                <Button text="לעוד פרטים" message={service.message} />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.additionalInfo}>
        <h3 className={styles.infoTitle}>אז איך קובעים תור?</h3>
        <p>ניתן להשאיר לי הודעה לחזרה כאן למטה או בכל רשת חברתית אחרת שנוח לך, אני חוזרת אליך תוך יום עסקים אחד ואנחנו קובעים יחד תאריך שנוח ומתאים לקריאת המפה, בתאריך הזה אנחנו ניפגש באונליין או באופן פרונטלי כשהמפה שלך כבר מוכנה ונצלול פנימה אל תוך סודות התאריך שלך.</p>
      </div>
    </div>
    <FormScreen title="לשיחה ישירה ממני"/>
</>
};

export default Services;