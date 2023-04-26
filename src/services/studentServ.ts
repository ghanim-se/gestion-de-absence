import { PrismaClient, Student } from "@prisma/client"
import { StudentWithoutId } from "../utils/types"


const prisma = new PrismaClient()
export const getStudents = async () => {
    const students = await prisma.student.findMany()
    return students
}

export const createStudent = async (user: StudentWithoutId) => {
    const student = await prisma.student.create({
        data: {...user}
    }) 
}

export const getStudentById = async (id: number) => {
    const student = await prisma.student.findUnique({
        where: {id}
    })
    return student
}

export const updateStudentById = async (newStudent: StudentWithoutId, id: number) => {
    const student = await prisma.student.update({
        where: {id},
        data: {...newStudent}
    })
}

export const deleteStudentById = async (id: number) => {
    const student = await prisma.student.delete({
        where: {id},
    })
}

