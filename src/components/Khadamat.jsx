import React from 'react';
//assets
import laser from '../assets/laser.png';
import skin from '../assets/skin-care.png';
import women from '../assets/women.png';
import beauty from '../assets/beauty.png';
import fat from '../assets/obesity.png';
//styles 
import styles from './Khadamat.module.css';

const Khadamat = () => {
    return (
        <div className={styles.container}>
            <div>
                <img src={laser} alt='laser' />
                <h4>لیزر موهای زائد</h4>
            </div>
            <div>
                <img src={skin} alt='skin' />
                <h4>خدمات پوستی  </h4>
            </div>
            <div>
                <img src={women} alt='women' />
                <h4>کاشت مو و ابرو</h4>
            </div>
            <div>
                <img src={beauty} alt='beauty' />
                <h4>  خدمات زیبایی</h4>
            </div>
            <div>
                <img src={fat} alt='fat' />
                <h4>لاغری و پیکر تراشی</h4>
            </div>
        </div>
    );
};

export default Khadamat;