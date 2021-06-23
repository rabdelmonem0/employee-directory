import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { TableHeader } from '../TableHeader';
import axios from 'axios';

export function EmployeeTable({ employees }) {  // props.employees

    return (
        <Table striped bordered hover>
            <TableHeader />
            <tbody>
                {(employees.length > 0) && employees.map(employee => (
                    <tr>
                        <td>{employee.id.value}</td>
                        <td>{employee.name.first}</td>
                        <td>{employee.name.last}</td>
                        <td>{employee.email}</td>
                        <td>{employee.phone}</td>
                    </tr>
                ))}
            </tbody>
    </Table>
    )
}