import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ContactHeader from './components/ConatctHeader/ContactHeader';
import ContactForm from './components/ConatctForm/ContactForm';

function App() {
  return (
    <div>
      <Navigation/>
      <main className='main_container'>
        <ContactHeader/>
        <ContactForm/>
      </main>
    </div>
  );
}

export default App;
