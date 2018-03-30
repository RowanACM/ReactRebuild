
import React, { Component } from 'react';
import '../App.css';




export default class CirclePicture extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

    const style = {

        borderRadius: "50%",
        imageRendering: "crisp-edges"

    }
        return <div >
            <img className="App-logo" alt="logo" style={style} src="https://yt3.ggpht.com/a-/AJLlDp0VyC27hSwTHNrMxTVKxEJPN5s940d6pEH9RA=s88-mo-c-c0xffffffff-rj-k-no"/>
        </div>


    }
}


