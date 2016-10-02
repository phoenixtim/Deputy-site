import Menu from './menu/Menu.jsx';

var NewsPage = React.createClass({
  getInitialState() {
    return {
      currentRoute: this.props.route.routesModule.getPage('news'),
    };
  },

  render() {
    var news = [
      {
        title: 'news 1',
        text: 'wopefn2o4ifh30wrhv',
        date: new Date(),
      },
      {
        title: 'news 2',
        text: ';12mde-92keto50kf',
        date: new Date() + 1000 * 60 * 60,
      },
      {
        title: 'news 3',
        text: '209j3f23jf49ufn398',
        date: new Date() + 1000 * 60 * 60 * 2,
      },
    ];

    return (
      <div className='main_page'>
        <Menu currentRoute={this.state.currentRoute}
          routesModule={this.props.route.routesModule} />
        <News news={news} />
        {this.props.children}
      </div>
    );
  },
});
module.exports = NewsPage;

var News = React.createClass({
  render() {
    return (
      <div className='ui divided very relaxed items'>
        {this.props.news.map((item, index) => <NewsItem
          key={index}
          title={item.title}
          text={item.text}
          date={item.date}
          meta={item.meta}
          image={item.image}
          link=''
        />)}
      </div>
    );
  },
});

var NewsItem = React.createClass({
  render() {
    const formattedText = this.props.text ?
      this.props.text.split('\n').map((paragraph, index) =>
        <p key={index}>{paragraph}</p>) :
      <p>Нет описания</p>;

    return (
      <div className='item'>
        {this.props.image ?
          <a className='image'>
            <img src={this.props.image}></img>
          </a> :
          null}
        <div className='content'>
          <a className='header' href={this.props.link ? this.props.link : ''}>
            {this.props.title}</a>
          {this.props.meta ?
            <div className='meta'></div> :
            null}
          <div className='description'>
            {formattedText}
          </div>
          <div className='extra'>
            {this.props.date ?
              <div className='ui label'>{this.props.date.toString()}</div> :
              null}
          </div>
        </div>
      </div>
    );
  },
});
