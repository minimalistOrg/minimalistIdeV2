//https://david.bonnet.cc/astring/demo/#function%20main()%7B%0A%20%20%20%20const%20n1=%2012;%0A%20%20%20%20const%20n2=%2022;%0A%20%20%20%20console.log(n1%20+%20n2);%0A%20%20%20%20logic(n1,n2)%0A%20%20%20%20let%20operation_one=%20multiplication(n1,n2)%0A%20%20%20%20let%20operation_two=%20division(n2,n1)%0A%20%20%20%20show(operation_one)%0A%20%20%20%20show(operation_two)%0A%20%20%20%20recursion(%22something%22)%0A%7D%0A%0Amain()%0A%0Afunction%20recursion(data)%7B%0A%20%20%20%20let%20txt=%20%22something%22%0A%20%20%20%20if(txt%20===%20data)%7B%0A%20%20%20%20%20%20%20%20return%20%22stop%22%0A%20%20%20%20%7Delse%7B%0A%20%20%20%20%20%20%20%20show(%22To%20infinity%22)%0A%20%20%20%20%20%20%20%20main()%0A%20%20%20%20%7D%0A%7D%0A%0Afunction%20logic(data1,data2)%7B%0A%20%20%20%20const%20result=%20data1%20%3C%20data2;%0A%20%20%20%20if(result)%7B%0A%20%20%20%20%20%20%20%20sum(data1,%20data2)%0A%20%20%20%20%7Delse%7B%0A%20%20%20%20%20%20%20%20subtraction(data1,data2)%0A%20%20%20%20%7D%0A%7D%0A%0Afunction%20sum()%7B%0A%20%20%20%20const%20result=%20a%20+%20b;%0A%20%20%20%20show(result);%0A%20%20%20%20return%20result;%0A%7D%0A%0Afunction%20subtraction()%7B%0A%20%20%20%20const%20result=%20a%20-%20b;%0A%20%20%20%20show(result);%0A%20%20%20%20return%20result;%0A%7D%0A%0Afunction%20multiplication()%7B%0A%20%20%20%20const%20result=%20a%20*%20b;%0A%20%20%20%20show(result);%0A%20%20%20%20return%20result;%0A%7D%0A%0A/*%20one%20line%0Atwo%20lines%0Athree%20lines%20*/%0Afunction%20division()%7B%0A%20%20%20%20const%20result=%20a%20/%20b;%0A%20%20%20%20show(result);%0A%20%20%20%20return%20result;%0A%7D%0A%0A//%20one%20line%0Afunction%20show(data)%7B%0A%20%20%20%20console.log(data);%0A%7D

