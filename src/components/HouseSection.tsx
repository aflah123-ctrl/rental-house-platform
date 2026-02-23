import HouseCard from "./houseCard"

export default function HouseSection({ title }: { title: string }) {
    return (
        <div style={{ padding: "30px" }}>
            <h2>{title}</h2>

            <div style={{
                display: "flex",
                gap: "20px",
                overflowX: "auto",
                marginTop: "20px"
            }}>
                <HouseCard />
                <HouseCard />
                <HouseCard />
                <HouseCard />
                <HouseCard />
            </div>
        </div>
    )
}