import React, {useState} from 'react';
import Contact from './contact-component/contact';
import './article.scss';

const Article = (props) => {
    const [loveCounter, setLoveCounter] = useState(props.love);

	return (
        <div className='article-box'>
            <div className='qute-img' />
		    <div className='article'>
                <div className='row'>
                    <div className='article-title'>{props.title}</div>
                    <div className='love' onClick={() => setLoveCounter(loveCounter + 1)}>
                        <div className='love-counter'>{loveCounter}</div>
                        <div className='love-img' />
                    </div>
                </div>
            <div className='article-text'>{props.text}</div>
            </div>
            <Contact 
                name={props.PublisherInfo.Name}
                location={props.PublisherInfo.Location}
                gender={props.PublisherInfo.Gender}/>
        </div>
	)
};

export default Article;

