import { numberOfCharacters, SimplifiedSyntaxNode } from "./columnCount"

const method = (methodArguments: {
  type: string,
  text: string
}[]) => (
  {
    type: 'call_expression',
    children: [
      {
        type: 'member_expression',
        text: 'placeholder',
        children: [
          {
            type: 'identifier',
            text: 'console'
          },
          {
            type: '.',
            text: '.'
          },
          {
            type: 'property_identifier',
            text: 'log'
          }
        ]
      },
      {
        type: 'arguments',
        text: 'placeholder',
        children: [
          {
            type: '(',
            text: '('
          },
          ...methodArguments,
          {
            type: ')',
            text: ')'
          },
        ]
      }
    ]
  } as SimplifiedSyntaxNode
)

describe('numberOfCharacters', () => {
  test('function with no arguments "console.log()"', () => {
    const methodColumns = numberOfCharacters(method([]))

    expect(methodColumns).toBe(13)
  })

  test('function with 1 number argument "console.log(1)"', () => {
    const methodColumns = numberOfCharacters(method([{ type: 'number', text: '1' }]))

    expect(methodColumns).toBe(14)
  })

  test('function with 1 string argument "console.log("Hello world!")"', () => {
    const methodColumns = numberOfCharacters(method([{ type: 'string', text: '"Hello world!"' }]))

    expect(methodColumns).toBe(27)
  })

  test('function with 2 arguments "console.log(1, 2)"', () => {
    const methodColumns = numberOfCharacters(
      method(
        [
          { type: 'number', text: '1' },
          { type: 'number', text: '2' },
        ]
      )
    )

    expect(methodColumns).toBe(17)
  })
})
