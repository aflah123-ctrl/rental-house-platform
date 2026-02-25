export default function Footer() {
    return (
        <footer style={{
            backgroundColor: "#222052",
            padding: "80px 50px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "40px",
            color: "#D2B68A"
        }}>
            <div style={{ maxWidth: "300px" }}>
                <h2 style={{ fontFamily: "serif", letterSpacing: "2px", margin: "0 0 20px 0", fontSize: "24px" }}>
                    LUXE ESTATES
                </h2>
                <p style={{ lineHeight: "1.6", color: "#EEE5D3", fontSize: "15px" }}>
                    Curating the world's finest properties for the most discerning clients. Experience luxury living at its peak.
                </p>
            </div>

            <div>
                <h3 style={{ fontFamily: "serif", fontSize: "18px", marginBottom: "20px", fontWeight: "normal" }}>Company</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "15px" }}>
                    <li><a href="#" style={{ color: "#EEE5D3", textDecoration: "none", fontSize: "15px" }}>About Us</a></li>
                    <li><a href="#" style={{ color: "#EEE5D3", textDecoration: "none", fontSize: "15px" }}>Careers</a></li>
                    <li><a href="#" style={{ color: "#EEE5D3", textDecoration: "none", fontSize: "15px" }}>Press</a></li>
                </ul>
            </div>

            <div>
                <h3 style={{ fontFamily: "serif", fontSize: "18px", marginBottom: "20px", fontWeight: "normal" }}>Properties</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "15px" }}>
                    <li><a href="#" style={{ color: "#EEE5D3", textDecoration: "none", fontSize: "15px" }}>Buy</a></li>
                    <li><a href="#" style={{ color: "#EEE5D3", textDecoration: "none", fontSize: "15px" }}>Sell</a></li>
                    <li><a href="#" style={{ color: "#EEE5D3", textDecoration: "none", fontSize: "15px" }}>New Developments</a></li>
                </ul>
            </div>

            <div>
                <h3 style={{ fontFamily: "serif", fontSize: "18px", marginBottom: "20px", fontWeight: "normal" }}>Services</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "15px" }}>
                    <li><a href="#" style={{ color: "#EEE5D3", textDecoration: "none", fontSize: "15px" }}>Property Management</a></li>
                    <li><a href="#" style={{ color: "#EEE5D3", textDecoration: "none", fontSize: "15px" }}>Valuation</a></li>
                    <li><a href="#" style={{ color: "#EEE5D3", textDecoration: "none", fontSize: "15px" }}>Consulting</a></li>
                </ul>
            </div>
        </footer>
    );
}
