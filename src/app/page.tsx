import Navbar from "../components/navbar";
import SearchBox from "../components/SearchBox";
import HouseSection from "../components/HouseSection";

export default function Home() {
  return (
<<<<<<< HEAD
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
=======
    <main>
      <Navbar />
      <SearchBox />
>>>>>>> b08d140 (Add homepage components and layout)

      <HouseSection title="Popular homes in Bengaluru" />
      <HouseSection title="Available this weekend" />
    </main>
  );
}