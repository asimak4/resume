import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Alex Simak</h2>
            <img
              src={require('./alexgrad.jpg')}
              alt=""
              style={{height:'500px',padding:'5%'}}
               />
             

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '150%', fontFamily: 'Anton',alignSelf:"auto",paddingLeft:'23%'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (443)-474-0722
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '150%', fontFamily: 'Anton',paddingLeft:'23%'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                          asimak4@gmail.com
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
