import './App.css';
import MainPage from "./components/MainPage";
import {Route, Routes} from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  return (
      <Routes>
        <Route path={'/'} element={<MainPage/>}/>
        <Route path={'*'} element={<NotFound/>}/>
      </Routes>
  );
}

export default App;
