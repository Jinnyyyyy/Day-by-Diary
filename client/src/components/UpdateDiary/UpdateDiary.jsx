import React, { useState } from 'react'
import style from './UpdateDiary.css'
import { useParams } from 'react-router-dom'
// import { ReactSketchCanvas } from 'react-sketch-canvas';

function UpdateDiary(props) {
    // const history = useHistory()
    const { id } = useParams();
    // const [editedDiary, setEditedDiary] = useState('')
    const [postData, setPostData] = useState({ title: '', text: '', date: '' })

    // // useEffect(() => {
    // //     if(diary)setpostdata(diary)
    // // },[diary]) 

    // const handleNameChange = (event) => {
    //     setEditedDiary(event.target.value)
    // }

    // const handleFormSubmit = async (event) => {
    //     // event.preventDefault();
    //     history.push('/Diary')

    // }

    const handleUpdateDiary = (event, id) => {
        // event.preventDefault()
        console.log('update')
        console.log(id)
        fetch(`/diarys/update/${id}`, {
            method: 'PUT',
            body: JSON.stringify(postData),
            headers: new Headers({ 'Content-Type': 'application/json'})
        }).then((res) => res.json())
          
    }
 
    return (
    <div className={style.diary}>
        <div className="background">
                <div className="newdiary">
                    <form onSubmit={(e) => handleUpdateDiary(e,id)}>
                        <div className="title">
                            <input type='text' placeholder="Title" name="title"
                                className="titlename"
                                // defaultValue={props.diary.title} 
                                onChange={(e) => setPostData({...postData, title:e.target.value})} />
                        </div>
                        <div className="textbox">
                            <textarea type="text" rows="6" cols="55"
                                placeholder="What did you do today??"
                                name="text"
                                // defaultValue={props.diary.text}
                                onChange={(e) => setPostData({...postData, text:e.target.value})}
                            />
                        </div>
                        <div>
                        <input type='date'
                                className='date'
                                name="date"
                                    // defaultValue={props.diary.date}
                                onChange={(e) => setPostData({...postData, date:e.target.value})}/>
                        </div>
                        <div className="addbtn">
                            <button type="submit" className="btn">Edit Diary</button>
                        </div>

                    </form>
                    </div>
            </div>
        </div>
    )
}

export default UpdateDiary
