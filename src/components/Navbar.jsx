import React, { useEffect, useState } from 'react';
import { Login, AccountBalance, Add, AddIcCall, Call, ExpandLess, ExpandMore, HeadsetMic, Help, Home, ImportContacts, Menu } from '@mui/icons-material';
//assets
import logo from '../assets/لوگو.png';
import instagram from '../assets/instagram (2).png';
import instagramCol from '../assets/instagram (1).png';
import whatsapp from '../assets/whatsapp.png';
import whatsappCol from '../assets/whatsapp (3).png';
//styles
import styles from './Navbar.module.css';

import { Link } from 'react-router-dom';
import { Button, Typography, Box, Collapse, Divider, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListSubheader } from '@mui/material';

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const [menu, setMenu] = useState(false);

    const [ani, setAni] = useState(false);
    
    const [colIns, setColIns] = useState(false);
    const [colWhat, setColWhat] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setMenu(open);
      };
    
      useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setAni(true);
            } else {
                setAni(false);
            }
        });
    }, []);
      
    return (
        <>
        <div className={styles.mainContainer}>
            <Drawer anchor='right' open={menu} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
                            <List sx={{bgcolor: 'rgb(255, 79, 79)', width: '250px', fontWeight: 700, fontSize: '0.9rem', height: '100%', a: { textDecoration: 'none', color: '#fff' } }}>
                              <ListSubheader sx={{color: 'rgb(255, 79, 79)', bgcolor: '#F1FAFB', fontSize: '20px', fontWeight: 700}}>تن ساز </ListSubheader>
                              <Divider variant='middle' />
                              <Box sx={{mt: '25px'}}>
                              <ListItemButton sx={{m: '10px 0'}} onClick={() => setOpen(!open)}>
                                    <Home sx={{ml: 1, color: '#fff'}} fontSize='small' />
                                    <Link>خانه</Link>
                              </ListItemButton>
                              <Divider />
                              <ListItemButton sx={{m: '10px 0'}} onClick={() => setMenu(false)}>
                                <ImportContacts sx={{ml: 1, color: '#fff'}} fontSize='small' />
                                <Link>مجله تن ساز</Link>
                              </ListItemButton>
                              <Divider />
                              <ListItemButton sx={{m: '10px 0'}} onClick={() => setMenu(false)}>
                                <Help sx={{ml: 1, color: '#fff'}} fontSize='small' />
                                <Link>سوالات متداول</Link>
                              </ListItemButton>
                              <Divider />
                              <ListItemButton sx={{m: '10px 0'}} onClick={() => setMenu(false)}>
                                <Call sx={{ml: 1, color: '#fff'}} fontSize='small' />
                                <Link>تماس با ما</Link>
                              </ListItemButton>
                              <Divider />
                              </Box>
                            </List>
                        </Drawer>
                    <div className={ani ? styles.phoneAnimation : styles.phone}>
                            <HeadsetMic fontSize='large' className={styles.headSet} />
                    </div>
        </div>
            <div className={styles.bottomNav}>
                <div className={styles.rightBottomNav}>
                    <div className={styles.topNav}>
                        <img src={logo} alt='logo' />
                    </div>
                    <nav className={styles.menu}>
                        <IconButton onClick={() => setMenu(!menu)}>
                            <Menu sx={{color: 'rgb(214, 61, 61)'}} fontSize='large' />
                        </IconButton>
                    </nav>
                    <div className={styles.topNav2}>
                        <img src={logo} alt='logo' />
                    </div>
                    <div className={styles.home}>
                        <Home sx={{ml: 1, color: 'rgb(214, 61, 61)'}} fontSize='small' />
                        <Link>خانه</Link>
                    </div>
                    <div className={styles.mag}>
                        <ImportContacts sx={{ml: 1, color: 'rgb(214, 61, 61)'}} fontSize='small' />
                        <Link>مجله تن ساز</Link>
                    </div>
                    <div className={styles.question}>
                        <Help sx={{ml: 1, color: 'rgb(214, 61, 61)'}} fontSize='small' />
                        <Link>سوالات متداول</Link>
                    </div>
                    <div className={styles.call}>
                        <Call sx={{ml: 1, color: 'rgb(214, 61, 61)'}} fontSize='small' />
                        <Link>تماس با ما</Link>
                    </div>
                    <div className={styles.nobat}>
                            <Add />
                            <p>رزرو نوبت</p>
                    </div>
                </div>
                <div className={styles.relation}>
                        <div onMouseEnter={() => setColIns(true)} onMouseLeave={() => setColIns(false)}>
                            <img src={colIns ? instagramCol : instagram} alt='ins' />
                        </div>
                            <span className={colIns ? styles.show : styles.notShow}>اینستاگرام</span>
                        <div onMouseEnter={() => setColWhat(true)} onMouseLeave={() => setColWhat(false)}>
                            <img src={colWhat ? whatsappCol : whatsapp} alt='ins' />
                        </div>
                        <span className={colWhat ? styles.showWh : styles.notShowWh}>واتساپ</span>
                </div>
            </div>
        </>
    );
};

export default Navbar;