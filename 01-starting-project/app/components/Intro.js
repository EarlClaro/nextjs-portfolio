import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import authorImage from '@/public/claro.png';
import styles from './intro.module.css';

export default function Intro() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* Left Column: Image */}
        <div className={styles.imageContainer}>
          <Image
            src={authorImage}
            alt="Earl Joseph Claro"
            className={styles.authorImage} 
            priority
          />
        </div>

        {/* Right Column: Text Content */}
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Hi There! 👋🏻</h2>
          <h2 className={styles.name}>
            I&apos;M <span style={{ color: 'gold' ,textAlign:'right'}}>EARL JOSEPH CLARO</span>
          </h2>
          <h2 className={styles.typingText}>
          <span></span>
        </h2>
          <div className={styles.textContent}>
            <p>
              I gradually fell in love with programming and I have at least learned something, I think… 🤷‍♂️
            </p>
            <p>
              I am fluent in languages like <span style={{color:'gold'}}>Python</span> and <span style={{color:'gold'}}>Javascript</span>.
            </p>
            <p>
              My fields of interest are building new <span style={{color:'gold'}}>Interesting Websites</span> and integrating them with{' '}
              <span style={{color:'gold'}}>AI Technologies</span>, as well as in areas related to <span style={{color:'gold'}}>OpenAI</span> and <span style={{color:'gold'}}>Gemini</span>.
            </p>
            <p>
              Whenever possible, I also apply my <span style={{color:'gold'}}>passion</span> for developing products with Node.js and Modern
              Javascript Libraries and Frameworks like <span style={{color:'gold'}}>React.js</span> and <span style={{color:'gold'}}>Next.js</span>.
            </p>
          </div>

          {/* Social Icons */}
          <div className={styles.socialIcons}>
            <a href="https://www.linkedin.com/in/earl-joseph-claro-603350163/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
            </a>
            <a href="https://github.com/EarlClaro" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100007700865370" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
            </a>
            <a href="mailto:earlclaro@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGoogle} className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
