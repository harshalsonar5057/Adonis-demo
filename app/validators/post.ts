import vine from '@vinejs/vine'

export const userRegisterValidator = vine.compile(
  vine.object({
    email: vine.string().trim().email(),
    password: vine.string().trim().minLength(6).maxLength(18),
  })
)
