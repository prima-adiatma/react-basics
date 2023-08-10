import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';

// * Use Curly Braces '{ }' for multiple export from one file
// import { FirstComponent, SecondComponent } from "./components/MyComponent";

// * Make alias Component from export
import { FirstComponent as FC, SecondComponent as SC} from "./components/MyComponent";

// import MyComponent from './components/MyComponent';

// * Make alias Component from export default 
// * Don't use alias because only one default export per file
import MC from './components/MyComponent';
import HelloWorld from './components/HelloWorld';
import Student from './components/Student';
import Employee from './components/Employee';
import User from './components/User';
import EventHandling from './components/EventHandling';
import ConditionRendering from './components/ConditionRendering';


function App() {

  // TODO: Props as Object
  const student = { 
    firstName: "Prima",
    lastName: "Adiatma",
    email: "prima@gmail.com"  
  }

  // TODO: Props transfer the Array from one component

  const skills = ["HTML ", "CSS ", "JavaScript"]
  return (
    <div className="App">
      {/* <Welcome name = "Prima"/>
      <Welcome name = "Adiatma"/> */}

      {/* <Greeting name = "Prima"/>
      <Greeting name = "Adiatma"/> */}

      {/* <FirstComponent/>
      <SecondComponent/> */}

      {/* <FC/>
      <SC/> */}

      {/* <MyComponent/> */}

      {/* <MC/> */}

      {/* <HelloWorld/> */}

      {/* <Student
        firstName="Prima"
        lastName="Adiatma"
        email="prima@gmail.com" /> */}

      {/*Props as Object */}
      {/* <Student
      student = {student}/> */}

      {/* Props array */}
      {/* <Student
        data = {skills}/> */}

      {/* Destructuring Props */}
      {/* <Student
        firstName="Prima"
        lastName="Adiatma"
        email="prima@gmail.com" /> */}
      
      {/* State */}
      {/* <Employee/> */}

      {/* useState Hook */}
      {/* <User/> */}

      {/* Event Handling */}
      {/* <EventHandling/> */}

      {/* Condition Rendering */}
      <ConditionRendering/>

    </div>
  );
}

export default App;
