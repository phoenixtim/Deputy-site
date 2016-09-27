// const Link = window.ReactRouter.Link;
// const IndexLink = window.ReactRouter.IndexLink;

var Menu = React.createClass({
  render() {
    // const main = this.props.routesModule.getPage('main');
    // const second = this.props.routesModule.getPage('second');
    // const third = this.props.routesModule.getPage('third');

    console.log(this.props);

    var rootCrumbs = [];
    this.props.currentRoute.pathToPage.forEach(elem => {

      console.log(elem);

      const elemRoute = this.props.routesModule.getPage(elem);

      console.log(elemRoute);

      rootCrumbs.push(<a className='section' href={elemRoute.fullUrl}>
        {elemRoute.pageTitle}</a>);
      rootCrumbs.push(<i class="right angle icon divider"></i>);
    });

    return (
      <div className='ui breadcrumb'>
        {rootCrumbs}
        <div className='active section' href={this.props.currentRoute.fullUrl}>
          {this.props.currentRoute.pageTitle}</div>
        {/* <i class="right angle icon divider"></i>
        <Link className='section' activeClassName='active' to={second.fullUrl}>
          <div className='ui red header'>{second.pageTitle}</div></Link>
        <i class="right angle icon divider"></i>
        <Link className='section' activeClassName='active' to={third.fullUrl}>
          <div className='ui red header'>{third.pageTitle}</div></Link> */}
      </div>
    );
  }
});

module.exports = Menu;
