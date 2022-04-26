//https://david.bonnet.cc/astring/demo/#function%20main()%7B%0A%20%20%20%20const%20n1=%2012;%0A%20%20%20%20const%20n2=%2022;%0A%20%20%20%20console.log(n1%20+%20n2);%0A%20%20%20%20logic(n1,n2)%0A%20%20%20%20let%20operation_one=%20multiplication(n1,n2)%0A%20%20%20%20let%20operation_two=%20division(n2,n1)%0A%20%20%20%20show(operation_one)%0A%20%20%20%20show(operation_two)%0A%20%20%20%20recursion(%22something%22)%0AfnArrow()%0AfnArrowTwo()%20%0AprintOne(%22hi%22,8)%0A%7D%0A%0Amain()%0A%0Aconst%20printOne%20=%20(txt,num)%20=%3E%20%7B%0A%20%20console.log(1,txt,num)%0A%7D%0A%0Afunction%20recursion(data)%7B%0A%20%20%20%20let%20txt=%20%22something%22%0A%20%20%20%20if(txt%20===%20data)%7B%0A%20%20%20%20%20%20%20%20return%20%22stop%22%0A%20%20%20%20%7Delse%7B%0A%20%20%20%20%20%20%20%20show(%22To%20infinity%22)%0A%20%20%20%20%20%20%20%20main()%0A%20%20%20%20%7D%0A%7D%0A%0Afunction%20logic(data1,data2)%7B%0A%20%20%20%20const%20result=%20data1%20%3C%20data2;%0A%20%20%20%20if(result)%7B%0A%20%20%20%20%20%20%20%20sum(data1,%20data2)%0A%20%20%20%20%7Delse%7B%0A%20%20%20%20%20%20%20%20subtraction(data1,data2)%0A%20%20%20%20%7D%0A%7D%0A%0Afunction%20sum(a,b)%7B%0A%20%20%20%20const%20result=%20a%20+%20b;%0A%20%20%20%20show(result);%0A%20%20%20%20return%20result;%0A%7D%0A%0Afunction%20subtraction(a,b)%7B%0A%20%20%20%20const%20result=%20a%20-%20b;%0A%20%20%20%20show(result);%0A%20%20%20%20return%20result;%0A%7D%0A%0Afunction%20multiplication(a,b)%7B%0A%20%20%20%20const%20result=%20a%20*%20b;%0A%20%20%20%20show(result);%0A%20%20%20%20return%20result;%0A%7D%0A%0A/*%20one%20line%0Atwo%20lines%0Athree%20lines%20*/%0Afunction%20division(a,b)%7B%0A%20%20%20%20const%20result=%20a%20/%20b;%0A%20%20%20%20show(result);%0A%20%20%20%20return%20result;%0A%7D%0A%0A//%20one%20line%0Afunction%20show(data)%7B%0A%20%20%20%20console.log(data);%0A%7D%0A%0Afunction%20fnArrow()%20%7B%0A%20%20%5B%5D.map((i)%20=%3E%20i%20*%202)%0A%7D%0A%0A%0Afunction%20fnArrowTwo()%20%7B%0A%20%20%5B%5D.map((i)%20=%3E%20%7B%0A%20%20%20%20%20show(%22hello%22,i)%0Areturn%20%60$%7Bi%20+%20%22%20test%22%7D%20RESULT%20$%7B2%20+%204%7D%20now%20$%7Bi%7D%60%0A%20%20%7D)%0A%7D

