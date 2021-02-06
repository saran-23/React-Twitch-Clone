
import React from  'react';
import {Router,Route,Switch} from 'react-router-dom';


import StreamCreate from './record/StreamCreate';
import StreamEdit from './record/StreamEdit';
import StreamDelete from './record/StreamDelete';
import StreamList from './record/StreamList';
import StreamShow from './record/StreamShow';
import Header from './Header';
import history from '../history';

const App = () => {
    return  (
    
            <div className ="ui container">
                    
        <Router history={history}>                                                         
        <div>
        <Header />
        <Switch>
            <Route path ="/" exact component = {StreamList}/>
            <Route path ="/record/new" exact component = {StreamCreate}/>
            <Route path ="/record/edit/:id" exact component = {StreamEdit}/>
            <Route path ="/record/delete/:id" exact component = {StreamDelete}/>
            <Route path ="/record/:id" exact component = {StreamShow}/>
        </Switch>
            </div>

        </Router>
    
        </div>
    );
};

export default App;                         