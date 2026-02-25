"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navBg = scrolled ? "#222052" : "transparent";
    const textColor = scrolled ? "#EEE5D3" : "white";
    const btnBorder = scrolled ? "1px solid #D2B68A" : "1px solid white";
    const btnColor = scrolled ? "#D2B68A" : "white";

    return (
        <>
            <style>{`
            .nav-container {
                padding: ${scrolled ? "15px 50px" : "30px 50px"};
                transition: all 0.3s ease;
            }
            .nav-links {
                display: flex;
                align-items: center;
                gap: 30px;
            }
            .hamburger {
                display: none;
                flex-direction: column;
                gap: 6px;
                cursor: pointer;
                background: none;
                border: none;
                padding: 5px;
            }
            .hamburger span {
                display: block;
                width: 25px;
                height: 2px;
                background-color: ${textColor};
                transition: 0.3s;
            }
            @media (max-width: 768px) {
                .nav-container {
                    padding: ${scrolled ? "15px 20px" : "20px 20px"};
                }
                .hamburger {
                    display: flex;
                }
                .nav-links {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    background-color: #222052;
                    flex-direction: column;
                    gap: 0;
                    overflow: hidden;
                    max-height: ${menuOpen ? "400px" : "0"};
                    transition: max-height 0.3s ease;
                }
                .nav-links > * {
                    padding: 20px;
                    width: 100%;
                    text-align: center;
                    border-bottom: 1px solid rgba(255,255,255,0.05);
                    color: #EEE5D3 !important;
                }
                .nav-btn {
                    margin: 15px auto !important;
                    width: auto !important;
                    display: inline-block;
                }
                .hamburger.open span:nth-child(1) {
                    transform: rotate(45deg) translate(5px, 6px);
                }
                .hamburger.open span:nth-child(2) {
                    opacity: 0;
                }
                .hamburger.open span:nth-child(3) {
                    transform: rotate(-45deg) translate(5px, -6px);
                }
            }
        `}</style>
            <nav className="nav-container" style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 50,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: textColor,
                backgroundColor: menuOpen ? "#222052" : navBg,
                boxShadow: scrolled || menuOpen ? "0 2px 10px rgba(0,0,0,0.2)" : "none",
            }}>
                <Link href="/" style={{ textDecoration: "none", color: "inherit" }} onClick={() => setMenuOpen(false)}>
                    <h2 style={{ fontFamily: "serif", letterSpacing: "2px", margin: 0, fontSize: "24px" }}>LUXE ESTATES</h2>
                </Link>

                <button
                    className={`hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className="nav-links">
                    <Link href="/" style={{ textDecoration: "none", color: "inherit" }} onClick={() => setMenuOpen(false)}>
                        <span style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px" }}>Home</span>
                    </Link>
                    <span onClick={() => setMenuOpen(false)} style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px" }}>Properties</span>
                    <span onClick={() => setMenuOpen(false)} style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px" }}>About</span>
                    <span onClick={() => setMenuOpen(false)} style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px" }}>Contact</span>
                    <button className="nav-btn" onClick={() => setMenuOpen(false)} style={{
                        padding: "10px 24px",
                        backgroundColor: "transparent",
                        color: menuOpen ? "#D2B68A" : btnColor,
                        border: menuOpen ? "1px solid #D2B68A" : btnBorder,
                        fontWeight: 600,
                        cursor: "pointer",
                        marginLeft: "10px",
                        fontSize: "15px",
                        transition: "all 0.3s ease"
                    }}>List Property</button>
                </div>
            </nav>
        </>
    )
}