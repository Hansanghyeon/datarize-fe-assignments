import { expect, test } from 'bun:test'
import * as A from 'fp-ts/Array'
import { flow, pipe } from 'fp-ts/function'

import { getProduct } from '~/apps/product'

test('example 데이터의 제품 테스트', async () => {
  const result = getProduct()

  // 10개의 제품명을 생성합니다.
  const products = await pipe(
    Array.from({ length: 10 }),
    A.mapWithIndex(async (index) => ({
      id: index + 1,
      ...(await result.next()).value,
    })),
    (promises) => Promise.all(promises),
  )

  expect(products).toMatchObject([
    {
      id: 1,
      name: '청바지',
      price: '50000',
      imgSrc: 'https://s3.dfa.toy.hyeon.pro/imgs/bluejeans.jpg',
    },
    {
      id: 2,
      name: '티셔츠',
      price: '20000',
      imgSrc: 'https://s3.dfa.toy.hyeon.pro/imgs/tshirts.jpg',
    },
    {
      id: 3,
      name: '자켓',
      price: '70000',
      imgSrc: 'https://s3.dfa.toy.hyeon.pro/imgs/jackets.jpg',
    },
    {
      id: 4,
      name: '스웨터',
      price: '45000',
      imgSrc: 'https://s3.dfa.toy.hyeon.pro/imgs/sweater.jpg',
    },
    {
      id: 5,
      name: '셔츠',
      price: '35000',
      imgSrc: 'https://s3.dfa.toy.hyeon.pro/imgs/shirt.jpg',
    },
    {
      id: 6,
      name: '코트',
      price: '100000',
      imgSrc: 'https://s3.dfa.toy.hyeon.pro/imgs/coat.jpg',
    },
    {
      id: 7,
      name: '반바지',
      price: '30000',
      imgSrc: 'https://s3.dfa.toy.hyeon.pro/imgs/shorts.jpg',
    },
    {
      id: 8,
      name: '후드티',
      price: '40000',
      imgSrc: 'https://s3.dfa.toy.hyeon.pro/imgs/hoodie.jpg',
    },
    {
      id: 9,
      name: '원피스',
      price: '60000',
      imgSrc: 'https://s3.dfa.toy.hyeon.pro/imgs/dress.jpg',
    },
    {
      id: 10,
      name: '맨투맨',
      price: '38000',
      imgSrc: 'https://s3.dfa.toy.hyeon.pro/imgs/sweatshirt.jpg',
    },
  ])
})
