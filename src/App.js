import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostsList from './features/posts/postsList';
import './App.css';
import Welcome from './features/welcome/welcome';
import AddForm from './features/add-form/addForm';
import SinglePostPage from './features/posts/singlePost/singlePostpage';


function App() {

  return (
    <div className='app'>
      <h1>Navbar</h1>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/posts' element={<PostsList/>}/>
          <Route path='/add-form' element={<AddForm/>}/>
          <Route path='/singlePostPage/:id' element={<SinglePostPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
