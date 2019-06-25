import React from 'react';
import AnnouncementCard from './components/Card/AnnouncementCard';
import AuthForm from './components/AuthForm';
import './styles/reduction.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <AnnouncementCard />
			 <AuthForm />
      </header>
    </div>
  );
}

export default App;
