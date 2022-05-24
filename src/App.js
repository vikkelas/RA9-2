import './App.css';
import HomePage from "./Components/HomePage/HomePage";
import {Routes, Route} from "react-router-dom";
import NewPost from "./Components/NewPost/NewPost";
import PostItem from "./Components/PostItem/PostItem";
import ChangePost from "./Components/ChangePost/ChangePost";
import ActivePostProvider from "./Components/ActivePostProvider/ActivePostProvider";

function App() {
  return (
      <ActivePostProvider>
          <div className='container'>
              <h1>CRUD</h1>
              <Routes>
                  <Route path='/' element={<HomePage/>}/>
                  <Route path='/posts/new' element={<NewPost/>}/>
                  <Route path='/posts/:id' element={<PostItem/>}/>
                  <Route path='/postsChange/:id' element={<ChangePost/>}/>
              </Routes>
          </div>
      </ActivePostProvider>

  );
}
export default App;
