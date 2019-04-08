import React from 'react'


export default class AnnouncementForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            id:props.id,
            author:props.adminUid,
            authorToken:props.adminToken,
            title:"",
            text:"",
            committees:[{name:"app",committeeId:1},{name:"not app",committeeId:2}],
            imageUrl:"",
            externalLink:"",
            selectedCommittee:"",
            announcements:[]


            
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {

    }
    componentDidMount() {
        fetch("/committees.json").then((res)=>res.json()).then((json)=>{this.setState({committees:json})});
        fetch("/announcementsList.json").then((res)=>res.json()).then((json)=>{this.setState({announcements:json})});

    }
    handleChange(event) {
        switch(event.target.id){
            case "title":
                this.setState({title: event.target.value});
                break;
            case "text":
                this.setState({text:event.target.value});
                break;
            case "image-url":
                this.setState({imageUrl:event.target.value});
                break;
            case "external-link":
                this.setState({externalLink:event.target.value});
                break;
            case "committee":
                this.setState({committeeId:event.target.value});
                break;
            case "announcement":
                
                if(event.target.value!=-1){
                    fetch("/getAnnouncement/"+event.target.value)
                    .then((res)=>
                        
                        res.json())
                    .then((json)=>{
                        console.log(json);
                        this.setState(json);
                    })
                }
                else{
                    this.setState(
                        {
                        id:this.props.id,
                        author:this.props.adminUid,
                        authorToken:this.props.adminToken,
                        title:"",
                        text:"",
                    
                        imageUrl:"",
                        externalLink:"",
                        selectedCommittee:"",
                        
                        committeeId:-1});
                        
                }
                this.setState({announcementId:event.target.value});
                break;
        }
    }
    handleSubmit(event) {
        if(this.state.committeeId==-1){
            alert("Please select a committee!");
        }
        else{
            console.log(this.state.author);

            let j;

            if(this.state.announcementId!=-1){
                j={
                    name: this.state.title,
                    desc: this.state.text,
                    postedDate: this.state.postedDate,
                    picUrl: this.state.imageUrl,
                    committee: this.state.committee,
                    externalLink: this.state.externalLink,
                    color: this.state.color // Optional
            }
            else{
                j={
                    author:this.state.author,
                    authorToken:this.state.authorToken,
                    title:this.state.title,
                    text:this.state.text,
                    imageUrl:this.state.imageUrl,
                    externalLink:this.state.externalLink,
                    committeeId:this.state.committeeId};
            }
            fetch('/AddEditAnouncement', {
                method: 'POST',
                /*mode:'no-cors',*/
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(j)
            }).then(alert("done"));
        }
     
    }

    render () {
        var style={
            padding:"50px"
        }
        return (
            <div style={style}>
                <form>
                    <div class="form-group">
                        <select class="form-control" id="announcement" onChange={this.handleChange}>
                        <option value={-1}>CREATE NEW</option>
                        {this.state.announcements.map((c,i)=>{
                            return <option value={c.announcementId}>{c.title}</option>
                        })}
                        </select>
                        <label for="title">Title</label>
                        <input type="text" id="title" class="form-control" placeholder="Title of Announcement" value={this.state.title} onChange={this.handleChange}/>
                        <label for="text">Text</label>
                        <input type="text" id="text" class="form-control" placeholder="Text of Announcement" value={this.state.text} onChange={this.handleChange}/>
                        <label for="image-url">Image Url</label>
                        <input type="text" id="image-url" class="form-control" placeholder="Link To image for announcement" value={this.state.imageUrl} onChange={this.handleChange}/>
                        <label for="external-link">External Link</label>
                        <input type="text" id="external-link" class="form-control" placeholder="Interesting External Link" value={this.state.externalLink} onChange={this.handleChange}/>
                        <label for="committee">Committee</label>
                        <select class="form-control" id="committee" onChange={this.handleChange} value={this.state.committeeId}>
                        <option value={-1}>Please select a committee</option>
                        {this.state.committees.map((c,i)=>{
                            return <option value={c.committeeId}>{c.name}</option>
                        })}
                        </select>
                        <input type="button" id="submit" class="form-control" onClick={this.handleSubmit} value="Submit" style={{width:"100px", marginTop:"30px"}}></input>


                    </div>
                </form>
            </div>
        )
    }

}
