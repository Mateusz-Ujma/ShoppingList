import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import GlobalStyle from './assets/GlobalStyles.js';

ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		<GlobalStyle />
		<App />
	</>
);
