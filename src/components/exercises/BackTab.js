import React, { Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import ExerciseCard from './ExerciseCard';
import ExerciseImg2 from '../../img/exercise-2.svg';
import ExerciseImg1 from '../../img/exercise-1.svg';
import ExerciseImg6 from '../../img/exercise-6.svg';
import ExerciseImg4 from '../../img/exercise-4.svg';

class BackTab extends Component {
    render() {
        return(
            <div className="exercises-grid">
                <Grid className="demo-grid-1">
                    <Cell col={4}>
                        <ExerciseCard title="Barbell Deadlift" image={ExerciseImg4} />
                    </Cell>
                    <Cell col={4}>
                        <ExerciseCard title="Wide-Grip Pull-Up" image={ExerciseImg6} />
                    </Cell>
                    <Cell col={4}>
                        <ExerciseCard title="Wide-Grip Pull-Up" image={ExerciseImg2} />
                    </Cell>
                </Grid>  
                <Grid className="demo-grid-1">
                    <Cell col={12}>
                    <ExerciseCard title="Barbell Deadlift" image={ExerciseImg1} />
                    </Cell>
                </Grid>  
            </div>
        )
    }
}

export default BackTab;