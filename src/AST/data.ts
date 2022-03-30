export const api= {
  "type": "Program",
  "start": 0,
  "end": 46,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 35,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "name": "suma"
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "name": "a"
        },
        {
          "type": "Identifier",
          "start": 16,
          "end": 17,
          "name": "b"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 35,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 21,
            "end": 33,
            "argument": {
              "type": "BinaryExpression",
              "start": 28,
              "end": 33,
              "left": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "name": "a"
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "name": "b"
              }
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 37,
      "end": 46,
      "expression": {
        "type": "CallExpression",
        "start": 37,
        "end": 46,
        "callee": {
          "type": "Identifier",
          "start": 37,
          "end": 41,
          "name": "suma"
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 42,
            "end": 43,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 44,
            "end": 45,
            "value": 2,
            "raw": "2"
          }
        ],
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
