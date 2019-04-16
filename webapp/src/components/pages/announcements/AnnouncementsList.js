import React from 'react'
import AnnouncementCard from './AnnouncementCard'

export default class AnnouncementsList extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            announcementList:[]
        };

    }

    componentWillMount() {

        fetch("/announcementList")
            .then((res)=>{return res.json()})
            .then(json=>{
                json.reverse();
                this.setState({announcementList:json});});

    }

    render () {

        return (
            <div class="container-fluid" style={{width:"100%"}}>
                <div className="row">
                    <div className="col">
                        {this.state.announcementList.map((announcement) =>
                        {
                            let a = JSON.parse(announcement.announcement);
                            return <div><AnnouncementCard title={a.title} text={a.text} date={a.date} name={a.name} link={a.link} color={a.color}/></div>
                        })
                        }
                    </div>
                </div>
            </div>
        )
    }

}
