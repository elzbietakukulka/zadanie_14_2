var movies = [
	{
		id: 1,
		title: 'Żona na niby',
		desc: 'Film o zmyślonej rodzince',
		picture: 'images/zonaNaNiby.jpg'
	},
	{
		id: 2,
		title: 'Do utraty sił',
		desc: 'Film o bokserze, który stracił wszystko',
		picture: 'images/doUtratySil.jpg'
	},
	{
		id: 3,
		title: 'Pamiętnik',
		desc: 'Film o wielkiej miłości',
		picture: 'images/pamietnik.jpg'
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('div', {}, 
			React.createElement('img', {src: movie.picture})
		))
});

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));