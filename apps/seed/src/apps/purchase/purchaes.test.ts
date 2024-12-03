import { expect, test } from 'bun:test'

import { getPurchase } from '~/apps/purchase'

test('구매자, 제품 연관 필드 테스트', () => {
  const purchase = getPurchase({ customerLength: 10, productLength: 10 })

  // purchase는 랜덤한 데이터가 생성되기 때문에 어떤값이 나올것이다 테스트할 수 없다.
  // customerId, productId, quantity, date가 존재하는지 확인하고 각 타입이 맞는 타입이 왔는지 확인
  expect(purchase).toHaveProperty('customerId')
  expect(purchase).toHaveProperty('productId')
  expect(purchase).toHaveProperty('quantity')
  expect(purchase).toHaveProperty('date')

  // customerId가 문자열인지 확인
  expect(typeof purchase.customerId).toBe('number')

  // productId가 문자열인지 확인
  expect(typeof purchase.productId).toBe('number')

  // quantity가 숫자인지 확인
  expect(typeof purchase.quantity).toBe('number')

  // date가 Date 객체인지 확인
  expect(purchase.date instanceof Date).toBe(true)
})
