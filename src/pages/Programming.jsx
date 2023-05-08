import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProgramming } from "../features/reduser/programming";
import PagesArticles from "../component/template/PageArticles/PageArticles";
import ArticleTitle from "../component/organisme/ArticleTitle";

const Programming = (props) => {
  const dispatch = useDispatch();
  const { programming, isLoading } = useSelector((state) => state.programming);

  useEffect(() => {
    dispatch(getProgramming());
  }, [dispatch]);

  return (
    <>
      <section id="programming">
        {isLoading ? (
          <h1> loading...</h1>
          ) : (
            <>
            <ArticleTitle data={"Programming"} />
            <div className=" p-4 flex items-center justify-center  ">
              <div className="grid gap-4 grid-cols- md:grid-cols-2 lg:grid-cols-4">
                <PagesArticles data={programming} />
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Programming;
