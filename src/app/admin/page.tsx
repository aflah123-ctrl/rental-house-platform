import Link from 'next/link';
import styles from './page.module.css';

const MOCK_PROPERTIES = [
    { id: '1', title: 'Modern Sunset Villa', price: 4500000, status: 'Available', inquiries: 12 },
    { id: '2', title: 'Skyline Penthouse', price: 3200000, status: 'Available', inquiries: 8 },
    { id: '3', title: 'Oasis Retreat', price: 1800000, status: 'Sold', inquiries: 5 }
];

export default function AdminDashboard() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className="glow-text">Admin Dashboard</h1>
                <Link href="/admin/new" className="btn-primary">+ Add Property</Link>
            </div>

            <div className={styles.statsGrid}>
                <div className={`${styles.statCard} premium-card`}>
                    <div className={styles.statLabel}>Total Listings</div>
                    <div className={styles.statValue}>24</div>
                </div>
                <div className={`${styles.statCard} premium-card`}>
                    <div className={styles.statLabel}>Active Inquiries</div>
                    <div className={styles.statValue}>158</div>
                </div>
                <div className={`${styles.statCard} premium-card`}>
                    <div className={styles.statLabel}>Revenue</div>
                    <div className={styles.statValue}>$12M</div>
                </div>
            </div>

            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.th}>Property</th>
                            <th className={styles.th}>Price</th>
                            <th className={styles.th}>Status</th>
                            <th className={styles.th}>Inquiries</th>
                            <th className={styles.th}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MOCK_PROPERTIES.map((p) => (
                            <tr key={p.id}>
                                <td className={styles.td}>{p.title}</td>
                                <td className={styles.td}>${p.price.toLocaleString()}</td>
                                <td className={styles.td}>
                                    <span className={`${styles.status} ${p.status === 'Available' ? styles.statusAvailable : styles.statusSold}`}>
                                        {p.status}
                                    </span>
                                </td>
                                <td className={styles.td}>{p.inquiries}</td>
                                <td className={styles.td}>
                                    <div className={styles.actions}>
                                        <button className={styles.btnIcon}>✏️</button>
                                        <button className={styles.btnIcon}>🗑️</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
