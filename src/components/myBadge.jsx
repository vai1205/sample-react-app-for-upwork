import React from 'react'
import { Badge } from 'reactstrap'

const MyBadge = ({badgeColor, badgeText}) => {
    return(
        <React.Fragment>
            <Badge color={badgeColor}>${badgeText}</Badge>
        </React.Fragment>
    )
}
export default MyBadge