import React from 'react'
import styled from 'react-emotion'

const Image = styled('img')`
    border-radius: 14px;
    box-shadow: 0px 20px 33px rgba(0,0,0,.35);
    position: absolute;
    display: block;
    top: -46px;
    left: 50%;
    transform: translateX(-50%);
`

export default (props) =>
    <React.Fragment>
        <Image src={props.src} />
    </React.Fragment>
