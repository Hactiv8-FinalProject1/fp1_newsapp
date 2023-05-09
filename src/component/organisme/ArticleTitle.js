import React from "react";

const ArticleTitle = ({ data }) => {
  // component ini akan menampilkan judul dari berita yang sedang dibuka sesuai lokasi page atau article yang dicari
  return (
    <div className="font-bold text-3xl text-center capitalize">
      <h2>{data} News</h2>
    </div>
  );
};

export default ArticleTitle;
