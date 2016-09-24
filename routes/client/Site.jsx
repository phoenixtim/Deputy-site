import Menu from './menu/Menu.jsx';

var Site = React.createClass({
  render() {
    return (
      <div className='site_container'>
        <SiteHeader />
        <Menu routesModule={this.props.route.routesModule} />
        {this.props.children}
      </div>
    );
  },
});
module.exports = Site;

var SiteHeader = React.createClass({
  render() {
    return (
      <h1 className='ui center aligned header'>
        Илья Александрович Ряснов
        <div className='sub header'>Депутат заксобрания НСО</div>
      </h1>
    );
  },
});
