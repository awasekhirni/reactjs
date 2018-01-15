
var BookApp = React.createClass({
    getInitialState:function(){
       return{
           mybooks: []
       }
        },
    componentDidMount: function () {
        $.ajax({
            url: 'https://raw.githubusercontent.com/awasekhirni/jsondata/master/100books.json',
            dataType: 'json',
            cache: false,
            success: function(response) {
              this.setState({mybooks: response});
            console.log(response);
            }.bind(this),
            error: function(xhr, status, err) {
              console.error(this.props.url, status, err.toString());
            }.bind(this)
          });
    },

    render: function () {

        var booklist=this.state.mybooks.map(function(mybook) {
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
               <hr/>
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

//binding to the view 
ReactDOM.render(<BookApp/>, document.getElementById('react-app'));
