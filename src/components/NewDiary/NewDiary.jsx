import React, { Component} from 'react'
import './NewDiary.css'
// import Picker from 'emoji-picker-react';
import { ReactSketchCanvas } from 'react-sketch-canvas';

class NewDiary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title:'',
            text: '',
            date: '',
            canvas:''
        }
        this.canvas = React.createRef();

    }

    handleAddChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
 
    handleAddDiarysSumbit = async (event) => {
        // event.preventDefault()
        // console.log("canvas",this.canvas)
        // console.log("state", this.state)
        await this.handleExport();
        fetch('/diarys/sumDiary', {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(this.state),
        }).then((res) => res.json())
        .then(data => console.log(data))
    }

    handleExport = async () => {
        // console.log("clicked");
        const exportDiary = await this.canvas.current.exportImage();
        this.setState({canvas : exportDiary })
        // console.log(exportDiary);
      };
    
    // onEmojiClick = (event) => {
    //     this.useState({[event.target.name]:event.target.value
    //     })
    // }

    render() {
        const drawBoard = {
            width: "520px",
            height:"350px"
        }
        return (
            <div className="background">
                <div className="newdiary">
                    <form onSubmit={this.handleAddDiarysSumbit}>
                        <div className="canvas">
                            <ReactSketchCanvas name="canvas"
                                className="canvas"
                                style={drawBoard}
                                ref={this.canvas} strokeWidth={4} strokeColor="black" />
                            {/* <button className="canvasbtn" onClick={() => {
                                this.canvas.current.exportImage("png")
                                .then(data => { console.log(data); })
                                .catch(e => {console.log(e);});}}>eraser</button> */}
                        </div>
                        <div className="title">
                            <input type='text' placeholder="Title" name="title"
                                className="titlename"
                                onChange={this.handleAddChange} />
                        </div>
                        <div className="textbox">
                            <textarea type="text" rows="6" cols="55"
                                placeholder="What did you do today??"
                                name="text"
                                onChange={this.handleAddChange}
                            />
                            {/* <Picker onEmojiClick={this.onEmojiClick} /> */}
                        </div>
                        <div>
                        <input type='date'
                                className='date'
                                name="date"
                            onChange={this.handleAddChange} />
                        </div>
                        <div className="addbtn">
                            <input value="Add Diary" type="Submit" className="btn"/>
                        </div>

                    </form>
                    </div>
            </div>     
        )
    }
}


export default NewDiary

