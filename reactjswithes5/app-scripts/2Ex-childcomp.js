(function(){
	var rootElement = React.createElement('div', {}, 
    React.createElement('h1', {}, "Contacts"),
    React.createElement('ul', {},
      React.createElement('li', {},
        React.createElement('h2', {}, "Syed Awase"),
        React.createElement('a', {href: 'mailto:sak@sycliq.com'}, 'sak@sycliq.com')
      ),
      React.createElement('li', {},
        React.createElement('h2', {}, "Syed Azeez"),
        React.createElement('a', {href: 'mailto:azeez@sycliq.com'}, 'azeez@sycliq.com')
      )
    )
  )
ReactDOM.render(rootElement, document.getElementById('react-app'));
})();