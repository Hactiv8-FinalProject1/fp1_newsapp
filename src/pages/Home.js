import React from "react";
import PagesArticles from "../component/template/PageArticles";

const Home = () => {
  // ini menampilkan halaman utama atau landing page pada saat aplikasi pertama kali dijalankan
  return (
    <>
      <section id="home">
        <div
          className="w-screen h-screen bg-cover "
          style={{ backgroundImage: "url('https://cdn.theconversation.com/files/31619/width1356x668/pjv5h4zg-1379556878.jpg')" }}
        >
          <div className="container pt-36 px-10 xl:px-20 h-1/2">
            <div className="w-full lg:w-1/2">
              <h1 className="font-bold text-cyan-600 text-3xl lg:text-5xl capitalize">Search worldwide news with code</h1>
              <p className="font-medium text-cyan-400 text-xl pt-5 lg:text-2xl">Find articles and headlines from news sources and blogs around the web with our website</p>
            </div>
          </div>
        </div>
      </section>

      <PagesArticles />
    </>
  );
};

export default Home;
