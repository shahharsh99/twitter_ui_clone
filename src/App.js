import { Widgets } from '@material-ui/icons';
import './App.css';
import Feed from './Twitter/Feed';
import LeftSideBar from './Twitter/LeftSideBar';

function App() {
  return (
    <div className="app">
      <LeftSideBar/>
      <Feed/>
    </div>
  );
}

export default App;
