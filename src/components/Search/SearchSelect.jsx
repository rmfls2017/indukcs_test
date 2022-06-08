import React, { Fragment } from "react";
import {Col, Form} from "react-bootstrap";

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

    handleChange(e) {
        this.setState({
            value: e.target.value
        });

        this.props.handleChange(e.target.value);
    }

    render() {
        const OPTIONS = [
            {value: 'all', label: '전체'},
            {value: 'name', label: '이름'},
            {value: 'symptom', label: '증상'},
            {value: 'company', label: '제조사'},
        ];
        return(
            <>
                <Col xs={"auto"}>
                    <Form.Select value={this.state.value} onChange={this.handleChange} name="searchSelect" >
                        {OPTIONS.map(option => (<option
                            key={option.value}
                            value={option.value}
                            defaultValue={this.props.defaultValue === option}>{option.label}
                        </option>))}
                    </Form.Select>
                </Col>
                {/*<Form.Group as={Col}>*/}
                {/*    */}
                {/*</Form.Group>*/}
            </>
        )
    }
}

export default SearchSelect;