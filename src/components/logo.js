import React from 'react'
//import logoImg from './job.png'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


export default function Logo(){
   
        return (
            <div className="logo-container">
                <img className="logo-img" src={AccountCircleIcon} alt=""/>
            </div>
        )
    }

