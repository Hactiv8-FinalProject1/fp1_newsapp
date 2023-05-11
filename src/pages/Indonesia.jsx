import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageArticles from "../component/template/PageArticles/PageArticles";
import ArticleTitle from "../component/organisme/ArticleTitle";
import IsPending from "../component/organisme/IsPending";
import { useLocation } from "react-router-dom";
import { fetchArticle } from "../features/articleSlice";

const Indonesia = () => {
  const fetchStates = useSelector((state) => state.article);
  const dispatch = useDispatch();
  const location = useLocation().pathname.replace("-", " ");

  useEffect(() => {
    dispatch(fetchArticle(location));
  }, [location, dispatch]);

  return (
    <>
      <section id="news">
        <div className="container px-10 xl:px-20">
          {fetchStates.isFetchPending && <IsPending />}
          {!fetchStates.isFetchPending &&
            (fetchStates.entitiesFetch < 1 ? (
              <div className="min-h-[30rem] flex justify-center items-center">
                <span className="text-xl capitalize">
                  Article{" "}
                  <span className="font-semibold">{location.substring(1)}</span>{" "}
                  not found
                </span>
              </div>
            ) : (
              <ArticleTitle
                title={location === "/" ? "Indonesia" : location.substring(1)}
              />
            ))}
          {fetchStates.isFetchSuccess && (
            <div className="grid justify-center md:grid-cols-2 md:gap-8 xl:grid-cols-4">
              {fetchStates.entitiesFetch.map((articleFetch, index) => (
                <PageArticles
                  articleFetch={articleFetch}
                  index={index}
                  key={index}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Indonesia;
