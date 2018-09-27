import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import { Link } from 'react-router-dom'
import './App.css';
import Routes from './routes';
import Footer from './components/common/Footer';

class App extends Component {
    
  render() {
    return (
        <div className="demo-big-content">
            <Layout>
                    <Header 
                        className="header-color" 
                        title={<Link style={{textDecoration: 'none', color: '#27221F'}} 
                        to="/">personalfitness.com</Link>} scroll
                    >
                    </Header>
                    <Drawer >
                        <Navigation>
                            <Link to="/">HOME</Link>
                            <Link to="/bio">BIO</Link>
                            <Link to="/resume">RESUME</Link>
                            <Link to="/exercises">EXERCISES</Link>
                            <Link to="/contact">CONTACT</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Routes/>
                        <Footer />
                    </Content>
                    
            </Layout>
        </div>
    );
  }
}

export default App;
