var ClickStream = React.createClass({
    render:function(){
        return(
         <div>
             <span>
                 You have clicked: 
                 <button onClick={this.props.localHandleClick}>Click Me:+1</button>
                 </span>
        
        </div>
            
        )
    }
});

//result component
//ClickCounter is a state of ClickStream Component 
var Result= React.createClass({
    render:function(){
        return(
            <div> Result Value Display: <h2>{this.props.localCounter}</h2> </div>
        )
    }
});

//MainContainer Component 

var Main = React.createClass({
    getInitialState:function(){
        return{ClickCounter:0}
    },
    handleClick:function(){
        this.setState({
            ClickCounter:this.state.ClickCounter+1
        })
    },
    render:function(){
        return(
            <div>
            <ClickStream localHandleClick={this.handleClick}></ClickStream>
            <Result localCounter={this.state.ClickCounter}></Result>
        </div>

        )
    }
});

//binding with the view 
//Mounting the Node 
//Olderversions it was React.Reder not ReactDOM.render 
ReactDOM.render(<Main></Main>, document.getElementById('react-app'));
