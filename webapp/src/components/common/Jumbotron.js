import React from 'react'

export default class Jumbotron extends React.Component {
    constructor(props) {
        super();

        this.state = {

            title: props.title,
            subtitle: props.subtitle,
            img: props.img

        };

        this.title = this.state.title;
        this.subtitle = this.state.subtitle;
        this.img = this.state.img;

        const parallaxFactor = 1.5; // Higher values result in a stronger parallax effect, 0 being no effect at all
        const fadeFactor = 0.75; // Higher values result in a stronger fade, 0 being no fade at all
        const minHeight = 0; // Percentage of original height to which the jumbotron will be allowed to contact
        const fadeColor = "#000000"; // Parallax fade color

        // Parallax
        // document.onscroll = function () {
        //
        //     // TODO: jQuery would probably work better
        //     for (let j of document.getElementsByClassName("jumbotron")) {
        //
            //     // Checks if it is the first time this element has been seen
            //     if (j.parallaxHeight == undefined) {
            //         j.parallaxHeight = j.clientHeight;
            //         let overlay = document.createElement("div");
            //         overlay.className = "parallaxOverlay";
            //         overlay.style.borderRadius = ".3rem"; // Just kinda have to hard-code this for now
            //         overlay.style.backgroundColor = fadeColor;
            //         overlay.style.opacity = "0";
            //         overlay.style.width = "100%";
            //         overlay.style.zIndex = "1";
            //         overlay.style.position = "absolute";
            //         j.parentElement.insertBefore(overlay, j);
            //     }
            //
            //     let scroll = window.scrollY;
            //     let height = j.clientHeight;
            //
            //     // Avoids stuttering
            //     if (j.getBoundingClientRect().top + height <= 0 || scroll + window.innerHeight == document.body.clientHeight) {
            //         return;
            //     }
            //
            //     let parallax = Math.max(minHeight * j.parallaxHeight, j.parallaxHeight - parallaxFactor * scroll);
            //     j.style.height = parallax + "px";
            //
            //     for (let overlay of document.getElementsByClassName("parallaxOverlay")) {
            //         overlay.style.opacity = (fadeFactor * (1 - parallax / j.parallaxHeight)).toString();
            //         overlay.style.height = j.style.height;
            //     }
            //
            // }
        //
        // }

    }

    componentWillMount() {

    }
    componentDidMount() {


    }





    render () {

        return (
            
                <div className={"jumbotron"} style={{height:"700px",backgroundImage: `url(${this.img})`}}>
                    <div className={"container"}>

                        <h1>{this.title}</h1>

                        <div id={"jumboSubtitle"}>
                            {this.subtitle}
                        </div>

                    </div>
                </div>

                
            
        )
    }

}
