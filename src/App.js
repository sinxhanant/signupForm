
import React from 'react';
import SignupForm from './components/SignupForm.jsx'
import EditUser from './components/EditUser.jsx'
import { HashRouter, Route, Routes} from "react-router-dom";
import Users from './components/Users.jsx';


function App() {
  return (
<HashRouter>
<Routes>

  <Route path='/signup' element={<SignupForm />}>

  </Route>
  <Route path="/edit/:id" element={<EditUser />}>

</Route>

<Route path='/' element={<Users />}>

</Route>

</Routes>
</HashRouter>

   
  );
}

export default App;
