import React from 'react';
import { RouteHandler } from 'react-router';
import SearchGithub from './SearchGithub';

/* 
Ceates a React component
Takes several properties:

* render: what the UI looks like for this component

*/  
// Main is a parent component that structures the whole page
// It can have nested views that are rendered depending on the url path navigated to

class Main extends React.Component {
    render(){
        return (
            // can only return one element
            // but can nest other react components e.g. <Children />
            // these would have their own render method that would get run
            // when <Main /> is rendered

            // RouteHandler view will be swapped out dependent on what 
              // url path ther user is on
              // Maps to nested routes in config/routes under Main handler
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
                        <SearchGithub />
                    </div>
                </nav>
                <div className="container">
                    <RouteHandler {...this.props} />
                </div>
            </div>
        )
    }
};

export default Main;