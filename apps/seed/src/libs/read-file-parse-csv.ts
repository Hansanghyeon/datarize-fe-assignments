import csvParse from 'csv-simple-parser'

/**
 * @description
 * CSV 파일에서 모든 필드 또는 특정 필드를 반환하는 제네릭 함수
 * @template T CSV 데이터의 타입
 * @param {string} filePath 파일 경로
 * @param {K} [key] 반환할 필드의 키 (없으면 전체 행 반환)
 * @returns {AsyncGenerator<T[keyof T]>} 전체 행 또는 선택된 필드의 값 반환
 */
export async function* parseCsvField<T>(
  filePath: string,
  key: keyof T, // 필드 키만 전달
): AsyncGenerator<T[keyof T]> {
  try {
    const fileContent = await Bun.file(filePath)
      .text()
      .catch(() => null)
    if (fileContent) {
      const csv = csvParse(fileContent, { header: true }) as T[]
      for (const row of csv) {
        yield row[key]
      }
    }
  } catch (error) {
    console.error(`Failed to read or parse ${filePath}:`, error)
  }
}
