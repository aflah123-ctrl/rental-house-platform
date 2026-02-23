import Link from "next/link";
import styles from './page.module.css';

// Mock data for development
const MOCK_PROPERTIES = [
    {
        id: '1',
        title: 'Modern Sunset Villa',
        location: 'Malibu, California',
        price: 4500000,
        beds: 5,
        baths: 4,
        sqft: 4200,
        type: 'Villa',
        image: '/hero-bg.png' // Fallback to our existing premium bg
    },
    {
        id: '2',
        title: 'Skyline Penthouse',
        location: 'Manhattan, New York',
        price: 3200000,
        beds: 3,
        baths: 3,
        sqft: 2800,
        type: 'Apartment',
        image: '/hero-bg.png'
    },
    {
        id: '3',
        title: 'Oasis Retreat',
        location: 'Palm Springs, Florida',
        price: 1800000,
        beds: 4,
        baths: 3,
        sqft: 3500,
        type: 'House',
        image: '/hero-bg.png'
    }
];

export default function PropertiesPage() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className="glow-text" style={{ fontSize: '3rem' }}>Exclusive Listings</h1>
                <p style={{ color: 'rgba(255,255,255,0.6)' }}>Handpicked premium properties just for you.</p>
            </div>

            <div className={styles.grid}>
                {MOCK_PROPERTIES.map((property) => (
                    <Link href={`/properties/${property.id}`} key={property.id} className={`${styles.card} premium-card`}>
                        <div className={styles.imageContainer}>
                            <div className={styles.badge}>{property.type}</div>
                            <div
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    background: `url(${property.image}) center/cover no-repeat`,
                                    filter: 'brightness(0.7)'
                                }}
                            />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.price}>${property.price.toLocaleString()}</div>
                            <h3 className={styles.title}>{property.title}</h3>
                            <div className={styles.location}>
                                <span>📍</span> {property.location}
                            </div>
                            <div className={styles.details}>
                                <span>🛏️ {property.beds} Beds</span>
                                <span>🛁 {property.baths} Baths</span>
                                <span>📐 {property.sqft} sqft</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
