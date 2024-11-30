import { en, Faker, ko } from '@faker-js/faker'

export const __faker = new Faker({
  locale: [ko, en],
})
