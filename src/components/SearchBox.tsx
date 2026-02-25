export default function SearchBar() {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            padding: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            width: "100%",
            maxWidth: "750px",
            margin: "0 auto",
        }}>
            <input
                placeholder="Location, City, or Zip"
                style={{
                    flex: 1.5,
                    padding: "15px 20px",
                    border: "none",
                    outline: "none",
                    fontSize: "16px",
                    color: "#333",
                    backgroundColor: "transparent"
                }}
            />
            <div style={{ width: "1px", height: "40px", backgroundColor: "#e2e8f0", margin: "0 10px" }}></div>

            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                <select
                    style={{
                        width: "100%",
                        padding: "15px 20px",
                        border: "none",
                        outline: "none",
                        fontSize: "16px",
                        color: "#333",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                    }}
                >
                    <option>Property Type</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                </select>
            </div>

            <button style={{
                backgroundColor: "#D2B68A",
                color: "white",
                border: "none",
                padding: "15px 40px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "background-color 0.3s",
                marginLeft: "10px"
            }}>Search</button>
        </div>
    )
}