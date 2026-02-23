import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
                AFLU<span className="glow-text">ESTATE</span>
            </Link>
            <div className={styles.navLinks}>
                <Link href="/" className={styles.navLink}>Home</Link>
                <Link href="/properties" className={styles.navLink}>Properties</Link>
                <Link href="/admin" className={styles.navLink}>Admin</Link>
                <Link href="/contact" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                    Connect
                </Link>
            </div>
        </nav>
    );
}
