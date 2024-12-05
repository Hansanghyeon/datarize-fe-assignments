import { __faker } from '~/libs/faker'
import { parseCsvField } from '~/libs/read-file-parse-csv'

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
  yield* parseCsvField<T_csvRow>(`${__dirname}/example.csv`, 'product_img_src')

  // ====================================== seed.csv 데이터 생성
  yield* parseCsvField<T_csvRow>(`${__dirname}/seed.csv`, 'product_img_src')

  // ====================================== faker 데이터 생성
  while (true) {
    yield __faker.person.fullName()
  }
}
