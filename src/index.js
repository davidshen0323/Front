import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';

//import App from './App';
// import ReactApp from './components/React-app.js';
import homepages from './components/student/HomepageS';
import functions from './components/student/FunctionS';
import homepaget from './components/teacher/HomepageT';
import functiont from './components/teacher/FunctionT';
import addexam from './components/teacher/addexam';
import QuestionList from './components/student/student_question';
import TQuestionList from './components/teacher/teacher_question';
import AcceptanceList from './components/student/Acceptance/student_acceptance';
import TAcceptanceList from './components/teacher/teacher_acceptance';
import shomepage from './components/student/student_homepage';
import Rollcall from './components/teacher/rollcall/rollcall';
import RollcallRecord from './components/teacher/rollcallrecord/rollcallrecord';
import Leavemanage from './components/teacher/leaveMN/leavemanage';
import Login from './components/login.js';

import StuInformation from './components/student/information/stuInformation';
import QAlist_T from './components/teacher/QAlist_T';
import QAlist_S from './components/student/QAlist_S';

import RollcallRD from './components/student/rollcall/rollcallRD';
import Register from './components/Register.js';




import selectHW from'./components/student/Acceptance/selectHW.js'
import ReactApp from './components/React-app.js';

import * as serviceWorker from './serviceWorker';

import post from './components/Post';

import examresult from './components/teacher/ExamResult';
import Member from './components/teacher/member/member';

import RollcallBlockT from './components/teacher/rollcall/RollcallBlockT';
import RollcallBlockS from './components/student/RollcallBlockS';
import QRcode from './components/teacher/rollcall/QRcode/QRcode';
import Hand from './components/teacher/rollcall/Hand/Hand';



ReactDOM.render(
    <BrowserRouter>
        <Switch>
            {/* <Route path="/" component={homepage1}/> */}
            {/* <Route path="/question" component={QuestionList}/> */}
            {/* <Route path="/acceptance" component={AcceptanceList}/> */}
            
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/rollcall/:cs_id" component={Rollcall}/>
            <Route path="/leavemanage" component={Leavemanage}/>
            <Route path="/rollcallrecord" component={RollcallRecord}/> 
            <Route path="/homepages" component={homepages}/>
            <Route path="/functions/:cs_id" component={functions}/>
            <Route path="/homepaget" component={homepaget}/>
            <Route path="/functiont/:cs_id" component={functiont}/>
            <Route path="/questions/:cs_id" component={QuestionList}/>
            <Route path="/tquestion" component={TQuestionList}/>
            <Route path="/acceptance/:cs_id/:hw_name" component={AcceptanceList}/>
            <Route path="/tacceptance" component={TAcceptanceList}/>
            <Route path="/StuInformation" component={StuInformation}/>
            <Route path="/QAlist_T" component={QAlist_T}/>
            <Route path="/QAlist_S" component={QAlist_S}/>


            <Route path="/post" component={post}/>
            

            <Route path="/examresult" component={examresult}/>
            <Route path="/member" component={Member}/>
            <Route path="/addexam" component={addexam}/>
            <Route path="/homepage" component={shomepage}/>

            <Route path="/RollcallBlockT" component={RollcallBlockT}/>
            <Route path="/QRcode" component={QRcode}/> 
            <Route path="/Hand" component={Hand}/>

            <Route path="/RollcallBlockS" component={RollcallBlockS}/>
            <Route path="/RollcallRD" component={RollcallRD}/>

            <Route path="/selectHW/:cs_id" component={selectHW}/>
            

            <Route exact path="/" component={Login}/>
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


