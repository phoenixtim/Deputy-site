var Menu = React.createClass({
  render() {
    var rootCrumbs = [];
    this.props.currentRoute.pathToPage.forEach((elem, index) => {
      const elemRoute = this.props.routesModule.getPage(elem);
      rootCrumbs.push(<a className='section' href={elemRoute.fullUrl}
        key={index}>{elemRoute.pageTitle}</a>);
      rootCrumbs.push(<i className="right angle icon divider"
        key={'divider_' + index}></i>);
    });

    return (
      <div id='menu'>
        <hr/>
        <div className='ui breadcrumb'>
          {rootCrumbs}
          <div className='active section' href={this.props.currentRoute.fullUrl}>
            {this.props.currentRoute.pageTitle}</div>
        </div>
        <hr/>
      </div>
    );
  }
});

module.exports = Menu;
