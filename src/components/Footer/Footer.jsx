import React from "react";
import styles from "./Footer.module.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <>
      <div className={styles.container_footer}>
        <div className={styles.inner1_footer}>
          <div className={styles.footer_logo}>
            <FacebookIcon/>
          </div>
          <div className={styles.footer_lorem}>
            <InstagramIcon/>
          </div>
          <div className={styles.footer_icon}>
            <TwitterIcon/>
          </div>
        </div>
        <div className={styles.inner2_footer}>
          <h3>Healthy living</h3>
          <h3>Loreum</h3>
          <h3>Lorium ipsum</h3>
          <h3>Loreum</h3>
          <h3>Loreum ipsum</h3>
        </div>
        <div className={styles.inner3_footer}>
          <h3>Services</h3>
          <h3>Loreum</h3>
          <h3>Loreum ipsum</h3>
          <h3>Loreum ipsum</h3>
          <h3>Loreum ipsum</h3>
        </div>
        <div className={styles.inner4_footer}>
          <h3>Programms</h3>
          <h3>Loreum</h3>
          <h3>Loreum ipsum</h3>
          <h3>Loreum ipsum</h3>
          <h3>Loreum ipsum</h3>
        </div>
      </div>
      <div className={styles.bootom_footer}>
        <p>@2023 isr all right copy reserved</p>
      </div>
    </>
  );
}
