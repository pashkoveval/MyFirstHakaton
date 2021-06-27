import React, { useState } from 'react';

import logo from '../../img/DOTALOGOMAIN.png'

import {
	Panel,
	PanelHeader,
	FixedLayout,
	Group,
	Badge,
	Cell,
	Div,
	Avatar,
	Separator,
	Tabbar,
	TabbarItem,
	View,
	Text
} from '@vkontakte/vkui';
import {

	Icon28ChatsOutline,
	Icon28NewsfeedOutline,
	Icon28UserCircleOutline,
	Icon28MessageAddBadgeOutline,
	Icon28Game
} from '@vkontakte/icons';

import Profile from '../../components/Profile/Profile'
import Chat from '../../components/Chat/Chat'
import Notifications from '../../components/Notifications/Notifications'
import News from '../../components/News/News'
import Selection from '../../components/Selection/Selection'


const Home = ({ id, fetchedUser }) => {

	const [activePanel, setActivePanel] = useState('profile');
	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<Panel id={id} >
			<PanelHeader>
				<Cell>
					<Avatar src={logo} mode="image" />
				</Cell>
			</PanelHeader>
			<Group>
				<View activePanel={activePanel}>
					<Panel id="profile">
						<Profile fetchedUser={fetchedUser} />
					</Panel>
					<Panel id="news">
						<News />
					</Panel>
					<Panel id="chat">
						<Chat />
					</Panel>
					<Panel id="notifications">
						<Notifications />
					</Panel>
					<Panel id="selection">
						<Selection fetchedUser={fetchedUser} />
					</Panel>
				</View>
				<FixedLayout filled vertical="bottom">
					<Separator wide />
					<Tabbar>
						<TabbarItem
							style={{ color: '#000', fontSize: "12px" }}
							selected={activePanel === "profile"}
							onClick={go}
							data-to="profile"
							text="Профиль"
						>
							<Icon28UserCircleOutline />
						</TabbarItem>
						<TabbarItem
							style={{ color: '#000', fontSize: "12px" }}
							selected={activePanel === "news"}
							onClick={go}
							data-to="news"
							text="Новости"
						>
							<Icon28NewsfeedOutline />
						</TabbarItem>
						<TabbarItem
							style={{ color: '#000', fontSize: "12px" }}
							selected={activePanel === "chat"}
							onClick={go}
							data-to="chat"
							text="Чат"
						>
							<Icon28ChatsOutline fill="black" />
						</TabbarItem>
						<TabbarItem
							style={{ color: '#000', fontSize: "12px" }}
							selected={activePanel === "notifications"}
							onClick={go}
							data-to="notifications"
							text="Уведомления"
							after={<Badge mode="prominent" aria-label="Есть новые" />}
						>
							<Icon28Game fill="black" />
						</TabbarItem>
						<TabbarItem
							style={{ color: '#000', fontSize: "12px" }}
							selected={activePanel === "selection"}
							onClick={go}
							data-to="selection"
							text="Подбор"
						>
							<Icon28MessageAddBadgeOutline />
						</TabbarItem>
					</Tabbar>
				</FixedLayout>
			</Group>
		</Panel >
	)
}

Home.propTypes = {

}

export default Home
