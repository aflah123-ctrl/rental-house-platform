"use client";
import Link from "next/link";

interface HouseCardProps {
    id?: string;
    image: string;
    type: string;
    title: string;
    location: string;
    price?: string;
    beds?: number;
    baths?: number;
    sqft?: number;
}

export default function HouseCard({ id = "1", image, type, title, location, price, beds, baths, sqft }: HouseCardProps) {
    return (
        <Link href={`/property/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
                backgroundColor: "#fff",
                border: "1px solid #B7B7B7",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.3s ease",
            }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
                <div style={{ position: "relative", width: "100%", height: "280px" }}>
                    <img
                        src={image}
                        alt={title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <div style={{
                        position: "absolute",
                        top: "20px",
                        left: "20px",
                        backgroundColor: "#D2B68A",
                        color: "white",
                        padding: "6px 12px",
                        fontSize: "11px",
                        fontWeight: "700",
                        letterSpacing: "1px"
                    }}>
                        {type}
                    </div>
                </div>
                <div style={{ padding: "25px 20px" }}>
                    <h3 style={{ margin: "0 0 8px 0", fontSize: "22px", fontFamily: "serif", color: "#222052", fontWeight: "normal" }}>
                        {title}
                    </h3>
                    <p style={{ margin: "0 0 15px 0", color: "#000000", fontSize: "14px" }}>
                        {location}
                    </p>
                    {price && (
                        <>
                            <p style={{ margin: "0 0 15px 0", color: "#D2B68A", fontSize: "18px", fontWeight: "bold" }}>
                                {price}
                            </p>
                            <div style={{ display: "flex", gap: "15px", borderTop: "1px solid #B7B7B7", paddingTop: "15px", fontSize: "13px", color: "#000000" }}>
                                {beds && <span>🛏 {beds}</span>}
                                {baths && <span>🛁 {baths}</span>}
                                {sqft && <span>📐 {sqft} sqft</span>}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </Link>
    );
}
