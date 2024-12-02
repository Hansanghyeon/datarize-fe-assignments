import { input, select, Separator } from '@inquirer/prompts'
import { match, P } from 'ts-pattern'

import { createCustomers } from '~/api/customers'

// 클라이언트 입력
const clientId = await input({
  message: '클라이언트 id를 입력해주세요',
}).catch((error) => {
  if (error.name === 'AbortPromptError') {
    return 'Default value'
  }

  throw error
})

const 상수_액션 = {
  고객데이터_생성: 'create_customers',
  고객데이터_리셋: 'reset_customers',
  상품데이터_생성: 'create_products',
  상품데이터_리셋: 'reset_products',
} as const

const action = await select({
  message: '실행할 액션을 선택해주세요',
  choices: [
    {
      name: '고객데이터 생성',
      value: 상수_액션.고객데이터_생성,
    },
    {
      name: '고객데이터 리셋',
      value: 상수_액션.고객데이터_리셋,
      disabled: true,
    },
    new Separator(),
    {
      name: '상품데이터 생성',
      value: 상수_액션.상품데이터_생성,
      disabled: true,
    },
    {
      name: '상품데이터 리셋',
      value: 상수_액션.상품데이터_리셋,
      disabled: true,
    },
  ],
})

match(action)
  .with(상수_액션.고객데이터_생성, async () => {
    const length = await input({
      message: '생성할 고객 수를 입력해주세요',
    })
    createCustomers({ clientId, length: Number(length) })
  })
  .otherwise(() => null)
