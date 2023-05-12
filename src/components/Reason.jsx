import React from 'react';
//assets
import tansaz from '../assets/20230512220841_[fpdl.in]_smart-skilled-cosmetologist-using-modern-device-while-doing-hydrafacial-procedure_259150-9197_large.jpg';
//styles
import styles from './Reason.module.css';

import { CheckCircleOutline } from '@mui/icons-material';

const Reason = () => {
    return (
        <div className={styles.container}>
            {/* <div>
                <img src={tansaz} alt='tan' />
            </div> */}
            <div className={styles.left}>
                <h2>چرا کلینیک زیبایی تن ساز؟</h2>
                <div className={styles.leftBottom}>
                    <div>
                        <CheckCircleOutline sx={{fontSize: {xs: '15px', sm: '20px'} }} className={styles.check}/>
                        <p>پذیرش حرفه‌ای مراجعان</p>
                    </div>
                    <div>
                        <CheckCircleOutline sx={{fontSize: {xs: '15px', sm: '20px'} }} className={styles.check} />
                        <p>تندرستی ، سلامتی ، زیبایی</p>
                    </div>
                    <div>
                        <CheckCircleOutline sx={{fontSize: {xs: '15px', sm: '20px'} }} className={styles.check} />
                        <p>بهترین و بروز ترین امکانات</p>
                    </div>
                    <div>
                        <CheckCircleOutline sx={{fontSize: {xs: '15px', sm: '20px'} }} className={styles.check} />
                        <p>	ثبت الکترونیکی سوابق</p>
                    </div>
                    <div>
                        <CheckCircleOutline sx={{fontSize: {xs: '15px', sm: '20px'} }} className={styles.check} />
                        <p>	تجهیزات بروز و مدرن درمان</p>
                    </div>
                    <div>
                        <CheckCircleOutline sx={{fontSize: {xs: '15px', sm: '20px'} }} className={styles.check} />
                        <p>تیم پزشکی متخصص</p>
                    </div>
                    <div>
                        <CheckCircleOutline sx={{fontSize: {xs: '15px', sm: '20px'} }} className={styles.check} />
                        <p>محیط آرام و دلنشین</p>
                    </div>
                    <div>
                        <CheckCircleOutline sx={{fontSize: {xs: '15px', sm: '20px'} }} className={styles.check} />
                        <p>ارائه خدمات متنوع با کیفیت</p>
                    </div>
                    <div>
                        <CheckCircleOutline sx={{fontSize: {xs: '15px', sm: '20px'} }} className={styles.check} />
                        <p>برگزاری جشنواره تخفیف</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reason;