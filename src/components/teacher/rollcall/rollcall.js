import React from 'react';
import  InputTasksForm from './InputTasksForm';
import RollcallForm from './RollcallForm';
import Buttons from './Buttons';
import { useParams } from 'react-router-dom';

export default function Rollcall() {
   
        const params = useParams();
        const csid = params.cs_id;
   
        // console.log(csid)
        return (
         
                 //<InputTasksForm />
                 <RollcallForm/>
                //<Buttons/>
        )
    }
