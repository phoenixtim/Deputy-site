var Second = React.createClass({
  getInitialState() {
    return {
      currentRoute: this.props.route.routesModule.getPage('second'),
    };
  },

  render: function () {
    return (
      <div className='second_page'>
        {/* <h2 className='ui header'>{this.state.currentRoute.pageTitle}</h2> */}
        {this.props.children}
      </div>
    );
  },
});
module.exports = Second;
