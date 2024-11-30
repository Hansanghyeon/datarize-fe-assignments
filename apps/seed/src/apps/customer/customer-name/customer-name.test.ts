import { expect, test } from 'bun:test'
import * as A from 'fp-ts/Array'
import { flow, pipe } from 'fp-ts/function'

import { getCustomerName } from './customer-name'

test('example 데이터의 고객명 테스트', async () => {
  const gen = getCustomerName()

  const result = await pipe(
    Array.from({ length: 20 }),
    A.map(async () => (await gen.next()).value),
    (promises) => Promise.all(promises),
  )

  expect(result).toMatchObject([
    '홍길동',
    '김영희',
    '이철수',
    '박지민',
    '최민수',
    '오준호',
    '한지우',
    '권상우',
    '윤서영',
    '이서진',
    '김하늘',
    '조은비',
    '서지영',
    '전하늘',
    '이상우',
    '장민석',
    '배윤서',
    '강호준',
    '문지환',
    '송지우',
  ])
})
