var Third = React.createClass({
  getInitialState() {
    return {
      currentRoute: this.props.route.routesModule.getPage('third'),
    };
  },

  render: function () {
    return (
      <div className='third_page'>
        <h2 className='ui header'>{this.state.currentRoute.pageTitle}</h2>
        {this.props.children}
      </div>
    );
  },
});
module.exports = Third;
