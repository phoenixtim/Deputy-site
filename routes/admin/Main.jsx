var Main = React.createClass({
  getInitialState() {
    return {
      currentRoute: this.props.route.routesModule.getPage('main'),
    };
  },

  render() {
    var pages = [
      {
        title: 'new1',
        text: 'new 1 text weklfm;lkwvn klw;emlk pweme pewm [PLD,CQKWEOKFW ;KMWIS;LKDMVSKLFOIWRNV SDLKM;SK SKM ;EDM;LS L;MS;EL ;SM ; SMEM;SEMEWRLEKDN RKM;dflmv;dm  vm;slmv;lsmgs mv;ls]',
      },
      {
        title: 'new2',
        text: 'new 2 text',
      },
    ];

    return (
      <div className='main_page'>
        {this.props.children}
        <Pages pages={pages} />
      </div>
    );
  },
});
module.exports = Main;

var Pages = React.createClass({
  render() {
    return (
      <div className='ui justified container'>
        {this.props.pages.map((item, index) => <Page
          key={index}
          title={item.title}
          text={item.text}
        />)}
      </div>
    );
  },
});

var Page = React.createClass({
  render() {
    return (
      <div className='ui card'>
        <div className='content'>
          <div className='header'>{this.props.title}</div>
          <div className='description'>{this.props.text}</div>
        </div>
        <div className='extra content'>
        </div>
      </div>
    );
  },
});
