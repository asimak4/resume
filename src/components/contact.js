import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, Icon } from 'react-mdl';
class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid style={{display:'flex', justifyContent:'center'}} className="contact-grid">
          <Cell col={6}>
            <h2>Alex Simak</h2>
            <img
              src={require('./alexgrad.jpg')}
              alt=""
              style={{height:'400px',paddingBottom:'0%'}}
               />
             

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem> 
                  <ListItemContent icon = "phone_iphone"  style={{display:'flex', justifyContent:'center',fontSize: '150%', fontFamily: 'Anton'}}>
                    (443)-474-0722
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent icon = "email" style={{display:'flex', justifyContent:'center',fontSize: '150%', fontFamily: 'Anton'}}>
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
