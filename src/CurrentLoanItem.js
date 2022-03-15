import { Button, Flex, TableCell, TableRow } from "@aws-amplify/ui-react";
import React from "react"
import { Link } from "react-router-dom";

const CurrentLoanItem = ({id, purpose,amount,terms, _deleted}) => {
    if (_deleted == true ) {
        return null
    }
    return (
        <TableRow>
            <TableCell>{purpose}</TableCell>
            <TableCell>{amount.toFixed(2)}</TableCell>
            <TableCell>{terms}</TableCell>
            <TableCell>
                <Flex direction="row" gap ="1 rem">
                    <Link to={`/edit/${id}`} style={{ textDecoration: 'none' }}><Button variation="small">Edit</Button></Link>
                    <Link to={`/delete/${id}`} style={{ textDecoration: 'none' }}><Button variation="small">Delete</Button></Link>
                </Flex>
            </TableCell>
        </TableRow>
    )
}

export default CurrentLoanItem;