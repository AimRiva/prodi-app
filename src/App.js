// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Comment from './components/Comment';
// // Dalam setiap komponen hanya bisa memiliki satu root elemen <div></div>

// const komentar = {
//     text: 'This is my comment',
//     date: new Date(),
//     author: {
//         avatarUrl: "https://via.placeholder.com/60",
//         name: "John Doe"
//     }
// };

import HomePage from "./pages/HomePage";
import EmployeePage from "./pages/EmployeePage";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";


function App(){
    return(
        <Router>
        <div>
            {/* <Comment text={komentar.text} date={komentar.date} author={komentar.author} /> */}
            <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/employee" component={EmployeePage} />
            </Switch>
        
        </div>
        </Router>
    );
}




// import Header from "./components/Header";
// const App = () => {
//     return (
//     <div>
//         <Header />
//         <p> Ada pertanyaan sampai disini ? </p>
//     </div>
//     );
// }




export default App;






















// import React from "react";

// class App extends React.Component{
//     render(){
//         return(
//             <div> 
//                 <h3>Class Base Component</h3>
//             </div>
//         ); 
//     }
// }
