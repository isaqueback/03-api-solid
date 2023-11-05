import { UsersRepository } from '@/repositories/users-repository'
import { hash } from 'bcryptjs'
import { UserAlreadyExistsError } from './errors/user-already-exists'
import { User } from '@prisma/client'

interface RegisterUseCaseRequest {
  name: string
  email: string
  password: string
}

interface RegisterUseCaseResponse {
  user: User
}

// SOLID

// D - Dependency Inversion Principle

export class RegisterUserCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    name,
    email,
    password,
  }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) throw new UserAlreadyExistsError()

    // Salt é um valor aleatório adicionado na senha antes de gerar o hash
    const password_hash = await hash(password, 6)

    const user = await this.usersRepository.create({
      name,
      email,
      password_hash,
    })

    return { user }
  }
}

// export async function registerUseCase({
//   name,
//   email,
//   password,
// }: RegisterUseCaseRequest) {
//   const password_hash = await hash(password, 6)

//   const userWithSameEmail = await prisma.user.findUnique({ where: { email } })

//   if (userWithSameEmail) {
//     throw Error('E-mail already exists.')
//   }

//   const prismaUsersRepository = new PrismaUsersRepository()

//   await prismaUsersRepository.create({ name, email, password_hash })
// }
