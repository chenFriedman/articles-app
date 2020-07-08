import React, {useState} from 'react';
import './Article.scss';

const Article = (props) => {
    const [loveCounter, setLoveCounter] = useState(0);

console.log(props)
	return (
        <div className='article-box'>
            <div className='qute-img' />
		    <div className='article'>
                <div className='row'>
                    <div className='article-title'>{props.data}</div>
                    <div className='love' onClick={() => setLoveCounter(loveCounter + 1)}>
                        <div className='love-counter'>{loveCounter}</div>
                        <div className='love-img' />
                    </div>
                </div>
            <div className='article-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra ante eu odio sagittis tristique. Suspendisse at faucibus ex. Duis porttitor porttitor lectus, quis commodo dui fringilla ut. Nunc eu volutpat lacus. Donec vulputate, tortor in laoreet egestas, purus purus accumsan ipsum, vel lobortis ante libero a diam. Duis porttitor porttitor lectus, quis commodo dui dui fringilla ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra ante eu odio sagittis tristique.</div>
            </div>
            <div className='row'>
                <div className='left'>
                    <div className='profile-img'/>
                    <div className='writer'>
                        <div className='name'>Chen Friedman</div>
                        <div className='address'>Ovadia Mebartenura</div>
                    </div>
                </div>
                <div className='contact-btn'>contact</div>
            </div>
        </div>
	)
};

export default Article;

