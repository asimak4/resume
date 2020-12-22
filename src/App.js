import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content,Drawer } from 'react-mdl';
import Main from './components/main';
import { HashRouter, Link } from 'react-router-dom';

class App extends Component {
  hideToggle() {
    var selectorId = document.querySelector('.mdl-layout');
    selectorId.MaterialLayout.toggleDrawer();
  }
  render() {
    return (
      <HashRouter>
      <div className="demo-big-content">
    <Layout>
      <Header style={{color: 'black'}} className="header-color" title="Menu">
        </Header>        
          <Drawer
            ModalProps={{ onBackdropClick: this.toggleDrawer }} 
            style={{color: 'black'}} title={<Link style={{textDecoration: 'none', color: 'black'}} to="/"onClick={() => this.hideToggle()}>Alex Simak Portfolio</Link>}>
              <Navigation>
                <Link to={"/resume"} onClick={() => this.hideToggle()}>Resume</Link>
                <Link to="/aboutme" onClick={() => this.hideToggle()}>About Me</Link>
                <Link to="/projects" onClick={() => this.hideToggle()}>Projects</Link>
                <Link to="/contact" onClick={() => this.hideToggle()}>Contact</Link>
              </Navigation>
          </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
     </div>
    </HashRouter>
    );
  }
}

export default App;
