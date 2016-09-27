import Menu from './menu/Menu.jsx';

var Main = React.createClass({
  getInitialState() {
    return {
      currentRoute: this.props.route.routesModule.getPage('admin'),
    };
  },

  render() {
    // var pages = [
    //   {
    //     title: 'new1',
    //     text: 'new 1 text weklfm;lkwvn klw;emlk pweme pewm [PLD,CQKWEOKFW ;KMWIS;LKDMVSKLFOIWRNV SDLKM;SK SKM ;EDM;LS L;MS;EL ;SM ; SMEM;SEMEWRLEKDN RKM;dflmv;dm  vm;slmv;lsmgs mv;ls]',
    //   },
    //   {
    //     title: 'new2',
    //     text: 'new 2 text',
    //   },
    // ];
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
      <div className='ui grid'>
        {this.props.pages.map((item, index) => <Page
          key={index}
          title={item.pageTitle}
          text=''
        />)}
      </div>
    );
  },
});

var Page = React.createClass({
  render() {
    return (
      <div className='four wide column'>
        <div className='ui card'>
          <div className='content'>
            <div className='header'>{this.props.title}</div>
            <div className='description'>{this.props.text}</div>
          </div>
          <div className='extra content'>
          </div>
        </div>
      </div>
    );
  },
});
