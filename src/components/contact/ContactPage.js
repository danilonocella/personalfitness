import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import FitnessLogo from '../../img/fitness-logo.png';

class ContactPage extends Component {
    state = {  }
    render() { 
        return (  
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h3> JOHN DOE</h3>
                        <img
                            src={FitnessLogo}
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Urna taciti nisl pellentesque vehicula augue elementum placerat, iaculis scelerisque libero platea imperdiet auctor sagittis, lacinia cras cum mauris viverra etiam. Ut per metus fermentum sociosqu dignissim.</p>
                    </Cell>

                    <Cell col={6}>
                        <h4>CONTACT</h4>
                        <hr style={{borderTop: '3px solid #9DC0BC'}}/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px'}} >
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (123) 456 7890
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px'}} >
                                        <i className="fa fa-fax" aria-hidden="true"/>
                                        (123) 456 7890
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px'}} >
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        john.doe@email.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px'}} >
                                        <i className="fa fa-skype" aria-hidden="true"/>
                                        JohnDoeSkypeId
                                    </ListItemContent>
                                </ListItem>

                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}
 
export default ContactPage;