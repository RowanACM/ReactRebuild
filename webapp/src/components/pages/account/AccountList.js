import React from 'react'
import AccountCard from "./AccountCard";
import AnnouncementCard from "../announcements/AnnouncementCard";

export default class AccountList extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            accountList:[],
            page: "Loading..."
        };

    }

    componentWillMount() {

    }

    componentDidMount() {

        let xml = new XMLHttpRequest();

        let onload = r => {

            let res = JSON.parse(xml.response);
            let list = [];

            for (let i = 0; i < res.length; i++) {
                let a = res[i];
                list.push(<div><AccountCard name={a.name} desc={a.desc} email={a.email} picture={a.picture}/></div>)
            }

            let page = (

                <div className="container-fluid" style={{width: "100%"}}>
                    <div className="row">
                        <div className="col">

                            {list.map(a => a)}

                        </div>
                    </div>
                </div>

            );

            this.setState({page: page});

        };

        onload = onload.bind(this);
        xml.open("GET", "/accountList");
        xml.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        xml.onload = onload;
        xml.send();

    }

    render () {

        return (
            this.state.page
        )
    }

}
