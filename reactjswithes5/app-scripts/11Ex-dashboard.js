
var PageComponent = React.createClass({
    render: function () {

        return (
            <div className="container">
                <TopBar />
                <LogoBar />
                <MainNav brand="Samsung-Harman" />
                <MainContentArea />
                <ContextBar />
                <FooterBar />
            </div>
        )
    }
});

//topbar component
var TopBar = React.createClass({
    render: function () {
        return (
            <div className="row">

            </div>
        )
    }
});

//logobar component
var LogoBar = React.createClass({
    render: function () {
        return (
            <div className="row">
                <div className="col sm 3"><img src="http://www.harman.in/wp-content/themes/harmanindia/images/harman-logo.png" alt="" /></div>
                <div className="col sm 6"></div>
                <div className="col sm 3"></div>
            </div>
        )
    }
});

//main navigation component
var MainNav = React.createClass({
    render: function () {
        return (
            <div className="row">
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">{this.props.brand}</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">JavaScript</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
});


//maincontent area 

var MainContentArea = React.createClass({
    render: function () {
        return (
         
                <div className="row">
                    <div className="col s12 m3">
                        <div className="card panel">
                            <div className="card-content ">
                                <span className="card-title">Card Title</span>
                                <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                                <a href="#">This is a link</a>
                                <a href="#">This is a link</a>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m9">
                        <div className="card panel">
                            <div className="card-content ">
                                <span className="card-title">Card Title</span>
                                <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                                <a href="#">This is a link</a>
                                <a href="#">This is a link</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                )
    }
});


//contextarea
var ContextBar = React.createClass({
                    render:function(){
        return (
            <div className="row">

                </div>
                )
    }
});



//footerbar
var FooterBar = React.createClass({
                    render:function(){
        return (
            <div className="row">
                    <footer className="page-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col l6 s12">
                                    <h5 className="white-text">Footer Content</h5>
                                    <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                                </div>
                                <div className="col l4 offset-l2 s12">
                                    <h5 className="white-text">Links</h5>
                                    <ul>
                                        <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                        <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                        <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                        <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer-copyright">
                            <div className="container">
                                © 2014 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                            </div>
                        </div>
                    </footer>
                </div>
                )
    }
});


//binding to the view 
ReactDOM.render(<PageComponent/>,document.getElementById('react-app'));