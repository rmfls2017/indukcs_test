import React, {Component} from 'react';

class List extends Component {
    render() {
        return (
            <>
                <div class="head">
                    <span>이름</span>
                    <span>효능효과</span>
                    <span>제조사</span>
                </div>
                <div class='item'>
                    <span>타이레놀정 150mg</span>
                    <span>해열제</span>
                    <span>존슨앤존슨즈</span>
                </div>
            </>
        );
    }
}
//백그라운드 컬러
//공백
//루프

export default List;