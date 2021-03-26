import mongoose from 'mongoose'

const subjectSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Subject = mongoose.model('subject', subjectSchema)

export default Subject
