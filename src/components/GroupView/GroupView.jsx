import React from 'react';

const GroupView = ({ groupName, groupAdmins, groupUsers }) => {
	return (
		<div>
			<h1>{groupName}</h1>
			<div>{groupAdmins.arrayValue.values[0].stringValue}</div>
			<div>{groupUsers.arrayValue.values[0].stringValue}</div>
		</div>
	);
};

export default GroupView;
