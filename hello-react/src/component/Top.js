import React from "react";

const Top = () => {
  const handlePesan = () => {
    alert("Halaman Top di klik");
  };
  return (
    <div>
      <a href="/" onClick={handlePesan}>
        Halaman Top
      </a>
    </div>
  );
};

export default Top;
