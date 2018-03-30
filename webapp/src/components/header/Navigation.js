import React from 'react'
import CirclePicture from '../CirclePicture'

export default class Navigation extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {

    }
    componentDidMount() {


    }





    render () {

        const style = {
            display:"flex",

        }

        return (
            <div style={style} >

                <CirclePicture/>
                <div>Galby the destroyer</div>
                <button> Join Team Galby</button>
            </div>
        )
    }

}
