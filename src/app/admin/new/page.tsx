import styles from './page.module.css';
import Link from 'next/link';

export default function NewPropertyPage() {
    return (
        <div className={styles.container}>
            <Link href="/admin" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'block' }}>
                ← Back to Dashboard
            </Link>

            <div className={styles.header} style={{ marginBottom: '3rem' }}>
                <h1 className="glow-text">Add New Property</h1>
                <p style={{ color: 'rgba(255,255,255,0.6)' }}>Fill in the details to list your premium property.</p>
            </div>

            <form className={styles.form}>
                <div className={`${styles.section} premium-card`}>
                    <h3>Basic Information</h3>
                    <div>
                        <label className={styles.label}>Property Title</label>
                        <input type="text" placeholder="e.g. Modern Sunset Villa" className={styles.input} required />
                    </div>
                    <div className={styles.grid}>
                        <div>
                            <label className={styles.label}>Price ($)</label>
                            <input type="number" placeholder="4500000" className={styles.input} required />
                        </div>
                        <div>
                            <label className={styles.label}>Property Type</label>
                            <select className={styles.select}>
                                <option>House</option>
                                <option>Apartment</option>
                                <option>Villa</option>
                                <option>Penthouse</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className={styles.label}>Location</label>
                        <input type="text" placeholder="e.g. Malibu, California" className={styles.input} required />
                    </div>
                </div>

                <div className={`${styles.section} premium-card`}>
                    <h3>Property Specifications</h3>
                    <div className={styles.grid}>
                        <div>
                            <label className={styles.label}>Bedrooms</label>
                            <input type="number" placeholder="5" className={styles.input} />
                        </div>
                        <div>
                            <label className={styles.label}>Bathrooms</label>
                            <input type="number" placeholder="4" className={styles.input} />
                        </div>
                        <div>
                            <label className={styles.label}>Sq Ft</label>
                            <input type="number" placeholder="4200" className={styles.input} />
                        </div>
                    </div>
                    <div>
                        <label className={styles.label}>Description</label>
                        <textarea placeholder="Describe the property's unique features..." className={styles.textarea} required />
                    </div>
                </div>

                <div className={`${styles.section} premium-card`}>
                    <h3>Media</h3>
                    <div className={styles.uploadArea}>
                        <span style={{ fontSize: '2rem' }}>📸</span>
                        <p style={{ marginTop: '1rem' }}>Click or drag images to upload</p>
                        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.5rem' }}>
                            Minimum 5 high-quality images recommended.
                        </p>
                    </div>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1.2rem', justifyContent: 'center', fontSize: '1.1rem' }}>
                    Publish Listing
                </button>
            </form>
        </div>
    );
}
