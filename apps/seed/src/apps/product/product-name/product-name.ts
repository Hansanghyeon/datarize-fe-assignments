import { __faker } from '~/libs/faker'
import { parseCsvField } from '~/libs/read-file-parse-csv'

/**
 * @description
 * 제품명을 만듭니다.
 * @return {string} 제품명
 */
export async function* getProductName() {
  type T_csvRow = {
    product_name: string
  }

  // ====================================== example.csv 데이터 생성
  yield* parseCsvField<T_csvRow>(`${__dirname}/example.csv`, 'product_name')

  // ====================================== seed.csv 데이터 생성
  yield* parseCsvField<T_csvRow>(`${__dirname}/seed.csv`, 'product_name')

  // ====================================== faker 데이터 생성
  while (true) {
    yield __faker.commerce.productName()
  }
}
