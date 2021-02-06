
import React from  'react';
import {Router,Route,Switch} from 'react-router-dom';


import RecordCreate from './record/RecordCreate';
import RecordEdit from './record/RecordEdit';
import RecordDelete from './record/RecordDelete';
import RecordList from './record/RecordList';
import RecordShow from './record/RecordShow';
import Header from './Header';
import history from '../history';

const App = () => {
    return  (
    
            <div className ="ui container">
                    
        <Router history={history}>                                                         
        <div>
        <Header />
        <Switch>
            <Route path ="/" exact component = {RecordList}/>
            <Route path ="/record/new" exact component = {RecordCreate}/>
            <Route path ="/record/edit/:id" exact component = {RecordEdit}/>
            <Route path ="/record/delete/:id" exact component = {RecordDelete}/>
            <Route path ="/record/:id" exact component = {RecordShow}/>
        </Switch>
            </div>

        </Router>
    
        </div>
    );
};

export default App;                         