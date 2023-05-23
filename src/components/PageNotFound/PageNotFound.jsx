import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
	return (
		<button>
			<NavLink to='/'>Wróć do strony głównej</NavLink>
		</button>
	);
};

export default PageNotFound;
