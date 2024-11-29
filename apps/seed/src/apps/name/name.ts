import csvParse from "csv-simple-parser";

// seed.csv를 import하고 seed.csv가 없다면 example.csv를 가져온다.
export async function getnName() {
  const seedFile = await Bun.file(`${__dirname}/seed.csv`).text().catch(() => null)
  const exampleFile = await Bun.file(`${__dirname}/example.csv`).text().catch(() => '')
  
  let file = seedFile || exampleFile


  if (!file) {
    throw new Error('이름을 생성하지 못하였습니다.')
  }

  if (Bun.env.NODE_ENV === 'test') {
    file = exampleFile
  }


  return csvParse(file, { header: true }) as {
    customer_name: string
  }[]
}