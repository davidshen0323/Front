import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';

//import App from './App';
// import ReactApp from './components/React-app.js';
// import AcceptanceList from './components/student_acceptance_list.js';
// import QuestionList from './components/student_question_list.js';
import homepage1 from './components/Homepage1';
import homepage2 from './components/Homepage2';
import QuestionList from './components/student_question.js';
import TQuestionList from './components/teacher_question.js';
import AcceptanceList from './components/student_acceptance.js';
import TAcceptanceList from './components/teacher_acceptance.js';
import shomepage from './components/student_homepage.js';
import Rollcall from './components/rollcall.js';
import RollcallRecord from './components/rollcallrecord';
import Login from './components/login.js';
import Register from './components/register.js';
import ReactApp from './components/React-app.js';
import * as serviceWorker from './serviceWorker';
import Leavemanage from './components/leavemanage';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            {/* <Route path="/" component={homepage1}/> */}
            {/* <Route path="/question" component={QuestionList}/> */}
            {/* <Route path="/acceptance" component={AcceptanceList}/> */}
            
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/rollcall" component={Rollcall}/>
            <Route path="/leavemanage" component={Leavemanage}/>
            <Route path="/rollcallrecord" component={RollcallRecord}/> 
            <Route path="/homepage1" component={homepage1}/>
            <Route path="/homepage2" component={homepage2}/>
            <Route path="/question" component={QuestionList}/>
            <Route path="/tquestion" component={TQuestionList}/>
            <Route path="/acceptance" component={AcceptanceList}/>
            <Route path="/tacceptance" component={TAcceptanceList}/>
            <Route path="/homepage" component={shomepage}/>    
               
            <Route path="/" component={ReactApp}/>
        </Switch>
    </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();




// import React from 'react';
// import ReactDOM from 'react-dom';
// import ProductList from './components/product-list';

// ReactDOM.render(<ProductList />,document.getElementById('root'));





// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import PersonList from './PersonList';
// import QuestionList from './student_question_list';
// //import App from './App';
// //import registerServiceWorker from './registerServiceWorker'; //react 2.0
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<QuestionList/>, document.getElementById('root'));
// //registerServiceWorker(); //react 2.0
// serviceWorker.unregister();


