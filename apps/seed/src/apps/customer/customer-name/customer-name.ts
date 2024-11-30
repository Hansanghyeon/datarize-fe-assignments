import { __faker } from '~/libs/faker'
import { parseCsvField } from '~/libs/read-file-parse-csv'

/**
 * @description
 * 고객명을 만듭니다.
 * @return {string} 고객명
 */
export async function* getCustomerName() {
  type T_csvRow = {
    customer_name: string
  }

  // ====================================== example.csv 데이터 생성
  yield* parseCsvField<T_csvRow>(`${__dirname}/example.csv`, 'customer_name')

  // ====================================== seed.csv 데이터 생성
  yield* parseCsvField<T_csvRow>(`${__dirname}/seed.csv`, 'customer_name')

  // ====================================== faker 데이터 생성
  while (true) {
    yield __faker.person.fullName()
  }
}
