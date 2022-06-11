import React, {useState, useEffect} from 'react'
import VirtualList from 'rc-virtual-list';
import {Avatar, Collapse, List, message} from 'antd';

const fakeDataUrl = 'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 200;
const {Panel} = Collapse;

function HistoryList() {
    const [data, setData] = useState([]);
    const [scroll, setScroll] = useState(true);

    const appendData = () => {
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((body) => {
                setData(data.concat(body.results));
                message.success(`${body.results.length} more items loaded!`);
            });
    };

    useEffect(() => {
        appendData();
    }, []);

    const onScroll = (e) => {
        if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
            appendData();
        }
    };

    return (
        <>
            <Collapse>
                <Panel header="검색 히스토리" key="1">
                    <List>
                        <VirtualList
                            data={data}
                            height={ContainerHeight}
                            itemHeight={47}
                            itemKey="email"
                            onScroll={onScroll}
                        >
                            {(item) => (
                                <List.Item key={item.email}>
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.picture.large} />}
                                        title={<a href="https://ant.design">{item.name.last}</a>}
                                        description={item.email}
                                    />
                                    <div>Content</div>
                                </List.Item>
                            )}
                        </VirtualList>
                    </List>
                </Panel>
            </Collapse>
        </>
    );
}

export default HistoryList;