import React, { useState, useEffect } from "react";
import "./Nav.css";
import "./Nav1.css"

function Nav({ openModal }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      

      <nav className="navbar">
        <div className="logo">
          <img src="./image-Photoroom.png" alt="Logo" />
        </div>

        {/* Kursga yozilish tugmasi */}
        <button className="button-85" role="button" onClick={openModal}>
          Kursga yozilish
        </button>

        

       
      </nav>
    </>
  );
}

export default Nav;
