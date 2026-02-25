import HouseCard from "./HouseCard"

interface HouseSectionProps {
    title: string;
    subtitle?: string;
}

export default function HouseSection({ title, subtitle }: HouseSectionProps) {
    return (
        <section style={{ padding: "80px 20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h2 style={{ fontSize: "40px", fontFamily: "serif", margin: "0 0 15px 0", color: "#111", fontWeight: "bold" }}>{title}</h2>
            <div style={{ width: "60px", height: "3px", backgroundColor: "#c2a059", marginBottom: "30px" }}></div>

            {subtitle && (
                <p style={{ color: "#666", fontSize: "16px", marginBottom: "60px", textAlign: "center", maxWidth: "600px" }}>
                    {subtitle}
                </p>
            )}

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "30px",
                width: "100%",
                maxWidth: "1200px"
            }}>
                <HouseCard
                    image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    type="HOUSE"
                    title="Modern Architectural Masterpiece"
                    location="Beverly Hills, CA"
                />
                <HouseCard
                    image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    type="VILLA"
                    title="Secluded Luxury Villa"
                    location="Malibu, CA"
                />
                <HouseCard
                    image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    type="PENTHOUSE"
                    title="Downtown Penthouse Suite"
                    location="New York, NY"
                />
            </div>
        </section>
    )
}
