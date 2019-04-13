import React from 'react'

export default class AnnouncementForm extends React.Component {
    constructor(props) {

        super(props);
        this.state= {
            id: props.id,
            author: props.adminUid,
            authorToken: props.adminToken,
            title: "",
            text: "",
            committees: [{name: "app", committeeId: 1}, {name: "not app", committeeId: 2}],
            imageUrl: "",
            externalLink: "",
            selectedCommittee: "",
            announcements: []

        };

    }

    componentWillMount() {

    }
    componentDidMount() {

    }

    handleChange(event) {

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

        a.date = new Date().getTime();

        const token = "token"; // Placeholder session token
        fetch(`http://localhost:5000/addAnnouncement?token=${token}&id=0&announcement=${JSON.stringify(a)}`);
     
    }

    render () {
        let style={
            padding:"50px"
        };
        return (
            <div style={style}>
                <form action={"#"} onSubmit={this.handleSubmit} id={"announcementForm"}>
                    <div class="form-group" id={"form"}>

                        <label htmlFor={"title"}>Title</label>
                        <input type={"text"} id={"title"} className={"form-control"} placeholder={"Title of announcement"} required={true}/>

                        <label htmlFor={"text"}>Text</label>
                        <textarea id={"text"} className={"form-control"} placeholder={"Text of announcement"} required={true}/>

                        <label htmlFor={"name"}>Name</label>
                        <input type={"text"} id={"name"} className={"form-control"} placeholder={"Name of author"} required={true}/>

                        <label htmlFor={"link"}>Link</label>
                        <input type={"text"} id={"link"} className={"form-control"} placeholder={"External link"}/>

                        <label htmlFor={"color"}>Color</label>
                        <input type={"text"} id={"color"} className={"form-control"} placeholder={"Color of announcement"}/>

                    </div>

                    <button id={"submit"} type={"submit"} className={"btn btn-primary"}>Submit</button>

                </form>
            </div>
        )
    }

}
