import { __faker } from '~/libs/faker'
import { parseCsvField } from '~/libs/read-file-parse-csv'

/**
 * @description
 * 고객이메일을 만듭니다.
 * @return {string} 고객이메일
 */
export async function* genCustomerEmail() {
  type T_csvRow = {
    customer_email: string
  }

  // ====================================== example.csv 데이터 생성
  yield* parseCsvField<T_csvRow>(`${__dirname}/example.csv`, 'customer_email')

  // ====================================== seed.csv 데이터 생성
  yield* parseCsvField<T_csvRow>(`${__dirname}/seed.csv`, 'customer_email')

  // ====================================== faker 데이터 생성
  while (true) {
    yield __faker.internet.email()
  }
}
