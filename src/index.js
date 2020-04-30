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

import ViewAnnouncements from './components/student/announcement/viewAnnouncements';
import ViewAnnouncementt from './components/teacher/announcement/viewAnnouncementt';


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



// import gps from './components/teacher/rollcall/GPS/Gps';
// import findgeo from './components/teacher/rollcall/GPS/FindGeo';


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
            <Route path="/acceptance/:cs_id/:hw_name" component={AcceptanceList}/>
            <Route path="/ViewAnnouncements/:cs_id" component={ViewAnnouncements}/>
            <Route path="/ViewAnnouncementt/:cs_id" component={ViewAnnouncementt}/>
            <Route path="/tacceptance" component={TAcceptanceList}/>
            <Route path="/StuInformation" component={StuInformation}/>
            <Route path="/TInformation" component={TInformation}/>
            <Route path="/QAlist_T/:cs_id" component={QAlist_T}/>
            <Route path="/QAlist_S/:cs_id" component={QAlist_S}/>


            <Route path="/post" component={post}/>
            
            <Route path="/membert/:cs_id" component={MemberT}/>
            <Route path="/members/:cs_id" component={MemberS}/>

            <Route path="/RollcallBlockT/:cs_id" component={RollcallBlockT}/>
            <Route path="/QRcode" component={QRcode}/> 
            <Route path="/Hand" component={Hand}/>

            <Route path="/LeaveBlockS" component={LeaveBlockS}/>
            <Route path="/RollcallRD/:cs_id" component={RollcallRD}/>
            <Route path="/selectHW_S/:cs_id" component={selectHWs}/>

            <Route path="/selectHW_T/:cs_id" component={selectHWt}/>
            {/* <Route path="/Gps" component={gps}/>
            <Route path="/FindGeo" component={findgeo}/> */}

            <Route exact path="/" component={Login}/>

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


