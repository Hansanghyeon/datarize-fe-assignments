import { expect, test } from 'bun:test'

import { getCustomer } from '~/apps/customer'

test('example 데이터의 고객 테스트', async () => {
  const result = getCustomer()

  const customer = (await result.next()).value

  expect(customer).toMatchObject({
    name: '홍길동',
    email: '3dc3fm3d53fp3i4.3d73g33hn77@gmail.com',
  })
})
