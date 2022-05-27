import React, { Fragment } from "react";

class SearchSelect extends React.Component {
    static defaultProps = {
        value: 'all'
    }

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const OPTIONS = [
            {value: 'all', label: '전체'},
            {value: 'name', label: '이름'},
            {value: 'symptom', label: '증상'},
            {value: 'company', label: '제조사'},
        ];
        return(
            <Fragment>
                <select value={this.state.value} onChange={this.handleChange} name="searchSelect" >
                    {OPTIONS.map(option => (<option 
                        key={option.value} 
                        value={option.value} 
                        defaultValue={this.props.defaultValue === option}>{option.label}
                    </option>))}
                </select>
            </Fragment>
        )
    }
}

export default SearchSelect;