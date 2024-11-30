import { expect, test } from 'bun:test'
import * as A from 'fp-ts/Array'
import { flow, pipe } from 'fp-ts/function'

import { genProductPrice } from './product-price'

test('example 데이터의 제품가격 테스트', async () => {
  const result = genProductPrice()

  // 10개의 제품가격을 생성합니다.
  const products = await pipe(
    Array.from({ length: 10 }),
    A.map(async () => (await result.next()).value),
    (promises) => Promise.all(promises),
  )

  expect(products).toMatchObject([
    '50000',
    '20000',
    '70000',
    '45000',
    '35000',
    '100000',
    '30000',
    '40000',
    '60000',
    '38000',
  ])
})
