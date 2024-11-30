import { expect, test } from 'bun:test'
import * as A from 'fp-ts/Array'
import { flow, pipe } from 'fp-ts/function'

import { getProductName } from './product-name'

test('example 데이터의 제품명 테스트', async () => {
  const result = getProductName()

  // 10개의 제품명을 생성합니다.
  const products = await pipe(
    Array.from({ length: 10 }),
    A.map(async () => (await result.next()).value),
    (promises) => Promise.all(promises),
  )

  expect(products).toMatchObject([
    '청바지',
    '티셔츠',
    '자켓',
    '스웨터',
    '셔츠',
    '코트',
    '반바지',
    '후드티',
    '원피스',
    '맨투맨',
  ])
})
