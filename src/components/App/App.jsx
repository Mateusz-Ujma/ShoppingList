import {
	BrowserRouter,
	Routes,
	Route,
	NavLink,
} from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';
import Register from '../Register/Register';

import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../../utils/firebaseConfig';
import { useContext, useEffect, useState } from 'react';
import { AuthContext, AuthProvider } from '../../utils/authContext';
import ProtectedRoutes from '../../utils/ProtectedRoutes';
import PageNotFound from '../PageNotFound/PageNotFound';
import { collection, getDocs } from 'firebase/firestore';
import GroupView from '../GroupView/GroupView';

function App() {
	const [user, setUser] = useState({});
	const [userGroups, setUserGroups] = useState([]);
	const getGroups = async () => {
		setUserGroups([]);
		const querySnapshot = await getDocs(collection(db, 'groups'));
		querySnapshot.forEach((doc) => {
			let dataG = doc._document.data.value.mapValue.fields;
			setUserGroups((dataold) => [...dataold, dataG]);
		});
	};
	useEffect(() => {
		getGroups().catch(console.error);
	}, []);
	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser);
	});
	return (
		<AuthProvider>
			<BrowserRouter>
				<NavLink to='/dashboard'>abc</NavLink>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='login' element={<Login />} />
					<Route path='register' element={<Register />} />
					<Route element={<ProtectedRoutes />}>
						<Route
							path='dashboard'
							element={<Dashboard usersGroup={userGroups} />}
						/>
						{userGroups.map((item, i) => {
							let temp = false;
							item.GroupUsers.arrayValue.values[0].stringValue ===
							user.uid
								? (temp = true)
								: (temp = false);
							return temp ? (
								<Route
									key={i}
									path={`/${item.GroupName.stringValue}`}
									element={
										<GroupView
											groupUsers={item.GroupUsers}
											groupAdmins={item.GroupAdmins}
											groupName={item.GroupName.stringValue}
										/>
									}
								/>
							) : null;
						})}
					</Route>
					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
