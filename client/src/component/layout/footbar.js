import React, { Component } from 'react'

export default class footbar extends Component {
    render() {
        return (
            <div>
                  <section id="footer-area">
      
        <div className="footer-widget-area">
            <div className="container">
                <div className="row">
                  
                    <div className="col-lg-4 col-md-6">
                        <div className="single-footer-widget">
                            <h2>About Us</h2>
                            <div className="widget-body">
                                <img src="assets/img/logo.png" alt="JSOFT"/>
                                <p>Hello India!</p>

                                <div className="newsletter-area">
                                    <form action="/">
                                        <input type="email" placeholder="Subscribe Our Newsletter"/>
                                        <button type="submit" className="newsletter-btn"><i className="fa fa-send"></i></button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                   
                    <div className="col-lg-4 col-md-6">
                        <div className="single-footer-widget">
                            <h2>Recent Posts</h2>
                            <div className="widget-body">
                                <ul className="recent-post">
                                    <li>
                                        <a href="/">
                                           Hello India! 
                                           <i className="fa fa-long-arrow-right"></i>
                                       </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                        Hello India!
                                           <i className="fa fa-long-arrow-right"></i>
                                       </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                           Hello India! 
                                           <i className="fa fa-long-arrow-right"></i>
                                       </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                        Hello India!
                                           <i className="fa fa-long-arrow-right"></i>
                                       </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-lg-4 col-md-6">
                        <div className="single-footer-widget">
                            <h2>get touch</h2>
                            <div className="widget-body">
                                <p>Hello India!</p>
                                <ul className="get-touch">
                                    <li><i className="fa fa-map-marker"></i> 800/8, rajasthan</li>
                                    <li><i className="fa fa-mobile"></i> +880 08 88 88 88 88</li>
                                    <li><i className="fa fa-envelope"></i> info@gmail.com</li>
                                </ul>
                                <a href="/" className="map-show" >Show Location</a>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
       
        <div className="footer-bottom-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <p>
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved  <i className="fa fa-heart-o" aria-hidden="true"></i> 
</p>
                    </div>
                </div>
            </div>
        </div>
     
    </section>
    
    <div className="scroll-top">
        <img src="assets/img/scroll-top.png" alt="JSOFT"/>
    </div>
            </div>
        )
    }
}
