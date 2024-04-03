import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterStudent from "./pages/RegisterStudent";
import Students from "./pages/Students";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={ <RegisterStudent /> } />
          <Route path='/students' element={ <Students /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
