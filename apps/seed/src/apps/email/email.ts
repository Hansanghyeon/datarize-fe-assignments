import { _faker } from "~/libs/faker";

export function genEmail() {
  const result = _faker.internet.email()
  return result
}