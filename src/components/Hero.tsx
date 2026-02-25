import Image from "next/image";
import SearchBox from "./SearchBox";

export default function Hero() {
    return (
        <div style={{ position: "relative", width: "100%", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Image
                src="/hero.jpg"
                alt="Rental homes"
                fill
                style={{ objectFit: "cover", zIndex: -1, filter: "brightness(0.7)" }}
            />

            <div
                style={{
                    color: "white",
                    textAlign: "center",
                    maxWidth: "800px",
                    padding: "0 20px",
                    marginTop: "-50px"
                }}
            >
                <h1 style={{ fontSize: "72px", fontWeight: "bold", fontFamily: "serif", lineHeight: "1.1", marginBottom: "20px" }}>
                    Find Your Perfect <br />
                    <span style={{ color: "#D2B68A" }}>Luxury Sanctuary</span>
                </h1>
                <p style={{ fontSize: "18px", marginBottom: "40px", lineHeight: "1.6", fontWeight: 400 }}>
                    Discover an exclusive collection of the world's finest properties, curated <br /> for the most discerning lifestyles.—
                </p>
                <SearchBox />
            </div>
        </div>
    );
}