import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import heart from "../../../assets/icons/heart.png";
import heartFill from "../../../assets/icons/heart-fill.png";
import notFound from "../../../assets/icons/image-notfound.png";
import { articleSaved, articleUnSaved } from "../../../features/articleSlice";

const PageArticles = ({ articleFetch }) => {
  const saved = useSelector((state) => state.article.entitiesSaved);
  const dispatch = useDispatch();
  const isSaved = saved.some((item) => item.title === articleFetch.title);

  const handleSaved = () => {
    dispatch(articleSaved({ articleFetch }));
  };

  const handleUnSaved = () => {
    const filteredUnSave = saved.filter(
      (save) => save.title !== articleFetch.title
    );
    dispatch(articleUnSaved({ filteredUnSave }));
  };

  // component ini akan menampilkan card card sesuai dengan data yang dikirim kedalam component ini
  return (
    <div className="w-full flex justify-between">
      <div className="w-full bg-slate-100 rounded-xl shadow-lg overflow-hidden flex flex-col mb-10 relative">
        <div className="flex-1">
          <a
            href={articleFetch.url}
            className="transition duration-300 hover:brightness-75"
            target="_blank"
            rel="noopener noreferrer"
          >
            {!articleFetch.urlToImage ? (
              <img
                src={notFound}
                alt={articleFetch.title}
                className="object-contain w-full h-[12rem]"
              />
            ) : (
              <img
                src={articleFetch.urlToImage}
                alt={articleFetch.title}
                className="object-cover w-full h-[12rem]"
              />
            )}
          </a>
          <div className="px-7 py-6">
            <a
              href={articleFetch.url}
              className="text-md xl:text-xl font-bold mb-3 transition duration-200 hover:text-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {articleFetch.title}
            </a>
          </div>
          <p>{articleFetch.description}</p>
        </div>
        <div className="flex px-7 py-6">
          <div className="w-full flex items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2838/2838779.png"
              alt=""
              className="w-5 opacity-75 grayscale"
            />
            <span className="text-xs ml-3 opacity-75 grayscale">
              {moment(articleFetch.publishedAt).format(
                "MMMM Do YYYY, h:mm:ss a"
              )}
            </span>
          </div>
        </div>
        {!isSaved ? (
          <button
            className="absolute py-2 px-2 bg-secondary opacity-30 rounded-full top-3 right-3 transition duration-200 hover:opacity-100"
            onClick={handleSaved}
          >
            <img src={heart} alt="" className="w-5" />
          </button>
        ) : (
          <button
            className="absolute py-2 px-2 bg-secondary rounded-full top-3 right-3 "
            onClick={handleUnSaved}
          >
            <img src={heartFill} alt="" className="w-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default PageArticles;
