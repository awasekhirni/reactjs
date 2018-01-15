
var voter={
    title:'2019 Election!',
    content:'Election Drama fro the year 2019-Worlds Largest Democracy',
    coverage:'NewsCoverage by:TodayTamasha direction by Syed Awase',
    polparties:['aapkinautankiparty','rightwingrakshas','leftwingloafers','secularsants','regionalrogues','independentOpportunitists']
};


//component 
var VoterApp = React.createClass({
    render:function(){
        return(
            <div>
            <h1>Title:{this.props.data.title}</h1>
            <h2>{this.props.data.coverage}</h2>
            <h3>{this.props.data.content}</h3>
            <ol>
                <li><PoolParty context={this.props.data.polparties[0]}></PoolParty></li>
                <li><PoolParty context={this.props.data.polparties[1]}></PoolParty></li>
                <li><PoolParty context={this.props.data.polparties[2]}></PoolParty></li>
                <li><PoolParty context={this.props.data.polparties[3]}></PoolParty></li>
                <li><PoolParty context={this.props.data.polparties[4]}></PoolParty></li>
                <li><PoolParty context={this.props.data.polparties[5]}></PoolParty></li>
            </ol>
            </div>
        )
    }
});

//component 

var PoolParty=React.createClass({
    render:function(){
        return(
            <div>
            {this.props.context}
            </div>
        )
    }
});


//binding to the view 

ReactDOM.render(
    <VoterApp data={voter}/>,
    document.getElementById('react-app')
);