import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCovid19 } from "../features/reduser/covid19";
import PagesArticles from "../component/template/PageArticles/PageArticles";
import ArticleTitle from "../component/organisme/ArticleTitle";


const Covid19 = (props) => {
  const dispatch = useDispatch();
  const { covid19, isLoading } = useSelector((state) => state.covid19);

  useEffect(() => {
    dispatch(getCovid19());
  }, [dispatch]);

  return (
    <>
      <section id="covid19">
        {isLoading ? (
          <h1> loading...</h1>
          ) : (
            <>
            <ArticleTitle data={"Covid-19"} />
            <div className=" p-4 flex items-center justify-center  ">
              <div className="grid gap-4 grid-cols- md:grid-cols-2 lg:grid-cols-4">
                <PagesArticles data={covid19} />
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Covid19;
