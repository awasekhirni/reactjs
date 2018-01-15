(function () {


    var UserApp = React.createClass({

        render: function () {
            var userData = [{
                "id": 1,
                "first_name": "Andrew",
                "last_name": "Lawrence",
                "email": "alawrence0@de.vu",
                "gender": "Male",
                "ip_address": "251.213.138.98"
            }, {
                "id": 2,
                "first_name": "Robin",
                "last_name": "Carter",
                "email": "rcarter1@buzzfeed.com",
                "gender": "Female",
                "ip_address": "255.133.139.197"
            }, {
                "id": 3,
                "first_name": "Robert",
                "last_name": "Elliott",
                "email": "relliott2@archive.org",
                "gender": "Male",
                "ip_address": "1.74.97.46"
            }, {
                "id": 4,
                "first_name": "Linda",
                "last_name": "Myers",
                "email": "lmyers3@soup.io",
                "gender": "Female",
                "ip_address": "188.233.125.48"
            }, {
                "id": 5,
                "first_name": "Randy",
                "last_name": "Frazier",
                "email": "rfrazier4@google.com.au",
                "gender": "Male",
                "ip_address": "124.239.152.178"
            }, {
                "id": 6,
                "first_name": "Ronald",
                "last_name": "Adams",
                "email": "radams5@altervista.org",
                "gender": "Male",
                "ip_address": "148.24.169.186"
            }, {
                "id": 7,
                "first_name": "Arthur",
                "last_name": "Hudson",
                "email": "ahudson6@nba.com",
                "gender": "Male",
                "ip_address": "203.63.193.219"
            }, {
                "id": 8,
                "first_name": "Walter",
                "last_name": "Garza",
                "email": "wgarza7@shinystat.com",
                "gender": "Male",
                "ip_address": "128.238.208.246"
            }, {
                "id": 9,
                "first_name": "Jonathan",
                "last_name": "Phillips",
                "email": "jphillips8@privacy.gov.au",
                "gender": "Male",
                "ip_address": "39.180.17.15"
            }, {
                "id": 10,
                "first_name": "Marie",
                "last_name": "Morris",
                "email": "mmorris9@yolasite.com",
                "gender": "Female",
                "ip_address": "238.180.133.216"
            }];

            //defining styles for the row 
            var rowstyling = {
                border: '1px solid blue',
                background: 'grey'
            }

            //structural directive implementation 
            //similar to ng-repeat or ng-for

            var users = userData.map(function (user) {

                return (
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                        <td>{user.ip_address}</td>

                    </tr>
                )

            });


            //render function return
            return (

                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>gender</th>
                                <th>ip_address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users}
                        </tbody>

                    </table>
                </div>
            )

        }

    })


    //binding to the view 
    ReactDOM.render(<UserApp/>,document.getElementById('react-app'));



})();