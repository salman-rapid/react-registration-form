import { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import DisplayUser from './components/DisplayUser';

function App() {
	const [userData, setUserData] = useState(null);

	const getFormData = (data) => {
		setUserData(data);
	};

	return (
		<div className="App">
			{!userData && <UserForm regData={getFormData} />}
			{userData && <DisplayUser userData={userData} />}
		</div>
	);
}

export default App;
