
import './App.css';
import React           from 'react';
import CssBaseline     from  '@material-ui/core/CssBaseline';
import NavigationBar   from  './NavigationBar';
import GridLayout      from  './GridLayout';
import Container       from  '@material-ui/core/Container';


function App() {
  return (
    <div classname ="App">
     <CssBaseline />
     <NavigationBar />
     <Container>
       <main>
          <GridLayout />
        </main>
     </Container>
     
    </div>
  );
}

export default App;
