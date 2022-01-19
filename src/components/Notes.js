import React from 'react'

const Notes = (props) => {
    return (
        <div className="totalnote">
            {props.data?.map(input=>(
                <div className="eachnote">
                <p className="title">{input.title}</p>
                <p className="content">{input.content}</p>
                <button onClick={()=>props.deletes(input.title)}><i class="fas fa-trash"></i></button>
                </div>
            ))} 
        </div>
    )
}

export default Notes
