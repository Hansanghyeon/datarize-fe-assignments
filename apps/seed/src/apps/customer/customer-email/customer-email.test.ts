import { expect, test } from 'bun:test'
import * as A from 'fp-ts/Array'
import { flow, pipe } from 'fp-ts/function'

import { genCustomerEmail } from './customer-email'

test('example 데이터의 고객이메일 테스트', async () => {
  const gen = genCustomerEmail()

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // 이메일 형식 검증용 정규식

  const result = await pipe(
    Array.from({ length: 20 }),
    A.map(async () => (await gen.next()).value),
    (promises) => Promise.all(promises),
  )

  result.forEach((email) => {
    expect(email).toMatch(emailRegex) // 이메일 형식과 일치하는지 확인
  })
})
