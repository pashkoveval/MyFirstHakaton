import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';


const Team = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<PanelHeaderBack onClick={props.go} data-to="home" />}
            header={<PanelHeader>Team</PanelHeader>}
        >
            Team
        </PanelHeader>
    </Panel>
);

Team.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Team;