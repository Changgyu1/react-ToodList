import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Todo from './component/Todo';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
function App (){
    return (
        <Router>
            <div>
                <Header />
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/todo">할 일 목록</Link>
                        </li>
                    </ul>
                </nav>
                <hr />
                <Routes>
                    <Route path="/todo" element={<Todo/>} />
                </Routes>
                <Routes>
                    <Route path="/home" element={<Home/>} />
                </Routes>
                <Footer></Footer>
            </div>
        </Router>
    )
}
export default App;