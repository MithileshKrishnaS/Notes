import React, { useState } from 'react';
import Notes from './Notes';

var details=[];


const Create = () => {
    const [send,sendState]=useState([])

    function create()
    {
        var each={
            title:"",
            content:""
        }
        each.title=document.getElementById('title').value;
        each.content=document.getElementById('content').value;
        details.push(each);
        document.getElementById('title').value='';
        document.getElementById('content').value='';
        sendState(oldArray => [...oldArray, each])
    }

    function deletes(name)
    {
        var sample=[]
        sendState(sample) 
        for(let i=0;i<details.length;i++)
        {     
            if(details[i].title!==name)
            {   
                sendState(oldArray => [...oldArray, details[i]])
            }
            else if(details[i].title===name)
            {
                details.splice(i,1);
                i--;
            }
        }    
    }

    return (
        <div>
            <div className="header">
                <h1><i class="far fa-sticky-note"></i> Notes Keeper</h1>
            </div>
            <br></br>
            <div className="note">
                <input type="text" id="title" placeholder="Title"></input><br></br> <br></br>            
                <input type="text" id="content" placeholder="Content"></input><br></br><br></br>
                <button type="submit" onClick={create} >+</button>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Notes data={send} deletes={deletes}></Notes>
        </div>
    )
}


export default Create
