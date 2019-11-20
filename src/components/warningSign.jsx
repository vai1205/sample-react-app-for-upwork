import React from 'react'
import MyBadge from './myBadge.jsx'
import { Alert } from 'reactstrap'

const WarningSign = ({title, badgeColor, price}) => {
    return(
        <React.Fragment>
            <Alert color="danger">
                {title}
                <MyBadge badgeColor={badgeColor} badgeText={price}/>
            </Alert>
        </React.Fragment>
    )
}
export default WarningSign