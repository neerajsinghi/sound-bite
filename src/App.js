import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureState } from './redux/configureStore.js';
import Main from './components/MainComponent.js';
import './css/App.css';

const store = ConfigureState();


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
