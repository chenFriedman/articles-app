

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
            const articlesList = (props.articles).map(article => (
                <div><Article 
                    title={article.Title}
                    text={article.Text}
                    love={article.Love}
                    PublisherInfo={article.PublisherInfo}/>
                </div>
              ));
              return (
                <Slider {...settings}>
                  {articlesList}
                </Slider>                

              );
        }

	return (
		<div className='articles-viewer'>
            {renderArticles()}
      </div>
	)
};

export default ArticlesViewer;

