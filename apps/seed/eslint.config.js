import hyeonLinter from '@hyeon/linter'

export default [
  ...hyeonLinter.recommended,
  ...hyeonLinter.prettier,
  ...hyeonLinter.typescript,
  ...hyeonLinter.hansanghyeon,
]
