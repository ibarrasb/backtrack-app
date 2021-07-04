import React, {useContext, useState} from 'react';
import {GlobalState} from '../../../GlobalState'

function Home() {
    const state = useContext(GlobalState)
    const [isLogged] = state.UserAPI.isLogged
    const [name] = state.UserAPI.name
    const [username] = state.UserAPI.username
    console.log(name)
   

    return (
        <div>
            <h1> {isLogged ? `Welcome ${name} | ${username}` : 'Home'}</h1>
        </div>
    );
}

export default Home;