export const api= {
  "type": "Program",
  "start": 0,
  "end": 1023,
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 64,
      "column": 1
    }
  },
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 256,
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 11,
          "column": 1
        }
      },
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "loc": {
          "start": {
            "line": 1,
            "column": 9
          },
          "end": {
            "line": 1,
            "column": 13
          }
        },
        "name": "main"
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 256,
        "loc": {
          "start": {
            "line": 1,
            "column": 15
          },
          "end": {
            "line": 11,
            "column": 1
          }
        },
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 21,
            "end": 34,
            "loc": {
              "start": {
                "line": 2,
                "column": 4
              },
              "end": {
                "line": 2,
                "column": 17
              }
            },
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 27,
                "end": 33,
                "loc": {
                  "start": {
                    "line": 2,
                    "column": 10
                  },
                  "end": {
                    "line": 2,
                    "column": 16
                  }
                },
                "id": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 29,
                  "loc": {
                    "start": {
                      "line": 2,
                      "column": 10
                    },
                    "end": {
                      "line": 2,
                      "column": 12
                    }
                  },
                  "name": "n1"
                },
                "init": {
                  "type": "Literal",
                  "start": 31,
                  "end": 33,
                  "loc": {
                    "start": {
                      "line": 2,
                      "column": 14
                    },
                    "end": {
                      "line": 2,
                      "column": 16
                    }
                  },
                  "value": 12,
                  "raw": "12"
                }
              }
            ],
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 39,
            "end": 52,
            "loc": {
              "start": {
                "line": 3,
                "column": 4
              },
              "end": {
                "line": 3,
                "column": 17
              }
            },
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 45,
                "end": 51,
                "loc": {
                  "start": {
                    "line": 3,
                    "column": 10
                  },
                  "end": {
                    "line": 3,
                    "column": 16
                  }
                },
                "id": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 47,
                  "loc": {
                    "start": {
                      "line": 3,
                      "column": 10
                    },
                    "end": {
                      "line": 3,
                      "column": 12
                    }
                  },
                  "name": "n2"
                },
                "init": {
                  "type": "Literal",
                  "start": 49,
                  "end": 51,
                  "loc": {
                    "start": {
                      "line": 3,
                      "column": 14
                    },
                    "end": {
                      "line": 3,
                      "column": 16
                    }
                  },
                  "value": 22,
                  "raw": "22"
                }
              }
            ],
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 57,
            "end": 78,
            "loc": {
              "start": {
                "line": 4,
                "column": 4
              },
              "end": {
                "line": 4,
                "column": 25
              }
            },
            "expression": {
              "type": "CallExpression",
              "start": 57,
              "end": 77,
              "loc": {
                "start": {
                  "line": 4,
                  "column": 4
                },
                "end": {
                  "line": 4,
                  "column": 24
                }
              },
              "callee": {
                "type": "MemberExpression",
                "start": 57,
                "end": 68,
                "loc": {
                  "start": {
                    "line": 4,
                    "column": 4
                  },
                  "end": {
                    "line": 4,
                    "column": 15
                  }
                },
                "object": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 64,
                  "loc": {
                    "start": {
                      "line": 4,
                      "column": 4
                    },
                    "end": {
                      "line": 4,
                      "column": 11
                    }
                  },
                  "name": "console"
                },
                "property": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 68,
                  "loc": {
                    "start": {
                      "line": 4,
                      "column": 12
                    },
                    "end": {
                      "line": 4,
                      "column": 15
                    }
                  },
                  "name": "log"
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 69,
                  "end": 76,
                  "loc": {
                    "start": {
                      "line": 4,
                      "column": 16
                    },
                    "end": {
                      "line": 4,
                      "column": 23
                    }
                  },
                  "left": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 71,
                    "loc": {
                      "start": {
                        "line": 4,
                        "column": 16
                      },
                      "end": {
                        "line": 4,
                        "column": 18
                      }
                    },
                    "name": "n1"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 76,
                    "loc": {
                      "start": {
                        "line": 4,
                        "column": 21
                      },
                      "end": {
                        "line": 4,
                        "column": 23
                      }
                    },
                    "name": "n2"
                  }
                }
              ],
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 83,
            "end": 95,
            "loc": {
              "start": {
                "line": 5,
                "column": 4
              },
              "end": {
                "line": 5,
                "column": 16
              }
            },
            "expression": {
              "type": "CallExpression",
              "start": 83,
              "end": 95,
              "loc": {
                "start": {
                  "line": 5,
                  "column": 4
                },
                "end": {
                  "line": 5,
                  "column": 16
                }
              },
              "callee": {
                "type": "Identifier",
                "start": 83,
                "end": 88,
                "loc": {
                  "start": {
                    "line": 5,
                    "column": 4
                  },
                  "end": {
                    "line": 5,
                    "column": 9
                  }
                },
                "name": "logic"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 89,
                  "end": 91,
                  "loc": {
                    "start": {
                      "line": 5,
                      "column": 10
                    },
                    "end": {
                      "line": 5,
                      "column": 12
                    }
                  },
                  "name": "n1"
                },
                {
                  "type": "Identifier",
                  "start": 92,
                  "end": 94,
                  "loc": {
                    "start": {
                      "line": 5,
                      "column": 13
                    },
                    "end": {
                      "line": 5,
                      "column": 15
                    }
                  },
                  "name": "n2"
                }
              ],
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 100,
            "end": 140,
            "loc": {
              "start": {
                "line": 6,
                "column": 4
              },
              "end": {
                "line": 6,
                "column": 44
              }
            },
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 104,
                "end": 140,
                "loc": {
                  "start": {
                    "line": 6,
                    "column": 8
                  },
                  "end": {
                    "line": 6,
                    "column": 44
                  }
                },
                "id": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 117,
                  "loc": {
                    "start": {
                      "line": 6,
                      "column": 8
                    },
                    "end": {
                      "line": 6,
                      "column": 21
                    }
                  },
                  "name": "operation_one"
                },
                "init": {
                  "type": "CallExpression",
                  "start": 119,
                  "end": 140,
                  "loc": {
                    "start": {
                      "line": 6,
                      "column": 23
                    },
                    "end": {
                      "line": 6,
                      "column": 44
                    }
                  },
                  "callee": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 133,
                    "loc": {
                      "start": {
                        "line": 6,
                        "column": 23
                      },
                      "end": {
                        "line": 6,
                        "column": 37
                      }
                    },
                    "name": "multiplication"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 134,
                      "end": 136,
                      "loc": {
                        "start": {
                          "line": 6,
                          "column": 38
                        },
                        "end": {
                          "line": 6,
                          "column": 40
                        }
                      },
                      "name": "n1"
                    },
                    {
                      "type": "Identifier",
                      "start": 137,
                      "end": 139,
                      "loc": {
                        "start": {
                          "line": 6,
                          "column": 41
                        },
                        "end": {
                          "line": 6,
                          "column": 43
                        }
                      },
                      "name": "n2"
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 145,
            "end": 179,
            "loc": {
              "start": {
                "line": 7,
                "column": 4
              },
              "end": {
                "line": 7,
                "column": 38
              }
            },
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 149,
                "end": 179,
                "loc": {
                  "start": {
                    "line": 7,
                    "column": 8
                  },
                  "end": {
                    "line": 7,
                    "column": 38
                  }
                },
                "id": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 162,
                  "loc": {
                    "start": {
                      "line": 7,
                      "column": 8
                    },
                    "end": {
                      "line": 7,
                      "column": 21
                    }
                  },
                  "name": "operation_two"
                },
                "init": {
                  "type": "CallExpression",
                  "start": 164,
                  "end": 179,
                  "loc": {
                    "start": {
                      "line": 7,
                      "column": 23
                    },
                    "end": {
                      "line": 7,
                      "column": 38
                    }
                  },
                  "callee": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 172,
                    "loc": {
                      "start": {
                        "line": 7,
                        "column": 23
                      },
                      "end": {
                        "line": 7,
                        "column": 31
                      }
                    },
                    "name": "division"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 173,
                      "end": 175,
                      "loc": {
                        "start": {
                          "line": 7,
                          "column": 32
                        },
                        "end": {
                          "line": 7,
                          "column": 34
                        }
                      },
                      "name": "n2"
                    },
                    {
                      "type": "Identifier",
                      "start": 176,
                      "end": 178,
                      "loc": {
                        "start": {
                          "line": 7,
                          "column": 35
                        },
                        "end": {
                          "line": 7,
                          "column": 37
                        }
                      },
                      "name": "n1"
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 184,
            "end": 203,
            "loc": {
              "start": {
                "line": 8,
                "column": 4
              },
              "end": {
                "line": 8,
                "column": 23
              }
            },
            "expression": {
              "type": "CallExpression",
              "start": 184,
              "end": 203,
              "loc": {
                "start": {
                  "line": 8,
                  "column": 4
                },
                "end": {
                  "line": 8,
                  "column": 23
                }
              },
              "callee": {
                "type": "Identifier",
                "start": 184,
                "end": 188,
                "loc": {
                  "start": {
                    "line": 8,
                    "column": 4
                  },
                  "end": {
                    "line": 8,
                    "column": 8
                  }
                },
                "name": "show"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 189,
                  "end": 202,
                  "loc": {
                    "start": {
                      "line": 8,
                      "column": 9
                    },
                    "end": {
                      "line": 8,
                      "column": 22
                    }
                  },
                  "name": "operation_one"
                }
              ],
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 208,
            "end": 227,
            "loc": {
              "start": {
                "line": 9,
                "column": 4
              },
              "end": {
                "line": 9,
                "column": 23
              }
            },
            "expression": {
              "type": "CallExpression",
              "start": 208,
              "end": 227,
              "loc": {
                "start": {
                  "line": 9,
                  "column": 4
                },
                "end": {
                  "line": 9,
                  "column": 23
                }
              },
              "callee": {
                "type": "Identifier",
                "start": 208,
                "end": 212,
                "loc": {
                  "start": {
                    "line": 9,
                    "column": 4
                  },
                  "end": {
                    "line": 9,
                    "column": 8
                  }
                },
                "name": "show"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 213,
                  "end": 226,
                  "loc": {
                    "start": {
                      "line": 9,
                      "column": 9
                    },
                    "end": {
                      "line": 9,
                      "column": 22
                    }
                  },
                  "name": "operation_two"
                }
              ],
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 232,
            "end": 254,
            "loc": {
              "start": {
                "line": 10,
                "column": 4
              },
              "end": {
                "line": 10,
                "column": 26
              }
            },
            "expression": {
              "type": "CallExpression",
              "start": 232,
              "end": 254,
              "loc": {
                "start": {
                  "line": 10,
                  "column": 4
                },
                "end": {
                  "line": 10,
                  "column": 26
                }
              },
              "callee": {
                "type": "Identifier",
                "start": 232,
                "end": 241,
                "loc": {
                  "start": {
                    "line": 10,
                    "column": 4
                  },
                  "end": {
                    "line": 10,
                    "column": 13
                  }
                },
                "name": "recursion"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 242,
                  "end": 253,
                  "loc": {
                    "start": {
                      "line": 10,
                      "column": 14
                    },
                    "end": {
                      "line": 10,
                      "column": 25
                    }
                  },
                  "value": "something",
                  "raw": "\"something\""
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
      "start": 258,
      "end": 264,
      "loc": {
        "start": {
          "line": 13,
          "column": 0
        },
        "end": {
          "line": 13,
          "column": 6
        }
      },
      "expression": {
        "type": "CallExpression",
        "start": 258,
        "end": 264,
        "loc": {
          "start": {
            "line": 13,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 6
          }
        },
        "callee": {
          "type": "Identifier",
          "start": 258,
          "end": 262,
          "loc": {
            "start": {
              "line": 13,
              "column": 0
            },
            "end": {
              "line": 13,
              "column": 4
            }
          },
          "name": "main"
        },
        "arguments": [],
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 266,
      "end": 422,
      "loc": {
        "start": {
          "line": 15,
          "column": 0
        },
        "end": {
          "line": 23,
          "column": 1
        }
      },
      "id": {
        "type": "Identifier",
        "start": 275,
        "end": 284,
        "loc": {
          "start": {
            "line": 15,
            "column": 9
          },
          "end": {
            "line": 15,
            "column": 18
          }
        },
        "name": "recursion"
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 285,
          "end": 289,
          "loc": {
            "start": {
              "line": 15,
              "column": 19
            },
            "end": {
              "line": 15,
              "column": 23
            }
          },
          "name": "data"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 290,
        "end": 422,
        "loc": {
          "start": {
            "line": 15,
            "column": 24
          },
          "end": {
            "line": 23,
            "column": 1
          }
        },
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 296,
            "end": 316,
            "loc": {
              "start": {
                "line": 16,
                "column": 4
              },
              "end": {
                "line": 16,
                "column": 24
              }
            },
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 300,
                "end": 316,
                "loc": {
                  "start": {
                    "line": 16,
                    "column": 8
                  },
                  "end": {
                    "line": 16,
                    "column": 24
                  }
                },
                "id": {
                  "type": "Identifier",
                  "start": 300,
                  "end": 303,
                  "loc": {
                    "start": {
                      "line": 16,
                      "column": 8
                    },
                    "end": {
                      "line": 16,
                      "column": 11
                    }
                  },
                  "name": "txt"
                },
                "init": {
                  "type": "Literal",
                  "start": 305,
                  "end": 316,
                  "loc": {
                    "start": {
                      "line": 16,
                      "column": 13
                    },
                    "end": {
                      "line": 16,
                      "column": 24
                    }
                  },
                  "value": "something",
                  "raw": "\"something\""
                }
              }
            ],
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 321,
            "end": 420,
            "loc": {
              "start": {
                "line": 17,
                "column": 4
              },
              "end": {
                "line": 22,
                "column": 5
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 324,
              "end": 336,
              "loc": {
                "start": {
                  "line": 17,
                  "column": 7
                },
                "end": {
                  "line": 17,
                  "column": 19
                }
              },
              "left": {
                "type": "Identifier",
                "start": 324,
                "end": 327,
                "loc": {
                  "start": {
                    "line": 17,
                    "column": 7
                  },
                  "end": {
                    "line": 17,
                    "column": 10
                  }
                },
                "name": "txt"
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 332,
                "end": 336,
                "loc": {
                  "start": {
                    "line": 17,
                    "column": 15
                  },
                  "end": {
                    "line": 17,
                    "column": 19
                  }
                },
                "name": "data"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 337,
              "end": 366,
              "loc": {
                "start": {
                  "line": 17,
                  "column": 20
                },
                "end": {
                  "line": 19,
                  "column": 5
                }
              },
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 347,
                  "end": 360,
                  "loc": {
                    "start": {
                      "line": 18,
                      "column": 8
                    },
                    "end": {
                      "line": 18,
                      "column": 21
                    }
                  },
                  "argument": {
                    "type": "Literal",
                    "start": 354,
                    "end": 360,
                    "loc": {
                      "start": {
                        "line": 18,
                        "column": 15
                      },
                      "end": {
                        "line": 18,
                        "column": 21
                      }
                    },
                    "value": "stop",
                    "raw": "\"stop\""
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 370,
              "end": 420,
              "loc": {
                "start": {
                  "line": 19,
                  "column": 9
                },
                "end": {
                  "line": 22,
                  "column": 5
                }
              },
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 380,
                  "end": 399,
                  "loc": {
                    "start": {
                      "line": 20,
                      "column": 8
                    },
                    "end": {
                      "line": 20,
                      "column": 27
                    }
                  },
                  "expression": {
                    "type": "CallExpression",
                    "start": 380,
                    "end": 399,
                    "loc": {
                      "start": {
                        "line": 20,
                        "column": 8
                      },
                      "end": {
                        "line": 20,
                        "column": 27
                      }
                    },
                    "callee": {
                      "type": "Identifier",
                      "start": 380,
                      "end": 384,
                      "loc": {
                        "start": {
                          "line": 20,
                          "column": 8
                        },
                        "end": {
                          "line": 20,
                          "column": 12
                        }
                      },
                      "name": "show"
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 385,
                        "end": 398,
                        "loc": {
                          "start": {
                            "line": 20,
                            "column": 13
                          },
                          "end": {
                            "line": 20,
                            "column": 26
                          }
                        },
                        "value": "To infinity",
                        "raw": "\"To infinity\""
                      }
                    ],
                    "optional": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 408,
                  "end": 414,
                  "loc": {
                    "start": {
                      "line": 21,
                      "column": 8
                    },
                    "end": {
                      "line": 21,
                      "column": 14
                    }
                  },
                  "expression": {
                    "type": "CallExpression",
                    "start": 408,
                    "end": 414,
                    "loc": {
                      "start": {
                        "line": 21,
                        "column": 8
                      },
                      "end": {
                        "line": 21,
                        "column": 14
                      }
                    },
                    "callee": {
                      "type": "Identifier",
                      "start": 408,
                      "end": 412,
                      "loc": {
                        "start": {
                          "line": 21,
                          "column": 8
                        },
                        "end": {
                          "line": 21,
                          "column": 12
                        }
                      },
                      "name": "main"
                    },
                    "arguments": [],
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 424,
      "end": 579,
      "loc": {
        "start": {
          "line": 25,
          "column": 0
        },
        "end": {
          "line": 32,
          "column": 1
        }
      },
      "id": {
        "type": "Identifier",
        "start": 433,
        "end": 438,
        "loc": {
          "start": {
            "line": 25,
            "column": 9
          },
          "end": {
            "line": 25,
            "column": 14
          }
        },
        "name": "logic"
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 439,
          "end": 444,
          "loc": {
            "start": {
              "line": 25,
              "column": 15
            },
            "end": {
              "line": 25,
              "column": 20
            }
          },
          "name": "data1"
        },
        {
          "type": "Identifier",
          "start": 445,
          "end": 450,
          "loc": {
            "start": {
              "line": 25,
              "column": 21
            },
            "end": {
              "line": 25,
              "column": 26
            }
          },
          "name": "data2"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 451,
        "end": 579,
        "loc": {
          "start": {
            "line": 25,
            "column": 27
          },
          "end": {
            "line": 32,
            "column": 1
          }
        },
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 457,
            "end": 485,
            "loc": {
              "start": {
                "line": 26,
                "column": 4
              },
              "end": {
                "line": 26,
                "column": 32
              }
            },
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 463,
                "end": 484,
                "loc": {
                  "start": {
                    "line": 26,
                    "column": 10
                  },
                  "end": {
                    "line": 26,
                    "column": 31
                  }
                },
                "id": {
                  "type": "Identifier",
                  "start": 463,
                  "end": 469,
                  "loc": {
                    "start": {
                      "line": 26,
                      "column": 10
                    },
                    "end": {
                      "line": 26,
                      "column": 16
                    }
                  },
                  "name": "result"
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 471,
                  "end": 484,
                  "loc": {
                    "start": {
                      "line": 26,
                      "column": 18
                    },
                    "end": {
                      "line": 26,
                      "column": 31
                    }
                  },
                  "left": {
                    "type": "Identifier",
                    "start": 471,
                    "end": 476,
                    "loc": {
                      "start": {
                        "line": 26,
                        "column": 18
                      },
                      "end": {
                        "line": 26,
                        "column": 23
                      }
                    },
                    "name": "data1"
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 479,
                    "end": 484,
                    "loc": {
                      "start": {
                        "line": 26,
                        "column": 26
                      },
                      "end": {
                        "line": 26,
                        "column": 31
                      }
                    },
                    "name": "data2"
                  }
                }
              }
            ],
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 490,
            "end": 577,
            "loc": {
              "start": {
                "line": 27,
                "column": 4
              },
              "end": {
                "line": 31,
                "column": 5
              }
            },
            "test": {
              "type": "Identifier",
              "start": 493,
              "end": 499,
              "loc": {
                "start": {
                  "line": 27,
                  "column": 7
                },
                "end": {
                  "line": 27,
                  "column": 13
                }
              },
              "name": "result"
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 500,
              "end": 533,
              "loc": {
                "start": {
                  "line": 27,
                  "column": 14
                },
                "end": {
                  "line": 29,
                  "column": 5
                }
              },
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 510,
                  "end": 527,
                  "loc": {
                    "start": {
                      "line": 28,
                      "column": 8
                    },
                    "end": {
                      "line": 28,
                      "column": 25
                    }
                  },
                  "expression": {
                    "type": "CallExpression",
                    "start": 510,
                    "end": 527,
                    "loc": {
                      "start": {
                        "line": 28,
                        "column": 8
                      },
                      "end": {
                        "line": 28,
                        "column": 25
                      }
                    },
                    "callee": {
                      "type": "Identifier",
                      "start": 510,
                      "end": 513,
                      "loc": {
                        "start": {
                          "line": 28,
                          "column": 8
                        },
                        "end": {
                          "line": 28,
                          "column": 11
                        }
                      },
                      "name": "sum"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 514,
                        "end": 519,
                        "loc": {
                          "start": {
                            "line": 28,
                            "column": 12
                          },
                          "end": {
                            "line": 28,
                            "column": 17
                          }
                        },
                        "name": "data1"
                      },
                      {
                        "type": "Identifier",
                        "start": 521,
                        "end": 526,
                        "loc": {
                          "start": {
                            "line": 28,
                            "column": 19
                          },
                          "end": {
                            "line": 28,
                            "column": 24
                          }
                        },
                        "name": "data2"
                      }
                    ],
                    "optional": false
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 537,
              "end": 577,
              "loc": {
                "start": {
                  "line": 29,
                  "column": 9
                },
                "end": {
                  "line": 31,
                  "column": 5
                }
              },
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 547,
                  "end": 571,
                  "loc": {
                    "start": {
                      "line": 30,
                      "column": 8
                    },
                    "end": {
                      "line": 30,
                      "column": 32
                    }
                  },
                  "expression": {
                    "type": "CallExpression",
                    "start": 547,
                    "end": 571,
                    "loc": {
                      "start": {
                        "line": 30,
                        "column": 8
                      },
                      "end": {
                        "line": 30,
                        "column": 32
                      }
                    },
                    "callee": {
                      "type": "Identifier",
                      "start": 547,
                      "end": 558,
                      "loc": {
                        "start": {
                          "line": 30,
                          "column": 8
                        },
                        "end": {
                          "line": 30,
                          "column": 19
                        }
                      },
                      "name": "subtraction"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 559,
                        "end": 564,
                        "loc": {
                          "start": {
                            "line": 30,
                            "column": 20
                          },
                          "end": {
                            "line": 30,
                            "column": 25
                          }
                        },
                        "name": "data1"
                      },
                      {
                        "type": "Identifier",
                        "start": 565,
                        "end": 570,
                        "loc": {
                          "start": {
                            "line": 30,
                            "column": 26
                          },
                          "end": {
                            "line": 30,
                            "column": 31
                          }
                        },
                        "name": "data2"
                      }
                    ],
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 581,
      "end": 660,
      "loc": {
        "start": {
          "line": 34,
          "column": 0
        },
        "end": {
          "line": 38,
          "column": 1
        }
      },
      "id": {
        "type": "Identifier",
        "start": 590,
        "end": 593,
        "loc": {
          "start": {
            "line": 34,
            "column": 9
          },
          "end": {
            "line": 34,
            "column": 12
          }
        },
        "name": "sum"
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 595,
        "end": 660,
        "loc": {
          "start": {
            "line": 34,
            "column": 14
          },
          "end": {
            "line": 38,
            "column": 1
          }
        },
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 601,
            "end": 621,
            "loc": {
              "start": {
                "line": 35,
                "column": 4
              },
              "end": {
                "line": 35,
                "column": 24
              }
            },
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 607,
                "end": 620,
                "loc": {
                  "start": {
                    "line": 35,
                    "column": 10
                  },
                  "end": {
                    "line": 35,
                    "column": 23
                  }
                },
                "id": {
                  "type": "Identifier",
                  "start": 607,
                  "end": 613,
                  "loc": {
                    "start": {
                      "line": 35,
                      "column": 10
                    },
                    "end": {
                      "line": 35,
                      "column": 16
                    }
                  },
                  "name": "result"
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 615,
                  "end": 620,
                  "loc": {
                    "start": {
                      "line": 35,
                      "column": 18
                    },
                    "end": {
                      "line": 35,
                      "column": 23
                    }
                  },
                  "left": {
                    "type": "Identifier",
                    "start": 615,
                    "end": 616,
                    "loc": {
                      "start": {
                        "line": 35,
                        "column": 18
                      },
                      "end": {
                        "line": 35,
                        "column": 19
                      }
                    },
                    "name": "a"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 619,
                    "end": 620,
                    "loc": {
                      "start": {
                        "line": 35,
                        "column": 22
                      },
                      "end": {
                        "line": 35,
                        "column": 23
                      }
                    },
                    "name": "b"
                  }
                }
              }
            ],
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 626,
            "end": 639,
            "loc": {
              "start": {
                "line": 36,
                "column": 4
              },
              "end": {
                "line": 36,
                "column": 17
              }
            },
            "expression": {
              "type": "CallExpression",
              "start": 626,
              "end": 638,
              "loc": {
                "start": {
                  "line": 36,
                  "column": 4
                },
                "end": {
                  "line": 36,
                  "column": 16
                }
              },
              "callee": {
                "type": "Identifier",
                "start": 626,
                "end": 630,
                "loc": {
                  "start": {
                    "line": 36,
                    "column": 4
                  },
                  "end": {
                    "line": 36,
                    "column": 8
                  }
                },
                "name": "show"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 631,
                  "end": 637,
                  "loc": {
                    "start": {
                      "line": 36,
                      "column": 9
                    },
                    "end": {
                      "line": 36,
                      "column": 15
                    }
                  },
                  "name": "result"
                }
              ],
              "optional": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 644,
            "end": 658,
            "loc": {
              "start": {
                "line": 37,
                "column": 4
              },
              "end": {
                "line": 37,
                "column": 18
              }
            },
            "argument": {
              "type": "Identifier",
              "start": 651,
              "end": 657,
              "loc": {
                "start": {
                  "line": 37,
                  "column": 11
                },
                "end": {
                  "line": 37,
                  "column": 17
                }
              },
              "name": "result"
            }
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 662,
      "end": 749,
      "loc": {
        "start": {
          "line": 40,
          "column": 0
        },
        "end": {
          "line": 44,
          "column": 1
        }
      },
      "id": {
        "type": "Identifier",
        "start": 671,
        "end": 682,
        "loc": {
          "start": {
            "line": 40,
            "column": 9
          },
          "end": {
            "line": 40,
            "column": 20
          }
        },
        "name": "subtraction"
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 684,
        "end": 749,
        "loc": {
          "start": {
            "line": 40,
            "column": 22
          },
          "end": {
            "line": 44,
            "column": 1
          }
        },
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 690,
            "end": 710,
            "loc": {
              "start": {
                "line": 41,
                "column": 4
              },
              "end": {
                "line": 41,
                "column": 24
              }
            },
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 696,
                "end": 709,
                "loc": {
                  "start": {
                    "line": 41,
                    "column": 10
                  },
                  "end": {
                    "line": 41,
                    "column": 23
                  }
                },
                "id": {
                  "type": "Identifier",
                  "start": 696,
                  "end": 702,
                  "loc": {
                    "start": {
                      "line": 41,
                      "column": 10
                    },
                    "end": {
                      "line": 41,
                      "column": 16
                    }
                  },
                  "name": "result"
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 704,
                  "end": 709,
                  "loc": {
                    "start": {
                      "line": 41,
                      "column": 18
                    },
                    "end": {
                      "line": 41,
                      "column": 23
                    }
                  },
                  "left": {
                    "type": "Identifier",
                    "start": 704,
                    "end": 705,
                    "loc": {
                      "start": {
                        "line": 41,
                        "column": 18
                      },
                      "end": {
                        "line": 41,
                        "column": 19
                      }
                    },
                    "name": "a"
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "start": 708,
                    "end": 709,
                    "loc": {
                      "start": {
                        "line": 41,
                        "column": 22
                      },
                      "end": {
                        "line": 41,
                        "column": 23
                      }
                    },
                    "name": "b"
                  }
                }
              }
            ],
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 715,
            "end": 728,
            "loc": {
              "start": {
                "line": 42,
                "column": 4
              },
              "end": {
                "line": 42,
                "column": 17
              }
            },
            "expression": {
              "type": "CallExpression",
              "start": 715,
              "end": 727,
              "loc": {
                "start": {
                  "line": 42,
                  "column": 4
                },
                "end": {
                  "line": 42,
                  "column": 16
                }
              },
              "callee": {
                "type": "Identifier",
                "start": 715,
                "end": 719,
                "loc": {
                  "start": {
                    "line": 42,
                    "column": 4
                  },
                  "end": {
                    "line": 42,
                    "column": 8
                  }
                },
                "name": "show"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 720,
                  "end": 726,
                  "loc": {
                    "start": {
                      "line": 42,
                      "column": 9
                    },
                    "end": {
                      "line": 42,
                      "column": 15
                    }
                  },
                  "name": "result"
                }
              ],
              "optional": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 733,
            "end": 747,
            "loc": {
              "start": {
                "line": 43,
                "column": 4
              },
              "end": {
                "line": 43,
                "column": 18
              }
            },
            "argument": {
              "type": "Identifier",
              "start": 740,
              "end": 746,
              "loc": {
                "start": {
                  "line": 43,
                  "column": 11
                },
                "end": {
                  "line": 43,
                  "column": 17
                }
              },
              "name": "result"
            }
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 751,
      "end": 841,
      "loc": {
        "start": {
          "line": 46,
          "column": 0
        },
        "end": {
          "line": 50,
          "column": 1
        }
      },
      "id": {
        "type": "Identifier",
        "start": 760,
        "end": 774,
        "loc": {
          "start": {
            "line": 46,
            "column": 9
          },
          "end": {
            "line": 46,
            "column": 23
          }
        },
        "name": "multiplication"
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 776,
        "end": 841,
        "loc": {
          "start": {
            "line": 46,
            "column": 25
          },
          "end": {
            "line": 50,
            "column": 1
          }
        },
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 782,
            "end": 802,
            "loc": {
              "start": {
                "line": 47,
                "column": 4
              },
              "end": {
                "line": 47,
                "column": 24
              }
            },
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 788,
                "end": 801,
                "loc": {
                  "start": {
                    "line": 47,
                    "column": 10
                  },
                  "end": {
                    "line": 47,
                    "column": 23
                  }
                },
                "id": {
                  "type": "Identifier",
                  "start": 788,
                  "end": 794,
                  "loc": {
                    "start": {
                      "line": 47,
                      "column": 10
                    },
                    "end": {
                      "line": 47,
                      "column": 16
                    }
                  },
                  "name": "result"
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 796,
                  "end": 801,
                  "loc": {
                    "start": {
                      "line": 47,
                      "column": 18
                    },
                    "end": {
                      "line": 47,
                      "column": 23
                    }
                  },
                  "left": {
                    "type": "Identifier",
                    "start": 796,
                    "end": 797,
                    "loc": {
                      "start": {
                        "line": 47,
                        "column": 18
                      },
                      "end": {
                        "line": 47,
                        "column": 19
                      }
                    },
                    "name": "a"
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "start": 800,
                    "end": 801,
                    "loc": {
                      "start": {
                        "line": 47,
                        "column": 22
                      },
                      "end": {
                        "line": 47,
                        "column": 23
                      }
                    },
                    "name": "b"
                  }
                }
              }
            ],
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 807,
            "end": 820,
            "loc": {
              "start": {
                "line": 48,
                "column": 4
              },
              "end": {
                "line": 48,
                "column": 17
              }
            },
            "expression": {
              "type": "CallExpression",
              "start": 807,
              "end": 819,
              "loc": {
                "start": {
                  "line": 48,
                  "column": 4
                },
                "end": {
                  "line": 48,
                  "column": 16
                }
              },
              "callee": {
                "type": "Identifier",
                "start": 807,
                "end": 811,
                "loc": {
                  "start": {
                    "line": 48,
                    "column": 4
                  },
                  "end": {
                    "line": 48,
                    "column": 8
                  }
                },
                "name": "show"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 812,
                  "end": 818,
                  "loc": {
                    "start": {
                      "line": 48,
                      "column": 9
                    },
                    "end": {
                      "line": 48,
                      "column": 15
                    }
                  },
                  "name": "result"
                }
              ],
              "optional": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 825,
            "end": 839,
            "loc": {
              "start": {
                "line": 49,
                "column": 4
              },
              "end": {
                "line": 49,
                "column": 18
              }
            },
            "argument": {
              "type": "Identifier",
              "start": 832,
              "end": 838,
              "loc": {
                "start": {
                  "line": 49,
                  "column": 11
                },
                "end": {
                  "line": 49,
                  "column": 17
                }
              },
              "name": "result"
            }
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 880,
      "end": 964,
      "loc": {
        "start": {
          "line": 55,
          "column": 0
        },
        "end": {
          "line": 59,
          "column": 1
        }
      },
      "id": {
        "type": "Identifier",
        "start": 889,
        "end": 897,
        "loc": {
          "start": {
            "line": 55,
            "column": 9
          },
          "end": {
            "line": 55,
            "column": 17
          }
        },
        "name": "division"
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 899,
        "end": 964,
        "loc": {
          "start": {
            "line": 55,
            "column": 19
          },
          "end": {
            "line": 59,
            "column": 1
          }
        },
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 905,
            "end": 925,
            "loc": {
              "start": {
                "line": 56,
                "column": 4
              },
              "end": {
                "line": 56,
                "column": 24
              }
            },
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 911,
                "end": 924,
                "loc": {
                  "start": {
                    "line": 56,
                    "column": 10
                  },
                  "end": {
                    "line": 56,
                    "column": 23
                  }
                },
                "id": {
                  "type": "Identifier",
                  "start": 911,
                  "end": 917,
                  "loc": {
                    "start": {
                      "line": 56,
                      "column": 10
                    },
                    "end": {
                      "line": 56,
                      "column": 16
                    }
                  },
                  "name": "result"
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 919,
                  "end": 924,
                  "loc": {
                    "start": {
                      "line": 56,
                      "column": 18
                    },
                    "end": {
                      "line": 56,
                      "column": 23
                    }
                  },
                  "left": {
                    "type": "Identifier",
                    "start": 919,
                    "end": 920,
                    "loc": {
                      "start": {
                        "line": 56,
                        "column": 18
                      },
                      "end": {
                        "line": 56,
                        "column": 19
                      }
                    },
                    "name": "a"
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "start": 923,
                    "end": 924,
                    "loc": {
                      "start": {
                        "line": 56,
                        "column": 22
                      },
                      "end": {
                        "line": 56,
                        "column": 23
                      }
                    },
                    "name": "b"
                  }
                }
              }
            ],
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 930,
            "end": 943,
            "loc": {
              "start": {
                "line": 57,
                "column": 4
              },
              "end": {
                "line": 57,
                "column": 17
              }
            },
            "expression": {
              "type": "CallExpression",
              "start": 930,
              "end": 942,
              "loc": {
                "start": {
                  "line": 57,
                  "column": 4
                },
                "end": {
                  "line": 57,
                  "column": 16
                }
              },
              "callee": {
                "type": "Identifier",
                "start": 930,
                "end": 934,
                "loc": {
                  "start": {
                    "line": 57,
                    "column": 4
                  },
                  "end": {
                    "line": 57,
                    "column": 8
                  }
                },
                "name": "show"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 935,
                  "end": 941,
                  "loc": {
                    "start": {
                      "line": 57,
                      "column": 9
                    },
                    "end": {
                      "line": 57,
                      "column": 15
                    }
                  },
                  "name": "result"
                }
              ],
              "optional": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 948,
            "end": 962,
            "loc": {
              "start": {
                "line": 58,
                "column": 4
              },
              "end": {
                "line": 58,
                "column": 18
              }
            },
            "argument": {
              "type": "Identifier",
              "start": 955,
              "end": 961,
              "loc": {
                "start": {
                  "line": 58,
                  "column": 11
                },
                "end": {
                  "line": 58,
                  "column": 17
                }
              },
              "name": "result"
            }
          }
        ]
      },
      "comments": [
        {
          "type": "Block",
          "value": " one line\ntwo lines\nthree lines ",
          "start": 843,
          "end": 879,
          "loc": {
            "start": {
              "line": 52,
              "column": 0
            },
            "end": {
              "line": 54,
              "column": 14
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 978,
      "end": 1023,
      "loc": {
        "start": {
          "line": 62,
          "column": 0
        },
        "end": {
          "line": 64,
          "column": 1
        }
      },
      "id": {
        "type": "Identifier",
        "start": 987,
        "end": 991,
        "loc": {
          "start": {
            "line": 62,
            "column": 9
          },
          "end": {
            "line": 62,
            "column": 13
          }
        },
        "name": "show"
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 992,
          "end": 996,
          "loc": {
            "start": {
              "line": 62,
              "column": 14
            },
            "end": {
              "line": 62,
              "column": 18
            }
          },
          "name": "data"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 997,
        "end": 1023,
        "loc": {
          "start": {
            "line": 62,
            "column": 19
          },
          "end": {
            "line": 64,
            "column": 1
          }
        },
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1003,
            "end": 1021,
            "loc": {
              "start": {
                "line": 63,
                "column": 4
              },
              "end": {
                "line": 63,
                "column": 22
              }
            },
            "expression": {
              "type": "CallExpression",
              "start": 1003,
              "end": 1020,
              "loc": {
                "start": {
                  "line": 63,
                  "column": 4
                },
                "end": {
                  "line": 63,
                  "column": 21
                }
              },
              "callee": {
                "type": "MemberExpression",
                "start": 1003,
                "end": 1014,
                "loc": {
                  "start": {
                    "line": 63,
                    "column": 4
                  },
                  "end": {
                    "line": 63,
                    "column": 15
                  }
                },
                "object": {
                  "type": "Identifier",
                  "start": 1003,
                  "end": 1010,
                  "loc": {
                    "start": {
                      "line": 63,
                      "column": 4
                    },
                    "end": {
                      "line": 63,
                      "column": 11
                    }
                  },
                  "name": "console"
                },
                "property": {
                  "type": "Identifier",
                  "start": 1011,
                  "end": 1014,
                  "loc": {
                    "start": {
                      "line": 63,
                      "column": 12
                    },
                    "end": {
                      "line": 63,
                      "column": 15
                    }
                  },
                  "name": "log"
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1015,
                  "end": 1019,
                  "loc": {
                    "start": {
                      "line": 63,
                      "column": 16
                    },
                    "end": {
                      "line": 63,
                      "column": 20
                    }
                  },
                  "name": "data"
                }
              ],
              "optional": false
            }
          }
        ]
      },
      "comments": [
        {
          "type": "Line",
          "value": " one line",
          "start": 966,
          "end": 977,
          "loc": {
            "start": {
              "line": 61,
              "column": 0
            },
            "end": {
              "line": 61,
              "column": 11
            }
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
