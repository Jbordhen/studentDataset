import express from 'express'
import {
    createSubject,
    getSubjectList
} from '../controllers/subjectController.js'

const router = express.Router()

router.route('/').get(getSubjectList).post(createSubject)

export default router
