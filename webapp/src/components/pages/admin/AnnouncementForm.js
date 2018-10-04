import React from 'react'


export default class AnnouncementForm extends React.Component {
    constructor(props) {
        super();
        this.state={
            id:props.id,
            author:props.author,
            authorToken:props.authorToken,
            title:"",
            text:"",
            committees:[{name:"app",committeeId:1},{name:"not app",committeeId:2}],
            imageUrl:"",
            externalLink:"",
            selectedCommittee:"",


            
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {

    }
    componentDidMount() {
        fetch("/GetCommittees").then((res)=>res.json()).then((json)=>{this.setState({committees:json})});

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
                console.log(event.target.value);
                break;
        }
    }
    handleSubmit(event) {
        if(this.state.committeeId==-1){
            alert("Please select a committee!");
        }
        else{
            fetch('/AddEditAnouncement', {
                method: 'POST',
                /*mode:'no-cors',*/
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                    author:this.state.author,
                    authorToken:this.state.authorToken,
                    title:this.state.title,
                    text:this.state.text,
                    imageUrl:this.state.imageUrl,
                    externalLink:this.state.externalLink,
                    committeeId:this.state.committeeId
                    
            })
            });
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
                        <label for="title">Title</label>
                        <input type="text" id="title" class="form-control" placeholder="Title of Announcement" value={this.state.title} onChange={this.handleChange}/>
                        <label for="text">Text</label>
                        <input type="text" id="text" class="form-control" placeholder="Text of Announcement" value={this.state.text} onChange={this.handleChange}/>
                        <label for="image-url">Image Url</label>
                        <input type="text" id="image-url" class="form-control" placeholder="Link To image for announcement" value={this.state.imageUrl} onChange={this.handleChange}/>
                        <label for="external-link">External Link</label>
                        <input type="text" id="external-link" class="form-control" placeholder="Interesting External Link" value={this.state.externalLink} onChange={this.handleChange}/>
                        <label for="committee">Committee</label>
                        <select class="form-control" id="committee" onChange={this.handleChange}>
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
