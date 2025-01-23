import React from 'react';
import styles from './about.module.css';
import Image from 'next/image';
import profilePic from 'public/1.png';

const About = () => {
  return (
    <div id="about" className={styles.aboutContainer}>
      <div className={styles.aboutTextContainer}>
        <h1 className={styles.aboutTitle}>About Me</h1>
        
        <p className={styles.aboutText}>Hi Everyone, I am <span style={{color:"gold"}}>Earl Joseph Claro</span> from Cebu City, Philippines.</p>
        <p className={styles.aboutText}>
          I am currently a graduating 4th year BSIT Student in <span style={{color:"gold"}}>Cebu Institute of Technology University.</span>
        </p>
        <p className={styles.aboutText}>I am currenty a <span style={{color:"gold"}}>Web Developer Intern</span> at <span style={{color:"gold"}}>Sun Asterisk Philippines.</span></p>
        <p className={styles.aboutText}>Apart from coding, some other activities that I love to do!</p>
        <ul className={styles.aboutList}>
          <li>Playing Video Games (Minecraft, TFT, League of Legends, Civilization 6)</li>
          <li>Read Web Novels (Science Fiction, Fantasy, and Suspense Novels)</li>
          <li>Eating and Cooking (Delicious and Sweet Foods)</li>
        </ul>
        <p className={styles.aboutQuote}>"I love turning crazy ideas into awesome, functional websites."</p>
        <p className={styles.aboutSignature}>- Earl</p>
      </div>
      <div className={styles.aboutImageContainer}>
        <Image src={profilePic} alt="Profile Picture" className={styles.aboutImage} />
      </div>
    </div>
  );
};

export default About;