import { Sector, Student } from "@prisma/client";

export type StudentWithoutId = Omit<Student, 'id'>
export type SectorWithoutId = Omit<Sector, 'id'>