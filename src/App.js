import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import TodoList from "./components/TodoList/TodoList";
import './App.css';
import Pages from "./components/page/Page";
import Gallery from "./components/gallery/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery/>}/>
          <Route path="todo" element={<TodoList/>}/>
          <Route path="pages" element={<Pages/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
