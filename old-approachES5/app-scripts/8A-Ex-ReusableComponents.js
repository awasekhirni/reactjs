(function() {

    var Component = React.createClass({
        //mother or root component
        getInitialState: function() {
            return { counter: 0 }
        },
        changeValue: function(increment) {
            this.setState({ counter: this.state.counter + increment })
        },

        render: function() {
            return ( <
                div >
                <
                ButtonComponent localHandleClick = { this.changeValue }
                increment = { 2 }
                /> <
                ButtonComponent localHandleClick = { this.changeValue }
                increment = { 10 }
                /> <
                ButtonComponent localHandleClick = { this.changeValue }
                increment = { 20 }
                /> <
                ButtonComponent localHandleClick = { this.changeValue }
                increment = { 40 }
                /> <
                ResultComponent localCounter = { this.state.counter }
                /> < /
                div >

            )
        }
    });


    var ButtonComponent = React.createClass({
        localHandleClick: function() {
            this.props.localHandleClick(this.props.increment);
        },
        render: function() {
            return ( <
                button onClick = { this.localHandleClick } > Add + { this.props.increment } < /button>
            )
        }
    });


    var ResultComponent = React.createClass({
        render: function() {
            return ( <
                div > Results: { this.props.localCounter } < /div>
            )
        }
    });


    ReactDOM.render( < Component / > , document.getElementById('react-app'))


})();