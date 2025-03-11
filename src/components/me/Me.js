import React from 'react';
import styles from './Me.module.css';
import shir from "../../images/שיר קשי תדמית.png";
import FormScreen from '../form/FormScreen';

const AboutMe = () => {
  return (
    <>
      <div className={styles.header} id="מי אני">בואו נכיר</div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={shir} alt="שיר קשי" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>שיר קשי</h1>
          <div className={styles.subtitle}>"כשאתה נמצא במקום יותר טוב - ככה אתה משפיע על האנשים שסביבך ולאט לאט הופך את העולם לטוב יותר"</div>
          <p className={styles.description}>
            תמיד חיפשתי לעזור לאנשים ולהעניק ערך אמיתי בחייהם. תחום הנומרולוגיה תמיד היה חלק מחיי - אפילו סבתא שלי עסקה בזה, וכך הייתה לי חשיפה מוקדמת לעולם המספרים והמשמעות העמוקה שלהם.
          </p>
          <p className={styles.description}>
            את דרכי המקצועית התחלתי כמאפרת, אבל למרות ההצלחה, לא הרגשתי את הסיפוק העמוק שחיפשתי. בליבי ידעתי שיש לי ייעוד אחר. לאחר שעברתי הכשרה מקיפה בתחום הנומרולוגיה, הבנתי שזה המקום האמיתי שלי! מאז אני מקדישה את חיי לעזור לאנשים לחיות את החיים שהם באמת רוצים, להתגבר על חסמים, ולהבין את עצמם בצורה עמוקה יותר.
          </p>
        </div>
      </div>
    
    </>
  );
};

export default AboutMe;