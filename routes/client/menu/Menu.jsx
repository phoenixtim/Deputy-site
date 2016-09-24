const Link = window.ReactRouter.Link;
const IndexLink = window.ReactRouter.IndexLink;

var Menu = React.createClass({
  render() {
    const main = this.props.routesModule.getPage('main');
    const second = this.props.routesModule.getPage('second');
    const third = this.props.routesModule.getPage('third');

    return (
      <div className='ui three item menu'>
        <IndexLink className='item' activeClassName='active' to={main.fullUrl}>
          {main.pageLink}</IndexLink>
        <Link className='item' activeClassName='active' to={second.fullUrl}>
          {second.pageLink}</Link>
        <Link className='item' activeClassName='active' to={third.fullUrl}>
          {third.pageLink}</Link>
      </div>
    );
  }
});

module.exports = Menu;
