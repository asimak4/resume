import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div className="resume-grid">
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
                <i
                className = "fa fa-graduation-cap"
                style={{height: '150px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Alexander D Simak</h2>
            <h4 style={{color: 'Grey'}}>Software Engineer and Student</h4>
            <hr style={{borderTop: '4px solid', width: '65%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={"August 2017"}
              endYear={"May 2021"}
              schoolName="University of Maryland, Baltimore County"
              schoolDescription="Bachelor's Degree in Computer Science with a Mathematics Minor GPA: 3.7"
              />

               <Education
                 startYear={"August 2013"}
                 endYear={"May 2017"}
                 schoolName="Mount Hebron High School"
                 schoolDescription="General Studies High School Diploma GPA: 3.87"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

              <Experience
                startYear={"August 2020"}
                jobName="BlueRidge.AI - Full Stack Software Engineer Intern"
                jobDescription="
                Connect an Angular application to a Django framework alongside REST linking with PostgreSQL DB.
                Develope a real time approach to catch defects within TREX composite deck boards,
                using real time image processing and objects detection and a Nvidia Xavier.
                Test backend application data to front end using automated python script and selenium.
                Manipulate, transform and format large data sets to manage training various models.
                Expertise in development and debugging in C/C++ and Python."
                />

            <Experience
              startYear={"June 2019"}
              endYear={"August 2020"}
              jobName="Battelle Memorial Institute - IT Intern"
              jobDescription="
              Testing Software Applications and business systems,
              Troubleshooting Computer Hardware related problems such as UPS, Printers and Drivers,
              Managing and maintaining Servers, PC’S Routers and Switches,
              Installing, configuring and administering network technologies,
              Backup management, reporting and recovery"
              />

              <Experience
                startYear={"October 2017"}
                endYear={"September 2020"}
                jobName="ICFX Technologies - Cell Phone Technician"
                jobDescription="Answering customer inquiries regarding cell phone software and hardware operations, 
                Installing and repairing cell phone/computer hardware, software, and peripheral equipment, 
                following design or installation specifications, 
                Developing training procedures and training users in the proper use of hardware and software"
                />
              
              <Experience
                startYear={"August 2016"}
                endYear={"May 2017"}
                jobName="Johns Hopkins Applied Physics Lab - Intern"
                jobDescription="Built a graphing calculator using reverse polish notation in the C programming language,
                Designed and developed a basic checkers game with a graphical user interface, implemented
                in the C programming language"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <div style={{align: 'right'}}>
                <h2>Skills</h2>
                <h4 style={{color: 'grey'}}><u>Programming Languages</u></h4>
                <Skills 
                  skill="Python"
                  progress={95}
                />
                <Skills 
                    skill="C++"
                    progress={80}
                />
                <Skills
                  skill="C"
                  progress={70}
                  />
                  <Skills
                  skill="BASH"
                  progress={50}
                />
                <Skills
                  skill="CSS/HTML"
                  progress={40}
                />
                <Skills 
                  skill="React/NodeJS"
                  progress={30}
                  />
                <h4 style={{color: 'grey'}}><u>Operating Systems</u></h4>
                <Skills 
                  skill="Mac OS"
                  progress={99}
                  />
                  <Skills 
                  skill="Linux"
                  progress={80}
                  />
                  <Skills 
                  skill="Windows"
                  progress={70}
                  />

                <h4 style={{color: 'grey'}} ><u>Software</u></h4>
                <Skills 
                  skill="VSCode"
                  progress={90}
                  />
                  <Skills 
                  skill="Git"
                  progress={80}
                  />
                  <Skills 
                  skill="Virtual Box"
                  progress={80}
                  />
                  <Skills 
                  skill="Jupyter Notebook"
                  progress={80}
                  />
                  <Skills 
                  skill="Docker"
                  progress={40}
                  />

                <h4 style={{color: 'grey'}}><u>Languages</u></h4>
                <Skills 
                  skill="English"
                  progress={99}
                  />
                  <Skills 
                  skill="Russian"
                  progress={85}
                  />
                  <Skills 
                  skill="Spanish"
                  progress={50}
                  />


                  
                
              </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
