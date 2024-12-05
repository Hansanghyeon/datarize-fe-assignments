import fg from 'fast-glob'
import * as A from 'fp-ts/Array'
import { flow, pipe } from 'fp-ts/function'
import * as S from 'fp-ts/string'

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

  // ====================================== seed_{[1-9]{1,3}}.csv 데이터 생성
  let files = await fg(`${__dirname}/seed*.csv`)
  // files에 __dirname을 모두 제거한다.
  files = pipe(
    files,
    A.map((e) => e.replace(`${__dirname}/`, '')),
    A.sortBy([S.Ord]),
  )
  for (const file of files) {
    yield* parseCsvField<T_csvRow>(`${__dirname}/${file}`, 'product_name')
  }

  // ====================================== faker 데이터 생성
  while (true) {
    yield __faker.commerce.productName()
  }
}
