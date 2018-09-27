import React, { Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import ExerciseCard from './ExerciseCard';
import ExerciseImg1 from '../../img/exercise-1.svg';
import ExerciseImg2 from '../../img/exercise-2.svg';
import ExerciseImg3 from '../../img/exercise-3.svg';
import ExerciseImg5 from '../../img/exercise-5.svg';
import ExerciseImg6 from '../../img/exercise-6.svg';

class ArmsTab extends Component {
    render() {
        return(
            
                <div className="exercises-grid">

                    <Grid className="demo-grid-1">
                        <Cell col={4}>
                            <ExerciseCard title="Hammer Curl" image={ExerciseImg2} />
                        </Cell>
                        <Cell col={4}>
                            <ExerciseCard title="Close-Grip Curl" image={ExerciseImg6} />
                        </Cell>
                        <Cell col={4}>
                            <ExerciseCard title="Triceps Pushdown" image={ExerciseImg1} />
                        </Cell>
                    </Grid>

                    <Grid className="demo-grid-1">
                        <Cell col={6}>
                            <ExerciseCard title="Bicep Curl" image={ExerciseImg5} />
                        </Cell>
                        <Cell col={6}>
                            <ExerciseCard title="Curl Over A Bench" image={ExerciseImg3} />
                        </Cell>
                    </Grid>  
                    
                </div>

        )
    }
}

export default ArmsTab;