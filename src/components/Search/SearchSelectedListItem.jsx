import React from "react";
import {ListGroup} from "react-bootstrap";

class SearchSelectedListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            display: "inline",
            paddingRight: "10px",
        };

        const { item } = this.props;
        return(
            <>
                <ListGroup.Item action variant="dark" onClick={() => this.props.handleClick(item.id) }>{item.name}</ListGroup.Item>
            </>
        )
    }
}

export default SearchSelectedListItem;