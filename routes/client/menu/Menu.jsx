const Link = window.ReactRouter.Link;
const IndexLink = window.ReactRouter.IndexLink;

var Menu = React.createClass({
  render() {
    const main = this.props.routesModule.getPage('main');
    const second = this.props.routesModule.getPage('second');
    const third = this.props.routesModule.getPage('third');

    return (
      <div className='ui three item huge menu'>
        <IndexLink className='item' activeClassName='active' to={main.fullUrl}>
          <div className='ui red header'>{main.pageTitle}</div></IndexLink>
        <Link className='item' activeClassName='active' to={second.fullUrl}>
          <div className='ui red header'>{second.pageTitle}</div></Link>
        <Link className='item' activeClassName='active' to={third.fullUrl}>
          <div className='ui red header'>{third.pageTitle}</div></Link>
      </div>
    );
  }
});

module.exports = Menu;
