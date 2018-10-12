import React from 'react'


export default class Navigation extends React.Component {
    constructor(props) {
        super();
    }

    componentWillMount() {

    }
    componentDidMount() {


    }





    render () {

        return (
            <div>
                <input type="button" onClick={this.props.signIn}/>
                
            </div>
        )
    }

}
