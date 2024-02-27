import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import { userRegisterValidator } from '#validators/post'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({ request, response }: HttpContext) {
    const users = await User.all()

    return response.status(200).json({ data: users })
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    try {
      const data = request.all()
      const payload = await userRegisterValidator.validate(data)
      const user = new User()
      user.email = request.input('email')
      user.password = request.input('password')

      await user.save()
      return response.status(200).json({ messages: 'User registered successfully.', data: user })
    } catch (error) {
      response.badRequest(error.messages)
    }
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  // async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
