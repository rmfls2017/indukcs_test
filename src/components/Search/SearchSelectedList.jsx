import React from "react";
import SearchSelectedListItem from "./SearchSelectedListItem";
import {ListGroup} from "react-bootstrap";

class SearchSelectedList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { items } = this.props;

        return (
            <>
                { items && items.length > 0 &&
                    <ListGroup className={"mb-1"} horizontal>
                        {items.map(item => {
                            return (<SearchSelectedListItem key={item.id} item={item}
                                                            handleClick={this.props.handleClick} />);
                        })}
                    </ListGroup>
                }
            </>
        );
    }
}

export default SearchSelectedList;