import { flow, pipe } from 'fp-ts/function'

import { __faker } from '~/libs/faker'
import { parseCsvField } from '~/libs/read-file-parse-csv'

/**
 * @description
 * 제품가격은 1원단위로 떨어지지 않기 때문에 1원 단위를 제거하는 함수
 * 하지만 대부분 10원 금액은 사용되기 때문에 10원 단위로 제거합니다.
 */
function removeLastDigit(price: number) {
  return Math.floor(price / 100) * 100
}

/**
 * @description
 * 제품가격을 만듭니다.
 * @return {number} 제품가격
 */
export async function* genProductPrice() {
  type T_csvRow = {
    product_price: string
  }

  // ====================================== example.csv 데이터 생성
  yield* parseCsvField<T_csvRow>(`${__dirname}/example.csv`, 'product_price')

  // ====================================== seed.csv 데이터 생성
  yield* parseCsvField<T_csvRow>(`${__dirname}/seed.csv`, 'product_price')

  // ====================================== faker 데이터 생성
  while (true) {
    yield pipe(
      __faker.commerce.price({ max: 1_000_000, min: 100, dec: 0 }),
      Number,
      removeLastDigit,
    )
  }
}