export const api= {
  "type": "Program",
  "start": 0,
  "end": 1304,
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 83,
      "column": 1
    }
  },
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 297,
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 14,
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
        "end": 297,
        "loc": {
          "start": {
            "line": 1,
            "column": 15
          },
          "end": {
            "line": 14,
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
          },
          {
            "type": "ExpressionStatement",
            "start": 255,
            "end": 264,
            "loc": {
              "start": {
                "line": 11,
                "column": 0
              },
              "end": {
                "line": 11,
                "column": 9
              }
            },
            "expression": {
              "type": "CallExpression",
              "start": 255,
              "end": 264,
              "loc": {
                "start": {
                  "line": 11,
                  "column": 0
                },
                "end": {
                  "line": 11,
                  "column": 9
                }
              },
              "callee": {
                "type": "Identifier",
                "start": 255,
                "end": 262,
                "loc": {
                  "start": {
                    "line": 11,
                    "column": 0
                  },
                  "end": {
                    "line": 11,
                    "column": 7
                  }
                },
                "name": "fnArrow"
              },
              "arguments": [],
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 265,
            "end": 277,
            "loc": {
              "start": {
                "line": 12,
                "column": 0
              },
              "end": {
                "line": 12,
                "column": 12
              }
            },
            "expression": {
              "type": "CallExpression",
              "start": 265,
              "end": 277,
              "loc": {
                "start": {
                  "line": 12,
                  "column": 0
                },
                "end": {
                  "line": 12,
                  "column": 12
                }
              },
              "callee": {
                "type": "Identifier",
                "start": 265,
                "end": 275,
                "loc": {
                  "start": {
                    "line": 12,
                    "column": 0
                  },
                  "end": {
                    "line": 12,
                    "column": 10
                  }
                },
                "name": "fnArrowTwo"
              },
              "arguments": [],
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 279,
            "end": 295,
            "loc": {
              "start": {
                "line": 13,
                "column": 0
              },
              "end": {
                "line": 13,
                "column": 16
              }
            },
            "expression": {
              "type": "CallExpression",
              "start": 279,
              "end": 295,
              "loc": {
                "start": {
                  "line": 13,
                  "column": 0
                },
                "end": {
                  "line": 13,
                  "column": 16
                }
              },
              "callee": {
                "type": "Identifier",
                "start": 279,
                "end": 287,
                "loc": {
                  "start": {
                    "line": 13,
                    "column": 0
                  },
                  "end": {
                    "line": 13,
                    "column": 8
                  }
                },
                "name": "printOne"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 288,
                  "end": 292,
                  "loc": {
                    "start": {
                      "line": 13,
                      "column": 9
                    },
                    "end": {
                      "line": 13,
                      "column": 13
                    }
                  },
                  "value": "hi",
                  "raw": "\"hi\""
                },
                {
                  "type": "Literal",
                  "start": 293,
                  "end": 294,
                  "loc": {
                    "start": {
                      "line": 13,
                      "column": 14
                    },
                    "end": {
                      "line": 13,
                      "column": 15
                    }
                  },
                  "value": 8,
                  "raw": "8"
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
      "start": 299,
      "end": 305,
      "loc": {
        "start": {
          "line": 16,
          "column": 0
        },
        "end": {
          "line": 16,
          "column": 6
        }
      },
      "expression": {
        "type": "CallExpression",
        "start": 299,
        "end": 305,
        "loc": {
          "start": {
            "line": 16,
            "column": 0
          },
          "end": {
            "line": 16,
            "column": 6
          }
        },
        "callee": {
          "type": "Identifier",
          "start": 299,
          "end": 303,
          "loc": {
            "start": {
              "line": 16,
              "column": 0
            },
            "end": {
              "line": 16,
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
      "type": "VariableDeclaration",
      "start": 307,
      "end": 365,
      "loc": {
        "start": {
          "line": 18,
          "column": 0
        },
        "end": {
          "line": 20,
          "column": 1
        }
      },
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 313,
          "end": 365,
          "loc": {
            "start": {
              "line": 18,
              "column": 6
            },
            "end": {
              "line": 20,
              "column": 1
            }
          },
          "id": {
            "type": "Identifier",
            "start": 313,
            "end": 321,
            "loc": {
              "start": {
                "line": 18,
                "column": 6
              },
              "end": {
                "line": 18,
                "column": 14
              }
            },
            "name": "printOne"
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 324,
            "end": 365,
            "loc": {
              "start": {
                "line": 18,
                "column": 17
              },
              "end": {
                "line": 20,
                "column": 1
              }
            },
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 325,
                "end": 328,
                "loc": {
                  "start": {
                    "line": 18,
                    "column": 18
                  },
                  "end": {
                    "line": 18,
                    "column": 21
                  }
                },
                "name": "txt"
              },
              {
                "type": "Identifier",
                "start": 329,
                "end": 332,
                "loc": {
                  "start": {
                    "line": 18,
                    "column": 22
                  },
                  "end": {
                    "line": 18,
                    "column": 25
                  }
                },
                "name": "num"
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 337,
              "end": 365,
              "loc": {
                "start": {
                  "line": 18,
                  "column": 30
                },
                "end": {
                  "line": 20,
                  "column": 1
                }
              },
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 341,
                  "end": 363,
                  "loc": {
                    "start": {
                      "line": 19,
                      "column": 2
                    },
                    "end": {
                      "line": 19,
                      "column": 24
                    }
                  },
                  "expression": {
                    "type": "CallExpression",
                    "start": 341,
                    "end": 363,
                    "loc": {
                      "start": {
                        "line": 19,
                        "column": 2
                      },
                      "end": {
                        "line": 19,
                        "column": 24
                      }
                    },
                    "callee": {
                      "type": "MemberExpression",
                      "start": 341,
                      "end": 352,
                      "loc": {
                        "start": {
                          "line": 19,
                          "column": 2
                        },
                        "end": {
                          "line": 19,
                          "column": 13
                        }
                      },
                      "object": {
                        "type": "Identifier",
                        "start": 341,
                        "end": 348,
                        "loc": {
                          "start": {
                            "line": 19,
                            "column": 2
                          },
                          "end": {
                            "line": 19,
                            "column": 9
                          }
                        },
                        "name": "console"
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 349,
                        "end": 352,
                        "loc": {
                          "start": {
                            "line": 19,
                            "column": 10
                          },
                          "end": {
                            "line": 19,
                            "column": 13
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
                        "start": 353,
                        "end": 354,
                        "loc": {
                          "start": {
                            "line": 19,
                            "column": 14
                          },
                          "end": {
                            "line": 19,
                            "column": 15
                          }
                        },
                        "value": 1,
                        "raw": "1"
                      },
                      {
                        "type": "Identifier",
                        "start": 355,
                        "end": 358,
                        "loc": {
                          "start": {
                            "line": 19,
                            "column": 16
                          },
                          "end": {
                            "line": 19,
                            "column": 19
                          }
                        },
                        "name": "txt"
                      },
                      {
                        "type": "Identifier",
                        "start": 359,
                        "end": 362,
                        "loc": {
                          "start": {
                            "line": 19,
                            "column": 20
                          },
                          "end": {
                            "line": 19,
                            "column": 23
                          }
                        },
                        "name": "num"
                      }
                    ],
                    "optional": false
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
      "start": 367,
      "end": 523,
      "loc": {
        "start": {
          "line": 22,
          "column": 0
        },
        "end": {
          "line": 30,
          "column": 1
        }
      },
      "id": {
        "type": "Identifier",
        "start": 376,
        "end": 385,
        "loc": {
          "start": {
            "line": 22,
            "column": 9
          },
          "end": {
            "line": 22,
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
          "start": 386,
          "end": 390,
          "loc": {
            "start": {
              "line": 22,
              "column": 19
            },
            "end": {
              "line": 22,
              "column": 23
            }
          },
          "name": "data"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 391,
        "end": 523,
        "loc": {
          "start": {
            "line": 22,
            "column": 24
          },
          "end": {
            "line": 30,
            "column": 1
          }
        },
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 397,
            "end": 417,
            "loc": {
              "start": {
                "line": 23,
                "column": 4
              },
              "end": {
                "line": 23,
                "column": 24
              }
            },
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 401,
                "end": 417,
                "loc": {
                  "start": {
                    "line": 23,
                    "column": 8
                  },
                  "end": {
                    "line": 23,
                    "column": 24
                  }
                },
                "id": {
                  "type": "Identifier",
                  "start": 401,
                  "end": 404,
                  "loc": {
                    "start": {
                      "line": 23,
                      "column": 8
                    },
                    "end": {
                      "line": 23,
                      "column": 11
                    }
                  },
                  "name": "txt"
                },
                "init": {
                  "type": "Literal",
                  "start": 406,
                  "end": 417,
                  "loc": {
                    "start": {
                      "line": 23,
                      "column": 13
                    },
                    "end": {
                      "line": 23,
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
            "start": 422,
            "end": 521,
            "loc": {
              "start": {
                "line": 24,
                "column": 4
              },
              "end": {
                "line": 29,
                "column": 5
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 425,
              "end": 437,
              "loc": {
                "start": {
                  "line": 24,
                  "column": 7
                },
                "end": {
                  "line": 24,
                  "column": 19
                }
              },
              "left": {
                "type": "Identifier",
                "start": 425,
                "end": 428,
                "loc": {
                  "start": {
                    "line": 24,
                    "column": 7
                  },
                  "end": {
                    "line": 24,
                    "column": 10
                  }
                },
                "name": "txt"
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 433,
                "end": 437,
                "loc": {
                  "start": {
                    "line": 24,
                    "column": 15
                  },
                  "end": {
                    "line": 24,
                    "column": 19
                  }
                },
                "name": "data"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 438,
              "end": 467,
              "loc": {
                "start": {
                  "line": 24,
                  "column": 20
                },
                "end": {
                  "line": 26,
                  "column": 5
                }
              },
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 448,
                  "end": 461,
                  "loc": {
                    "start": {
                      "line": 25,
                      "column": 8
                    },
                    "end": {
                      "line": 25,
                      "column": 21
                    }
                  },
                  "argument": {
                    "type": "Literal",
                    "start": 455,
                    "end": 461,
                    "loc": {
                      "start": {
                        "line": 25,
                        "column": 15
                      },
                      "end": {
                        "line": 25,
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
              "start": 471,
              "end": 521,
              "loc": {
                "start": {
                  "line": 26,
                  "column": 9
                },
                "end": {
                  "line": 29,
                  "column": 5
                }
              },
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 481,
                  "end": 500,
                  "loc": {
                    "start": {
                      "line": 27,
                      "column": 8
                    },
                    "end": {
                      "line": 27,
                      "column": 27
                    }
                  },
                  "expression": {
                    "type": "CallExpression",
                    "start": 481,
                    "end": 500,
                    "loc": {
                      "start": {
                        "line": 27,
                        "column": 8
                      },
                      "end": {
                        "line": 27,
                        "column": 27
                      }
                    },
                    "callee": {
                      "type": "Identifier",
                      "start": 481,
                      "end": 485,
                      "loc": {
                        "start": {
                          "line": 27,
                          "column": 8
                        },
                        "end": {
                          "line": 27,
                          "column": 12
                        }
                      },
                      "name": "show"
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 486,
                        "end": 499,
                        "loc": {
                          "start": {
                            "line": 27,
                            "column": 13
                          },
                          "end": {
                            "line": 27,
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
                  "start": 509,
                  "end": 515,
                  "loc": {
                    "start": {
                      "line": 28,
                      "column": 8
                    },
                    "end": {
                      "line": 28,
                      "column": 14
                    }
                  },
                  "expression": {
                    "type": "CallExpression",
                    "start": 509,
                    "end": 515,
                    "loc": {
                      "start": {
                        "line": 28,
                        "column": 8
                      },
                      "end": {
                        "line": 28,
                        "column": 14
                      }
                    },
                    "callee": {
                      "type": "Identifier",
                      "start": 509,
                      "end": 513,
                      "loc": {
                        "start": {
                          "line": 28,
                          "column": 8
                        },
                        "end": {
                          "line": 28,
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
      "start": 525,
      "end": 680,
      "loc": {
        "start": {
          "line": 32,
          "column": 0
        },
        "end": {
          "line": 39,
          "column": 1
        }
      },
      "id": {
        "type": "Identifier",
        "start": 534,
        "end": 539,
        "loc": {
          "start": {
            "line": 32,
            "column": 9
          },
          "end": {
            "line": 32,
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
          "start": 540,
          "end": 545,
          "loc": {
            "start": {
              "line": 32,
              "column": 15
            },
            "end": {
              "line": 32,
              "column": 20
            }
          },
          "name": "data1"
        },
        {
          "type": "Identifier",
          "start": 546,
          "end": 551,
          "loc": {
            "start": {
              "line": 32,
              "column": 21
            },
            "end": {
              "line": 32,
              "column": 26
            }
          },
          "name": "data2"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 552,
        "end": 680,
        "loc": {
          "start": {
            "line": 32,
            "column": 27
          },
          "end": {
            "line": 39,
            "column": 1
          }
        },
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 558,
            "end": 586,
            "loc": {
              "start": {
                "line": 33,
                "column": 4
              },
              "end": {
                "line": 33,
                "column": 32
              }
            },
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 564,
                "end": 585,
                "loc": {
                  "start": {
                    "line": 33,
                    "column": 10
                  },
                  "end": {
                    "line": 33,
                    "column": 31
                  }
                },
                "id": {
                  "type": "Identifier",
                  "start": 564,
                  "end": 570,
                  "loc": {
                    "start": {
                      "line": 33,
                      "column": 10
                    },
                    "end": {
                      "line": 33,
                      "column": 16
                    }
                  },
                  "name": "result"
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 572,
                  "end": 585,
                  "loc": {
                    "start": {
                      "line": 33,
                      "column": 18
                    },
                    "end": {
                      "line": 33,
                      "column": 31
                    }
                  },
                  "left": {
                    "type": "Identifier",
                    "start": 572,
                    "end": 577,
                    "loc": {
                      "start": {
                        "line": 33,
                        "column": 18
                      },
                      "end": {
                        "line": 33,
                        "column": 23
                      }
                    },
                    "name": "data1"
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 580,
                    "end": 585,
                    "loc": {
                      "start": {
                        "line": 33,
                        "column": 26
                      },
                      "end": {
                        "line": 33,
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
            "start": 591,
            "end": 678,
            "loc": {
              "start": {
                "line": 34,
                "column": 4
              },
              "end": {
                "line": 38,
                "column": 5
              }
            },
            "test": {
              "type": "Identifier",
              "start": 594,
              "end": 600,
              "loc": {
                "start": {
                  "line": 34,
                  "column": 7
                },
                "end": {
                  "line": 34,
                  "column": 13
                }
              },
              "name": "result"
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 601,
              "end": 634,
              "loc": {
                "start": {
                  "line": 34,
                  "column": 14
                },
                "end": {
                  "line": 36,
                  "column": 5
                }
              },
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 611,
                  "end": 628,
                  "loc": {
                    "start": {
                      "line": 35,
                      "column": 8
                    },
                    "end": {
                      "line": 35,
                      "column": 25
                    }
                  },
                  "expression": {
                    "type": "CallExpression",
                    "start": 611,
                    "end": 628,
                    "loc": {
                      "start": {
                        "line": 35,
                        "column": 8
                      },
                      "end": {
                        "line": 35,
                        "column": 25
                      }
                    },
                    "callee": {
                      "type": "Identifier",
                      "start": 611,
                      "end": 614,
                      "loc": {
                        "start": {
                          "line": 35,
                          "column": 8
                        },
                        "end": {
                          "line": 35,
                          "column": 11
                        }
                      },
                      "name": "sum"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 615,
                        "end": 620,
                        "loc": {
                          "start": {
                            "line": 35,
                            "column": 12
                          },
                          "end": {
                            "line": 35,
                            "column": 17
                          }
                        },
                        "name": "data1"
                      },
                      {
                        "type": "Identifier",
                        "start": 622,
                        "end": 627,
                        "loc": {
                          "start": {
                            "line": 35,
                            "column": 19
                          },
                          "end": {
                            "line": 35,
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
              "start": 638,
              "end": 678,
              "loc": {
                "start": {
                  "line": 36,
                  "column": 9
                },
                "end": {
                  "line": 38,
                  "column": 5
                }
              },
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 648,
                  "end": 672,
                  "loc": {
                    "start": {
                      "line": 37,
                      "column": 8
                    },
                    "end": {
                      "line": 37,
                      "column": 32
                    }
                  },
                  "expression": {
                    "type": "CallExpression",
                    "start": 648,
                    "end": 672,
                    "loc": {
                      "start": {
                        "line": 37,
                        "column": 8
                      },
                      "end": {
                        "line": 37,
                        "column": 32
                      }
                    },
                    "callee": {
                      "type": "Identifier",
                      "start": 648,
                      "end": 659,
                      "loc": {
                        "start": {
                          "line": 37,
                          "column": 8
                        },
                        "end": {
                          "line": 37,
                          "column": 19
                        }
                      },
                      "name": "subtraction"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 660,
                        "end": 665,
                        "loc": {
                          "start": {
                            "line": 37,
                            "column": 20
                          },
                          "end": {
                            "line": 37,
                            "column": 25
                          }
                        },
                        "name": "data1"
                      },
                      {
                        "type": "Identifier",
                        "start": 666,
                        "end": 671,
                        "loc": {
                          "start": {
                            "line": 37,
                            "column": 26
                          },
                          "end": {
                            "line": 37,
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
      "start": 682,
      "end": 764,
      "loc": {
        "start": {
          "line": 41,
          "column": 0
        },
        "end": {
          "line": 45,
          "column": 1
        }
      },
      "id": {
        "type": "Identifier",
        "start": 691,
        "end": 694,
        "loc": {
          "start": {
            "line": 41,
            "column": 9
          },
          "end": {
            "line": 41,
            "column": 12
          }
        },
        "name": "sum"
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 695,
          "end": 696,
          "loc": {
            "start": {
              "line": 41,
              "column": 13
            },
            "end": {
              "line": 41,
              "column": 14
            }
          },
          "name": "a"
        },
        {
          "type": "Identifier",
          "start": 697,
          "end": 698,
          "loc": {
            "start": {
              "line": 41,
              "column": 15
            },
            "end": {
              "line": 41,
              "column": 16
            }
          },
          "name": "b"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 699,
        "end": 764,
        "loc": {
          "start": {
            "line": 41,
            "column": 17
          },
          "end": {
            "line": 45,
            "column": 1
          }
        },
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 705,
            "end": 725,
            "loc": {
              "start": {
                "line": 42,
                "column": 4
              },
              "end": {
                "line": 42,
                "column": 24
              }
            },
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 711,
                "end": 724,
                "loc": {
                  "start": {
                    "line": 42,
                    "column": 10
                  },
                  "end": {
                    "line": 42,
                    "column": 23
                  }
                },
                "id": {
                  "type": "Identifier",
                  "start": 711,
                  "end": 717,
                  "loc": {
                    "start": {
                      "line": 42,
                      "column": 10
                    },
                    "end": {
                      "line": 42,
                      "column": 16
                    }
                  },
                  "name": "result"
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 719,
                  "end": 724,
                  "loc": {
                    "start": {
                      "line": 42,
                      "column": 18
                    },
                    "end": {
                      "line": 42,
                      "column": 23
                    }
                  },
                  "left": {
                    "type": "Identifier",
                    "start": 719,
                    "end": 720,
                    "loc": {
                      "start": {
                        "line": 42,
                        "column": 18
                      },
                      "end": {
                        "line": 42,
                        "column": 19
                      }
                    },
                    "name": "a"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 723,
                    "end": 724,
                    "loc": {
                      "start": {
                        "line": 42,
                        "column": 22
                      },
                      "end": {
                        "line": 42,
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
            "start": 730,
            "end": 743,
            "loc": {
              "start": {
                "line": 43,
                "column": 4
              },
              "end": {
                "line": 43,
                "column": 17
              }
            },
            "expression": {
              "type": "CallExpression",
              "start": 730,
              "end": 742,
              "loc": {
                "start": {
                  "line": 43,
                  "column": 4
                },
                "end": {
                  "line": 43,
                  "column": 16
                }
              },
              "callee": {
                "type": "Identifier",
                "start": 730,
                "end": 734,
                "loc": {
                  "start": {
                    "line": 43,
                    "column": 4
                  },
                  "end": {
                    "line": 43,
                    "column": 8
                  }
                },
                "name": "show"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 735,
                  "end": 741,
                  "loc": {
                    "start": {
                      "line": 43,
                      "column": 9
                    },
                    "end": {
                      "line": 43,
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
            "start": 748,
            "end": 762,
            "loc": {
              "start": {
                "line": 44,
                "column": 4
              },
              "end": {
                "line": 44,
                "column": 18
              }
            },
            "argument": {
              "type": "Identifier",
              "start": 755,
              "end": 761,
              "loc": {
                "start": {
                  "line": 44,
                  "column": 11
                },
                "end": {
                  "line": 44,
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
      "start": 766,
      "end": 856,
      "loc": {
        "start": {
          "line": 47,
          "column": 0
        },
        "end": {
          "line": 51,
          "column": 1
        }
      },
      "id": {
        "type": "Identifier",
        "start": 775,
        "end": 786,
        "loc": {
          "start": {
            "line": 47,
            "column": 9
          },
          "end": {
            "line": 47,
            "column": 20
          }
        },
        "name": "subtraction"
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 787,
          "end": 788,
          "loc": {
            "start": {
              "line": 47,
              "column": 21
            },
            "end": {
              "line": 47,
              "column": 22
            }
          },
          "name": "a"
        },
        {
          "type": "Identifier",
          "start": 789,
          "end": 790,
          "loc": {
            "start": {
              "line": 47,
              "column": 23
            },
            "end": {
              "line": 47,
              "column": 24
            }
          },
          "name": "b"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 791,
        "end": 856,
        "loc": {
          "start": {
            "line": 47,
            "column": 25
          },
          "end": {
            "line": 51,
            "column": 1
          }
        },
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 797,
            "end": 817,
            "loc": {
              "start": {
                "line": 48,
                "column": 4
              },
              "end": {
                "line": 48,
                "column": 24
              }
            },
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 803,
                "end": 816,
                "loc": {
                  "start": {
                    "line": 48,
                    "column": 10
                  },
                  "end": {
                    "line": 48,
                    "column": 23
                  }
                },
                "id": {
                  "type": "Identifier",
                  "start": 803,
                  "end": 809,
                  "loc": {
                    "start": {
                      "line": 48,
                      "column": 10
                    },
                    "end": {
                      "line": 48,
                      "column": 16
                    }
                  },
                  "name": "result"
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 811,
                  "end": 816,
                  "loc": {
                    "start": {
                      "line": 48,
                      "column": 18
                    },
                    "end": {
                      "line": 48,
                      "column": 23
                    }
                  },
                  "left": {
                    "type": "Identifier",
                    "start": 811,
                    "end": 812,
                    "loc": {
                      "start": {
                        "line": 48,
                        "column": 18
                      },
                      "end": {
                        "line": 48,
                        "column": 19
                      }
                    },
                    "name": "a"
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "start": 815,
                    "end": 816,
                    "loc": {
                      "start": {
                        "line": 48,
                        "column": 22
                      },
                      "end": {
                        "line": 48,
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
            "start": 822,
            "end": 835,
            "loc": {
              "start": {
                "line": 49,
                "column": 4
              },
              "end": {
                "line": 49,
                "column": 17
              }
            },
            "expression": {
              "type": "CallExpression",
              "start": 822,
              "end": 834,
              "loc": {
                "start": {
                  "line": 49,
                  "column": 4
                },
                "end": {
                  "line": 49,
                  "column": 16
                }
              },
              "callee": {
                "type": "Identifier",
                "start": 822,
                "end": 826,
                "loc": {
                  "start": {
                    "line": 49,
                    "column": 4
                  },
                  "end": {
                    "line": 49,
                    "column": 8
                  }
                },
                "name": "show"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 827,
                  "end": 833,
                  "loc": {
                    "start": {
                      "line": 49,
                      "column": 9
                    },
                    "end": {
                      "line": 49,
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
            "start": 840,
            "end": 854,
            "loc": {
              "start": {
                "line": 50,
                "column": 4
              },
              "end": {
                "line": 50,
                "column": 18
              }
            },
            "argument": {
              "type": "Identifier",
              "start": 847,
              "end": 853,
              "loc": {
                "start": {
                  "line": 50,
                  "column": 11
                },
                "end": {
                  "line": 50,
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
      "start": 858,
      "end": 951,
      "loc": {
        "start": {
          "line": 53,
          "column": 0
        },
        "end": {
          "line": 57,
          "column": 1
        }
      },
      "id": {
        "type": "Identifier",
        "start": 867,
        "end": 881,
        "loc": {
          "start": {
            "line": 53,
            "column": 9
          },
          "end": {
            "line": 53,
            "column": 23
          }
        },
        "name": "multiplication"
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 882,
          "end": 883,
          "loc": {
            "start": {
              "line": 53,
              "column": 24
            },
            "end": {
              "line": 53,
              "column": 25
            }
          },
          "name": "a"
        },
        {
          "type": "Identifier",
          "start": 884,
          "end": 885,
          "loc": {
            "start": {
              "line": 53,
              "column": 26
            },
            "end": {
              "line": 53,
              "column": 27
            }
          },
          "name": "b"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 886,
        "end": 951,
        "loc": {
          "start": {
            "line": 53,
            "column": 28
          },
          "end": {
            "line": 57,
            "column": 1
          }
        },
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 892,
            "end": 912,
            "loc": {
              "start": {
                "line": 54,
                "column": 4
              },
              "end": {
                "line": 54,
                "column": 24
              }
            },
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 898,
                "end": 911,
                "loc": {
                  "start": {
                    "line": 54,
                    "column": 10
                  },
                  "end": {
                    "line": 54,
                    "column": 23
                  }
                },
                "id": {
                  "type": "Identifier",
                  "start": 898,
                  "end": 904,
                  "loc": {
                    "start": {
                      "line": 54,
                      "column": 10
                    },
                    "end": {
                      "line": 54,
                      "column": 16
                    }
                  },
                  "name": "result"
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 906,
                  "end": 911,
                  "loc": {
                    "start": {
                      "line": 54,
                      "column": 18
                    },
                    "end": {
                      "line": 54,
                      "column": 23
                    }
                  },
                  "left": {
                    "type": "Identifier",
                    "start": 906,
                    "end": 907,
                    "loc": {
                      "start": {
                        "line": 54,
                        "column": 18
                      },
                      "end": {
                        "line": 54,
                        "column": 19
                      }
                    },
                    "name": "a"
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "start": 910,
                    "end": 911,
                    "loc": {
                      "start": {
                        "line": 54,
                        "column": 22
                      },
                      "end": {
                        "line": 54,
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
            "start": 917,
            "end": 930,
            "loc": {
              "start": {
                "line": 55,
                "column": 4
              },
              "end": {
                "line": 55,
                "column": 17
              }
            },
            "expression": {
              "type": "CallExpression",
              "start": 917,
              "end": 929,
              "loc": {
                "start": {
                  "line": 55,
                  "column": 4
                },
                "end": {
                  "line": 55,
                  "column": 16
                }
              },
              "callee": {
                "type": "Identifier",
                "start": 917,
                "end": 921,
                "loc": {
                  "start": {
                    "line": 55,
                    "column": 4
                  },
                  "end": {
                    "line": 55,
                    "column": 8
                  }
                },
                "name": "show"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 922,
                  "end": 928,
                  "loc": {
                    "start": {
                      "line": 55,
                      "column": 9
                    },
                    "end": {
                      "line": 55,
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
            "start": 935,
            "end": 949,
            "loc": {
              "start": {
                "line": 56,
                "column": 4
              },
              "end": {
                "line": 56,
                "column": 18
              }
            },
            "argument": {
              "type": "Identifier",
              "start": 942,
              "end": 948,
              "loc": {
                "start": {
                  "line": 56,
                  "column": 11
                },
                "end": {
                  "line": 56,
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
      "start": 990,
      "end": 1077,
      "loc": {
        "start": {
          "line": 62,
          "column": 0
        },
        "end": {
          "line": 66,
          "column": 1
        }
      },
      "id": {
        "type": "Identifier",
        "start": 999,
        "end": 1007,
        "loc": {
          "start": {
            "line": 62,
            "column": 9
          },
          "end": {
            "line": 62,
            "column": 17
          }
        },
        "name": "division"
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1008,
          "end": 1009,
          "loc": {
            "start": {
              "line": 62,
              "column": 18
            },
            "end": {
              "line": 62,
              "column": 19
            }
          },
          "name": "a"
        },
        {
          "type": "Identifier",
          "start": 1010,
          "end": 1011,
          "loc": {
            "start": {
              "line": 62,
              "column": 20
            },
            "end": {
              "line": 62,
              "column": 21
            }
          },
          "name": "b"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1012,
        "end": 1077,
        "loc": {
          "start": {
            "line": 62,
            "column": 22
          },
          "end": {
            "line": 66,
            "column": 1
          }
        },
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1018,
            "end": 1038,
            "loc": {
              "start": {
                "line": 63,
                "column": 4
              },
              "end": {
                "line": 63,
                "column": 24
              }
            },
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1024,
                "end": 1037,
                "loc": {
                  "start": {
                    "line": 63,
                    "column": 10
                  },
                  "end": {
                    "line": 63,
                    "column": 23
                  }
                },
                "id": {
                  "type": "Identifier",
                  "start": 1024,
                  "end": 1030,
                  "loc": {
                    "start": {
                      "line": 63,
                      "column": 10
                    },
                    "end": {
                      "line": 63,
                      "column": 16
                    }
                  },
                  "name": "result"
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1032,
                  "end": 1037,
                  "loc": {
                    "start": {
                      "line": 63,
                      "column": 18
                    },
                    "end": {
                      "line": 63,
                      "column": 23
                    }
                  },
                  "left": {
                    "type": "Identifier",
                    "start": 1032,
                    "end": 1033,
                    "loc": {
                      "start": {
                        "line": 63,
                        "column": 18
                      },
                      "end": {
                        "line": 63,
                        "column": 19
                      }
                    },
                    "name": "a"
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "start": 1036,
                    "end": 1037,
                    "loc": {
                      "start": {
                        "line": 63,
                        "column": 22
                      },
                      "end": {
                        "line": 63,
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
            "start": 1043,
            "end": 1056,
            "loc": {
              "start": {
                "line": 64,
                "column": 4
              },
              "end": {
                "line": 64,
                "column": 17
              }
            },
            "expression": {
              "type": "CallExpression",
              "start": 1043,
              "end": 1055,
              "loc": {
                "start": {
                  "line": 64,
                  "column": 4
                },
                "end": {
                  "line": 64,
                  "column": 16
                }
              },
              "callee": {
                "type": "Identifier",
                "start": 1043,
                "end": 1047,
                "loc": {
                  "start": {
                    "line": 64,
                    "column": 4
                  },
                  "end": {
                    "line": 64,
                    "column": 8
                  }
                },
                "name": "show"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1048,
                  "end": 1054,
                  "loc": {
                    "start": {
                      "line": 64,
                      "column": 9
                    },
                    "end": {
                      "line": 64,
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
            "start": 1061,
            "end": 1075,
            "loc": {
              "start": {
                "line": 65,
                "column": 4
              },
              "end": {
                "line": 65,
                "column": 18
              }
            },
            "argument": {
              "type": "Identifier",
              "start": 1068,
              "end": 1074,
              "loc": {
                "start": {
                  "line": 65,
                  "column": 11
                },
                "end": {
                  "line": 65,
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
          "start": 953,
          "end": 989,
          "loc": {
            "start": {
              "line": 59,
              "column": 0
            },
            "end": {
              "line": 61,
              "column": 14
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1091,
      "end": 1136,
      "loc": {
        "start": {
          "line": 69,
          "column": 0
        },
        "end": {
          "line": 71,
          "column": 1
        }
      },
      "id": {
        "type": "Identifier",
        "start": 1100,
        "end": 1104,
        "loc": {
          "start": {
            "line": 69,
            "column": 9
          },
          "end": {
            "line": 69,
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
          "start": 1105,
          "end": 1109,
          "loc": {
            "start": {
              "line": 69,
              "column": 14
            },
            "end": {
              "line": 69,
              "column": 18
            }
          },
          "name": "data"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1110,
        "end": 1136,
        "loc": {
          "start": {
            "line": 69,
            "column": 19
          },
          "end": {
            "line": 71,
            "column": 1
          }
        },
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1116,
            "end": 1134,
            "loc": {
              "start": {
                "line": 70,
                "column": 4
              },
              "end": {
                "line": 70,
                "column": 22
              }
            },
            "expression": {
              "type": "CallExpression",
              "start": 1116,
              "end": 1133,
              "loc": {
                "start": {
                  "line": 70,
                  "column": 4
                },
                "end": {
                  "line": 70,
                  "column": 21
                }
              },
              "callee": {
                "type": "MemberExpression",
                "start": 1116,
                "end": 1127,
                "loc": {
                  "start": {
                    "line": 70,
                    "column": 4
                  },
                  "end": {
                    "line": 70,
                    "column": 15
                  }
                },
                "object": {
                  "type": "Identifier",
                  "start": 1116,
                  "end": 1123,
                  "loc": {
                    "start": {
                      "line": 70,
                      "column": 4
                    },
                    "end": {
                      "line": 70,
                      "column": 11
                    }
                  },
                  "name": "console"
                },
                "property": {
                  "type": "Identifier",
                  "start": 1124,
                  "end": 1127,
                  "loc": {
                    "start": {
                      "line": 70,
                      "column": 12
                    },
                    "end": {
                      "line": 70,
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
                  "start": 1128,
                  "end": 1132,
                  "loc": {
                    "start": {
                      "line": 70,
                      "column": 16
                    },
                    "end": {
                      "line": 70,
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
          "start": 1079,
          "end": 1090,
          "loc": {
            "start": {
              "line": 68,
              "column": 0
            },
            "end": {
              "line": 68,
              "column": 11
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1138,
      "end": 1183,
      "loc": {
        "start": {
          "line": 73,
          "column": 0
        },
        "end": {
          "line": 75,
          "column": 1
        }
      },
      "id": {
        "type": "Identifier",
        "start": 1147,
        "end": 1154,
        "loc": {
          "start": {
            "line": 73,
            "column": 9
          },
          "end": {
            "line": 73,
            "column": 16
          }
        },
        "name": "fnArrow"
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1157,
        "end": 1183,
        "loc": {
          "start": {
            "line": 73,
            "column": 19
          },
          "end": {
            "line": 75,
            "column": 1
          }
        },
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1161,
            "end": 1181,
            "loc": {
              "start": {
                "line": 74,
                "column": 2
              },
              "end": {
                "line": 74,
                "column": 22
              }
            },
            "expression": {
              "type": "CallExpression",
              "start": 1161,
              "end": 1181,
              "loc": {
                "start": {
                  "line": 74,
                  "column": 2
                },
                "end": {
                  "line": 74,
                  "column": 22
                }
              },
              "callee": {
                "type": "MemberExpression",
                "start": 1161,
                "end": 1167,
                "loc": {
                  "start": {
                    "line": 74,
                    "column": 2
                  },
                  "end": {
                    "line": 74,
                    "column": 8
                  }
                },
                "object": {
                  "type": "ArrayExpression",
                  "start": 1161,
                  "end": 1163,
                  "loc": {
                    "start": {
                      "line": 74,
                      "column": 2
                    },
                    "end": {
                      "line": 74,
                      "column": 4
                    }
                  },
                  "elements": []
                },
                "property": {
                  "type": "Identifier",
                  "start": 1164,
                  "end": 1167,
                  "loc": {
                    "start": {
                      "line": 74,
                      "column": 5
                    },
                    "end": {
                      "line": 74,
                      "column": 8
                    }
                  },
                  "name": "map"
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1168,
                  "end": 1180,
                  "loc": {
                    "start": {
                      "line": 74,
                      "column": 9
                    },
                    "end": {
                      "line": 74,
                      "column": 21
                    }
                  },
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1169,
                      "end": 1170,
                      "loc": {
                        "start": {
                          "line": 74,
                          "column": 10
                        },
                        "end": {
                          "line": 74,
                          "column": 11
                        }
                      },
                      "name": "i"
                    }
                  ],
                  "body": {
                    "type": "BinaryExpression",
                    "start": 1175,
                    "end": 1180,
                    "loc": {
                      "start": {
                        "line": 74,
                        "column": 16
                      },
                      "end": {
                        "line": 74,
                        "column": 21
                      }
                    },
                    "left": {
                      "type": "Identifier",
                      "start": 1175,
                      "end": 1176,
                      "loc": {
                        "start": {
                          "line": 74,
                          "column": 16
                        },
                        "end": {
                          "line": 74,
                          "column": 17
                        }
                      },
                      "name": "i"
                    },
                    "operator": "*",
                    "right": {
                      "type": "Literal",
                      "start": 1179,
                      "end": 1180,
                      "loc": {
                        "start": {
                          "line": 74,
                          "column": 20
                        },
                        "end": {
                          "line": 74,
                          "column": 21
                        }
                      },
                      "value": 2,
                      "raw": "2"
                    }
                  }
                }
              ],
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1186,
      "end": 1304,
      "loc": {
        "start": {
          "line": 78,
          "column": 0
        },
        "end": {
          "line": 83,
          "column": 1
        }
      },
      "id": {
        "type": "Identifier",
        "start": 1195,
        "end": 1205,
        "loc": {
          "start": {
            "line": 78,
            "column": 9
          },
          "end": {
            "line": 78,
            "column": 19
          }
        },
        "name": "fnArrowTwo"
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1208,
        "end": 1304,
        "loc": {
          "start": {
            "line": 78,
            "column": 22
          },
          "end": {
            "line": 83,
            "column": 1
          }
        },
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1212,
            "end": 1302,
            "loc": {
              "start": {
                "line": 79,
                "column": 2
              },
              "end": {
                "line": 82,
                "column": 4
              }
            },
            "expression": {
              "type": "CallExpression",
              "start": 1212,
              "end": 1302,
              "loc": {
                "start": {
                  "line": 79,
                  "column": 2
                },
                "end": {
                  "line": 82,
                  "column": 4
                }
              },
              "callee": {
                "type": "MemberExpression",
                "start": 1212,
                "end": 1218,
                "loc": {
                  "start": {
                    "line": 79,
                    "column": 2
                  },
                  "end": {
                    "line": 79,
                    "column": 8
                  }
                },
                "object": {
                  "type": "ArrayExpression",
                  "start": 1212,
                  "end": 1214,
                  "loc": {
                    "start": {
                      "line": 79,
                      "column": 2
                    },
                    "end": {
                      "line": 79,
                      "column": 4
                    }
                  },
                  "elements": []
                },
                "property": {
                  "type": "Identifier",
                  "start": 1215,
                  "end": 1218,
                  "loc": {
                    "start": {
                      "line": 79,
                      "column": 5
                    },
                    "end": {
                      "line": 79,
                      "column": 8
                    }
                  },
                  "name": "map"
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1219,
                  "end": 1301,
                  "loc": {
                    "start": {
                      "line": 79,
                      "column": 9
                    },
                    "end": {
                      "line": 82,
                      "column": 3
                    }
                  },
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1220,
                      "end": 1221,
                      "loc": {
                        "start": {
                          "line": 79,
                          "column": 10
                        },
                        "end": {
                          "line": 79,
                          "column": 11
                        }
                      },
                      "name": "i"
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1226,
                    "end": 1301,
                    "loc": {
                      "start": {
                        "line": 79,
                        "column": 16
                      },
                      "end": {
                        "line": 82,
                        "column": 3
                      }
                    },
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1233,
                        "end": 1248,
                        "loc": {
                          "start": {
                            "line": 80,
                            "column": 5
                          },
                          "end": {
                            "line": 80,
                            "column": 20
                          }
                        },
                        "expression": {
                          "type": "CallExpression",
                          "start": 1233,
                          "end": 1248,
                          "loc": {
                            "start": {
                              "line": 80,
                              "column": 5
                            },
                            "end": {
                              "line": 80,
                              "column": 20
                            }
                          },
                          "callee": {
                            "type": "Identifier",
                            "start": 1233,
                            "end": 1237,
                            "loc": {
                              "start": {
                                "line": 80,
                                "column": 5
                              },
                              "end": {
                                "line": 80,
                                "column": 9
                              }
                            },
                            "name": "show"
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 1238,
                              "end": 1245,
                              "loc": {
                                "start": {
                                  "line": 80,
                                  "column": 10
                                },
                                "end": {
                                  "line": 80,
                                  "column": 17
                                }
                              },
                              "value": "hello",
                              "raw": "\"hello\""
                            },
                            {
                              "type": "Identifier",
                              "start": 1246,
                              "end": 1247,
                              "loc": {
                                "start": {
                                  "line": 80,
                                  "column": 18
                                },
                                "end": {
                                  "line": 80,
                                  "column": 19
                                }
                              },
                              "name": "i"
                            }
                          ],
                          "optional": false
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 1249,
                        "end": 1297,
                        "loc": {
                          "start": {
                            "line": 81,
                            "column": 0
                          },
                          "end": {
                            "line": 81,
                            "column": 48
                          }
                        },
                        "argument": {
                          "type": "TemplateLiteral",
                          "start": 1256,
                          "end": 1297,
                          "loc": {
                            "start": {
                              "line": 81,
                              "column": 7
                            },
                            "end": {
                              "line": 81,
                              "column": 48
                            }
                          },
                          "expressions": [
                            {
                              "type": "BinaryExpression",
                              "start": 1259,
                              "end": 1270,
                              "loc": {
                                "start": {
                                  "line": 81,
                                  "column": 10
                                },
                                "end": {
                                  "line": 81,
                                  "column": 21
                                }
                              },
                              "left": {
                                "type": "Identifier",
                                "start": 1259,
                                "end": 1260,
                                "loc": {
                                  "start": {
                                    "line": 81,
                                    "column": 10
                                  },
                                  "end": {
                                    "line": 81,
                                    "column": 11
                                  }
                                },
                                "name": "i"
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "start": 1263,
                                "end": 1270,
                                "loc": {
                                  "start": {
                                    "line": 81,
                                    "column": 14
                                  },
                                  "end": {
                                    "line": 81,
                                    "column": 21
                                  }
                                },
                                "value": " test",
                                "raw": "\" test\""
                              }
                            },
                            {
                              "type": "BinaryExpression",
                              "start": 1281,
                              "end": 1286,
                              "loc": {
                                "start": {
                                  "line": 81,
                                  "column": 32
                                },
                                "end": {
                                  "line": 81,
                                  "column": 37
                                }
                              },
                              "left": {
                                "type": "Literal",
                                "start": 1281,
                                "end": 1282,
                                "loc": {
                                  "start": {
                                    "line": 81,
                                    "column": 32
                                  },
                                  "end": {
                                    "line": 81,
                                    "column": 33
                                  }
                                },
                                "value": 2,
                                "raw": "2"
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "start": 1285,
                                "end": 1286,
                                "loc": {
                                  "start": {
                                    "line": 81,
                                    "column": 36
                                  },
                                  "end": {
                                    "line": 81,
                                    "column": 37
                                  }
                                },
                                "value": 4,
                                "raw": "4"
                              }
                            },
                            {
                              "type": "Identifier",
                              "start": 1294,
                              "end": 1295,
                              "loc": {
                                "start": {
                                  "line": 81,
                                  "column": 45
                                },
                                "end": {
                                  "line": 81,
                                  "column": 46
                                }
                              },
                              "name": "i"
                            }
                          ],
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 1257,
                              "end": 1257,
                              "loc": {
                                "start": {
                                  "line": 81,
                                  "column": 8
                                },
                                "end": {
                                  "line": 81,
                                  "column": 8
                                }
                              },
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": false
                            },
                            {
                              "type": "TemplateElement",
                              "start": 1271,
                              "end": 1279,
                              "loc": {
                                "start": {
                                  "line": 81,
                                  "column": 22
                                },
                                "end": {
                                  "line": 81,
                                  "column": 30
                                }
                              },
                              "value": {
                                "raw": " RESULT ",
                                "cooked": " RESULT "
                              },
                              "tail": false
                            },
                            {
                              "type": "TemplateElement",
                              "start": 1287,
                              "end": 1292,
                              "loc": {
                                "start": {
                                  "line": 81,
                                  "column": 38
                                },
                                "end": {
                                  "line": 81,
                                  "column": 43
                                }
                              },
                              "value": {
                                "raw": " now ",
                                "cooked": " now "
                              },
                              "tail": false
                            },
                            {
                              "type": "TemplateElement",
                              "start": 1296,
                              "end": 1296,
                              "loc": {
                                "start": {
                                  "line": 81,
                                  "column": 47
                                },
                                "end": {
                                  "line": 81,
                                  "column": 47
                                }
                              },
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": true
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ],
              "optional": false
            }
          }
        ]
      }
    }
  ],
  "sourceType": "module"
}
