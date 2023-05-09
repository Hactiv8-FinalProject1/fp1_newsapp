import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PagesArticles from "../component/template/PageArticles/PageArticles";
import ArticleTitle from "../component/organisme/ArticleTitle";
import { getSeacrh } from "../features/reduser/searchSlice";

const Search = () => {
  const dispatch = useDispatch();
  const { search, result, isLoading } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(getSeacrh(search));
  }, [dispatch, search]);
  return (
    <section id="search">
      {isLoading ? (
        <h1> loading...</h1>
      ) : (
        <>
          <ArticleTitle title={search} />
          <div className=" p-4 flex items-center justify-center  ">
            {result.length === 0 ? (
              <div className="text-gray-950 w-">
                <p>
                  Untuk pencarian <span className="text-sky-600">{search}</span>{" "}
                  tidak ditemukan
                </p>
              </div>
            ) : (
              <div className="grid gap-4 grid-cols- md:grid-cols-2 lg:grid-cols-4">
                <PagesArticles title={result} />
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default Search;