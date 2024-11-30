import csvParse from 'csv-simple-parser'

import { __faker } from '~/libs/faker'

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
  const exampleFile = await Bun.file(`${__dirname}/example.csv`)
    .text()
    .catch(() => null)

  if (exampleFile) {
    const exampleData = csvParse(exampleFile, { header: true }) as T_csvRow[]
    for (const row of exampleData) {
      yield row.customer_email
    }
  }

  // ====================================== seed.csv 데이터 생성
  const seedFile = await Bun.file(`${__dirname}/seed.csv`)
    .text()
    .catch(() => null)

  if (seedFile) {
    const seedData = csvParse(seedFile, { header: true }) as T_csvRow[]
    for (const row of seedData) {
      yield row.customer_email
    }
  }

  // ====================================== faker 데이터 생성
  while (true) {
    yield __faker.internet.email()
  }
}
