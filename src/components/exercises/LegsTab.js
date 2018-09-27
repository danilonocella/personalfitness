import React, { Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import ExerciseCard from './ExerciseCard';
import ExerciseImg4 from '../../img/exercise-4.svg';
import ExerciseImg5 from '../../img/exercise-5.svg';
import ExerciseImg6 from '../../img/exercise-6.svg';

class LegsTab extends Component {
    
    render() {
        return(
            <div className="exercises-grid">
                <Grid className="demo-grid-1">
                    <Cell col={4}>
                        <ExerciseCard title="Leg Press" image={ExerciseImg6} />
                    </Cell>
                    <Cell col={4}>
                        <ExerciseCard title="Lying Leg Curls" image={ExerciseImg4} />
                    </Cell>
                    <Cell col={4}>
                        <ExerciseCard title="Barbell Squat" image={ExerciseImg5} />
                    </Cell>
                </Grid>  

                <Grid className="demo-grid-1">
                    <Cell col={4}>
                        <ExerciseCard title="Dumbbell Lunges" image="https://d29fhpw069ctt2.cloudfront.net/icon/image/85351/preview.svg" />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LegsTab;