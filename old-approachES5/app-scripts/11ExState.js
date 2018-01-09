
(function(){

    var UsersOnline = React.createClass({
        getInitialState:function(){
            var state= {counter:1};
            setInterval(function(){
                this.setState({counter: this.state.counter+1});
            }.bind(this),1000);
            return state;
        },
            render: function(){
                return (<div>
                    <h1>UsersOnline</h1>
                    <h3>{this.state.counter}</h3>
                </div>
                );
            }
        
    });

    ReactDOM.render(<UsersOnline />,
        document.getElementById('OnlineUsers'));



})();
