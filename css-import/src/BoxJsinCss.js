import React from 'react';
import styled from 'styled-components';

const BoxCommon = styled.div`
    height: 50px;
    background-color: #aaaaaa;
`;

const BoxBig = styled(BoxCommon)`
    width: 100px;
`;

const BoxSmall = styled(BoxCommon)`
    width: 30px;
`;


export default function Box({ size }) {
    if (size == 'big') {
        return <BoxBig>큰박스</BoxBig>;
    } else {
        return <BoxSmall>작은박스</BoxSmall>;
    }
}