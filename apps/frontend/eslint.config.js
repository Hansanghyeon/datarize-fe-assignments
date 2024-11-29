import hyeonEslintConfig from '@hyeon/eslint-config'

export default [
  ...hyeonEslintConfig.recommended,
  ...hyeonEslintConfig.react,
  ...hyeonEslintConfig.prettier,
  ...hyeonEslintConfig.typescript,
  ...hyeonEslintConfig.hansanghyeon,
]
