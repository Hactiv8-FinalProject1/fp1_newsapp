import React from "react";
import { useParams } from "react-router-dom";

const ArticleTitle = ({ title }) => {
  // component ini akan menampilkan judul dari berita yang sedang dibuka sesuai lokasi page atau article yang dicari
  const param = useParams();
  return (
    <div className="font-bold text-3xl text-center mb-20 capitalize">
      {!param.search ? (
        <h2>
          <span className="text-sky-600">{title}</span> News
        </h2>
      ) : (
        <h2>
          Berikut hasil pencarian "
          <span className="text-sky-600">{param.search}</span>"
        </h2>
      )}
    </div>
  );
};

export default ArticleTitle;
