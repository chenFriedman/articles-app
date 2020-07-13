import React, { useState } from 'react';
import './articles-layout-component.scss';
import ArticlesViewer from './articles-viewer-component/articles-viewer-component';
let articlesViewer = require('./articles-config.json');

const ArticlesLayout = () => {
    let tabs = [{name: 'Games', articles: ''}, {name: 'Anime', articles: ''}, {name: 'ASMR', articles: ''}];
    const [selectedTab, setSelectedTab] = useState({selectedTab: 'Games'});
    
    tabs.map(tab => {
      tab.articles = articlesViewer.filter(article => article.Subject === tab.name);
    });
    
    function handleArticleSelected(selectedTab) {
        setSelectedTab({selectedTab});
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
            <ArticlesViewer articles={(tabs.find(tab => tab.name === selectedTab.selectedTab)).articles} />
        </div>
	)
};

export default ArticlesLayout;

