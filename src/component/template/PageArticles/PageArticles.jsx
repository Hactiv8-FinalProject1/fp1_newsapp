import React from "react";
import moment from "moment";
import "./pagearticle.css";

const PageArticles = ({ data }) => {
  return (
    <>
      {data?.map((property, PageArticles) => {
        return (
          /* CARD --*/
          <div
            className="rounded-xl shadow-ms shadow-lg border border-sky-900"
            key={PageArticles}
          >
            <div className="p-3 flex-auto flex-col ">
              <div className="rounded-xl overflow-hidden ">
                <h2 class="font-bold text-lg mb-2 ">{property.source.name}</h2>
                <img src={property.urlToImage} alt="" />
                <p class="text-m ">
                  {moment(property.publishedAt).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </p>
              </div>
              <h5 className="text-xl md:text-xl font-small mb-3 mt-3">
                {property.title}
              </h5>
              <p class="text-sm text-gray-600 mb-3">{property.description}</p>
              <a
                role="button"
                href={property.url}
                class="text-white bg-yellow-500 px-3 py-1 rounded-md hover:bg-purple-700 mr-5"
              >
                Learn More
              </a>
              <a
                role="button"
                href="#"
                class="text-white bg-yellow-500 px-3 py-1 rounded-md hover:bg-purple-700"
              >
                Saved
              </a>
            </div>
          </div>
          /* CARD --*/
        );
      })}
    </>
  );
};

export default PageArticles;
