import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroBackground} />
        <div className={styles.heroContent}>
          <h1 className={`${styles.title} glow-text`}>
            Modern Engineering <br /> Meets Art
          </h1>
          <p className={styles.subtitle}>
            Welcome to Aflu. We build high-performance, beautifully designed
            web experiences that push the boundaries of what&apos;s possible.
          </p>
          <div className={styles.ctas}>
            <a href="#" className="btn-primary">
              Get Started
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className="premium-card">
          <div className={styles.featureIcon}>⚡</div>
          <h3>Lightning Fast</h3>
          <p>Built with Next.js for ultimate speed and SEO performance.</p>
        </div>
        <div className="premium-card">
          <div className={styles.featureIcon}>🎨</div>
          <h3>Premium Design</h3>
          <p>Meticulously crafted UI with modern aesthetics and smooth motion.</p>
        </div>
        <div className="premium-card">
          <div className={styles.featureIcon}>🛡️</div>
          <h3>Scalable Architecture</h3>
          <p>Clean code patterns designed to grow with your business.</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Aflu. All rights reserved.</p>
      </footer>
    </main>
  );
}
