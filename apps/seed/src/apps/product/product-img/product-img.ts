import csvParse from 'csv-simple-parser'

import { __faker } from '~/libs/faker'

/**
 * @description
 * 제품이미지을 만듭니다.
 * @return {string} 제품이미지
 */
export async function* getProductImgSrc() {
  type T_csvRow = {
    product_img_src: string
  }
  // ====================================== example.csv 데이터 생성
  const exampleFile = await Bun.file(`${__dirname}/example.csv`)
    .text()
    .catch(() => null)

  if (exampleFile) {
    const exampleData = csvParse(exampleFile, { header: true }) as T_csvRow[]
    for (const row of exampleData) {
      yield row.product_img_src
    }
  }

  // ====================================== seed.csv 데이터 생성
  const seedFile = await Bun.file(`${__dirname}/seed.csv`)
    .text()
    .catch(() => null)

  if (seedFile) {
    const seedData = csvParse(seedFile, { header: true }) as T_csvRow[]
    for (const row of seedData) {
      yield row.product_img_src
    }
  }

  // ====================================== faker 데이터 생성
  while (true) {
    yield __faker.person.fullName()
  }
}
