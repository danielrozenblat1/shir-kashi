import React, { useEffect, useRef } from 'react';
import styles from "./ThirdScreen.module.css";
import { Player } from "@lordicon/react";
import ScrollReveal from "scrollreveal";

import benefitIcon1 from "../icons/wired-lineal-426-brain-hover-pinch.json";
import benefitIcon2 from "../icons/wired-lineal-629-yoga-male-hover-pinch.json";
import benefitIcon3 from "../icons/wired-lineal-630-couple-man-woman-hover-pinch.json";
import benefitIcon4 from "../icons/wired-lineal-119-law-judge-hover-double-hit.json";
import benefitIcon5 from "../icons/wired-lineal-414-money-bag-dollar-hover-shake (9).json";
import benefitIcon6 from "../icons/wired-lineal-1352-track-order-hover-pinch.json";
import Button from '../components/button/Button';
import FormScreen from '../components/form/FormScreen';

const BenefitsScreen = () => {
    const playerRef1 = useRef();
    const playerRef2 = useRef();
    const playerRef3 = useRef();
    const playerRef4 = useRef();
    const playerRef5 = useRef();
    const playerRef6 = useRef();

    useEffect(() => {
        // Initialize ScrollReveal
        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            scale: 1,
        });
        
        ScrollReveal().reveal(`.${styles.section}`, {
            duration: 1000,
            distance: "30px",
            origin: "right",
            easing: "ease-in-out",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            scale: 1,
        });
        
        ScrollReveal().reveal(`.${styles.stepHeader}`, {
            duration: 1000,
            distance: "30px",
            origin: "top",
            easing: "ease-in-out",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            scale: 1,
        });

        // Play animations
        playerRef1.current?.playFromBeginning();
        playerRef2.current?.playFromBeginning();
        playerRef3.current?.playFromBeginning();
        playerRef4.current?.playFromBeginning();
        playerRef5.current?.playFromBeginning();
        playerRef6.current?.playFromBeginning();
    }, []);

    return (
        <>
            <div className={styles.background} itemScope itemType="https://schema.org/Person">
           
                <div className={styles.bigWrapper}>
                    <div className={styles.step} itemScope itemType="https://schema.org/Organization">
                        <div className={styles.icons}>
                            <Player ref={playerRef1} size="100%" onComplete={() => playerRef1.current?.playFromBeginning()} icon={benefitIcon1} />
                        </div>
                        <div className={styles.text}>
                            <div className={styles.stepHeader} itemProp="name">לשחרר דפוסים מגבילים</div>
                            <div className={styles.section} itemProp="description">
                                נוכל לזהות קונפליקטים פנימיים ודפוסי חשיבה מעכבים דרך המפה הנומרולוגית שלך. 
                                המפה מגלה אתגרים מולדים שמשפיעים על התנהגותך ומאפשרת להבין ולשחרר אותם.
                            </div>
                        </div>
                    </div>

                    <div className={styles.step} itemScope itemType="https://schema.org/Product">
                        <div className={styles.text}>
                            <div className={styles.stepHeader} itemProp="name">להתמודד עם חרדות</div>
                            <div className={styles.section} itemProp="description">
                                לפתח כלים להרגעת מחשבות יתר וחרדות. המספרים בתאריך הלידה שלך חושפים דפוסי חשיבה 
                                ומעניקים תובנות והכוונה להתמודדות אפקטיבית עם מצבי לחץ.
                            </div>
                        </div>
                        <div className={styles.icons}>
                            <Player ref={playerRef2} delay={500} size="100%" onComplete={() => playerRef2.current?.playFromBeginning()} icon={benefitIcon2} />
                        </div>
                    </div>

                    <div className={styles.step} itemScope itemType="https://schema.org/Organization">
                        <div className={styles.icons}>
                            <Player ref={playerRef3} size="100%" onComplete={() => playerRef3.current?.playFromBeginning()} icon={benefitIcon3} />
                        </div>
                        <div className={styles.text}>
                            <div className={styles.stepHeader} itemProp="name">להתייעל במערכות יחסים</div>
                            <div className={styles.section} itemProp="description">
                                להבין את הדינמיקה בזוגיות ובמערכות יחסים אחרות דרך מפה זוגית. נגלה את ההתאמה האנרגטית,קשרים קארמטיים, את 
                        האתגרים המשותפים שלכם כזוג ואת הדרך לתקשורת מיטבית שתחזק את הקשר שלכם.
                            </div>
                        </div>
                    </div>

                    <div className={styles.step} itemScope itemType="https://schema.org/Organization">
                        <div className={styles.text}>
                            <div className={styles.stepHeader} itemProp="name">לקבל החלטות יותר בקלות</div>
                            <div className={styles.section} itemProp="description">
                                לקבל כלים לקבלת החלטות משמעותיות בחיים בהתאם לשנה האישית שלך. 
                                הנומרולוגיה מאפשרת לזהות עיתויים מיטביים לפעולה ותקופות בהן כדאי לך להמתין.
                            </div>
                        </div>
                        <div className={styles.icons}>
                            <Player ref={playerRef4} delay={500} size="100%" onComplete={() => playerRef4.current?.playFromBeginning()} icon={benefitIcon4} />
                        </div>
                    </div>

                    <div className={styles.step} itemScope itemType="https://schema.org/Course">
                        <div className={styles.icons}>
                            <Player ref={playerRef5} size="100%" onComplete={() => playerRef5.current?.playFromBeginning()} icon={benefitIcon5} />
                        </div>
                        <div className={styles.text}>
                            <div className={styles.stepHeader} itemProp="name">לחשוב אחרת על כסף</div>
                            <div className={styles.section} itemProp="description">
נבין מה בדיוק יושב וחוסם אותך ספציפית בכל מה שקשור למערכת היחסים שלך עם כסף,זרימת שפע ופרנסה ומה את/ה צריכ/ה לשנות ולפתור כדי שאותה חשיבה כבר לא תגביל אותך  
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.step} itemScope itemType="https://schema.org/Course">
                        <div className={styles.text}>
                            <div className={styles.stepHeader} itemProp="name">למצוא את הייעוד</div>
                            <div className={styles.section} itemProp="description">
                                לגלות את שביל הייעוד שלך והכיוון המקצועי המתאים לך. המפה הנומרולוגית חושפת 
                                את המתנות והכישרונות המולדים שלך ומאירה את הדרך למימוש עצמי מלא ומספק.
                            </div>
                        </div>
                        <div className={styles.icons}>
                            <Player ref={playerRef6} delay={500} size="100%" onComplete={() => playerRef6.current?.playFromBeginning()} icon={benefitIcon6} />
                        </div>
                    </div>
                </div>
            </div>
           <FormScreen title="הצעד הראשון מתחיל כאן"/>
        </>
    );
};

export default BenefitsScreen;