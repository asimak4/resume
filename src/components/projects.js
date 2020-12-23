import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, List, ListItem, ListItemContent, ListItemAction } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 1 };
  }

  toggleCategories() {

    if(this.state.activeTab === 1){
      return(
        <div className = "projects-grid">
          <List>
                <hr style={{borderTop: '3px solid #e22947'}} /> 
                <ListItem >
                  <ListItemContent>
                  <a href="https://github.com/asimak4/FunProjects/blob/master/Small%20Practice%20Programs/scrapingCars.py">Car Scraping</a>
                    <p>
                      Developed a web scraper that automatically scraped a website, (Cars.com) using the BeautifulSoup Library to filter out
                      specific car requirements. It would then update the csv file and then send an email with new updated cars, which made the
                      selection process much more convenient and time efficient. (Python, BeautifulSoup, csvRequests)
                    </p>
                  </ListItemContent>
                </ListItem> 
                <ListItem>
                  <ListItemContent>
                    <i className="fa fa-connectdevelop" aria-hidden="true"/>  
                  </ListItemContent>
                </ListItem>
                
                <hr style={{borderTop: '3px solid #e22947'}} /> 
                <ListItem>
                  <ListItemContent>
                  <a href="https://github.com/asimak4/FunProjects/blob/master/AI%20and%20ML%20Practice/Minimaxconnect4.py">Connect4 Minimax</a>
                    <p>
                      Connect 4 implemented by a game playing agent that allows you to play against a AI using Minimax or a random CPU, or another player. 
                      Minimax is a strategy of always minimizing the maximum possible loss which can result from a choice that a player makes. 
                      Console based user interface, and allows easy playablity.
                    </p>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                  <i className="fa fa-gamepad" aria-hidden="true"/>  
                  </ListItemContent>
                </ListItem>
                <hr style={{borderTop: '3px solid #e22947'}} /> 

                <ListItem>
                <ListItemContent>
                <a href="https://github.com/asimak4/FunProjects/blob/master/AI%20and%20ML%20Practice/DFSandBFSJugProblem.ipynb">Jug Problem</a>
                <p>
                  Implemented BFS and DFS on a Jug problem with three jugs, based on user input. My implementation of the domain is able to handle different sized jugs.
                  Assuming the jugs will be size 1 or larger and will be whole numbers. The final output prints each node to the final path. 
                </p>
                </ListItemContent>
                </ListItem>
                <ListItem>
                <ListItemContent>
                <i className="fa fa-code" aria-hidden="true"/>  
                </ListItemContent>
                </ListItem>
                <hr style={{borderTop: '3px solid #e22947'}} /> 



                <ListItem>
                <ListItemContent>
                <a href="https://github.com/asimak4/FunProjects/blob/master/AI%20and%20ML%20Practice/multilabelClassification.ipynb">Multi-Label Classification</a>
                <p>
                  The purpose of this assignment is to implement some machine learning models on a income data set using random forest Classification.
                  The final prediction decides whether someone makes more than $50k or less than $50k. Using data that is given by the census.
                </p>
                </ListItemContent>
                </ListItem>

                <ListItem>
                <ListItemContent>
                <i className="fa fa-bug" aria-hidden="true"/>  
                </ListItemContent>
                </ListItem>
                <hr style={{borderTop: '3px solid #e22947'}} /> 
                <ListItem>
                <ListItemContent>
                <a href="https://github.com/asimak4/FunProjects/blob/master/AI%20and%20ML%20Practice/ImageClassification-%20Alex%20Simak.ipynb">Image Classification</a>
                  <p>
                    Predict whether or not the image sent through the model is a dog or a cat. Simple image classification using keras library and learning nueral networks. 
                    Basic introductory example to computer vision. Image classification is a supervised learning problem: define a set of target classes (objects to identify in images), 
                    and train a model to recognize them using labeled example photos. 
                  </p>
                </ListItemContent>
                </ListItem>

                <ListItem>
                <ListItemContent>
                <i className="fa fa-file" aria-hidden="true"/>  
                </ListItemContent>
                </ListItem>
                <hr style={{borderTop: '3px solid #e22947'}} /> 

                <ListItem>
                <ListItemContent >
                <a href="https://github.com/asimak4/FunProjects/blob/master/Small%20Practice%20Programs/StockPred.py">Stock Predictor</a>
                <p>
                  Basic model which inputs any stocks data selected by the user, using panda’s library in python, 
                  taking 10 years of data (or as long as the stock as has been around) and builds and trains a model to 
                  estimate an advanced price for that specified stock. Representing that data as a graph for the actual plot vs 
                  expected future plot. (Python,Pandas,MatPlot)
                </p>
                </ListItemContent>           
                </ListItem>

                <ListItem>
                <ListItemContent>
                <i className="fa fa-terminal" aria-hidden="true"/>  
                </ListItemContent>
                </ListItem>
                <hr style={{borderTop: '3px solid #e22947'}} /> 
                <ListItem>
                  <ListItemContent>
                    <a href="https://github.com/asimak4/FunProjects">Database Management Systems</a>
                    <p>
                      Worked with a team to develop a database of the faculty members at the university and were able to 
                      link the schema to a query language (SQL) using Python to access, update and administer the SQL tables created. 
                      Developed a minimal user interface using python that would let the user easily and functionally be able to access the data. (Python, SQL)
                    </p>
                  </ListItemContent>
                </ListItem>
                
                <ListItem>
                <ListItemContent>
                <i className="fa fa-code-fork" aria-hidden="true"/>  
                </ListItemContent>
                </ListItem>
                <hr style={{borderTop: '3px solid #e22947'}} /> 
                <p>Others not listed.</p>
          </List>
          <hr style={{borderTop: '3px solid #e22947'}} /> 
        </div>


      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <List>
          <hr style={{borderTop: '3px solid #e22947'}} /> 
          <ListItem>
            <ListItemContent>
            <a href = "https://github.com/asimak4/FunProjects/tree/master/Chess%20Module">Chess in C</a>
            <p>
              For this project, I worked very hard on the development of correctly moving the chess pieces, making sure that the user moves are valid, checking for mate and check, cpu moves are valid, and making sure that the user formatted the input correctly.
              I have layed out exactly how i developed and implemented the chess program in my design.pdf under my Github Chess program repository.
              For the CPU's random movement, I chose to implement it like this: Choosing a random piece to move, make then pick a random number out of that number of pieces, then randomely pick a destination of that piece, so i have the original location and where i am trying to move it. 
              Then i put those values into a function called validmoves where it tells me if it is a valid more or not and if it is not a valid move, i then continue the loop and have it repeat those steps until a valid move is found. 
              This works well and i also make sure to check for the "check" and if it is putting its pieces into the check position, and if so i restart the loop aswell.
            </p>
            </ListItemContent>
          </ListItem>

          <ListItem>
          <ListItemContent>
            <i className="fa fa-code-fork" aria-hidden="true"/> 
          </ListItemContent>
          </ListItem>
          <hr style={{borderTop: '3px solid #e22947'}} /> 
          <ListItem>
            <ListItemContent>
            <a href ="https://github.com/asimak4/FunProjects">Sally FORTH in C++</a>
            <p>
            Build a compiler that starts off working with arithmetic operations, then
            expanding it to handle stack operations, variables, comparison and logical
            operators, if statements and loops. In Sally FORTH, arithmetic operations are written in Reverse Polish Notation (RPN).
            </p>
            </ListItemContent>
          </ListItem>

          <ListItem>
          <ListItemContent>
            <i className="fa fa-terminal" aria-hidden="true"/> 
          </ListItemContent>
          </ListItem>
          <hr style={{borderTop: '3px solid #e22947'}} /> 
          <ListItem>
            <ListItemContent>
            <a href ="https://github.com/asimak4/FunProjects/tree/master/Tic%20Tac%20Toe%20Module">Tic Tac Toe in C</a>
            <p>
              Basic Tic Tac Toe module built in C, created to take in various inputs from the user, play against a player or cpu, implement mutex locking and basic operating system requirements. 
              Simple console based user interface for simple playablity. 
            </p>
            </ListItemContent>
          </ListItem>

          <ListItem>
          <ListItemContent>
            <i className="fa fa-code" aria-hidden="true"/> 
          </ListItemContent>
          </ListItem>
          <hr style={{borderTop: '3px solid #e22947'}} /> 
          <p>Others not listed.</p>
          </List>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
        <List>
        <hr style={{borderTop: '3px solid #e22947'}} /> 
          <ListItem>
            <ListItemContent>
            <a href ="https://github.com/asimak4/FunProjects/">MERN with AWS</a>
            <p> 
            Created a simple website using HTML/CSS and ReactJS framework. 
            The website took in user input (login information) and was able to link the 
            information with the database which either allowed or denied user permission to the application. 
            Afterwards, linking the website to an AWS EC2 instance to maintain and publish the website. 
            (HTML, CSS, REACTJS, EC2, MangoDB, ExpressJS, NodeJS)
            </p>
            </ListItemContent>
          </ListItem>

          <ListItem>
          <ListItemContent>
            <i className="fa fa-code-fork" aria-hidden="true"/> 
          </ListItemContent>
          </ListItem>
          <hr style={{borderTop: '3px solid #e22947'}} /> 
          <ListItem>
            <ListItemContent>
            <a href ="">Online Portfolio</a>
            <p>
            Developed this simple website using HTML/CSS and ReactJS/NodeJS framework. 
            Using only basic CSS/HTML, without any preloaded libraries, Built to show my projects and experience levels, a bit about me 
            and a way to contact me to get to know me better! :) 
            </p>
            </ListItemContent>
          </ListItem>

          <ListItem>
          <ListItemContent>
            <i className="fa fa-code" aria-hidden="true"/> 
          </ListItemContent>
          </ListItem>
          <hr style={{borderTop: '3px solid #e22947'}} /> 
          </List>
          </div>
      )
    }

  }

  render() {
    return(
      <div className="projects-grid-whole-page">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab></Tab>
          <Tab>Python</Tab>
          <Tab>C/C++</Tab>
          <Tab>FrontEnd</Tab>
        </Tabs>
        <div>{this.toggleCategories()}</div>
      </div>
               
    )
  }
}

export default Projects;
