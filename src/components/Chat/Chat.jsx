import React from 'react'
import PropTypes from 'prop-types'
import {
    Div,
    FormLayoutGroup,
    File,
    Input,
    IconButton,
    Card,
    CardGrid,
    Avatar,
    FixedLayout,
    List

} from '@vkontakte/vkui';

import {
    Icon28Send,
    Icon28FaceRecognitionOutline,
    Icon28AddCircleOutline
} from '@vkontakte/icons';


function Chat(props) {


    

    return (
        <Div>
            <List>
                <CardGrid >
                    <Avatar></Avatar>
                    <Card style={{ padding: "15px", margin: "5px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam at consequatur molestiae eum provident quidem odio quo, deleniti dicta, labore placeat soluta temporibus qui a amet earum voluptatum eos id.
                    </Card>
                </CardGrid>
            </List>
            <FixedLayout vertical="bottom">
                <FormLayoutGroup mode="horizontal">
                    <File before={<Icon28AddCircleOutline />} mode="secondary" children="" controlSize="m" />
                    <Input style={{ width: "100%" }} />
                    <IconButton>
                        <Icon28Send />
                    </IconButton>
                    <IconButton>
                        <Icon28FaceRecognitionOutline />
                    </IconButton>
                </FormLayoutGroup>
                <Div style={{ height: "50px" }} />
            </FixedLayout>
        </Div >
    )
}

Chat.propTypes = {

}

export default Chat

