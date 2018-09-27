import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import ChestTab from './ChestTab';
import BackTab from './BackTab';
import ArmsTab from './ArmsTab';
import ShouldersTab from './ShouldersTab';
import LegsTab from './LegsTab';

class ExercisesPage extends Component {

    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if( this.state.activeTab === 0 ){
            return(
                <ChestTab />
            )
        } else if( this.state.activeTab === 1 ){
            return(
                <BackTab /> 
            )
        } else if( this.state.activeTab === 2 ){
            return(
                <ArmsTab />
            )
        } else if( this.state.activeTab === 3 ){
            return(
                <ShouldersTab />
            )
        } else if( this.state.activeTab === 4 ){
            return(
                <LegsTab />
            )
        }
    }

    render() { 
        return (  
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>CHEST</Tab>
                    <Tab>BACK</Tab>
                    <Tab>ARMS</Tab>
                    <Tab>SHOULDERS</Tab>
                    <Tab>LEGS</Tab>
                </Tabs>
                
                <Grid>
                    <Cell col={12}> 
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}
 
export default ExercisesPage;