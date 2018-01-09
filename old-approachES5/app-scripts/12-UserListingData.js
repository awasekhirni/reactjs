		//iife
		(function(){

		var userApp = React.createClass({
			//render function 
			render:function(){
				//json object collection
				var userdata= [{
				  "id": 1,
				  "first_name": "Gloria",
				  "last_name": "Garza",
				  "email": "ggarza0@princeton.edu",
				  "gender": "Female",
				  "ip_address": "119.150.46.252"
				}, {
				  "id": 2,
				  "first_name": "Mark",
				  "last_name": "Palmer",
				  "email": "mpalmer1@noaa.gov",
				  "gender": "Male",
				  "ip_address": "230.198.22.119"
				}, {
				  "id": 3,
				  "first_name": "Bruce",
				  "last_name": "Stanley",
				  "email": "bstanley2@mac.com",
				  "gender": "Male",
				  "ip_address": "66.117.202.117"
				}, {
				  "id": 4,
				  "first_name": "Carolyn",
				  "last_name": "Tucker",
				  "email": "ctucker3@blogger.com",
				  "gender": "Female",
				  "ip_address": "209.174.190.203"
				}, {
				  "id": 5,
				  "first_name": "Janice",
				  "last_name": "Wood",
				  "email": "jwood4@harvard.edu",
				  "gender": "Female",
				  "ip_address": "135.71.220.132"
				}, {
				  "id": 6,
				  "first_name": "James",
				  "last_name": "Meyer",
				  "email": "jmeyer5@google.nl",
				  "gender": "Male",
				  "ip_address": "122.104.33.13"
				}, {
				  "id": 7,
				  "first_name": "Jane",
				  "last_name": "Hernandez",
				  "email": "jhernandez6@bloomberg.com",
				  "gender": "Female",
				  "ip_address": "86.169.78.48"
				}, {
				  "id": 8,
				  "first_name": "Lisa",
				  "last_name": "Day",
				  "email": "lday7@php.net",
				  "gender": "Female",
				  "ip_address": "34.223.11.72"
				}, {
				  "id": 9,
				  "first_name": "Maria",
				  "last_name": "Smith",
				  "email": "msmith8@mysql.com",
				  "gender": "Female",
				  "ip_address": "244.58.189.146"
				}, {
				  "id": 10,
				  "first_name": "Russell",
				  "last_name": "Mcdonald",
				  "email": "rmcdonald9@cpanel.net",
				  "gender": "Male",
				  "ip_address": "102.206.218.217"
				}];

		//end of json data  

					//defining styles for the row
		var rowstyling ={
			border: '1px solid blue',
			background: 'yellow'
		}; 
				
				//users data 
		var users = userdata.map(function(user){
			return (
				<tr style={rowstyling}>
				<td>{user.id}</td>
				<td>{user.first_name}</td>
				<td>{user.last_name}</td>
				<td>{user.email}</td>
				<td>{user.gender}</td>
				<td>{user.ip_address}</td>
				</tr>
				);
		});


				return(
					<div style={{border:'1px solid'}}>
					<table style={{border:'1px solid grey'}}>
					<th>
					<td>id</td>
					<td>FirstName</td>
					<td>LastName</td>
					<td>Email</td>
					<td>Gender</td>
					<td>IPAddress</td>

					</th>
					{users}

					</table>


					</div>
					);

			}
		});	

		//Rendering
		ReactDOM.render(React.createElement(userApp), document.getElementById('app'));		





		})();