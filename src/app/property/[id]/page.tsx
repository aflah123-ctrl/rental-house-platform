import Link from "next/link";
import HouseCard from "../../../components/HouseCard";

export default function PropertyDetails() {
    return (
        <main style={{ backgroundColor: "#EEE5D3", minHeight: "100vh", paddingTop: "100px", paddingBottom: "100px", color: "#000000" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
                <div style={{ marginBottom: "20px" }}>
                    <Link href="/" style={{ color: "#000000", textDecoration: "none", fontSize: "14px", display: "inline-block", marginBottom: "10px" }}>
                        ← Back to Listings
                    </Link>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "20px", marginBottom: "50px" }}>
                    <div style={{ height: "600px" }}>
                        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Main property" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr", gap: "20px", height: "600px" }}>
                        <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80" alt="Detail 1" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="Detail 2" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80" alt="Detail 3" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "40px" }}>
                    <div>
                        <h2 style={{ fontFamily: "serif", fontSize: "28px", marginBottom: "20px", color: "#222052" }}>Description</h2>
                        <p style={{ color: "#000000", fontSize: "16px", lineHeight: "1.8", marginBottom: "40px" }}>
                            A private sanctuary nestled in the hills of Malibu. This Mediterranean-inspired villa boasts expansive grounds, a resort-style pool, and panoramic ocean views. The interior features high ceilings, custom millwork, and the finest finishes throughout.
                        </p>

                        <h2 style={{ fontFamily: "serif", fontSize: "24px", marginBottom: "20px", color: "#222052" }}>Features & Amenities</h2>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px", marginBottom: "50px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#000000" }}><span style={{ color: "#D2B68A" }}>✓</span> Ocean Views</div>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#000000" }}><span style={{ color: "#D2B68A" }}>✓</span> Guest House</div>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#000000" }}><span style={{ color: "#D2B68A" }}>✓</span> Tennis Court</div>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#000000" }}><span style={{ color: "#D2B68A" }}>✓</span> Library</div>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#000000" }}><span style={{ color: "#D2B68A" }}>✓</span> Chef's Kitchen</div>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#000000" }}><span style={{ color: "#D2B68A" }}>✓</span> Private Gym</div>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: "1px solid #B7B7B7", padding: "30px", backgroundColor: "white", boxShadow: "0 4px 15px rgba(0,0,0,0.03)" }}>
                            <h3 style={{ fontFamily: "serif", fontSize: "22px", margin: "0 0 20px 0", color: "#222052", textAlign: "center" }}>Contact Us</h3>

                            <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "25px" }}>
                                <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "#eee", overflow: "hidden" }}>
                                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80" alt="James Wilson" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: "bold", color: "#222052" }}>James Wilson</div>
                                    <div style={{ color: "#D2B68A", fontSize: "13px" }}>Senior Real Estate Agent</div>
                                </div>
                            </div>

                            <div style={{ fontSize: "14px", color: "#000000", marginBottom: "25px" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                                    <span style={{ color: "#D2B68A" }}>📞</span> +1 (555) 123-4567
                                </div>
                            </div>

                            <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                                <input placeholder="Your Name" style={{ padding: "12px", border: "1px solid #B7B7B7", width: "100%", boxSizing: "border-box", fontSize: "14px" }} />
                                <input placeholder="Phone Number" style={{ padding: "12px", border: "1px solid #B7B7B7", width: "100%", boxSizing: "border-box", fontSize: "14px" }} />
                                <textarea placeholder="I am interested in this property..." rows={4} style={{ padding: "12px", border: "1px solid #B7B7B7", width: "100%", boxSizing: "border-box", resize: "none", fontSize: "14px", fontFamily: "inherit" }}></textarea>
                                <button type="button" style={{
                                    backgroundColor: "#D2B68A",
                                    color: "white",
                                    border: "none",
                                    padding: "15px",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    width: "100%",
                                    marginTop: "10px"
                                }}>
                                    Contact Us
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div style={{ padding: "60px 0", borderTop: "1px solid #B7B7B7", marginTop: "40px" }}>
                    <h2 style={{ fontFamily: "serif", fontSize: "28px", marginBottom: "30px", color: "#222052" }}>Similar Properties</h2>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "30px",
                        width: "100%"
                    }}>
                        <HouseCard
                            id="2"
                            image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            type="HOUSE"
                            title="Modern Architectural Masterpiece"
                            location="Beverly Hills, CA"
                            price="$2,450,000"
                            beds={4}
                            baths={5}
                            sqft={4200}
                        />
                        <HouseCard
                            id="3"
                            image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            type="PENTHOUSE"
                            title="Downtown Penthouse Suite"
                            location="New York, NY"
                            price="$3,200,000"
                            beds={3}
                            baths={3.5}
                            sqft={2800}
                        />
                        <HouseCard
                            id="4"
                            image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            type="MANSION"
                            title="Historic Estate Mansion"
                            location="Greenwich, CT"
                            price="$12,500,000"
                            beds={8}
                            baths={10}
                            sqft={12000}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
