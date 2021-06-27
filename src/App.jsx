import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './App.css';

import Home from './panels/Home/Home';
import Persik from './panels/Persik';
import Team from './panels/Team/Team';
import Intro from './panels/Intro/Intro';

const ROUTS = {
	INTRO: 'intro',
	HOME: "home",
	TEAM: "team",
}

const App = () => {
	const [activePanel, setActivePanel] = useState('intro');
	const [fetchedUser, setUser] = useState(null);
	const [firstInput, setfirstInput] = useState(false);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);



	useEffect(() => {
		bridge.subscribe(({ detail: { type, data } }) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();




	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	function endIntro() {
		setTimeout(function () {
			setfirstInput(true)
			setActivePanel('home');
		}, 2500)
	}

	if (!firstInput) {
		endIntro()
	}

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel} popout={popout}>
					<Intro id={ROUTS.INTRO} go={endIntro} />
					<Home id={ROUTS.HOME} fetchedUser={fetchedUser} go={go} />
					<Team id={ROUTS.TEAM} go={go} />
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
