import React,{useState} from 'react'
import { useDispatch } from "react-redux";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Form, Input, Select, } from 'antd';
import { postPill } from "../../../_actions/pill_actions";
import FileUpload from '../../utils/FileUpload';
import ColorList from "./Sections/ColorList";
import ShapeList from "./Sections/ShapeList";

const {TextArea} = Input;

function UploadProductPage(props) {
    const dispatch = useDispatch();

    const [Images,setImages] = useState([]);

    const updateImages = (newImages) => { setImages(newImages) }

    return (
        <Formik
            initialValues={{
                title: '',
                description: '',
                ptypes: '',
                shape: 1,
                color: 1,
            }}

            validationSchema={Yup.object({
                title: Yup.string().required('알약 제목을 입력해주세요.'),
                description: Yup.string().required('알약 설명을 입력해주세요.'),
                ptypes: Yup.string().required('알약 종류를 입력해주세요.'),
                shape: Yup.number(),
                color: Yup.number(),
            })}

            onSubmit={(values, { setSubmitting }) => {
                // 이미지는 따로 추가해서 서버에 전달하기
                dispatch(postPill({...values, images: Images})).then(response => {
                    if (response.payload.success) {
                        alert('알약 업로드에 성공 했습니다.')
                        props.history.push('/')
                    } else {
                        alert('알약 업로드에 실패 했습니다.')
                    }
                });

                setSubmitting(false);
            }}
        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                } = props;
                return (
                    <div className="app">
                        <div style={{maxWidth: '700px', margin: '2rem auto'}}>
                            <div style={{textAlign: 'center', marginBottom: '2rem'}}>
                                <h2>알약 업로드</h2>
                            </div>
                            <Form onSubmit={handleSubmit} autoComplete="off">
                                <Form.Item>
                                    <FileUpload refreshFunction={updateImages}/>
                                </Form.Item>
                                <Form.Item required label="이름">
                                    <Input
                                        id="title"
                                        type="text"
                                        placeholder="알약 제목을 입력해주세요."
                                        value={values.title}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.title && touched.title ? 'text-input error' : 'text-input'
                                        }
                                    />
                                    {errors.title && touched.title && (
                                        <div className="input-feedback">{errors.title}</div>
                                    )}
                                </Form.Item>
                                <Form.Item required label="설명">
                                    <TextArea
                                        id="description"
                                        placeholder="알약 설명을 입력해주세요."
                                        value={values.description}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.description && touched.description ? 'text-input error' : 'text-input'
                                        }
                                    />
                                    {errors.description && touched.description && (
                                        <div className="input-feedback">{errors.description}</div>
                                    )}
                                </Form.Item>
                                <Form.Item required label="효능/효과">
                                    <TextArea
                                        id="ptypes"
                                        placeholder="알약 효능을 입력해주세요."
                                        value={values.ptypes}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.ptypes && touched.ptypes ? 'text-input error' : 'text-input'
                                        }
                                    />
                                    {errors.ptypes && touched.ptypes && (
                                        <div className="input-feedback">{errors.ptypes}</div>
                                    )}
                                </Form.Item>
                                <Form.Item required label="Shape">
                                    <ShapeList onChange={handleChange} />
                                </Form.Item>
                                <Form.Item required label="Color">
                                    <ColorList onChange={handleChange} />
                                </Form.Item>
                                <Form.Item>
                                    <Button onClick={handleSubmit} type="primary" disabled={isSubmitting} htmlType="submit">
                                        확인
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                );
            }}
        </Formik>
    );
}

export default UploadProductPage