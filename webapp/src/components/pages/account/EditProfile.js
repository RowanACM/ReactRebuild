import React from 'react'
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default class AnnouncementForm extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            page: "",
            picture: props.picture,
            size: props.size
        };

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentWillMount() {

        let xml = new XMLHttpRequest();

        let onload = r => {

            let res = JSON.parse(xml.response);

            let page = (


                <div className={"container"} style={{padding: "30px"}}>

                    <div className={"container-fluid"}>

                        <div className={"card"}>

                            <div className={"card-header primary"}/>

                            <div className={"card-body"} style={{width: this.state.size + "px"}}>

                                <div>

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

                                            <form onSubmit={this.handleSubmit} id={"editProfile"}>
                                                <div className="form-group" id={"form"}>

                                                    <label htmlFor={"title"}>Name</label>
                                                    <input type={"text"} id={"name"} className={"form-control"} placeholder={"Name"}
                                                           defaultValue={res["name"]} required={true}/>

                                                    <label htmlFor={"text"}>Description</label>
                                                    <textarea id={"desc"} className={"form-control"} placeholder={"User bio"}
                                                              defaultValue={res["desc"]}/>

                                                </div>

                                                <button id={"editSubmit"} type={"submit"} className={"btn primary"}>Submit</button>

                                            </form>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            );

            this.setState({page: page});

        };

        onload = onload.bind(this);
        xml.onload = onload;

        xml.open("POST", "/tokensignin");
        xml.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        xml.send(JSON.stringify({
            info: true,
            idToken: cookies.get("token")
        }));

    }

    handleSubmit(event) {

        let a = {};

        let form = document.getElementById("form").children;
        for (let i = 0; i < form.length; i++) {

            let c = form[i];
            if (c.className === "form-control" && c.value !== "") {
                a[c.id] = c.value;
            }

        }

        let xml = new XMLHttpRequest();

        xml.open("POST", "/editAccount");
        xml.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        xml.send(JSON.stringify({
            idToken: cookies.get("token"),
            name: a.name,
            desc: a.desc
        }));

    }

    render () {
        return (
            this.state.page
        )
    }

}
