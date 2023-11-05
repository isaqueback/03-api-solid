import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { AuthenticateUseCase } from './authenticate'
import { hash } from 'bcryptjs'
import { InvalidCredentialsError } from './errors/invalid-credentials-error'

let usersRepository: InMemoryUsersRepository
// System Under Test: Indica a principal variável que está sendo testada
let sut: AuthenticateUseCase

describe('Authenticate Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new AuthenticateUseCase(usersRepository)
  })

  it('should be able to authenticate', async () => {
    usersRepository.create({
      name: 'Naruto Uzumaki',
      email: 'naruto@hokage.com',
      password_hash: await hash('123456', 6),
    })

    const { user } = await sut.execute({
      email: 'naruto@hokage.com',
      password: '123456',
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('should not be able to authenticate with wrong email', async () => {
    await expect(() =>
      sut.execute({
        email: 'boruto.ninja@konoha.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })

  it('should not be able to authenticate with wrong password', async () => {
    await usersRepository.create({
      name: 'Naruto Uzuamki',
      email: 'naruto@konoha.com',
      password_hash: await hash('123456', 6),
    })

    await expect(() =>
      sut.execute({ email: 'naruto@hokage.com', password: '123123' }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })
})
