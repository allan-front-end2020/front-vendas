import React from 'react'
import { Input } from 'antd';
import { BoxInput, TitleInput } from './input.styles';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';




interface InputProps {
    title?: string
    margin?: string
    type?: string
}

const InputData = ({ title, margin }: InputProps) => {

    return (
        <>
            <BoxInput style={{ margin }}>
                <TitleInput>{title}</TitleInput>
                <Input />
            </BoxInput>
        </>
    )
}

export default InputData
