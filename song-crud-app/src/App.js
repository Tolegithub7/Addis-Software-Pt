// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>song-crud-app</h1>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SongList from "./components/SongList";
import SongForm from "./components/SongForm";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={SongList} />
          <Route path="/add" component={SongForm} />
          {/* Add routes for update and delete as needed */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
