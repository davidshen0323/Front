import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';

//import App from './App';
// import ReactApp from './components/React-app.js';
import homepage1 from './components/student/Homepage1';
import homepage2 from './components/student/Homepage2';
import addexam from './components/teacher/addexam';
import QuestionList from './components/student/student_question';
import TQuestionList from './components/teacher/teacher_question';
import AcceptanceList from './components/student/student_acceptance';
import TAcceptanceList from './components/teacher/teacher_acceptance';
import shomepage from './components/student/student_homepage';
import Rollcall from './components/teacher/rollcall/rollcall';
import RollcallRecord from './components/teacher/rollcallrecord/rollcallrecord';
import Leavemanage from './components/teacher/leaveMN/leavemanage';
import Login from './components/login.js';
import Register from './components/Register.js';
import ReactApp from './components/React-app.js';
import * as serviceWorker from './serviceWorker';

import rollcallBlock from './components/teacher/rollcallBlock';
import post from './components/Post';

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
            <Route path="/questions" component={QuestionList}/>
            <Route path="/tquestion" component={TQuestionList}/>
            <Route path="/acceptance" component={AcceptanceList}/>
            <Route path="/tacceptance" component={TAcceptanceList}/>

            <Route path="/post" component={post}/>
            
            <Route path="/addexam" component={addexam}/>
            <Route path="/homepage" component={shomepage}/>
            <Route path="/rollcallBlock" component={rollcallBlock}/>        

            <Route exact path="/" component={ReactApp}/>
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


