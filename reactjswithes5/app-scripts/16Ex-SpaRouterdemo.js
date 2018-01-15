var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;
var browserHistory=ReactRouter.browserHistory;
//NavComponent for routing 
var NavComponent = React.createClass({
    render: function () {
        return (
            <div>
                <div className="row">

                </div>
                <div className="row">

                </div>
                <div className="row">
                    <nav>
                        <div className="nav-wrapper">
                            <a href="#" className="brand-logo">Logo</a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><Link to="homeapp">home</Link></li>
                                <li><Link to="books">books</Link></li>
                                <li><Link to="ebay">products</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="row">
                    <div className="col s12 m3">
                        <div className="card panel">
                            <div className="card-content ">
                                <span className="card-title">Sidebar</span>

                            </div>

                        </div>
                    </div>
                    <div className="col s12 m9">
                        <div className="card panel">
                            <div className="card-content">
                                <span className="card-title">Dashboard</span>

                                {this.props.children}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 m12">
                            <div className="card ">
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
                </div>
            </div>
        )
    }
})


//BooksListing

var BookApp = React.createClass({
    getInitialState: function () {
        return {
            mybooks: []
        }
    },
    componentDidMount: function () {
        // http calls to remote api
        var _this = this;
        this.serverRequest = axios.get('https://raw.githubusercontent.com/awasekhirni/jsondata/master/100books.json').then(function (response) {
            _this.setState({
                mybooks: response.data
            })
        }).catch(function (error) {
            _this.setState({
                errorVal: error
            })
        })
    },
    render: function () {

        var booklist = this.state.mybooks.map(function (mybook) {
            return (
                <div key={mybook.id} >
                    <div>{mybook.author}</div>
                    <div>{mybook.country}</div>
                    <div>{mybook.imageLink}</div>
                    <div>{mybook.language}</div>
                    <div>{mybook.link}</div>
                    <div>{mybook.pages}</div>
                    <div>{mybook.title}</div>
                    <div>{mybook.year}</div>
                    <hr />
                </div>
            );
        });





        return (
            <div>

                <div>{booklist}</div>


                {this.state.mybooks.length}

            </div>
        );
    }
});




//EbayListing
var EbayComponent = React.createClass({
    getInitialState: function () {
        return {
            products: [],
            errorVal: []
        }
    },
    componentDidMount: function () {
        // http calls to remote api
        var _this = this;
        this.serverRequest = axios.get('https://raw.githubusercontent.com/awasekhirni/angular2seed/master/ebaydata.json').then(function (response) {
            _this.setState({
                products: response.data
            })
        }).catch(function (error) {
            _this.setState({
                errorVal: error
            })
        })

    },
    render: function () {
        return (
            <div>
                <h1>Ebay Products List </h1>
                <div>
                    {this.state.products.map(function (product) {
                        return (
                            <div>
                                <div>Name:{product.name}</div>
                                <div>Description:{product.description}</div>
                                <div>Image:<img src={product.image} alt="" /></div>
                                <hr />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
});



//PageNotFound Error Component
var PageNotFound = React.createClass({
    render: function () {
        return (<div>
            <h1> Page Not Found </h1>
            <div className="content" >
                <p> Page Not Found </p>
            </div>
        </div>
        );
    }
});




var Home = React.createClass({
    render: function () {
        return (<div>
            <h1> Home </h1>
            <div className="content" >
                <p> Welcome to React Router test application </p>
            </div>
        </div>
        );
    }
});


//define the routes

var routes = (
    <ReactRouter.Router history={ReactRouter.browserHistory}>
        <ReactRouter.Route path="/" component={NavComponent}>
            <ReactRouter.IndexRoute component={Home} />
            <ReactRouter.Route path="/books" component={BookApp} />
            <ReactRouter.Route path="/ebay" component={EbayComponent} />
            <ReactRouter.Route path="*" component={PageNotFound} />

        </ReactRouter.Route>
    </ReactRouter.Router>
);



//binding to the view 
ReactDOM.render(<ReactRouter.Router>{routes}</ReactRouter.Router>,document.getElementById('react-app'));