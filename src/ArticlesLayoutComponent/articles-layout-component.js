import React, { useState, useEffect } from 'react';
import './articles-layout-component.scss';
import {articlesConfig} from './articles-config.js';
import ArticlesViewer from './articlesViewerComponent/articles-viewer-component';

const ArticlesLayout = () => {
    let tabs = [{name: 'Games', articles: ''}, {name: 'Anime', articles: ''}, {name: 'ASMR', articles: ''}];
    const [selectedTab, setSelectedTab] = useState({selectedTab: 'Games'});
    
    useEffect(() => {
        tabs.map(tab => {
            tab.articles = articlesConfig.filter(article => article.Subject === tab.name);})
      }, [])
    
    function handleArticleSelected(selectedTab) {
        setSelectedTab({selectedTab});
        console.log(selectedTab);
    }

    function renderNavbar() {
        const tabsList = tabs.map(tab => (
            <div key={tab.name} className={tab.name === selectedTab.selectedTab ? 'selected-tab tab': 'tab'}
            onClick={()=>{handleArticleSelected(tab.name)}}>{tab.name}</div>
          ));
          return (
            <div className="tabs-list">
              {tabsList}
            </div>
          );
    }

	return (
		<div className='articles-layout'>
            <h3 className='title'>Article</h3>
            {renderNavbar()}
            <ArticlesViewer articles={tabs.find(tab => tab.name === selectedTab.selectedTab)} />
        </div>
	)
};

export default ArticlesLayout;

