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
              //src="https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/20413945_889593161200357_6724908699372284423_o.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=bO8kpUfbREwAX85yafy&_nc_ht=scontent-iad3-1.xx&oh=c98f77e028a2252664d55ce7c56aef87&oe=6004CF1F"
              src={require('./alexgrad.jpg')}
              alt=""
              style={{height: '500px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '2em'}}></p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '3vw', fontFamily: 'Anton',alignSelf:"auto"}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (443)-474-0722
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '3vw', fontFamily: 'Anton'}}>
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
