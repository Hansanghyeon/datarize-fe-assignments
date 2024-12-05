import { expect, test } from 'bun:test'
import * as A from 'fp-ts/Array'
import { flow, pipe } from 'fp-ts/function'

import { getProductImgSrc } from './product-img'

test('example 데이터의 제품이미지 테스트', async () => {
  const result = getProductImgSrc()

  // 10개의 제품명을 생성합니다.
  const products = await pipe(
    Array.from({ length: 10 }),
    A.map(async () => (await result.next()).value),
    (promises) => Promise.all(promises),
  )

  expect(products).toMatchObject([
    'https://s3.dfa.toy.hyeon.pro/imgs/bluejeans.jpg',
    'https://s3.dfa.toy.hyeon.pro/imgs/tshirts.jpg',
    'https://s3.dfa.toy.hyeon.pro/imgs/jackets.jpg',
    'https://s3.dfa.toy.hyeon.pro/imgs/sweater.jpg',
    'https://s3.dfa.toy.hyeon.pro/imgs/shirt.jpg',
    'https://s3.dfa.toy.hyeon.pro/imgs/coat.jpg',
    'https://s3.dfa.toy.hyeon.pro/imgs/shorts.jpg',
    'https://s3.dfa.toy.hyeon.pro/imgs/hoodie.jpg',
    'https://s3.dfa.toy.hyeon.pro/imgs/dress.jpg',
    'https://s3.dfa.toy.hyeon.pro/imgs/sweatshirt.jpg',
  ])
})
