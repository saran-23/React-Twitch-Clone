import React from  'react';
import {BrowserRouter,Link,Route} from 'react-router-dom';


const PageOne = () => {
    return  ( 
    <div>Page
    <Link to="/pagetwo">pagetwo</Link>
    </div>
    
    );
}

const PageTwo  =() => {
    return <div>Page Two</div>
}

const App = () => {
    return  (
    
        <BrowserRouter>
        <div>
            <Route path="/" exact component={PageOne}/>        
            <Route path="/pagetwo" component={PageTwo}/>
            </div>
        </BrowserRouter>
    
    );
};

export default App;