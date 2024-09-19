// FOR TESTING PURPOSES ONLY
import { MediaProvider } from "./contexts/MediaContext";
import Test from "./components/Test";
import { UserProvider } from "./contexts/UserContext";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <UserProvider>
        <MediaProvider>
          <Test />;
        </MediaProvider>
      </UserProvider>
    </Router>
  );
};

export default App;
