import React from 'react';
import MyMenu from './MenuisLogouted';
import Login from './login';
export default function ReactApp() {

    
    
    // function FormRow() {
    //     return (
    //       <React.Fragment>
    //         <Grid item xs={4}>
    //           <Paper className={classes.paper}>item</Paper>
    //         </Grid>
            
    //         <Grid item xs={8}>
    //           <Paper className={classes.paper}><TextField>請輸入課程名稱</TextField></Paper>
    //         </Grid>
    //       </React.Fragment>
    //     );
    //   }


  return (
    <div>
      
      <Login />
      
    </div>
    
  )

}


// import React from 'react';
// import axios from 'axios';
// import EmployeeList from './employee-list'
// import EmployeeAdd from './employee-add'
 
// export default class ReactApp extends React.Component {
 
//     constructor(props) {
//         super(props);
//         this.state = {employees: []};
//         this.Axios = axios.create({
//             baseURL: "/employee",
//             headers: {'content-type': 'application/json'}
//         });
//     }
 
//     componentDidMount() {
//         let _this = this;
//         this.Axios.get('/')
//           .then(function (response) {
//              console.log(response);
//             _this.setState({employees: response.data});
//           })
//           .catch(function (error) {
//             console.log(error);
//           });
//     }
 
//     render() {
//         return (
//                 <div>
//                   <EmployeeAdd/>
//                   <EmployeeList employees={this.state.employees}/>
//                 </div>
//             )
//     }
// }