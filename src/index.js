import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseContext } from './context/firebase';

const config = {
  apiKey: "AIzaSyD9BzuFTvo2cZbH0d2c3TRkKwS5M0hUM-w",
  authDomain: "netflix-clone-ed6c8.firebaseapp.com",
  projectId: "netflix-clone-ed6c8",
  storageBucket: "netflix-clone-ed6c8.appspot.com",
  messagingSenderId: "236889494042",
  appId: "1:236889494042:web:c90d0f23010cc97ed277a3"
}

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>, 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
