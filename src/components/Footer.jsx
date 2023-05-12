import React from 'react';
import { ArrowLeft, LocationOn, PhoneAndroid, RingVolume } from '@mui/icons-material';
//assets
import whatsapp from '../assets/whatsapp (2).png';
import instagram from '../assets/instagram (1).png'
//styles
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.right}>
                <h5>دسترسی سریع</h5>
                <div>
                    <ArrowLeft className={styles.ArrowLeft} />
                    <p>درباره ما</p>
                </div>
                <div>
                    <ArrowLeft className={styles.ArrowLeft} />
                    <p>مجله تن ساز</p>
                </div>
                <div>
                    <ArrowLeft className={styles.ArrowLeft} />
                    <p>خدمات تن ساز</p>
                </div>
                <div>
                    <ArrowLeft className={styles.ArrowLeft} />
                    <p>دریافت مشاوره رایگان</p>
                </div>
            </div>
            <div className={styles.middle}>
                <h5>درباره کلینیک زیبایی تن ساز</h5>
                <p>
                هدف بنیان گزاران این مجموعه ارائه خدماتی شایسته و با کیفیت و منطبق بر علم روز پزشکی بوده است. به همین لحاظ از پزشکان متخصص پوست و مو و صاحب نام و شناخته شده کشور دعوت به همکاری گردیده است . این مرکز همواره کوشیده است تا خدمات خود را از نظر کمی و کیفی ارتقاء بخشیده و جدیدترین تجهیزات و فناوری های نوین را به خدمت گیرد .
                </p>
            </div>
            <div className={styles.left}>
                <h5>تماس با ما</h5>
                <div>
                    <LocationOn className={styles.fadeTwo} />
                    <p>
                        نشانی: شیراز، بلوار ارتش، بین فهمیده و فروردین، ساختمان سعید، طبقه پنج، واحد 9
                    </p>
                </div>
                <div>
                    <RingVolume className={styles.fadeTwo} />
                    <p>
                        تلفن: 07137369980
                    </p>
                </div>
                <div>
                    <PhoneAndroid className={styles.fadeTwo} />
                    <p>
                        شماره تماس: 09336074147
                    </p>
                </div>
                <div>
                    <h5>تن ساز را در شبکه های اجتماعی دنبال کنید</h5>
                    <div className={styles.social}>
                        <img src={whatsapp} alt='what' />
                        <img src={instagram} alt='ins' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;