import express from 'express'
import {
    createStudent,
    deleteStudent,
    getStudent,
    getStudentList,
    updateStudent
} from '../controllers/studentController.js'

const router = express.Router()

router.route('/').get(getStudentList).post(createStudent)
router.route('/:id').get(getStudent).delete(deleteStudent).put(updateStudent)

export default router
