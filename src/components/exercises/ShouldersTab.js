import React, { Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import ExerciseCard from './ExerciseCard';
import ExerciseImg1 from '../../img/exercise-1.svg';
import ExerciseImg2 from '../../img/exercise-2.svg';
import ExerciseImg3 from '../../img/exercise-3.svg';
import ExerciseImg4 from '../../img/exercise-4.svg';
import ExerciseImg5 from '../../img/exercise-5.svg';
import ExerciseImg6 from '../../img/exercise-6.svg';

class ShouldersTab extends Component {
    render() {
        return(
            <div className="exercises-grid">
                <Grid className="demo-grid-1">
                    <Cell col={4}>
                        <ExerciseCard title="Arnold Dumbbell Press" image={ExerciseImg1} />
                    </Cell>
                    <Cell col={4}>
                        <ExerciseCard title="Upright Cable Row" image={ExerciseImg2} />
                    </Cell>
                    <Cell col={4}>
                        <ExerciseCard title="Cable Front Raise" image={ExerciseImg3} />
                    </Cell>
                </Grid>  

                <Grid className="demo-grid-1">
                    <Cell col={4}>
                        <ExerciseCard title="Front Barbell Raise." image={ExerciseImg4} />
                    </Cell>
                    <Cell col={4}>
                        <ExerciseCard title="Close-Grip Curl" image={ExerciseImg5} />
                    </Cell>
                    <Cell col={4}>
                        <ExerciseCard title="Smith Machine Upright Row" image={ExerciseImg6} />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default ShouldersTab;