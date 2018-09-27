import React, { Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import ExerciseCard from './ExerciseCard';
import ExerciseImg1 from '../../img/exercise-1.svg';
import ExerciseImg3 from '../../img/exercise-3.svg';
import ExerciseImg4 from '../../img/exercise-4.svg';
import ExerciseImg6 from '../../img/exercise-6.svg';

class ChestTab extends Component {
    render() {
        return(
            <div className="exercises-grid">
                <Grid className="demo-grid-1">
                    <Cell col={4}>
                        <ExerciseCard title="Dips For Chest" image={ExerciseImg3} />
                    </Cell>
                    <Cell col={4}>
                        <ExerciseCard title="Seated Machine Chest Press" image={ExerciseImg6} />
                    </Cell>
                    <Cell col={4}>
                        <ExerciseCard title="Machine Decline Press" image={ExerciseImg1} />
                    </Cell>
                </Grid>  

                <Grid className="demo-grid-1">
                    <Cell col={4}>
                        <ExerciseCard title="Flat Bench Dumbbell Press" image={ExerciseImg4} />
                    </Cell>
                </Grid>  
            </div>
        )
    }
}

export default ChestTab;