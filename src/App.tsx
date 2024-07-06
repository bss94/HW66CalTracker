import {Route, Routes} from 'react-router-dom';

const App = () => (
    <>
      <Routes>
        <Route path="/" element={<div/>}/>

        <Route path="*" element={<h1>Not found!</h1>} />
      </Routes>
    </>
);

export default App
