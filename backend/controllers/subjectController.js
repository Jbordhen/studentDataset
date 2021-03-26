import Subject from '../models/subjectModel.js'
import asyncHandler from 'express-async-handler'

const createSubject = asyncHandler(async (req, res) => {
    const { name } = req.body

    const nameExists = await Subject.findOne({ name })

    if (nameExists) {
        res.status(404).json('Subject name taken already')
    }

    const subject = await Subject.create({
        name
    })

    if (subject) {
        res.status(200).json({
            _id: subject._id,
            name: subject.name
        })
    } else {
        res.status(404)
        throw new Error('Subject could not be created')
    }
})

const getSubjectList = asyncHandler(async (req, res) => {
    const subjects = await Subject.find()

    res.json(subjects)
})

export { createSubject, getSubjectList }
