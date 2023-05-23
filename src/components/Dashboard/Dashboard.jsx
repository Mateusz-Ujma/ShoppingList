import { useContext, useEffect, useState } from 'react';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../../utils/firebaseConfig';
import { AuthContext } from '../../utils/authContext';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import GroupButton from '../GroupButton/GroupButton';
import GroupView from '../GroupView/GroupView';

const Dashboard = ({ usersGroup }) => {
	let out = false;
	let isUserGroup = false;
	const [isGroupChoose, setIsGroupChoose] = useState(false);
	const { currentUser } = useContext(AuthContext);
	const [userGroupsID, setUserGroupsID] = useState([]);

	const test = async () => {
		try {
			const docRef = await addDoc(collection(db, 'groups'), {
				GroupName: 'Name',
				GroupUsers: [currentUser.uid],
				GroupAdmins: [currentUser.uid],
				GroupShoppingLists: [],
			});
			console.log('Document written with ID: ', docRef.id);
		} catch (e) {
			console.error('Error adding document: ', e);
		}
	};

	return (
		<div>
			{usersGroup.map((item, i) => {
				let temp = false;
				item.GroupUsers.arrayValue.values[0].stringValue ===
				currentUser.uid
					? (temp = true)
					: (temp = false);
				return temp ? (
					<NavLink key={i} to={`/${item.GroupName.stringValue}`}>
						{item.GroupName.stringValue}
					</NavLink>
				) : null;
			})}
		</div>
	);
};

export default Dashboard;
