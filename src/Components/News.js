import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState();
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
  };
  useEffect(() => {
    document.title=`${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
    // eslint-disable-next-line
  }, []);
  const fatchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };
  return (
    <>
      <h2
        className={`text-center text-${
          props.mode === "light" ? "Dark" : "light"
        }`}
        style={{
          marginTop: "70px",
        }}
      >
        Newmonkey - top {capitalizeFirstLetter(props.category)} headlines
      </h2>
      <h5
        className={`text-center text-${
          props.mode === "light" ? "Dark" : "light"
        }`}
      >
        totalResults - {totalResults}
      </h5>
      <InfiniteScroll
        dataLength={articles.length}
        next={fatchMoreData}
        hasMore={articles.length !== totalResults}
        scrollThreshold={0.2}
        loader={<Spinner />}
        endMessage={
          <p className={`text-center text-${
          props.mode === "light" ? "Dark" : "light"
        }`}
        style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="container-lg">
          <div className="row">
            {articles.map((element, index) => {
              return <div className="col-md-4   " key={index}>
                  <Newsitem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                    mode={props.mode}
                  />
                </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
