import React from 'react';
import '../Style/resume.css'
import Container from '@material-ui/core/Container';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import HomeIcon from '@material-ui/icons/Home';

function Information(){
    return(
        <Container maxWidth="lg" className="info-container">
            <div className="birthday">

                <CalendarTodayIcon/>
                <p className="icon">02/09/2000</p>

                <HomeIcon/>
                <p>10 Meadows Drive, Kallangur</p>

            </div>
        </Container>
    );
}

function Resume() {
    return (
      <div className="App">
          <Information/>
      </div>
    );
  }
  
  export default Resume;