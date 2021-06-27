import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
    Panel,
    Select,
    CellButton,
    Group,
    FormItem,
    CustomSelectOption,
    Avatar,
    Div,
    Tabs,
    TabsItem,
    View,
    Text,
    Header,
    Cell,
} from '@vkontakte/vkui';

import { Icon24AddCircleDottedOutline } from '@vkontakte/icons';

import DOTA from '../../img/DOTA.png';



function Selection(props) {

    const [userRoll, setuserRoll] = useState('');

    console.log(userRoll);

    const rolls = [
        {
            id: 1,
            name: 'Керри',
            img: DOTA
        },
        {
            id: 2,
            name: 'Мидер',
            img: DOTA
        },
        {
            id: 3,
            name: 'Хард/Оффлейн',
            img: DOTA
        },
        {
            id: 4,
            name: 'Семи-саппорт/поддержка',
            img: DOTA
        },
        {
            id: 5,
            name: 'Фул-саппорт',
            img: DOTA
        },
        {
            id: 6,
            name: 'Фул-саппорт',
            img: DOTA
        },
    ]

    const players = [
        {
            name: "@MVP2020",
            roll: "Мидер",
            avatar: DOTA
        },
        {
            name: "@ProRock",
            roll: "Керри",
            avatar: DOTA
        },
        {
            name: "@@Tasher11",
            roll: "Танк",
            avatar: DOTA
        },
    ]

    function enterTheTeam() {
        players.push({
            name: props.fetchedUser.first_name,
            roll: userRoll,
            avatar: DOTA
        })

    }


    return (
        <View activePanel="сustomSelect">
            <Panel id="сustomSelect">
                <Group>
                    <FormItem top="Роль в игры">
                        <Select
                            placeholder="Не выбран"
                            value={userRoll}
                            onChange={console.log(userRoll)}
                            options={rolls.map(roll => ({ label: roll.name, value: roll.id, avatar: roll.img }))}
                            renderOption={({ option, ...restProps }) => (
                                <CustomSelectOption {...restProps} before={<Avatar size={24} src={option.avatar} />} />
                            )}
                        />
                    </FormItem>
                    <FormItem top="Подать заявку">
                        <CellButton onClick={enterTheTeam} centered after={<Icon24AddCircleDottedOutline />}>Присоедениться</CellButton>
                    </FormItem>
                    <Group header={<Header mode="secondary">Выделение</Header>}>
                        {players.map((players,idx) => (
                            <Cell
                                key={idx}                                
                                before={<Avatar size={24} src={players.avatar} />}
                                after={<Text>{players.roll}</Text>}
                            >
                                <Text>{players.name}</Text>

                            </Cell>
                        ))
                        }
                    </Group>
                </Group>
            </Panel>
        </View>
    )
}

Selection.propTypes = {

}

export default Selection

