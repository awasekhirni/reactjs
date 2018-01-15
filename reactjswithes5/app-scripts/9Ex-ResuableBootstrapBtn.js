//step1:smallest reusable component 
var BtsButton = React.createClass({
    render: function () {
        return (
            <button style={{
                background: this.props.background
            }}>{this.props.btnlabel}</button>

        )
    }
});

//Container component 
var ContainerApp = React.createClass({
    render: function () {
        var lbllist = [{
            "id": 1,
            "lblvalue": "Default",

            "background": "white"
        }, {
            "id": 2,
            "lblvalue": "Primary",
            "background": "blue"
        }, {
            "id": 3,
            "lblvalue": "Success",
            "background": "green"
        }, {
            "id": 4,
            "lblvalue": "Danger",
            "background": "orange"
        }, {
            "id": 5,
            "lblvalue": " Info",
            "background": "grey"
        }, {
            "id": 6,
            "lblvalue": "Warning",
            "background": "red"
        }];

        //map iterates to generate reusable component 
        var buttonlist = lbllist.map(function (lbl) {
            return (<BtsButton background={lbl.background} btnlabel={lbl.lblvalue} />);
        });

        return (
            <div style={{ border:'1px solid red' }}>
                {buttonlist}</div>
        )
    }
});

//binding to the view 
ReactDOM.render(<ContainerApp/>, document.getElementById('react-app'));