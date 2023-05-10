import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArticleTitle from "../component/organisme/ArticleTitle";
import { getSeacrh } from "../features/reduser/searchSlice";
import PageArticles from "../component/template/PageArticles/PageArticles";
import IsPending from "../component/organisme/IsPending";
import { useParams } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
  const { result, isFetchPending } = useSelector((state) => state.search);
  const param = useParams();

  useEffect(() => {
    dispatch(getSeacrh(param.search));
  }, [dispatch, param]);
  return (
    <section id="search">
      {isFetchPending ? (
        <IsPending />
      ) : (
        <>
          <ArticleTitle title={param.search} />
          <div className=" p-4 flex items-center justify-center  ">
            {result.length === 0 ? (
              <div className="text-gray-950 w-">
                <p>
                  Untuk pencarian{" "}
                  <span className="text-sky-600">{param.search}</span> tidak
                  ditemukan
                </p>
              </div>
            ) : (
              <div className="grid gap-4 grid-cols- md:grid-cols-2 lg:grid-cols-4">
                {result.map((articleFetch, index) => (
                  <PageArticles
                    articleFetch={articleFetch}
                    index={index}
                    key={index}
                  />
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default Search;
