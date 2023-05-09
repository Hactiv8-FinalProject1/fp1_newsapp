import { useSelector } from "react-redux";
// import ArticleFulfilled from "../component/organisme/ArticleFulfilled";
import ArticleTitle from "../component/organisme/ArticleTitle";
import IsPending from "../component/organisme/IsPending";
import PageArticles from "../component/template/PageArticles/PageArticles";

const ArticleSaved = () => {
  const newState = useSelector((state) => state.article);
  const articleSaveds = newState.entitiesSaved;
  // ini untuk menampilkan card card yang disimpan oleh user
  return (
    <>
      <section id="news" className="pt-5 pb-20 min-h-screen ">
        <div className="container px-10">
          {newState.isFetchPending && <IsPending />}
          {!newState.isFetchPending && <ArticleTitle title="saved" />}
          {newState.isFetchSuccess && (
            <div className="grid justify-center md:grid-cols-2 md:gap-8 xl:grid-cols-4">
              {articleSaveds.map((articleFetch, index) => (
                <PageArticles articleFetch={articleFetch} index={index} category="Saved" key={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ArticleSaved;

