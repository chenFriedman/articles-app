import React from 'react';
import './contact.scss';

const Contact = (props) => {
	return (   
        <div className='row contact-row'>
            <div className='left'>
                <div className='profile-img'/>
                <div className='writer'>
                    <div className='name'>{props.name}</div>
                    <div className='address'>{props.location}</div>
                </div>
            </div>
            <div className='contact-btn'>contact</div>
        </div> 
	)
};

export default Contact;

