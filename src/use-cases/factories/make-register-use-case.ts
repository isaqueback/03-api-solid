import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { RegisterUserCase } from '../register'

/* Factory pattern
  É um padrão de design criacional em desenvolvimento de software, consiste em ser um função que retorna
  objetos diferentes sobre assuntos em comum.

*/

export function makeRegisterUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const registerUseCase = new RegisterUserCase(usersRepository)

  return registerUseCase
}
