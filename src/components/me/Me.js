import React from 'react';
import styles from './Me.module.css';
import shir from "../../images/שיר קשי תדמית.png";
import FormScreen from '../form/FormScreen';
import Recommendations from '../recommends/Recommends';

const AboutMe = () => {
  return (
    <>
      <div className={styles.header} id="מי אני">בואו נכיר</div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={shir} alt="שיר קאשי" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>שיר קאשי</h1>
          <div className={styles.subtitle}>״כשאתה נמצא באהבה עצמית, האהבה שלך משפיעה על הסביבה שלך וזו מתפשטת לשאר העולם , כך העולם הופך לטוב יותר״
          </div>
          <p className={styles.description}>
          כל חיי נמשכתי לכל מה שנסתר מהעין, הרגשתי שיש מעבר. מעבר לכאב, מעבר לחסימות, מעבר לדיכאון.
תמיד יש סיבה וכשמגלים אותה העולם פשוט נפתח לך מחדש.
          </p>
          <p className={styles.description}>
          כשהתגלה לעיניי עולם המספרים הבנתי שכל דבר בעולם בנוי על תדרים, כולל הרגשות שלנו והגוף שלנו ואפילו הסביבה שלנו.
          זה האיץ את ההחלמה וההתפתחות שלי והביא אותי לתגלית המדהימה- אני צריכה לטפל באנשים ולעזור להם להיות מי שהם באמת, כי זה מה שנועדתי לעשות.
          </p>
          <p className={styles.description}>
          זו תחושה פנימית, שההסבר היחיד שיש לה הוא שאני מקשיבה לנשמה שלי, הצלחתי להחלים מהטראומות, הכאבים, הרגשות התקועים שהיו בי מהילדות ולהגיע למצב שאני יודעת להקשיב לעצמי, אני יודעת לרפא כאב של אחרים ואני יודעת בדיוק מה אני רוצה להגשים ואיך לעשות את זה בדרך שלי ובקצב שלי.

          </p>
          <p className={styles.description}>
          
ואני רוצה לעזור גם לך להגיע לזה! שתדע בדיוק מה החלום שלך ואיזו עבודה פנימית אתה צריך לעשות כדי להגשים אותו, כי כל דבר בחיים, מתחיל מבפנים.

          </p>

        </div>
      </div>
    <Recommendations/>
    </>
  );
};

export default AboutMe;