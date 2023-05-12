import React from 'react';
//assets
import laser from '../assets/laser-epilation-hair-removal-therapy.jpg'
import before from '../assets/before-after-portrait-mature-woman-retouched.jpg';
import head from '../assets/20230512003048_[fpdl.in]_head-balding-man-before-after-hair-transplant-surgery-man-losing-his-hair-has-become_168410-2002_normal.jpg';

//styles
import styles from './SomeService.module.css';

const SomeService = () => {
    return (
        <div className={styles.mainContainer}>
            <h1>برخی خدمات کلینیک زیبایی تن ساز</h1>
            <div className={styles.container}>
                <div className={styles.tanSaz}>
                    <h4>کلینیک تن ساز</h4>
                    <div>
                        <img src={laser} alt='las' />
                    </div>
                    <div>
                        <p>لیزر موهای زائد</p>
                        <p>روش های متفاوتی برای رفع موهای زائد وجود دارد ام بهترین روش بای این کار لیزر موهای زائد است.</p>
                    </div>
                </div>
                <div className={styles.tanSaz}>
                    <h4>کلینیک تن ساز</h4>
                    <div>
                        <img src={before} alt='bef' />
                    </div>
                    <div>
                        <p>تزریق بوتاکس</p>
                        <p>تزریق بوتاکس، محبوب ترین، کم خطر ترین، موثر ترین و مقرون به صرفه ترین اقدام جوانسازی است.</p>
                    </div>
                </div>
                <div className={styles.tanSaz}>
                    <h4>کلینیک تن ساز</h4>
                    <div>
                        <img src={head} alt='hea' />
                    </div>
                    <div>
                        <p>مزوتراپی مو</p>
                        <p>مزوتراپی مو روش درمانی برای ریزش مو می باشد که توسط پزشک متخصص مناسب با نیاز فرد انجام می شود.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SomeService;