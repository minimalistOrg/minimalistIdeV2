import { numberOfCharacters, SimplifiedSyntaxNode } from "./columnCount"

// console.log(1);
const method = {
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
        {
          type: 'number',
          text: '1'
        },
        {
          type: ')',
          text: ')'
        },
      ]
    }
  ]
} as SimplifiedSyntaxNode

test('setup', () => {
  const methodColumns = numberOfCharacters(method)

  expect(methodColumns).toBe(14)
})
