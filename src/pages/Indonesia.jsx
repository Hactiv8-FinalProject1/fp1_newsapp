import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIndonesia } from "../features/reduser/indonesia";
import PagesArticles from "../component/template/PageArticles/PageArticles";
import ArticleTitle from "../component/organisme/ArticleTitle";

const Indonesia = (props) => {
  const dispatch = useDispatch();
  const { indonesia, isLoading } = useSelector((state) => state.indonesia);

  useEffect(() => {
    dispatch(getIndonesia());
  }, [dispatch]);

  return (
    <>
      <section id="indonesia">
        {isLoading ? (
          <h1> loading...</h1>
        ) : (
          <>
            <ArticleTitle data={"Indonesia"} />
            <div className=" p-4 flex items-center justify-center  ">
              <div className="grid gap-4 grid-cols- md:grid-cols-2 lg:grid-cols-4">
                <PagesArticles data={indonesia} />
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Indonesia;
