
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderNav from './components/layout/HeaderNav';
import SideNav from './components/layout/SideNav';
import KnowledgeBase from './pages/KnowledgeBase';

function App() {
  return (
    <BrowserRouter>
      <HeaderNav />

      
      <div className="flex h-[calc(100vh-64px)]">
        
        
        <SideNav />

        
        <div className="flex-1 p-4 overflow-y-hidden font-family-inter">
          <Routes>
            <Route path="/knowledge-base" element={<KnowledgeBase />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App
