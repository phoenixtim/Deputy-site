const moment = require('moment');

var Main = React.createClass({
  getInitialState() {
    return {
      currentRoute: this.props.route.routesModule.getPage('main'),
    };
  },

  render() {
    var news = [
      {text: 'new 1 text', title: 'new1'},
      {text: 'new 2 text', title: 'new2'},
    ];

    return (
      <div className='main_page'>
        <h2 className='ui header'>{this.state.currentRoute.pageTitle}</h2>
        {this.props.children}
        <News news={news} />
      </div>
    );
  },
});
module.exports = Main;

var News = React.createClass({
  render() {
    return (
      <div className='ui raised justified container segment'>
        {this.props.news.map(item => <NewsItem
          title={item.title}
          text={item.text}
        />)}
      </div>
    );
  },
});

var NewsItem = React.createClass({
  render() {
    var currentDate = moment().format('DD/MM/YYYY HH:mm');

    return (
      <div className='ui card'>
        <div className='content'>
          <div className='header'>{this.props.title}</div>
          <div className='description'>{this.props.text}</div>
        </div>
        <div className='extra content'>
          {currentDate}
        </div>
      </div>
    );
  },
});
