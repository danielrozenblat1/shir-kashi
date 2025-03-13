import React, { useState, useEffect } from 'react';

import styles from "./SecondScreen.module.css";

import { Star, Search, Brain, Zap, Heart } from 'lucide-react';


const NumerologyScreen = () => {
    const INTRO_TEXTS = [
        "מרגיש שמשהו עוצר אותך מלהתקדם?",
        "מחפש את הייעוד שלך בחיים?",
        "רוצה להבין את עצמך ברמה עמוקה יותר?"
    ];
    
    const [text, setText] = useState(INTRO_TEXTS[0]);
    const [fadeIn, setFadeIn] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFadeIn(false);
            
            setTimeout(() => {
                setText(INTRO_TEXTS[(INTRO_TEXTS.indexOf(text) + 1) % INTRO_TEXTS.length]);
                setFadeIn(true);
            }, 500); // Wait for fade out before changing text
            
        }, 4000);
        
        return () => clearInterval(intervalId);
    }, [text]);

    return <>
        <div className={styles.container} id="נומרולוגיה">
            <div className={styles.introSection}>
                <div className={styles.introBox}>
                    <span className={`${styles.textTransition} ${fadeIn ? styles.fadeIn : styles.fadeOut}`}>
                        {text}
                    </span>
                </div>
            </div>
            
            <div className={styles.description}>
                אתה רואה את כל האנשים סביבך מתקדמים בחיים - מוצאים מקצוע לעסוק בו, נכנסים ויוצאים ממערכות יחסים ופועלים, בזמן שאתה מרגיש שמשהו עוצר אותך מלהתקדם, מלמצוא את עצמך, את הייעוד שלך בחיים או את בת/בן הזוג האידיאלים עבורך…
            </div>
            <div className={styles.subtitleSmall}>
          וזה מתבטא בכך שאת/ה
            </div>
            <div className={styles.concernsContainer}>
                <div className={styles.concernItem}>
                    <Search className={styles.icon} />
                    <span>לא יודע/ת במה מתאים לך לעסוק או מהו הייעוד שלך</span>
                </div>
                
                <div className={styles.concernItem}>
                    <Heart className={styles.icon} />
                    <span>לא מצליח/ה להיות בזוגיות משמעותית ומספקת</span>
                </div>
                
                <div className={styles.concernItem}>
                    <Zap className={styles.icon} />
                    <span>נרתע/ת מלהתחיל משהו חדש או לסיים משהו שלא מתאים</span>
                </div>
                
                <div className={styles.concernItem}>
                    <Brain className={styles.icon} />
                    <span>מרגיש/ה שיש דפוסי חשיבה מעכבים שמונעים ממך להצליח</span>
                </div>
                
                <div className={styles.concernItem}>
                    <Star className={styles.icon} />
                    <span>מחפש כיוון וודאות לגבי התקופה הנוכחית בחייך</span>
                </div>
            </div>

            <div className={styles.subtitleSmall}>
           תאמין לי, אתה לא לבד!
            </div>
            <div className={styles.description}>
                נומרולוגיה היא שיטה עתיקה המבוססת על הרעיון שלמספרים יש משמעות וקשר עמוק לחיינו. המספרים שמרכיבים את תאריך הלידה שלנו והאותיות בשמנו נושאים בתוכם מידע יקר ערך על האישיות, הכישרונות, האתגרים והפוטנציאל הייחודי שלנו. באמצעות פענוח המספרים האישיים שלך, ניתן לקבל תובנות משמעותיות ולגלות את הדרך הטבעית שלך להצלחה ואושר.
            </div>
            <div className={styles.description}>
            כשמודעים לאתגרים הטבועים בתאריך שלנו, למתנות והכשרונות המולדים - הרבה יותר קל להצליח בחיים ולהתגבר על קשיים ומשברים.
            </div>
            <div className={styles.subtitleSmall}>
             בעזרת הנומורולוגיה נוכל 
            </div>
        </div>
    </>;
};

export default NumerologyScreen;