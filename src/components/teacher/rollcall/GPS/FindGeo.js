// export default function geoFindMe() {
//     var output = document.getElementById("target");
//     var watchid;

//     if (!navigator.geolocation){
//       output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
//       return;
//     }

//     function success(position) {

//       var latitude  = position.coords.latitude;
//       var longitude = position.coords.longitude;

//       var today = new Date();
//       var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//       var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//       var dateTime = date+' '+time;
//       output.innerHTML = '<p>緯度:' + latitude + '<br>經度:' + longitude + '<br>'
//        + dateTime + '</p>';

//     };

//     function error() {
//       output.innerHTML = "未授權，無法取得位置";
//     };

//     output.innerHTML = "<p>定位中...</p>";

//     watchid = navigator.geolocation.watchPosition(success, error);
//   }

//   import React from 'react';
//   // import Typography from '@material-ui/core/Typography';
// import { Button } from '@material-ui/core';

//   export default function GeoFindMe() {

//     if (!navigator.geolocation){
//             // output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
//             // alert("Geolocation is not supported by your browser");     
//             // return ("Geolocation is not supported by your browser");
//     }

   
      
//       function success(position) {
//         const latitude  = position.coords.latitude;
//         const longitude = position.coords.longitude;
        
//         console.log(latitude);
//         console.log(longitude);

//         // const today = new Date();
//         // const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//         // const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         // const dateTime = date+' '+time;
//         // output.innerHTML = '<p>緯度:' + latitude + '<br>經度:' + longitude + '<br>'
//         //  + dateTime + '</p>';
//         // alert("latitude: " + latitude + " longtitude: " + longitude);
//         // return (latitude + longitude);
//           //  + today + date + time + dateTime
          
          
//       };
  
//       function error() {
//         // alert("未授權，無法取得位置");
//         // return ("Error! Cannot get your location!")
//       };
      
//       const watchid = navigator.geolocation.watchPosition(success, error);
      
    

//     return(
//       <div>
//         {watchid}

//       </div>
//     )

//   }
// import React, {useState, useEffect} from 'react';

// export default function FindGeo()  {
//   const [position, setPosition] = useState({});
//   const [error, setError] = useState(null);
  
//   const onChange = ({coords}) => {
//     setPosition({
//       latitude: coords.latitude,
//       longitude: coords.longitude,
//     });
//   };
//   const onError = (error) => {
//     setError(error.message);
//   };
//   useEffect(() => {
//     const geo = navigator.geolocation;
//     if (!geo) {
//       setError('Geolocation is not supported');
//       return;
//     }

//     const watcher = geo.watchPosition(onChange, onError);
//     return () => geo.clearWatch(watcher);
//   }, []);
  
//   return {...position, error};
// }