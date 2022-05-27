import React from "react";

class SearchResultListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item: props.item,
        }
    }

    render() {
        const {name, effect, company, image} = this.state.item;
        return(
            <div>
                <img src={image} />
                <span>{name}</span>
                <span>{company}</span>
                <span>{effect}</span>
            </div>
        )
    }
}

export default SearchResultListItem;