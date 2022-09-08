import {
    PrismaClient
} from '@prisma/client'
const prisma = new PrismaClient()

const main = async () => {
    const users = await prisma.user.findMany()

    console.log(users);
}

// Disconnect after main() runs
main()
    .catch(e => console.error(e.message))
    .finally(async () => {
        await prisma.$disconnect()
    })