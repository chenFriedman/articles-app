import React from 'react';
import firebase from './firebase';
import ArticlesLayout from './articles-layout-component/articles-layout-component';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      articlesdb: [],
    };
  };

    componentDidMount() {
      // this.getUserData();
    };
    
    componentDidUpdate(prevProps, prevState) {
      // if (prevState !== this.state) {
      //   this.writeUserData();
      // }
    }

    writeUserData = () => {
      firebase.database().ref("articlesdb").set(this.state);
    }
    
    getUserData = () => {
      const articleRef = firebase.database().ref("articlesdb");
      articleRef.on('value', (snapshot) => {
        let articlesdb = snapshot.val();
        let newstate = [];
        for (let article in articlesdb) {
          newstate.push({
            articleTitle: article.Title
          });
        }
        this.setState({articlesdb: newstate});
      });
    }
  
    render() {
      return (
        <div>
      <ArticlesLayout /> 
      </div>
    )}
}

export default App;