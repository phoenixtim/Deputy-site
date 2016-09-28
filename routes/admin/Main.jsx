import Menu from './menu/Menu.jsx';

var Main = React.createClass({
  getInitialState() {
    return {
      currentRoute: this.props.route.routesModule.getPage('admin'),
    };
  },

  render() {
    var pages = this.props.route.routesModule.getSubroutes(
      this.state.currentRoute.name);

    return (
      <div className='main_page'>
        <Menu currentRoute={this.state.currentRoute} routesModule={this.props.route.routesModule} />
        <Pages pages={pages} />
        {this.props.children}
      </div>
    );
  },
});
module.exports = Main;

var Pages = React.createClass({
  render() {
    return (
      <div className='ui link cards'>
        {this.props.pages.map((item, index) => <Page
          key={index}
          title={item.pageTitle}
          text=''
          link={item.fullUrl}
        />)}
      </div>
    );
  },
});

var Page = React.createClass({
  render() {
    return (
      <a className='card' href={this.props.link}>
        <div className='content'>
          <div className='header'>{this.props.title}</div>
          <div className='description'>{this.props.text}</div>
        </div>
        <div className='extra content'>
        </div>
      </a>
    );
  },
});
