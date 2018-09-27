import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import AvatarImg from '../../img/avatar.png';

class HomePage extends Component {
    state = {  }
    render() { 
        return (  
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <img 
                            src={AvatarImg}
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>FITNESS PROFESSIONAL</h1>
                                
                            <hr style={{borderTop: '3px solid #9DC0BC'}}/>
                            <p>Personal Training | Small Group Classes | Nutrition Coaching | Team Coaching </p>
                            
                            <div className="social-links">
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true" /></a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true" /></a>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter-square" aria-hidden="true" /></a>
                            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-square" aria-hidden="true" /></a>
                            </div>
                        </div>
                    </Cell>
                    
                </Grid>
            </div>
        );
    }
}
    
export default HomePage;