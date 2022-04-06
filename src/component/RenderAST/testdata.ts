//https://david.bonnet.cc/astring/demo/#function%20test()%7B%0Aconst%20text=%20%22string%22;%0Alet%20number=%202%20+%202%20-%205%20*%207;%0Avar%20boolean=%20false%20&&%20true;%0Aconst%20functionInVar=%20suma(9,2);%0Avar%20obj=%20%7Bhello:%20100,%20save:%20false%7D%0Avar%20list=%20%5B1,2,3,%22string%22,false,true,%7Btxt:%22true%22%7D,%5B1,2,3%5D%5D;%0Aeval(%22console.log(12)%22)%0Aconsole.log(%22hey%22);%0Adocument.getElementByid(%22h1%22).classList.remove(%22d-none%22)%0Aconst%20returnBool=%20(e)%20=%3E%20%7B%20return%20true%20%7D%0A//%20esto%20es%20un%20test%0Afunction%20anidado()%7B%0Areturn%20%22hey%22%0A%7D%0A/*otro%20comment*/%0Areturn%202%20+%202%0A%7D%0A
//
export const api: any = {
  "type": "Program",
  "start": 0,
  "end": 466,
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 19,
      "column": 0
    }
  },
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 465,
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 18,
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
        "name": "test"
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 465,
        "loc": {
          "start": {
            "line": 1,
            "column": 15
          },
          "end": {
            "line": 18,
            "column": 1
          }
        },
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 17,
            "end": 44,
            "loc": {
              "start": {
                "line": 2,
                "column": 0
              },
              "end": {
                "line": 2,
                "column": 27
              }
            },
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 23,
                "end": 43,
                "loc": {
                  "start": {
                    "line": 2,
                    "column": 6
                  },
                  "end": {
                    "line": 2,
                    "column": 26
                  }
                },
                "id": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 27,
                  "loc": {
                    "start": {
                      "line": 2,
                      "column": 6
                    },
                    "end": {
                      "line": 2,
                      "column": 10
                    }
                  },
                  "name": "text"
                },
                "init": {
                  "type": "Literal",
                  "start": 29,
                  "end": 43,
                  "loc": {
                    "start": {
                      "line": 2,
                      "column": 12
                    },
                    "end": {
                      "line": 2,
                      "column": 26
                    }
                  },
                  "value": "string hello",
                  "raw": "\"string hello\""
                }
              }
            ],
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 45,
            "end": 71,
            "loc": {
              "start": {
                "line": 3,
                "column": 0
              },
              "end": {
                "line": 3,
                "column": 26
              }
            },
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 49,
                "end": 70,
                "loc": {
                  "start": {
                    "line": 3,
                    "column": 4
                  },
                  "end": {
                    "line": 3,
                    "column": 25
                  }
                },
                "id": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 55,
                  "loc": {
                    "start": {
                      "line": 3,
                      "column": 4
                    },
                    "end": {
                      "line": 3,
                      "column": 10
                    }
                  },
                  "name": "number"
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 57,
                  "end": 70,
                  "loc": {
                    "start": {
                      "line": 3,
                      "column": 12
                    },
                    "end": {
                      "line": 3,
                      "column": 25
                    }
                  },
                  "left": {
                    "type": "BinaryExpression",
                    "start": 57,
                    "end": 62,
                    "loc": {
                      "start": {
                        "line": 3,
                        "column": 12
                      },
                      "end": {
                        "line": 3,
                        "column": 17
                      }
                    },
                    "left": {
                      "type": "Literal",
                      "start": 57,
                      "end": 58,
                      "loc": {
                        "start": {
                          "line": 3,
                          "column": 12
                        },
                        "end": {
                          "line": 3,
                          "column": 13
                        }
                      },
                      "value": 2,
                      "raw": "2"
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "start": 61,
                      "end": 62,
                      "loc": {
                        "start": {
                          "line": 3,
                          "column": 16
                        },
                        "end": {
                          "line": 3,
                          "column": 17
                        }
                      },
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "operator": "-",
                  "right": {
                    "type": "BinaryExpression",
                    "start": 65,
                    "end": 70,
                    "loc": {
                      "start": {
                        "line": 3,
                        "column": 20
                      },
                      "end": {
                        "line": 3,
                        "column": 25
                      }
                    },
                    "left": {
                      "type": "Literal",
                      "start": 65,
                      "end": 66,
                      "loc": {
                        "start": {
                          "line": 3,
                          "column": 20
                        },
                        "end": {
                          "line": 3,
                          "column": 21
                        }
                      },
                      "value": 5,
                      "raw": "5"
                    },
                    "operator": "*",
                    "right": {
                      "type": "Literal",
                      "start": 69,
                      "end": 70,
                      "loc": {
                        "start": {
                          "line": 3,
                          "column": 24
                        },
                        "end": {
                          "line": 3,
                          "column": 25
                        }
                      },
                      "value": 7,
                      "raw": "7"
                    }
                  }
                }
              }
            ],
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 72,
            "end": 110,
            "loc": {
              "start": {
                "line": 4,
                "column": 0
              },
              "end": {
                "line": 4,
                "column": 38
              }
            },
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 76,
                "end": 109,
                "loc": {
                  "start": {
                    "line": 4,
                    "column": 4
                  },
                  "end": {
                    "line": 4,
                    "column": 37
                  }
                },
                "id": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 83,
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
                  "name": "boolean"
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 85,
                  "end": 109,
                  "loc": {
                    "start": {
                      "line": 4,
                      "column": 13
                    },
                    "end": {
                      "line": 4,
                      "column": 37
                    }
                  },
                  "left": {
                    "type": "LogicalExpression",
                    "start": 86,
                    "end": 99,
                    "loc": {
                      "start": {
                        "line": 4,
                        "column": 14
                      },
                      "end": {
                        "line": 4,
                        "column": 27
                      }
                    },
                    "left": {
                      "type": "Literal",
                      "start": 86,
                      "end": 91,
                      "loc": {
                        "start": {
                          "line": 4,
                          "column": 14
                        },
                        "end": {
                          "line": 4,
                          "column": 19
                        }
                      },
                      "value": false,
                      "raw": "false"
                    },
                    "operator": "&&",
                    "right": {
                      "type": "Literal",
                      "start": 95,
                      "end": 99,
                      "loc": {
                        "start": {
                          "line": 4,
                          "column": 23
                        },
                        "end": {
                          "line": 4,
                          "column": 27
                        }
                      },
                      "value": true,
                      "raw": "true"
                    }
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 105,
                    "end": 109,
                    "loc": {
                      "start": {
                        "line": 4,
                        "column": 33
                      },
                      "end": {
                        "line": 4,
                        "column": 37
                      }
                    },
                    "value": true,
                    "raw": "true"
                  }
                }
              }
            ],
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 111,
            "end": 142,
            "loc": {
              "start": {
                "line": 5,
                "column": 0
              },
              "end": {
                "line": 5,
                "column": 31
              }
            },
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 117,
                "end": 141,
                "loc": {
                  "start": {
                    "line": 5,
                    "column": 6
                  },
                  "end": {
                    "line": 5,
                    "column": 30
                  }
                },
                "id": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 130,
                  "loc": {
                    "start": {
                      "line": 5,
                      "column": 6
                    },
                    "end": {
                      "line": 5,
                      "column": 19
                    }
                  },
                  "name": "functionInVar"
                },
                "init": {
                  "type": "CallExpression",
                  "start": 132,
                  "end": 141,
                  "loc": {
                    "start": {
                      "line": 5,
                      "column": 21
                    },
                    "end": {
                      "line": 5,
                      "column": 30
                    }
                  },
                  "callee": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 136,
                    "loc": {
                      "start": {
                        "line": 5,
                        "column": 21
                      },
                      "end": {
                        "line": 5,
                        "column": 25
                      }
                    },
                    "name": "suma"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 137,
                      "end": 138,
                      "loc": {
                        "start": {
                          "line": 5,
                          "column": 26
                        },
                        "end": {
                          "line": 5,
                          "column": 27
                        }
                      },
                      "value": 9,
                      "raw": "9"
                    },
                    {
                      "type": "Literal",
                      "start": 139,
                      "end": 140,
                      "loc": {
                        "start": {
                          "line": 5,
                          "column": 28
                        },
                        "end": {
                          "line": 5,
                          "column": 29
                        }
                      },
                      "value": 2,
                      "raw": "2"
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 143,
            "end": 177,
            "loc": {
              "start": {
                "line": 6,
                "column": 0
              },
              "end": {
                "line": 6,
                "column": 34
              }
            },
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 147,
                "end": 177,
                "loc": {
                  "start": {
                    "line": 6,
                    "column": 4
                  },
                  "end": {
                    "line": 6,
                    "column": 34
                  }
                },
                "id": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 150,
                  "loc": {
                    "start": {
                      "line": 6,
                      "column": 4
                    },
                    "end": {
                      "line": 6,
                      "column": 7
                    }
                  },
                  "name": "obj"
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 152,
                  "end": 177,
                  "loc": {
                    "start": {
                      "line": 6,
                      "column": 9
                    },
                    "end": {
                      "line": 6,
                      "column": 34
                    }
                  },
                  "properties": [
                    {
                      "type": "Property",
                      "start": 153,
                      "end": 163,
                      "loc": {
                        "start": {
                          "line": 6,
                          "column": 10
                        },
                        "end": {
                          "line": 6,
                          "column": 20
                        }
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 153,
                        "end": 158,
                        "loc": {
                          "start": {
                            "line": 6,
                            "column": 10
                          },
                          "end": {
                            "line": 6,
                            "column": 15
                          }
                        },
                        "name": "hello"
                      },
                      "value": {
                        "type": "Literal",
                        "start": 160,
                        "end": 163,
                        "loc": {
                          "start": {
                            "line": 6,
                            "column": 17
                          },
                          "end": {
                            "line": 6,
                            "column": 20
                          }
                        },
                        "value": 100,
                        "raw": "100"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "start": 165,
                      "end": 176,
                      "loc": {
                        "start": {
                          "line": 6,
                          "column": 22
                        },
                        "end": {
                          "line": 6,
                          "column": 33
                        }
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 165,
                        "end": 169,
                        "loc": {
                          "start": {
                            "line": 6,
                            "column": 22
                          },
                          "end": {
                            "line": 6,
                            "column": 26
                          }
                        },
                        "name": "save"
                      },
                      "value": {
                        "type": "Literal",
                        "start": 171,
                        "end": 176,
                        "loc": {
                          "start": {
                            "line": 6,
                            "column": 28
                          },
                          "end": {
                            "line": 6,
                            "column": 33
                          }
                        },
                        "value": false,
                        "raw": "false"
                      },
                      "kind": "init"
                    }
                  ]
                }
              }
            ],
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 178,
            "end": 237,
            "loc": {
              "start": {
                "line": 7,
                "column": 0
              },
              "end": {
                "line": 7,
                "column": 59
              }
            },
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 182,
                "end": 236,
                "loc": {
                  "start": {
                    "line": 7,
                    "column": 4
                  },
                  "end": {
                    "line": 7,
                    "column": 58
                  }
                },
                "id": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 186,
                  "loc": {
                    "start": {
                      "line": 7,
                      "column": 4
                    },
                    "end": {
                      "line": 7,
                      "column": 8
                    }
                  },
                  "name": "list"
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 188,
                  "end": 236,
                  "loc": {
                    "start": {
                      "line": 7,
                      "column": 10
                    },
                    "end": {
                      "line": 7,
                      "column": 58
                    }
                  },
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 189,
                      "end": 190,
                      "loc": {
                        "start": {
                          "line": 7,
                          "column": 11
                        },
                        "end": {
                          "line": 7,
                          "column": 12
                        }
                      },
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 191,
                      "end": 192,
                      "loc": {
                        "start": {
                          "line": 7,
                          "column": 13
                        },
                        "end": {
                          "line": 7,
                          "column": 14
                        }
                      },
                      "value": 2,
                      "raw": "2"
                    },
                    {
                      "type": "Literal",
                      "start": 193,
                      "end": 194,
                      "loc": {
                        "start": {
                          "line": 7,
                          "column": 15
                        },
                        "end": {
                          "line": 7,
                          "column": 16
                        }
                      },
                      "value": 3,
                      "raw": "3"
                    },
                    {
                      "type": "Literal",
                      "start": 195,
                      "end": 203,
                      "loc": {
                        "start": {
                          "line": 7,
                          "column": 17
                        },
                        "end": {
                          "line": 7,
                          "column": 25
                        }
                      },
                      "value": "string",
                      "raw": "\"string\""
                    },
                    {
                      "type": "Literal",
                      "start": 204,
                      "end": 209,
                      "loc": {
                        "start": {
                          "line": 7,
                          "column": 26
                        },
                        "end": {
                          "line": 7,
                          "column": 31
                        }
                      },
                      "value": false,
                      "raw": "false"
                    },
                    {
                      "type": "Literal",
                      "start": 210,
                      "end": 214,
                      "loc": {
                        "start": {
                          "line": 7,
                          "column": 32
                        },
                        "end": {
                          "line": 7,
                          "column": 36
                        }
                      },
                      "value": true,
                      "raw": "true"
                    },
                    {
                      "type": "ObjectExpression",
                      "start": 215,
                      "end": 227,
                      "loc": {
                        "start": {
                          "line": 7,
                          "column": 37
                        },
                        "end": {
                          "line": 7,
                          "column": 49
                        }
                      },
                      "properties": [
                        {
                          "type": "Property",
                          "start": 216,
                          "end": 226,
                          "loc": {
                            "start": {
                              "line": 7,
                              "column": 38
                            },
                            "end": {
                              "line": 7,
                              "column": 48
                            }
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 216,
                            "end": 219,
                            "loc": {
                              "start": {
                                "line": 7,
                                "column": 38
                              },
                              "end": {
                                "line": 7,
                                "column": 41
                              }
                            },
                            "name": "txt"
                          },
                          "value": {
                            "type": "Literal",
                            "start": 220,
                            "end": 226,
                            "loc": {
                              "start": {
                                "line": 7,
                                "column": 42
                              },
                              "end": {
                                "line": 7,
                                "column": 48
                              }
                            },
                            "value": "true",
                            "raw": "\"true\""
                          },
                          "kind": "init"
                        }
                      ]
                    },
                    {
                      "type": "ArrayExpression",
                      "start": 228,
                      "end": 235,
                      "loc": {
                        "start": {
                          "line": 7,
                          "column": 50
                        },
                        "end": {
                          "line": 7,
                          "column": 57
                        }
                      },
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 229,
                          "end": 230,
                          "loc": {
                            "start": {
                              "line": 7,
                              "column": 51
                            },
                            "end": {
                              "line": 7,
                              "column": 52
                            }
                          },
                          "value": 1,
                          "raw": "1"
                        },
                        {
                          "type": "Literal",
                          "start": 231,
                          "end": 232,
                          "loc": {
                            "start": {
                              "line": 7,
                              "column": 53
                            },
                            "end": {
                              "line": 7,
                              "column": 54
                            }
                          },
                          "value": 2,
                          "raw": "2"
                        },
                        {
                          "type": "Literal",
                          "start": 233,
                          "end": 234,
                          "loc": {
                            "start": {
                              "line": 7,
                              "column": 55
                            },
                            "end": {
                              "line": 7,
                              "column": 56
                            }
                          },
                          "value": 3,
                          "raw": "3"
                        }
                      ]
                    }
                  ]
                }
              }
            ],
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 238,
            "end": 261,
            "loc": {
              "start": {
                "line": 8,
                "column": 0
              },
              "end": {
                "line": 8,
                "column": 23
              }
            },
            "expression": {
              "type": "CallExpression",
              "start": 238,
              "end": 261,
              "loc": {
                "start": {
                  "line": 8,
                  "column": 0
                },
                "end": {
                  "line": 8,
                  "column": 23
                }
              },
              "callee": {
                "type": "Identifier",
                "start": 238,
                "end": 242,
                "loc": {
                  "start": {
                    "line": 8,
                    "column": 0
                  },
                  "end": {
                    "line": 8,
                    "column": 4
                  }
                },
                "name": "eval"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 243,
                  "end": 260,
                  "loc": {
                    "start": {
                      "line": 8,
                      "column": 5
                    },
                    "end": {
                      "line": 8,
                      "column": 22
                    }
                  },
                  "value": "console.log(12)",
                  "raw": "\"console.log(12)\""
                }
              ],
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 262,
            "end": 281,
            "loc": {
              "start": {
                "line": 9,
                "column": 0
              },
              "end": {
                "line": 9,
                "column": 19
              }
            },
            "expression": {
              "type": "CallExpression",
              "start": 262,
              "end": 280,
              "loc": {
                "start": {
                  "line": 9,
                  "column": 0
                },
                "end": {
                  "line": 9,
                  "column": 18
                }
              },
              "callee": {
                "type": "MemberExpression",
                "start": 262,
                "end": 273,
                "loc": {
                  "start": {
                    "line": 9,
                    "column": 0
                  },
                  "end": {
                    "line": 9,
                    "column": 11
                  }
                },
                "object": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 269,
                  "loc": {
                    "start": {
                      "line": 9,
                      "column": 0
                    },
                    "end": {
                      "line": 9,
                      "column": 7
                    }
                  },
                  "name": "console"
                },
                "property": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 273,
                  "loc": {
                    "start": {
                      "line": 9,
                      "column": 8
                    },
                    "end": {
                      "line": 9,
                      "column": 11
                    }
                  },
                  "name": "log"
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 274,
                  "end": 279,
                  "loc": {
                    "start": {
                      "line": 9,
                      "column": 12
                    },
                    "end": {
                      "line": 9,
                      "column": 17
                    }
                  },
                  "value": "hey",
                  "raw": "\"hey\""
                }
              ],
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 282,
            "end": 338,
            "loc": {
              "start": {
                "line": 10,
                "column": 0
              },
              "end": {
                "line": 10,
                "column": 56
              }
            },
            "expression": {
              "type": "CallExpression",
              "start": 282,
              "end": 338,
              "loc": {
                "start": {
                  "line": 10,
                  "column": 0
                },
                "end": {
                  "line": 10,
                  "column": 56
                }
              },
              "callee": {
                "type": "MemberExpression",
                "start": 282,
                "end": 328,
                "loc": {
                  "start": {
                    "line": 10,
                    "column": 0
                  },
                  "end": {
                    "line": 10,
                    "column": 46
                  }
                },
                "object": {
                  "type": "MemberExpression",
                  "start": 282,
                  "end": 321,
                  "loc": {
                    "start": {
                      "line": 10,
                      "column": 0
                    },
                    "end": {
                      "line": 10,
                      "column": 39
                    }
                  },
                  "object": {
                    "type": "CallExpression",
                    "start": 282,
                    "end": 311,
                    "loc": {
                      "start": {
                        "line": 10,
                        "column": 0
                      },
                      "end": {
                        "line": 10,
                        "column": 29
                      }
                    },
                    "callee": {
                      "type": "MemberExpression",
                      "start": 282,
                      "end": 305,
                      "loc": {
                        "start": {
                          "line": 10,
                          "column": 0
                        },
                        "end": {
                          "line": 10,
                          "column": 23
                        }
                      },
                      "object": {
                        "type": "Identifier",
                        "start": 282,
                        "end": 290,
                        "loc": {
                          "start": {
                            "line": 10,
                            "column": 0
                          },
                          "end": {
                            "line": 10,
                            "column": 8
                          }
                        },
                        "name": "document"
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 291,
                        "end": 305,
                        "loc": {
                          "start": {
                            "line": 10,
                            "column": 9
                          },
                          "end": {
                            "line": 10,
                            "column": 23
                          }
                        },
                        "name": "getElementByid"
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 306,
                        "end": 310,
                        "loc": {
                          "start": {
                            "line": 10,
                            "column": 24
                          },
                          "end": {
                            "line": 10,
                            "column": 28
                          }
                        },
                        "value": "h1",
                        "raw": "\"h1\""
                      }
                    ],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 312,
                    "end": 321,
                    "loc": {
                      "start": {
                        "line": 10,
                        "column": 30
                      },
                      "end": {
                        "line": 10,
                        "column": 39
                      }
                    },
                    "name": "classList"
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 322,
                  "end": 328,
                  "loc": {
                    "start": {
                      "line": 10,
                      "column": 40
                    },
                    "end": {
                      "line": 10,
                      "column": 46
                    }
                  },
                  "name": "remove"
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 329,
                  "end": 337,
                  "loc": {
                    "start": {
                      "line": 10,
                      "column": 47
                    },
                    "end": {
                      "line": 10,
                      "column": 55
                    }
                  },
                  "value": "d-none",
                  "raw": "\"d-none\""
                }
              ],
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 339,
            "end": 379,
            "loc": {
              "start": {
                "line": 11,
                "column": 0
              },
              "end": {
                "line": 11,
                "column": 40
              }
            },
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 345,
                "end": 379,
                "loc": {
                  "start": {
                    "line": 11,
                    "column": 6
                  },
                  "end": {
                    "line": 11,
                    "column": 40
                  }
                },
                "id": {
                  "type": "Identifier",
                  "start": 345,
                  "end": 355,
                  "loc": {
                    "start": {
                      "line": 11,
                      "column": 6
                    },
                    "end": {
                      "line": 11,
                      "column": 16
                    }
                  },
                  "name": "returnBool"
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 357,
                  "end": 379,
                  "loc": {
                    "start": {
                      "line": 11,
                      "column": 18
                    },
                    "end": {
                      "line": 11,
                      "column": 40
                    }
                  },
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 358,
                      "end": 359,
                      "loc": {
                        "start": {
                          "line": 11,
                          "column": 19
                        },
                        "end": {
                          "line": 11,
                          "column": 20
                        }
                      },
                      "name": "e"
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 364,
                    "end": 379,
                    "loc": {
                      "start": {
                        "line": 11,
                        "column": 25
                      },
                      "end": {
                        "line": 11,
                        "column": 40
                      }
                    },
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 366,
                        "end": 377,
                        "loc": {
                          "start": {
                            "line": 11,
                            "column": 27
                          },
                          "end": {
                            "line": 11,
                            "column": 38
                          }
                        },
                        "argument": {
                          "type": "Literal",
                          "start": 373,
                          "end": 377,
                          "loc": {
                            "start": {
                              "line": 11,
                              "column": 34
                            },
                            "end": {
                              "line": 11,
                              "column": 38
                            }
                          },
                          "value": true,
                          "raw": "true"
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "kind": "const"
          },
          {
            "type": "FunctionDeclaration",
            "start": 399,
            "end": 433,
            "loc": {
              "start": {
                "line": 13,
                "column": 0
              },
              "end": {
                "line": 15,
                "column": 1
              }
            },
            "id": {
              "type": "Identifier",
              "start": 408,
              "end": 415,
              "loc": {
                "start": {
                  "line": 13,
                  "column": 9
                },
                "end": {
                  "line": 13,
                  "column": 16
                }
              },
              "name": "anidado"
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 417,
              "end": 433,
              "loc": {
                "start": {
                  "line": 13,
                  "column": 18
                },
                "end": {
                  "line": 15,
                  "column": 1
                }
              },
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 419,
                  "end": 431,
                  "loc": {
                    "start": {
                      "line": 14,
                      "column": 0
                    },
                    "end": {
                      "line": 14,
                      "column": 12
                    }
                  },
                  "argument": {
                    "type": "Literal",
                    "start": 426,
                    "end": 431,
                    "loc": {
                      "start": {
                        "line": 14,
                        "column": 7
                      },
                      "end": {
                        "line": 14,
                        "column": 12
                      }
                    },
                    "value": "hey",
                    "raw": "\"hey\""
                  }
                }
              ]
            },
            "comments": [
              {
                "type": "Line",
                "value": " esto es un test",
                "start": 380,
                "end": 398,
                "loc": {
                  "start": {
                    "line": 12,
                    "column": 0
                  },
                  "end": {
                    "line": 12,
                    "column": 18
                  }
                }
              }
            ]
          },
          {
            "type": "ReturnStatement",
            "start": 451,
            "end": 463,
            "loc": {
              "start": {
                "line": 17,
                "column": 0
              },
              "end": {
                "line": 17,
                "column": 12
              }
            },
            "argument": {
              "type": "BinaryExpression",
              "start": 458,
              "end": 463,
              "loc": {
                "start": {
                  "line": 17,
                  "column": 7
                },
                "end": {
                  "line": 17,
                  "column": 12
                }
              },
              "left": {
                "type": "Literal",
                "start": 458,
                "end": 459,
                "loc": {
                  "start": {
                    "line": 17,
                    "column": 7
                  },
                  "end": {
                    "line": 17,
                    "column": 8
                  }
                },
                "value": 2,
                "raw": "2"
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 462,
                "end": 463,
                "loc": {
                  "start": {
                    "line": 17,
                    "column": 11
                  },
                  "end": {
                    "line": 17,
                    "column": 12
                  }
                },
                "value": 2,
                "raw": "2"
              }
            },
            "comments": [
              {
                "type": "Block",
                "value": "otro comment",
                "start": 434,
                "end": 450,
                "loc": {
                  "start": {
                    "line": 16,
                    "column": 0
                  },
                  "end": {
                    "line": 16,
                    "column": 16
                  }
                }
              }
            ]
          }
        ]
      }
    }
  ],
  "sourceType": "module"
}
