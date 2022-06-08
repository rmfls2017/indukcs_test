import React, { Fragment } from "react";
import SearchSelect from "./SearchSelect";
import {Col, Form, Button, Row} from "react-bootstrap";

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <Form onSubmit={ this.props.handleSubmitForm } >
                    <Row className="mb-3 align-items-center">
                        <SearchSelect handleChange={this.props.handleChangeSelectBox}/>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Control placeholder={"해열제"} name="searchText" />
                        </Form.Group>

                        <Col xs="auto">
                            <Button variant="primary" type="submit">
                                검색
                            </Button>
                        </Col>
                        {/*<Form.Group as={Col} controlId="formGridState">*/}
                        {/*    */}
                        {/*</Form.Group>*/}
                    </Row>
                    {/*<label>Search: <input*/}
                    {/*    placeholder="타이레놀" */}
                    {/*    type="text" */}
                    {/*    name="searchText" */}
                    {/*    // onChange={ this.handleInputSearch }*/}
                    {/*/></label>*/}
                </Form>
            </>
        );
    }
}

export default SearchForm;