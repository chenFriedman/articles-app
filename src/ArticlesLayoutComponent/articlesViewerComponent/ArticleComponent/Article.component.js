import React, {useState} from 'react';
import './Article.scss';

const Article = (props) => {
    const [loveCounter, setLoveCounter] = useState(0);

console.log(props)
	return (
        <div className='article-box'>
            <div className='qute-img' />
		    <div className='article'>
                <div className='article-title'>{props.data}</div>
                <div className='love' onclick={()=>{setLoveCounter(++loveCounter)}}>
                    <div className='love-counter'>{loveCounter}</div>
                    <div className='love-img' />
                </div>
            </div>
        </div>
	)
};

export default Article;

