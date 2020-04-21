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
import AcceptanceList from './components/student/Acceptance/student_acceptance';
import TAcceptanceList from './components/teacher/Acceptance/teacher_acceptance';

import Rollcall from './components/teacher/rollcall/rollcall';
import RollcallRecord from './components/teacher/rollcallrecord/rollcallrecord';
import Leavemanage from './components/teacher/leaveMN/leavemanage';
import Login from './components/login.js';
import TInformation from './components/teacher/information/TInformation';
import StuInformation from './components/student/information/stuInformation';
import QAlist_T from './components/teacher/Question/QAlist_T';
import QAlist_S from './components/student/Question/QAlist_S';

import RollcallRD from './components/student/rollcall/rollcallRD';
import Register from './components/Register.js';


import selectHWs from'./components/student/Acceptance/SelectHW_S.js';
import selectHWt from'./components/teacher/Acceptance/SelectHW_T.js';

import ReactApp from './components/React-app.js';

import * as serviceWorker from './serviceWorker';

import post from './components/Post';

import MemberT from './components/teacher/member/member';
import MemberS from './components/student/member/member';

import RollcallBlockT from './components/teacher/rollcall/RollcallBlockT';
import LeaveBlockS from './components/student/leave/LeaveBlockS';
import QRcode from './components/teacher/rollcall/QRcode/QRcode';
import Hand from './components/teacher/rollcall/Hand/Hand';

import gps from './components/teacher/rollcall/GPS/GPS';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/post" component={post}/>
                
        {/*------------------ Teacher-----------------*/}
        <Route path="/homepaget" component={homepaget}/>
        <Route path="/functiont/:cs_id" component={functiont}/>
        <Route path="/RollcallBlockT/:cs_id" component={RollcallBlockT}/>
        <Route path="/rollcall/:cs_id" component={Rollcall}/>
        <Route path="/QRcode" component={QRcode}/> 
        <Route path="/Hand" component={Hand}/> 
        <Route path="/Gps" component={gps}/>
        <Route path="/rollcallrecord/:rc_id" component={RollcallRecord}/>
        <Route path="/leavemanage" component={Leavemanage}/>
        <Route path="/membert" component={MemberT}/>
        <Route path="/TInformation" component={TInformation}/>
        <Route pah="/QAlist_T" component={QAlist_T}/>
        <Route path="/selectHW_T/:cs_id" component={selectHWt}/>
        <Route path="/tacceptance" component={TAcceptanceList}/>


        {/*------------------ Student-----------------*/}
        <Route path="/homepages" component={homepages}/>           
        <Route path="/functions/:cs_id" component={functions}/>
        <Route path="/RollcallRD" component={RollcallRD}/>
        <Route path="/LeaveBlockS" component={LeaveBlockS}/>
        <Route path="/members" component={MemberS}/>
        <Route path="/StuInformation" component={StuInformation}/>
        <Route path="/acceptance/:cs_id/:hw_name" component={AcceptanceList}/>
        <Route path="/QAlist_S" component={QAlist_S}/>
        <Route path="/selectHW_S/:cs_id" component={selectHWs}/>

           
        </Switch>
    </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();




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


