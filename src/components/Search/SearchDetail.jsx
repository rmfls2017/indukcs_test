import React from "react";

class SearchDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.item === null) {
            return <div>Loading...</div>;
        }

        const { id, name, effect, company } = this.props.item;

        return(
            <div>
                <img src={`/images/${id}.png`} alt={name} />
                <h1>{name}</h1>
                <p>{effect}</p>
                <p>{company}</p>
            </div>
        );
    }
}

export default SearchDetail;