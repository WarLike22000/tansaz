import React from 'react';
import { Link } from 'react-router-dom';
//styles
import styles from './Reservation.module.css';
//assets
import reserve from '../assets/reservation.jpg';

const Reservation = () => {
    return (
        <div className={styles.container}>
            <div className={styles.rightCon}>
                <h3>رزرو نوبت و مشاوره رایگان</h3>
                <p>همین حالا درخواست مشاوره و یا رزرو وقت خودتون را ارسال کنید تا در اولین فرصت مشاوران ما با شما تماس بگیرند</p>
                <div className={styles.linkRes}>
                    <Link>درخواست مشاوره</Link>
                </div>
            </div>
            <div className={styles.leftCon}>
                <img src={reserve} alt='reservation' />
            </div>
        </div>
    );
};

export default Reservation;