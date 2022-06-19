import React, {useState, useEffect} from 'react'
import VirtualList from 'rc-virtual-list';
import {Avatar, Collapse, List, message} from 'antd';
import { useDispatch } from 'react-redux';
import { deleteHistory, getHistories } from '../../../../_actions/search_history_actions';
import { size } from 'lodash';

const fakeDataUrl = 'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 200;
const {Panel} = Collapse;

function HistoryList() {
    const dispatch = useDispatch();

    const [size, setSize] = useState(0);
    const [limit, setLimit] = useState(20);
    const [data, setData] = useState([]);
    const [scroll, setScroll] = useState(true);

    useEffect(() => {
        appendData();
    }, []);

    const appendData = () => {
        loadData({
            size: size,
            limit: limit,
        });
    };

    const loadData = (body) => {
        dispatch(getHistories(body)).then(body => {
            let items = body.payload.items;
            setData(data.concat(items));
        });

    };
    
    const onScroll = (e) => {
        if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
            appendData();
        }
    };

    const onDeleteHandler = (e) => {
        let id = e.target.dataset.key;
        dispatch(deleteHistory(id)).then(res => {
            if (res.success) {
                loadData({
                    size: 0,
                    limit: 20,
                });
            }
        });
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
                            itemKey="_id"
                            onScroll={onScroll}
                        >
                            {(item) => (
                                <List.Item key={item._id}>
                                    <List.Item.Meta
                                        title={item.title}
                                        // description={item.email}
                                    />
                                    <div>
                                        <a data-key={item._id} href='#!' onClick={onDeleteHandler}>Delete</a>
                                    </div>
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