import React from "react";
import GoogleFontLoader from "react-google-font-loader";

const CardFont = ({ name, variants, cat, file, size, text }) => {
  console.log(name);
  return (
    <article className="col-md-6 mb-4">
      <div className="shadow-sm border p-3 h-100">
        <h2 className="h6 d-flex aling-items-center justify-content-between">
          <span>{name}</span>
          <small>{variants.length} variant(s)</small>
        </h2>
        <p>
          <span className="badge bg-dark">{cat}</span>
        </p>
        <GoogleFontLoader
          fonts={[
            {
              font: `Roboto`,
            },
          ]}
        />
        <p className="sample" style={{ fontFamily: `${name}`, fontSize: `${size}px` }}>
          {text}
        </p>
        <a rel="noopener noreferrer" target="_blank" className="text-danger" href={file}>
          Voir sur Google Fonts (ouvre un nouveau tab)
        </a>
      </div>
    </article>
  );
};

export default CardFont;
