import { SyntaxNode } from "web-tree-sitter";

export interface SimplifiedSyntaxNode {
  type: 'call_expression' | 'member_expression' | 'identifier' | 'property_identifier' | '.' | '(' | ')' | 'number'
  text: string
  children: Array<SimplifiedSyntaxNode>
}

export type ResponsiveSyntaxNode = SimplifiedSyntaxNode | SyntaxNode

const callExpressionNumberOfCharacters = (node: ResponsiveSyntaxNode) => {
  const [memberExpression, nodeArguments] = node.children

  return numberOfCharacters(memberExpression) + numberOfCharacters(nodeArguments)
}

const memberExpressionNumberOfCharacters = (node: ResponsiveSyntaxNode) => {
  const [identifier, dot, propertyIdentifier] = node.children

  return numberOfCharacters(identifier) + numberOfCharacters(dot) + numberOfCharacters(propertyIdentifier)
}

const argumentsNumberOfCharacters = (node: ResponsiveSyntaxNode) => {
  const [openParenthesis, argument, closeParenthesis] = node.children

  return numberOfCharacters(openParenthesis) + numberOfCharacters(argument) + numberOfCharacters(closeParenthesis)
}

const textCharacterCount = (node: ResponsiveSyntaxNode) => node.text.length

const characterCountMap: any = {
  'call_expression': callExpressionNumberOfCharacters,
  'member_expression': memberExpressionNumberOfCharacters,
  'arguments': argumentsNumberOfCharacters,
  'identifier': textCharacterCount,
  '.': textCharacterCount,
  'property_identifier': textCharacterCount,
  'number': textCharacterCount,
  'string': textCharacterCount,
  '(': textCharacterCount,
  ')': textCharacterCount,
}

export const numberOfCharacters = (node: ResponsiveSyntaxNode) => {
  const counter = characterCountMap[node.type]

  if (counter) {
    return counter(node)
  }

  return 0
}
