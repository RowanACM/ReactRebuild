import React from 'react'


export default class AccountCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            email: props.email,
            desc: props.desc,
            picture: props.picture
        };

    }

    componentWillMount() {
    }

    componentDidMount() {

    }

    render() {

        return (

            <div className={"container"} style={{padding: "30px"}}>

                <div className={"container-fluid"}>

                    <div className={"card"}>

                        <div className={"card-header primary"}/>

                        <div className={"card-body"}>

                            <div className={"row p-3"}>

                                <div className={"col-3"} style={{borderRight: "solid lightgrey 1px", display: "flex", alignItems: "center", justifyContent: "middle"}}>

                                    <div style={{
                                        paddingTop: "90%",
                                        width: "90%",
                                        backgroundImage: `url(${this.state.picture})`,
                                        backgroundRepeat: "norepeat",
                                        backgroundPosition: "center",
                                        backgroundSize: "100%",
                                        borderRadius: "100%"
                                    }}/>

                                </div>

                                <div className={"col-9"}>
                                    <div style={{padding: "10px 0 10px 0"}}>
                                        <h1>{this.state.name}</h1>
                                        <h4>{this.state.email}</h4>
                                    </div>

                                    <p>{this.state.desc}</p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


        )
    }

}
