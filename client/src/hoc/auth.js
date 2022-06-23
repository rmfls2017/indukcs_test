/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { auth } from '../_actions/user_actions';
import { useSelector, useDispatch } from "react-redux";

/**
 * 로그인이 필요한 컴포넌트인지 확인 후 컴포넌트를 그린다
 * 
 * @param {*} SpecificComponent 파라미터로 넘어온 컴포넌트를 랜더링
 * @param {*} reqiredLogin 
 * @param {*} adminRoute 
 * @returns 
 */
export default function (SpecificComponent, reqiredLogin, adminRoute = null) {
    return (props) => {
        let user = useSelector(state => state.user);
        const dispatch = useDispatch();

        useEffect(() => {
            // action.auth 통해 유저의 상태 확인
            dispatch(auth()).then(response => {
                if (!response.payload.isAuth) {
                    if (reqiredLogin) {
                        props.history.push('/login')
                    }

                    return;
                }

                if (adminRoute && !response.payload.isAdmin) {
                    props.history.push('/')

                    return;
                }

                if (reqiredLogin === false) {
                    props.history.push('/')
                }
            })

        }, [])

        return (
            <SpecificComponent {...props} user={user} />
        )
    };
}


