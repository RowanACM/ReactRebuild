import React from 'react'
import AnnouncementCard from './AnnouncementCard'

export default class AnnouncementsList extends React.Component {
    constructor(props) {
        super();
        this.state={
            announcementList:[]
        }
    }

    componentWillMount() {

    }
    componentDidMount() {
        fetch("/GetAnnouncements")
        .then((res)=>{return res.json()})
        .then(json=>this.setState({announcementList:json}));
    }

    render () {
        return (
            <div class="container">
                {this.state.announcementList.map((announcement, i) =>
                    {
                        return <div><AnnouncementCard title={announcement.title} text={announcement.text} postedDate={announcement.postedDate}><div>
                    })
                }
            </div>
        )
    }

}
