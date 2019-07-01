import React from 'react';
import AnnouncementCard from './components/Card/AnnouncementCard';
import AvatarCard from './components/Card/AvatarCard';
import AuthForm from './components/AuthForm';
import { NumberWidget, IconWidget } from './components/Widget';
import './styles/reduction.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <AnnouncementCard />
			 <AuthForm />
			 <IconWidget />
			 <NumberWidget />
			 <AvatarCard />
      </header>
    </div>
  );
}

export default App;
