import {Route, Routes} from 'react-router-dom';
import EditMeal from './containers/EditMeal/EditMeal';
import AddMeal from './containers/AddMeal/AddMeal';
import Main from './containers/Main/Main';

import Layout from './components/Layout/Layout';

const App = () => (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/meal/:id/edit" element={<EditMeal/>}/>
          <Route path="/meal/add" element={<AddMeal/>}/>
          <Route path="*" element={<h1>Not found!</h1>}/>
        </Routes>
      </Layout>




    </>
);

export default App
