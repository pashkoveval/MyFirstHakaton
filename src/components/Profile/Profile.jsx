import React, { useState, useEffect } from 'react'
import bridge from '@vkontakte/vk-bridge';

import {
    UsersStack,
    Header,
    Group,
    Button,
    Input,
    IconButton,
    Avatar,
    FormLayout,
    FormLayoutGroup,
    FormItem,
    SimpleCell,
    RichCell,
    List,
    FormStatus,
    Spacing,
    Title,
    Text
} from '@vkontakte/vkui';

import { Icon28SettingsOutline } from '@vkontakte/icons';

import DOTA from '../../img/DOTA.png';

const STORAGE_KEYS = {
    STATUS: 'steamID',
}

function Profile(props) {

    const idd = 12345678901234567;
    const [userSteamID, setUserSteamID] = useState(null);
    const [errorInput, setErrorInput] = useState(false);
    let inputValue = '';

    useEffect(() => {

        async function getInputValueFromState() {

            const storageData = await bridge.send('VKWebAppStorageGet', {
                keys: Object.values(STORAGE_KEYS)
            })
            storageData.keys.forEach(key => {
                setUserSteamID(key.value);
            })
        }
        getInputValueFromState()


    }, [])

    const setInputValueToStateAsync = async function () {

        if (inputValue.length === 17) {
            try {
                await bridge.send("VKWebAppStorageSet", {
                    key: STORAGE_KEYS.STATUS,
                    value: inputValue
                })
            } catch (error) {
                console.log(error);
            }
        } else { setErrorInput(true) }
    }

    function getInputValue(e) {
        inputValue = e.target.value;
    }

    function setInputValueToState(e) {
        e.preventDefault()
        setUserSteamID(inputValue)
        setInputValueToStateAsync()
    }

    return (
        <Group>
            <Header mode="secondary">Steam nekname</Header>
            <RichCell
                disabled
                before={<Avatar size={72} src={props.fetchedUser.photo_200} />}
                caption="Позиция Мидер"
                bottom={
                    <UsersStack>
                        SteamID : {STORAGE_KEYS.value ? '' : userSteamID}
                    </UsersStack>
                }
                actions={
                    <React.Fragment>
                        <IconButton>
                            <Icon28SettingsOutline />
                        </IconButton>
                    </React.Fragment>
                }
            >
                <Text>
                    {props.fetchedUser.first_name}
                    {props.fetchedUser.last_name}
                </Text>
            </RichCell >
            {!userSteamID ?
                <FormLayout>
                    <FormLayoutGroup mode="vertical">
                        {errorInput ?
                            <FormStatus header="SteamID насчитывает 17 символов" mode="error">
                                Необходимо корректно ввести свой SteamID для работы приложения.
                            </FormStatus>
                            :
                            null
                        }
                        <FormItem top="SteamID">
                            <Input onInput={getInputValue} />
                        </FormItem>
                        <FormItem>
                            <Button onClick={setInputValueToState}>Добавить SteamID</Button>                        </FormItem>
                    </FormLayoutGroup>
                </FormLayout>
                :
                null
            }
            <Group>
                <List>
                    <SimpleCell >
                        <Text>Последний матч</Text>
                    </SimpleCell >
                    <SimpleCell before={<Avatar size={24} mode="image" src={DOTA} />} after="12/4/8 win">Invoker</SimpleCell >
                </List>
                <Spacing size={30} />
                <List>
                    <SimpleCell >
                        <Text>Статистика</Text>
                    </SimpleCell >
                    <SimpleCell after="4.56">Добыча золота</SimpleCell >
                    <SimpleCell after="3.88">Поддержка</SimpleCell >
                    <SimpleCell after="4.94">Осада</SimpleCell >
                    <SimpleCell after="7.73">Гибкость</SimpleCell >
                    <SimpleCell after="4.58">Сражение</SimpleCell >
                </List>
            </Group>
        </Group >
    )
}


export default Profile

