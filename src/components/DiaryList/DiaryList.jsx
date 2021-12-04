import './DiaryList.css'
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

function DiaryList(props) {

    useEffect(() => {
        props.componentDidMount()
    }, []);

    return (
        <div>
            <div className="container">
            {props.diary.map((diary, idx) => (
                <div className="diarylist">
                <ul className="liststyle">
                        <li key={idx}>
                                <img src={diary.canvas} /><br/>
                                <div>{diary.title}</div><br/>
                                <div>{diary.text}</div><br/>
                                <div>{diary.date}</div><br />
                                {/* <Link to={ `/diarys/${this.props.match.params.id}/edit`}></Link> */}
                            <Link to={`/Diary/update/${diary._id}`}>Edit</Link>
                                <input value="Delete"
                                    className="deletebtn"
                                    onClick={(event)=> props.handleDelete(event,diary._id)}
                                type="submit" />
                            </li>
                    </ul>
                </div>
                ))}
             </div>
        </div>    
    )
}
  

export default DiaryList

