export default function SearchBar() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px",
            gap: "20px",
            border: "1px solid #ddd",
            borderRadius: "40px",
            width: "60%",
            margin: "auto"
        }}>
            <input placeholder="Where" />
            <input placeholder="When" />
            <input placeholder="Guests" />
            <button>Search</button>
        </div>
    )
}