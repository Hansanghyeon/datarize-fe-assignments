import { expect, test } from 'bun:test'
import * as A from 'fp-ts/Array'
import { flow, pipe } from 'fp-ts/function'

import { getCustomer } from '~/apps/customer'

test('example 데이터의 제품 테스트', async () => {
  const result = getCustomer()

  // 10개의 고객 생성합니다.
  const customers = await pipe(
    Array.from({ length: 20 }),
    A.mapWithIndex(async (index) => ({
      id: index + 1,
      ...(await result.next()).value,
    })),
    (promises) => Promise.all(promises),
  )

  expect(customers).toMatchObject([
    { id: 1, name: '홍길동', email: '3dc3fm3d53fp3i4.3d73g33hn77@gmail.com' },
    { id: 2, name: '김영희', email: '3de3fr3hn3de3ft.3d53g5@hanmail.net' },
    { id: 3, name: '이철수', email: '3da3fm3d73fr3hn55@naver.com' },
    { id: 4, name: '박지민', email: '3d73g23d83g53hn30@gmail.com' },
    { id: 5, name: '최민수', email: '3d73g23d83fp3i461@hanmail.net' },
    { id: 6, name: '오준호', email: '3d83fy3d73g33hn97@hanmail.net' },
    { id: 7, name: '한지우', email: '3d83g53d73fl.3d33ft3i43@naver.com' },
    { id: 8, name: '권상우', email: '3d83fm3d73fy_3d73g53hz@gmail.com' },
    { id: 9, name: '윤서영', email: '3cz3ft3d73g23hn.3d73fs40@gmail.com' },
    { id: 10, name: '이서진', email: '3d53fl3i43d23g53hn10@naver.com' },
    { id: 11, name: '김하늘', email: '3d53ft3d73fz3hn.3d33fr3hn@hanmail.net' },
    { id: 12, name: '조은비', email: '3d83g53d73g23hn.3d83fp3hn@gmail.com' },
    { id: 13, name: '서지영', email: '3d23g53hn3da3fm83@naver.com' },
    {
      id: 14,
      name: '전하늘',
      email: '3d53g33i43d23g53hn_3d33fr3hn23@yahoo.co.kr',
    },
    { id: 15, name: '이상우', email: '3d73g33hn3d53fy.3cw3ft@yahoo.co.kr' },
    { id: 16, name: '장민석', email: '3d83g53hn3d73fy_3de3ft80@yahoo.co.kr' },
    { id: 17, name: '배윤서', email: '3cy3fl3d73g23hr12@hanmail.net' },
    { id: 18, name: '강호준', email: '3d53fp3d83g53hn_3d73g553@yahoo.co.kr' },
    { id: 19, name: '문지환', email: '3dc3fm3de3ft_3cy3fl15@gmail.com' },
    { id: 20, name: '송지우', email: '3d53g33i43da3fl3hn_3d73fy88@gmail.com' },
  ])
})
