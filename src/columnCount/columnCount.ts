// import { SyntaxNode } from "web-tree-sitter";

const SYNTAX_NODE_TYPES = [
  'arguments',
  'call_expression',
  'identifier',
  'member_expression',
  'number',
  'property_identifier',
  'string',
  '.',
  '(',
  ')',
] as const

type SyntaxNodeType = typeof SYNTAX_NODE_TYPES[number]

export interface SimplifiedSyntaxNode {
  type: SyntaxNodeType
  text: string
  children: SimplifiedSyntaxNode[]
}

export type ResponsiveSyntaxNode = SimplifiedSyntaxNode

const callExpressionNumberOfCharacters = (node: ResponsiveSyntaxNode) => {
  const [memberExpression, nodeArguments] = node.children

  return numberOfCharacters(memberExpression) + numberOfCharacters(nodeArguments)
}

const memberExpressionNumberOfCharacters = (node: ResponsiveSyntaxNode) => {
  const [identifier, dot, propertyIdentifier] = node.children

  return numberOfCharacters(identifier) + numberOfCharacters(dot) + numberOfCharacters(propertyIdentifier)
}

const argumentsNumberOfCharacters = (node: ResponsiveSyntaxNode) => {
  const [openParenthesis, ...children] = node.children
  const closeParenthesis = children.pop()

  if(closeParenthesis) {
    return numberOfCharacters(openParenthesis) + numberOfCharacters(closeParenthesis) + numberOfCharactersArray(children, { separator: ', ' })
  } else {
    throw new Error("Less than 2 children for arguments node");
  }
}

const textCharacterCount = (node: ResponsiveSyntaxNode) => node.text.length

const numberOfCharactersArray = (nodes: ResponsiveSyntaxNode[], settings: { separator: string }) => {
  const separators = settings.separator.length * Math.max(nodes.length - 1, 0)

  return nodes.reduce(
    (accumulator, node) => accumulator + numberOfCharacters(node),
    0
  ) + separators
}

const characterCountMap: Record<SyntaxNodeType, ((node: ResponsiveSyntaxNode) => number)> = {
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
