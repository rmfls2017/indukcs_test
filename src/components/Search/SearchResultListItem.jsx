import React, { Fragment } from "react";

class SearchResultListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, name, effect, company } = this.props.item;
        return(
            <>
                <tr onClick={() => this.props.handleClick(id) }>
                    <td>{name}</td>
                    <td>{company}</td>
                    <td>{effect}</td>
                </tr>
            </>
        )
    }
}

export default SearchResultListItem;