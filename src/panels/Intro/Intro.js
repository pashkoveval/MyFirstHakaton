import React from 'react';

import { Panel, Div } from '@vkontakte/vkui';

import './Intro.css'



const Intro = (props) => {


	return (
		<Panel id={props.id} >
			<Div className="intro" vertical="aline">
				<Div className="intro-logos" />
			</Div>
		</Panel>
	);



};




export default Intro;
