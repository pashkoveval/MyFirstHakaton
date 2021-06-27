import React from 'react'
import PropTypes from 'prop-types'
import {
    ContentCard,
    PanelHeader,
    FixedLayout,
    Group,
    Badge,
    Cell,
    Div,
    Avatar,
    Separator,
    Tabs,
    TabsItem,
    View,
    Text
} from '@vkontakte/vkui';

import HEAD from '../../img/HEAD.png';

function News(props) {





    return (
        <Div>
            <ContentCard
                image={HEAD}
                subtitle="Razer"
                header="Супер чистый звук и полное погружение"
                text="Новые наушники от Razer, невероятные технологии объемного звука позволят услышать все..."
                caption="Photo by Alexander Jawfox on Unsplash"
                maxHeight={500}
            />
            <ContentCard
                image={HEAD}
                subtitle="Razer"
                header="Супер чистый звук и полное погружение"
                text="Новые наушники от Razer, невероятные технологии объемного звука позволят услышать все..."
                caption="Photo by Alexander Jawfox on Unsplash"
                maxHeight={500}
            />
            <ContentCard
                image={HEAD}
                subtitle="Razer"
                header="Супер чистый звук и полное погружение"
                text="Новые наушники от Razer, невероятные технологии объемного звука позволят услышать все..."
                caption="Photo by Alexander Jawfox on Unsplash"
                maxHeight={500}
            />
            <ContentCard
                image={HEAD}
                subtitle="Razer"
                header="Супер чистый звук и полное погружение"
                text="Новые наушники от Razer, невероятные технологии объемного звука позволят услышать все..."
                caption="Photo by Alexander Jawfox on Unsplash"
                maxHeight={500}
            />
        </Div>
    )
}

News.propTypes = {

}

export default News

