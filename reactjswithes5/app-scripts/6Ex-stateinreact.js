var App= React.createClass({
    getInitialState:function(){
        return{
            empName:'Shah rukh Khan',
            empId:8
        }
    },
    updateEmp:function(e){
        this.setState({
            empName:e.target.value
        })
    },
    propTypes:{
        empName:React.PropTypes.string.isRequired,
        empId:React.PropTypes.number.isRequired
    },
    render:function(){
        return(
            <div>
                <input type="text" onChange={this.updateEmp}/>
            <h1>Hello {this.state.empName}</h1>
            <h2>Employee id: {this.state.empId}</h2>  
      </div>  
        )
    }
});


ReactDOM.render(
    <App empId empName="Syed Awase"/>,document.getElementById('react-app')
);