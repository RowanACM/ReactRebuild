import React from 'react'
import AnnouncementCard from './AnnouncementCard'

export default class AnnouncementsList extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            announcementList:[]
        }
    }

    componentWillMount() {

    }
    componentDidMount() {
        fetch("/GetAnnouncements")
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
                    {[

                        {title: "Full stack thing", text: "This is a test", postedDate: "today", name: "full stack", externalLink: "http://rowan.edu"},
                        {title: "Hello", text: "asdf", postedDate: "yesterday", name: "game dev", externalLink: "http://rowan.edu"},
                        {title: "What's the best committee? The results are in", text: "It's full stack", postedDate: "idk", name: "full stack", externalLink: "http://rowan.edu"},

                    ].map((announcement, i) =>
                        {
                            return <div><AnnouncementCard title={announcement.title} text={announcement.text} postedDate={announcement.postedDate} committee={announcement.name} externalLink={announcement.externalLink}/></div>
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }

}
