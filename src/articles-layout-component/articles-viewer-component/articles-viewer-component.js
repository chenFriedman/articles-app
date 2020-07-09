

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './articles-viewer.scss';
import Article from './article-component/article';

const ArticlesViewer = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        arrows: true
    };
      function renderArticles() {
        //   let art = props.articles;
          console.log(props.articles);
            // const articlesList = (props.articles).map(article => (
            //     // <Article key={article.Title}/>
            //     <div>{article.Title}</div>
            //   ));
            //   return (
            //     <div className="articles-list">
            //       {articlesList}
            //     </div>
            //   );
        }
    // console.log(props);

	return (
		<div className='articles-viewer'>
        <Slider {...settings}>
            <div><Article data='1'/></div>
            <div><Article data='2'/></div>
        </Slider>
            {renderArticles()}
      </div>
	)
};

export default ArticlesViewer;

