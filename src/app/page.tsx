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
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search by location, neighborhood, or city..."
              className={styles.searchInput}
            />
            <select className={styles.searchSelect}>
              <option>Type</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Villa</option>
            </select>
            <button className="btn-primary">Search</button>
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
