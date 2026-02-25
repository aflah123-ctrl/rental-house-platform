import HouseSection from "./HouseSection";

export default function FeaturesBlock() {
    return (
        <section style={{ backgroundColor: "#EEE5D3", padding: "80px 20px" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "60px" }}>
                <button style={{
                    padding: "15px 40px",
                    backgroundColor: "transparent",
                    color: "#D2B68A",
                    border: "1px solid #D2B68A",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                }}>
                    View All Properties
                </button>
            </div>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "30px",
                width: "100%",
                maxWidth: "1200px",
                margin: "0 auto"
            }}>
                <FeatureCard
                    icon={
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D2B68A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    }
                    title="Exclusive Listings"
                    description="Access to off-market properties and exclusive real estate opportunities not available elsewhere."
                />
                <FeatureCard
                    icon={
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D2B68A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                    }
                    title="Trusted Guidance"
                    description="Expert advice from seasoned professionals who understand the nuances of the luxury market."
                />
                <FeatureCard
                    icon={
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D2B68A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                    }
                    title="Seamless Process"
                    description="A refined, stress-free experience from the initial search to the final closing."
                />
            </div>
        </section>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div style={{
            backgroundColor: "white",
            padding: "50px 30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            border: "1px solid #B7B7B7",
            boxShadow: "0 4px 20px rgba(0,0,0,0.03)"
        }}>
            <div style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "#EEE5D3",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "25px"
            }}>
                {icon}
            </div>
            <h3 style={{ margin: "0 0 15px 0", fontSize: "20px", fontFamily: "serif", color: "#222052", fontWeight: "bold" }}>
                {title}
            </h3>
            <p style={{ margin: "0", color: "#000000", fontSize: "15px", lineHeight: "1.6" }}>
                {description}
            </p>
        </div>
    );
}
