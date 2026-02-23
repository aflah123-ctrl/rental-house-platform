export default function Navbar() {
    return (
        <nav style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
            <h2>Rental</h2>
            <div>
                <span style={{ marginRight: "20px" }}>Homes</span>
                <span style={{ marginRight: "20px" }}>Experiences</span>
                <span>Services</span>
            </div>
            <button>Become a host</button>
        </nav>
    )
}