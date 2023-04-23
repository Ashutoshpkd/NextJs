import React, { useState } from 'react';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [touchEndY, setTouchEndY] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    setTouchEndY(e.changedTouches[0].clientY);

    if (touchEndY < touchStartY) {
      setDrawerOpen(false);
    } else if (touchEndY > touchStartY) {
      setDrawerOpen(true);
    }
  };

  return (
    <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div style={{ height: '100vh' }}>
        <h1>Main Content</h1>
      </div>
      {drawerOpen && (
        <div className="drawer" style={{ height: '100vh', backgroundColor: '#eee' }}>
          <h2>Drawer Content</h2>
          <button onClick={() => setDrawerOpen(false)}>Close Drawer</button>
        </div>
      )}
    </div>
  );
}

export default App;
