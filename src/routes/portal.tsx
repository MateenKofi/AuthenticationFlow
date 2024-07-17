import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Authentication from '../Authentication/Index'

const Portal: React.FC = () => {
  return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Authentication />} />
          </Routes>
        </BrowserRouter>
     
  );
};

export default Portal;
