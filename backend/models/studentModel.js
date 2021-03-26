import mongoose from 'mongoose'

const studentSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        mobileNo: {
            type: String,
            required: true,
            unique: true
        },
        dateOfBirth: { type: Date, required: true },
        subjects: [
            {
                name: { type: String, required: true },
                subject: {
                    type: mongoose.Types.ObjectId,
                    required: true,
                    ref: 'Subject'
                }
            }
        ]
    },
    {
        timestamps: true
    }
)

const Student = mongoose.model('student', studentSchema)

export default Student
