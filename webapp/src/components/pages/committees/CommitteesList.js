import React from 'react'
import CommitteeCard from './CommitteeCard';



export default class CommitteesList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            committees:[],
            page: ""
        }

    }

    componentWillMount() {

        let xml = new XMLHttpRequest();

        let onload = r => {

            let res = JSON.parse(xml.response);
            let list = [];

            for (let i = 0; i < res.length; i++) {
                let a = res[i];
                list.push(<div><CommitteeCard title={a.title} desc={a.desc} picture={a.picture} memberName={a.name} memberEmail={a.email}/></div>)
            }

            let page = (

                <div className="container-fluid" style={{padding: "35px", width: "100%", display: "flex", alignItems: "middle", justifyContent: "center", flexWrap: "wrap"}}>
                    {list.map(a => a)}
                </div>

            );

            this.setState({page: page});

        };

        onload = onload.bind(this);
        xml.open("GET", "/committeeList");
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
