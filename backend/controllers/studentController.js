import Student from '../models/studentModel.js'
import validator from 'validator'
import asyncHandler from 'express-async-handler'

const getStudentList = asyncHandler(async (req, res) => {
    const students = await Student.find({})

    //console.log(students)

    res.json(students)
})

const getStudent = asyncHandler(async (req, res) => {
    const id = req.params.id

    const student = await Student.findById(id)

    res.json(student)
})

const createStudent = asyncHandler(async (req, res) => {
    const { name, email, mobileNo, dateOfBirth, subjects } = req.body

    const lowerCaseEmail = email.toLowerCase()

    const studentExists = await Student.findOne({ lowerCaseEmail })

    if (validator.isEmail(email)) {
        if (studentExists) {
            res.status(404)
            throw new Error('Enter a new email')
        }

        const student = await Student.create({
            name,
            email: lowerCaseEmail,
            mobileNo,
            dateOfBirth,
            subjects
        })

        if (student) {
            res.status(200).json({
                _id: student._id,
                email: student.email,
                mobileNo: student.mobileNo,
                dateOfBirth: student.dateOfBirth,
                subjects: student.subjects
            })
        } else {
            res.status(404)
            throw new Error('Invalid Student Data')
        }
    } else {
        res.status(404)
        throw new Error('Email or Mobile Number is invalid ')
    }
})

const deleteStudent = asyncHandler(async (req, res) => {
    const student = await Student.findById(req.params.id)

    if (student) {
        await student.remove()
        res.json('Student removed')
    } else {
        res.status(404)
        throw new Error('Student does not exist')
    }
})

const updateStudent = asyncHandler(async (req, res) => {
    const student = await Student.findById(req.params.id)

    if (student) {
        student.name = req.body.name || student.name
        student.email = req.body.email || student.email
        student.mobileNo = req.body.mobileNo || student.mobileNo
        student.dateOfBirth = req.body.dateOfBirth || student.dateOfBirth
        student.subjects = req.body.subjects || student.subjects

        const updatedStudent = await student.save()

        res.json({
            name: updatedStudent.name,
            email: updatedStudent.email,
            mobileNo: updatedStudent.mobileNo,
            dateOfBirth: updatedStudent.dateOfBirth,
            subjects: updatedStudent.subjects
        })
    } else {
        res.status(404)
        throw new Error('Failed to update student information')
    }
})

export {
    getStudent,
    getStudentList,
    createStudent,
    deleteStudent,
    updateStudent
}
