import React from 'react'


export default class Jumbotron extends React.Component {
    constructor(props) {
        super();

        this.state = {

            title: props.title,
            subtitle: props.subtitle,
            img: props.img

        };

        this.title = this.state.title;
        this.subtitle = this.state.subtitle;
        this.img = this.state.img;

    }

    componentWillMount() {

    }
    componentDidMount() {


    }





    render () {

        return (
            
                <div className={"jumbotron"} style={{height:"700px",backgroundImage: `url(${this.img})`}}>
                    <div className={"container"}>

                        <h1>{this.title}</h1>

                        <div id={"jumboSubtitle"}>
                            {this.subtitle}
                        </div>

                    </div>
                </div>

                
            
        )
    }

}
