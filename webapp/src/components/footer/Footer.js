import React from 'react'

export default class Footer extends React.Component {
    render() {


        return (
            <div>    <div style={{margin:"auto", display:"in-line" ,width:"50%",textAlign:"center"}}>
              <a href="https://twitter.com/RowanACM">
                                <span class="fa-stack fa-lg">
                                    <i class="fa fa-circle fa-stack-2x"></i>
                                    <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                      
                       
                            <a href="https://www.facebook.com/rowanacm">
                                <span class="fa-stack fa-lg">
                                    <i class="fa fa-circle fa-stack-2x"></i>
                                    <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                      
                        
                            <a href="https://github.com/rowanacm">
                                <span class="fa-stack fa-lg">
                                    <i class="fa fa-circle fa-stack-2x"></i>
                                    <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        
                    
                    
                
                
               
              
            </div>
            <p class="copyright text-muted" style={{margin:"auto", display:"in-line" ,width:"50%",textAlign:"center"}}>Copyright © Rowan ACM 2018</p>
            </div>
        
            
        )
    }
}
