import React from 'react';
import '../Style/resume.css'
import Container from '@material-ui/core/Container';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import HomeIcon from '@material-ui/icons/Home';
import Grid from '@material-ui/core/Grid';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import QUT from '../Components/QUT';

function Information(){
    return(
        <Container maxWidth="lg" className="info-container">
            <h1>Contact Information</h1>
            <div className="birthday">
                <Grid container>
                    <Grid item xs={6}>
                        <div className="birthday">
                            <CalendarTodayIcon className="icon"/>
                            <p className="icon">02/09/2000</p>
                        </div>
                    
                    </Grid>

                    <Grid item xs={6} className="last-icon">
                        <div className="birthday">
                            <HomeIcon className="icon"/>
                            <p>10 Meadows Drive, Kallangur</p>
                        </div>      
                    </Grid>

                    <Grid item xs={6}>
                        <div className="birthday">
                            <PhoneIcon className="icon"/>
                            <p className="icon">0401 429 998</p>
                        </div>
                    
                    </Grid>

                    <Grid item xs={6} className="last-icon">
                        <div className="birthday">
                            <EmailIcon className="icon"/>
                            <p>jackson_doring@outlook.com</p>
                        </div>      
                    </Grid>

                    <Grid item xs={12}>
                        <a href="https://www.jacksondoring.com" id="website-link">www.jacksondoring.com</a>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}

function AboutMe(){
    return(
        <Container maxWidth="lg" className="info-container">
            <h1>About Me</h1>
        </Container>
    );
}

function Resume() {
    return (
      <div className="App">
          <Information/>
          <AboutMe/>
          <QUT/>
      </div>
    );
  }
  
  export default Resume;