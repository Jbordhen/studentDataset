import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
    const [students, setStudents] = useState()

    useEffect(() => {
        const getStudents = async () => {
            const { data } = await axios.get('/api/students')
            //console.log(data)
            setStudents(data)
        }
        getStudents()
    }, [])

    const deleteHandler = () => {}

    return (
        <Container
            style={{
                justifyContent: 'center',
                alignContent: 'center',
                marginTop: '5%',
                marginBottom: '5%'
            }}>
            <Table striped bordered hover responsive className='table-sm'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone No</th>
                        <th>Date of Birth</th>
                        <th></th>
                    </tr>
                </thead>
                {students?.map((student) => (
                    <tbody>
                        <tr>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.mobileNo}</td>
                            <td>{student.dateOfBirth.slice(0, 10)}</td>
                            <td>
                                <Link to={`/${student._id}`}>
                                    <Button style={{ marginRight: '10%' }}>
                                        Details
                                    </Button>
                                </Link>
                                <Link onClick={deleteHandler}>
                                    <Button>Delete</Button>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </Container>
    )
}

export default HomeScreen
