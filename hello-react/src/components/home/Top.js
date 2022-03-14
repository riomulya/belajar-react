import React from "react";

const Top = () => {
  const handlePesan = (value, e) => {
    e.preventDefault();
    alert("Halaman Top di klik");
    alert(value);
  };
  return (
    <div>
      <a
        href="/"
        onClick={(e) => handlePesan("pesan dari handling function", e)}
      >
        Halaman Top
      </a>
    </div>
  );
};

export default Top;
