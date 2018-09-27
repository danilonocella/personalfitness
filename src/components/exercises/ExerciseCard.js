import React, {Component} from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

class ExerciseCard extends Component {

    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }

    render() { 
        return (  
            <Card shadow={0} style={{width: '320px', height: '320px'}}>
                <CardTitle expand style={{
                    color: '#000000', 
                    fontSize: '10px', 
                    background: 'url('+this.props.image+') bottom right 50% no-repeat #fafafa'}}
                    >
                    {this.props.title}</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    <Button colored>Read more...</Button>
                    <Button colored>Watch video</Button>
                </CardActions>
            </Card>            
        );
    }
}
 
export default ExerciseCard;