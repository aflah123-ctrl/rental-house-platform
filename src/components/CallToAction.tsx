export default function CallToAction() {
    return (
        <section style={{
            position: "relative",
            width: "100%",
            height: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "white",
            padding: "0 20px"
        }}>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: -2
            }}></div>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                zIndex: -1
            }}></div>

            <h2 style={{
                fontSize: "48px",
                fontFamily: "serif",
                fontWeight: "bold",
                marginBottom: "20px",
                color: "white"
            }}>
                Ready to Find Your Dream Home?
            </h2>
            <p style={{
                fontSize: "18px",
                maxWidth: "600px",
                lineHeight: "1.6",
                marginBottom: "40px",
                color: "#e0e0e0"
            }}>
                Let our team of experts guide you through the journey of finding the perfect property that matches your lifestyle.
            </p>
            <button style={{
                padding: "16px 40px",
                backgroundColor: "#D2B68A",
                color: "white",
                border: "none",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "background-color 0.3s ease"
            }}>
                Start Your Search
            </button>
        </section>
    );
}
