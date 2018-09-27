import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import EducationItem from './EducationItem';
import ExperienceItem from './ExperienceItem';
import CertifImg from '../../img/certificate.jpeg';

class ResumePage extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <Grid>
                    {/* Use of inline styling */}
                    <Cell className="resume-left-col" col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src={CertifImg}
                                alt="avatar"
                                style={{height: '250px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '1em'}}>JOHN DOE</h2>
                        <h4 style={{color: 'grey'}}>Fitness professional</h4>
                        <hr style={{borderTop: '3px solid #9DC0BC', width: '50%'}}/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipiscing elit urna at aptent, himenaeos enim conubia velit. Etiam semper tortor luctus sagittis nulla taciti platea bibendum, sapien rhoncus porttitor fusce faucibus cubilia donec, ridiculus fermentum habitasse ac penatibus sociosqu odio.</p>
                        <hr style={{borderTop: '3px solid #9DC0BC', width: '50%'}}/>
                        <h5>Date of birth</h5>
                        <p>31 December 1980</p>
                        <h5>Height</h5>
                        <p>187 cm (6 ft 2 in)</p>
                        <h5>Weight</h5>
                        <p>107 kg (236 lb)</p>
                        <hr style={{borderTop: '3px solid #9DC0BC', width: '50%'}}/>
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h3>QUALIFICATIONS</h3>
                        <EducationItem
                            startYear={2006}
                            endYear={2009}
                            schoolName="Fitness College"
                            schoolDescription="Sollicitudin donec dui tellus pretium sed, in nisi platea feugiat. Quisque ante conubia elementum massa"
                        />
                        <EducationItem
                            startYear={2010}
                            endYear={2016}
                            schoolName="University of Physical Education"
                            schoolDescription="Pellentesque urna ad pretium, magna vivamus est taciti condimentum facilisi vel class, malesuada et erat"
                        />
                        
                        <hr style={{borderTop: '3px solid #9DC0BC'}}/>
                        
                        <h3>EXPERIENCE  </h3>
                        <ExperienceItem
                            startYear={2008}
                            endYear={2010}
                            jobName="Personal trainer"
                            jobDescription="Mauris mi auctor mattis congue egestas torquent libero vehicula bibendum lectus viverra, parturient turpis."
                         />
                         <ExperienceItem
                             startYear={2011}
                             endYear={2016}
                             jobName="Head trainer"
                             jobDescription="Felis duis torquent. Lectus litora urna eu senectus justo suscipit cum, nunc posuere facilisi."
                          />
                        <ExperienceItem
                            startYear={2016}
                            endYear={2018}
                            jobName="Exercise Consultant"
                            jobDescription="Felis duis torquent. Lectus litora urna eu senectus justo suscipit cum, nunc posuere facilisi curae congue egestas torquent libero vehicula ."
                         />
                         
                          <hr style={{borderTop: '3px solid #9DC0BC'}}/>


                    </Cell>
                </Grid>
            </div>
        );
    }
}
 
export default ResumePage;