import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { describe, beforeEach, it, expect } from 'vitest'
import { GetUserProfileUseCase } from './get-user-profile'
import { hash } from 'bcryptjs'
import { ResourceNotFoundError } from './errors/resource-not-found'

let usersRepository: InMemoryUsersRepository
let sut: GetUserProfileUseCase

describe('Get User Profile Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new GetUserProfileUseCase(usersRepository)
  })

  it('should be able get user profile', async () => {
    const createdUser = await usersRepository.create({
      name: 'Boruto Uzumaki',
      email: 'boruto.ninja@konoha.com',
      password_hash: await hash('123456', 6),
    })

    const { user } = await sut.execute({ userId: createdUser.id })

    expect(user.id).toEqual(expect.any(String))
    expect(user.name).toEqual('Boruto Uzumaki')
  })

  it('should be not able to get user profile with wrong id', async () => {
    await usersRepository.create({
      name: 'Boruto Uzumaki',
      email: 'boruto.ninja@konoha.com',
      password_hash: await hash('123456', 6),
    })

    await expect(() =>
      sut.execute({ userId: 'non-existing-id' }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
