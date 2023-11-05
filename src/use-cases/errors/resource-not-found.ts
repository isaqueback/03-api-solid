export class ResourceNotFoundError extends Error {
  constructor(private resourceName: string) {
    super(`${resourceName} not found.`)
  }
}
