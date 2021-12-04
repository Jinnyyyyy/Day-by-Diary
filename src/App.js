import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import React, { Component } from 'react';
import './App.css';
import DiaryList from './components/DiaryList/DiaryList';
import Navbar from './components/Navbar/Navbar';
import NewDiary from "./components/NewDiary/NewDiary";
import SignupPage from "./pages/SignupPage/SignupPage";
import userService from "./services/userService";
import LoginPage from "./pages/LoginPage/LoginPage";
import UpdateDiary from "./components/UpdateDiary/UpdateDiary";
// import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import Home from "./components/Home/Home";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      diary: [],
      user: userService.getUser()
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.handleUpdateDiary = this.handleUpdateDiary.bind(this)
  }
  

  componentDidMount() {
      fetch("/diarys/data")
          .then((res) => res.json())
          .then((data) => this.setState({ diary: data }))
          .then(() => console.log(this.state.diary))

    }
  
  handleDelete(event, id) {
      event.preventDefault()
      fetch(`/diarys/delete/${id}`, {
          method: 'DELETE',
          headers: new Headers({ 'Content-Type': 'application/json'})
      }).then((res) => res.json())
        .then((data) => this.setState({ diary: data }))
        
  }

  handleUpdateDiary(event, id) {
    // event.preventDefault()
    console.log('update')
    fetch(`/diarys/update/${id}`, {
        method: 'PUT',
        body: JSON.stringify(this.state),
        headers: new Headers({ 'Content-Type': 'application/json'})
    }).then((res) => res.json())
      
}

  // .then(() => this.props.history.push("/Diary"))

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()})
  }

  handleLogout = () => {
    userService.logout()
    this.setState({user: null})
  }
  
    render() {
      return (
        <div className="App">
        <Router>
            <Navbar currentUser={this.state.user} handleLogout={this.handleLogout}/>
            <Route path="/" exact>
                <Home/>
            </Route>

            <Route path="/Diary" exact>
              <DiaryList diary={this.state.diary}
                handleDelete={this.handleDelete}
                componentDidMount={this.componentDidMount}
              />
            </Route>

            <Route exact path="/Diary/update/:id">
              <UpdateDiary handleUpdateDiary={this.handleUpdateDiary}/>
            </Route>

            <Route exact path="/Diary/new">
              <NewDiary/>
            </Route>
            
            <Route path="/Signup">
              <SignupPage />
            </Route>

            <Route path="/login" render={({history}) =>
                <LoginPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}/>
            }>
            </Route>
            </Router>
          </div>          
      );
    }
  }



export default App;

