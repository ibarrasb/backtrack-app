import React, {useContext} from 'react';
import {GlobalState} from '../../../GlobalState'
import './home.css'
import Posts from '../posts/posts'

function Home() {
    const state = useContext(GlobalState)
    const [isLogged] = state.UserAPI.isLogged
    const [name] = state.UserAPI.name
    //const [username] = state.UserAPI.username
 
   

    return (
        <div>
            <h1 className="home-page"> {isLogged ? `Welcome back ${name}` : 'Home'}</h1>
            <Posts/>
        </div>
    );
}

export default Home;