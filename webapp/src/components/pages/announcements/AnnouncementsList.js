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
        // fetch("/GetAnnouncements")
        // .then((res)=>{return res.json()})
        // .then(json=>{
        //     json.reverse();
        //     this.setState({announcementList:json});});
    }

    render () {
        return (
            <div class="container-fluid" style={{width:"100%"}}>
                <div className="row">
                    <div className="col">
                    {[

                        {title: "Brie Larson", text: "Brie Larson (born 1989) is an American actress and filmmaker who has received many awards and nominations. At age six, she became the youngest student admitted to a training program at the American Conservatory Theater. She began her acting career in 1998 with a comedy sketch in The Tonight Show with Jay Leno. Larson played supporting roles in the comedy films Hoot (2006), Scott Pilgrim vs. the World (2010), and 21 Jump Street (2012), and appeared as a sardonic teenager in the television series United States of Tara (2009–2011). After her breakthrough with a leading role in Short Term 12 (2013), she continued to take on supporting parts in The Spectacular Now (2013) and Trainwreck (2015). For playing a kidnapping victim in the drama Room (2015), Larson won the Academy Award for Best Actress. After playing a photojournalist in the adventure film Kong: Skull Island (2017), she starred as the titular superhero in the Marvel Cinematic Universe film Captain Marvel (2019)", postedDate: "today", name: "full stack", externalLink: "https://en.wikipedia.org/wiki/Brie_Larson"},
                        {title: "Hello", text: "asdf", postedDate: "yesterday", name: "game dev"},
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
