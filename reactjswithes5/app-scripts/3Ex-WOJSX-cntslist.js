(function () {
    var contacts = [{
        "id": 1,
        "name": "Shirley",
        "email": "shayes0@feedburner.com"
    }, {
        "id": 2,
        "name": "Steve",
        "email": "smorales1@webmd.com"
    }, {
        "id": 3,
        "name": "Philip",
        "email": "pcooper2@about.com"
    }, {
        "id": 4,
        "name": "Bruce",
        "email": "bgardner3@soup.io"
    }, {
        "id": 5,
        "name": "Tammy",
        "email": "twarren4@nymag.com"
    }, {
        "id": 6,
        "name": "Lillian",
        "email": "lgarza5@constantcontact.com"
    }, {
        "id": 7,
        "name": "David",
        "email": "dwilliamson6@diigo.com"
    }, {
        "id": 8,
        "name": "Kevin",
        "email": "kspencer7@networkadvertising.org"
    }, {
        "id": 9,
        "name": "Antonio",
        "email": "abailey8@scribd.com"
    }, {
        "id": 10,
        "name": "Frank",
        "email": "ffoster9@skype.com"
    }];

    var userLists = contacts
        .filter(function (contact) {
            return contact.email;
        })
        .map(function (contact) {
            return React.createElement('li', { id: contact.key },
                React.createElement('h2', {}, contact.name),
                React.createElement('a', { href: 'mailto:' + contact.email }, contact.email)
            )

        });


    var rootElement =
        React.createElement('div', {},
            React.createElement('h1', {}, "Contacts"),

            // If your `children` is an array, you'll need to give each one a unique `key`
            // prop. I'll explain why a little later.
            React.createElement('ul', {}, userLists)
        )

    ReactDOM.render(rootElement, document.getElementById('react-app'))



})();