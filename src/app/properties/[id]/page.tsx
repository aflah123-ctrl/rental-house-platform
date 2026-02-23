import styles from './page.module.css';
import Link from 'next/link';

// Mock data (in a real app, we'd fetch based on params.id)
const MOCK_PROPERTIES = {
    '1': {
        title: 'Modern Sunset Villa',
        location: 'Malibu, California',
        price: 4500000,
        beds: 5,
        baths: 4,
        sqft: 4200,
        type: 'Villa',
        description: 'Experience unparalleled luxury in this stunning modern villa perched above the Malibu coastline. Featuring floor-to-ceiling windows, an infinity pool, and a custom designer kitchen, this property offers the ultimate California lifestyle. Every room is designed to capture the breathtaking Pacific views while maintained strict privacy.',
        image: '/hero-bg.png'
    }
};

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
    const property = MOCK_PROPERTIES[params.id as keyof typeof MOCK_PROPERTIES] || MOCK_PROPERTIES['1'];

    return (
        <div className={styles.container}>
            <Link href="/properties" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'block' }}>
                ← Back to Listings
            </Link>

            <div className={styles.gallery}>
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        background: `url(${property.image}) center/cover no-repeat`
                    }}
                />
            </div>

            <div className={styles.layout}>
                <div className={styles.info}>
                    <h1 className="glow-text">{property.title}</h1>
                    <div className={styles.price}>${property.price.toLocaleString()}</div>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>{property.beds}</span>
                            <span className={styles.statLabel}>Bedrooms</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>{property.baths}</span>
                            <span className={styles.statLabel}>Bathrooms</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>{property.sqft}</span>
                            <span className={styles.statLabel}>Sq Ft</span>
                        </div>
                    </div>

                    <div className={styles.description}>
                        <p>{property.description}</p>
                    </div>
                </div>

                <div className={styles.sidebar}>
                    <div className="premium-card">
                        <h3 style={{ marginBottom: '1.5rem' }}>Inquire for Details</h3>
                        <form className={styles.form}>
                            <input type="text" placeholder="Your Name" className={styles.input} required />
                            <input type="email" placeholder="Your Email" className={styles.input} required />
                            <input type="tel" placeholder="Phone Number" className={styles.input} />
                            <textarea placeholder="Tell us what you're looking for..." className={styles.textarea} required />
                            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                Send Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
