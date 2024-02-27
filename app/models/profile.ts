import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

export default class Profile extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare name: string

  @column()
  declare mobile: string

  @column()
  declare gender: Gender

  @column.dateTime()
  declare dateOfBirth: DateTime
  
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}