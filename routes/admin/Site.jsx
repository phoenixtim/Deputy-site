var Site = React.createClass({
  render() {
    return (
      <div className='ui container site_container'>
        <SiteHeader />
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
        <div className='sub header'>Управление сайтом</div>
      </h1>
    );
  },
});
