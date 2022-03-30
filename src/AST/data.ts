export const api= {
  "type": "Program",
  "start": 0,
  "end": 122,
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
      "type": "FunctionDeclaration",
      "start": 37,
      "end": 73,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 51,
        "name": "resta"
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 52,
          "end": 53,
          "name": "a"
        },
        {
          "type": "Identifier",
          "start": 54,
          "end": 55,
          "name": "b"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 56,
        "end": 73,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 59,
            "end": 71,
            "argument": {
              "type": "BinaryExpression",
              "start": 66,
              "end": 71,
              "left": {
                "type": "Identifier",
                "start": 66,
                "end": 67,
                "name": "a"
              },
              "operator": "-",
              "right": {
                "type": "Identifier",
                "start": 70,
                "end": 71,
                "name": "b"
              }
            }
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 75,
      "end": 114,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 88,
        "name": "test"
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 90,
        "end": 114,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 92,
            "end": 101,
            "expression": {
              "type": "CallExpression",
              "start": 92,
              "end": 101,
              "callee": {
                "type": "Identifier",
                "start": 92,
                "end": 96,
                "name": "suma"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 97,
                  "end": 98,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 99,
                  "end": 100,
                  "value": 2,
                  "raw": "2"
                }
              ],
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 102,
            "end": 112,
            "expression": {
              "type": "CallExpression",
              "start": 102,
              "end": 112,
              "callee": {
                "type": "Identifier",
                "start": 102,
                "end": 107,
                "name": "resta"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 108,
                  "end": 109,
                  "value": 3,
                  "raw": "3"
                },
                {
                  "type": "Literal",
                  "start": 110,
                  "end": 111,
                  "value": 4,
                  "raw": "4"
                }
              ],
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 116,
      "end": 122,
      "expression": {
        "type": "CallExpression",
        "start": 116,
        "end": 122,
        "callee": {
          "type": "Identifier",
          "start": 116,
          "end": 120,
          "name": "test"
        },
        "arguments": [],
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
