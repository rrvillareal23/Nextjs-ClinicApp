import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.branding}>
        <a href="https://rainbowkids-ac.com/">
          <img
            src="https://rainbowkids-ac.com/wp-content/uploads/2018/04/logo-footer.png"
            alt="Rainbow Kids"
            width="72"
            height="30"
          />
        </a>
      </div>
      <div className={styles.copyright}>
        Copyright © <span>2025</span> - Rainbow Kids Achievement Center.
      </div>
      <div className={styles.rightSection}>
        <nav>
          <ul className={styles.menu}>
            <li>
              <a href="https://rainbowkids-ac.com/privacy-policy/">
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.bottomText}>
          <p>Welcome to Rainbow Kids, “Where every child achieves…”</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
