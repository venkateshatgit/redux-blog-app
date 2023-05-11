import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostsList from './features/posts/postsList';
import './App.css';
import Welcome from './features/welcome/welcome';

function App() {

  return (
    <div className='app'>
      <h1>Navbar</h1>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/posts' element={<PostsList/>}/>

        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
