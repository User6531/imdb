import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from 'components/App';

// store 
import { setupStore } from 'store/configureStore';
import { Provider as ReduxProvider } from 'react-redux';
const store = setupStore();

ReactDOM.render(
    <ReduxProvider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ReduxProvider>
,document.getElementById('root')); 