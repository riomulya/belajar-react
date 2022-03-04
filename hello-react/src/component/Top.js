import React from "react";

const Top = () => {
  const handlePesan = (value) => {
    alert("Halaman Top di klik");
    alert(value);
  };
  return (
    <div>
      <a href="/" onClick={() => handlePesan("pesan dari handling function")}>
        Halaman Top
      </a>
    </div>
  );
};

export default Top;
