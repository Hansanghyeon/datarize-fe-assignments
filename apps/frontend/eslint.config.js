import hyeonLinter from '@hyeon/linter'

export default [
  ...hyeonLinter.recommended,
  ...hyeonLinter.react,
  ...hyeonLinter.prettier,
  ...hyeonLinter.typescript,
  ...hyeonLinter.hansanghyeon,
]
