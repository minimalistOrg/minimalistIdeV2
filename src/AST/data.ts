//https://david.bonnet.cc/astring/demo/#function%20main()%7B%0A%20%20%20%20const%20n1=%2012;%0A%20%20%20%20const%20n2=%2022;%0A%20%20%20%20console.log(n1%20+%20n2);%0A%20%20%20%20logic(n1,n2)%0A%20%20%20%20let%20operation_one=%20multiplication(n1,n2)%0A%20%20%20%20let%20operation_two=%20division(n2,n1)%0A%20%20%20%20show(operation_one)%0A%20%20%20%20show(operation_two)%0A%20%20%20%20recursion(%22something%22)%0AfnArrow()%0A//printOne()%0A%7D%0A%0Amain()%0A%0A/*const%20printOne%20=%20()%20=%3E%20%7B%0A%20%20console.log(1)%0A%7D*/%0A%0Afunction%20recursion(data)%7B%0A%20%20%20%20let%20txt=%20%22something%22%0A%20%20%20%20if(txt%20===%20data)%7B%0A%20%20%20%20%20%20%20%20return%20%22stop%22%0A%20%20%20%20%7Delse%7B%0A%20%20%20%20%20%20%20%20show(%22To%20infinity%22)%0A%20%20%20%20%20%20%20%20main()%0A%20%20%20%20%7D%0A%7D%0A%0Afunction%20logic(data1,data2)%7B%0A%20%20%20%20const%20result=%20data1%20%3C%20data2;%0A%20%20%20%20if(result)%7B%0A%20%20%20%20%20%20%20%20sum(data1,%20data2)%0A%20%20%20%20%7Delse%7B%0A%20%20%20%20%20%20%20%20subtraction(data1,data2)%0A%20%20%20%20%7D%0A%7D%0A%0Afunction%20sum(a,b)%7B%0A%20%20%20%20const%20result=%20a%20+%20b;%0A%20%20%20%20show(result);%0A%20%20%20%20return%20result;%0A%7D%0A%0Afunction%20subtraction(a,b)%7B%0A%20%20%20%20const%20result=%20a%20-%20b;%0A%20%20%20%20show(result);%0A%20%20%20%20return%20result;%0A%7D%0A%0Afunction%20multiplication(a,b)%7B%0A%20%20%20%20const%20result=%20a%20*%20b;%0A%20%20%20%20show(result);%0A%20%20%20%20return%20result;%0A%7D%0A%0A/*%20one%20line%0Atwo%20lines%0Athree%20lines%20*/%0Afunction%20division(a,b)%7B%0A%20%20%20%20const%20result=%20a%20/%20b;%0A%20%20%20%20show(result);%0A%20%20%20%20return%20result;%0A%7D%0A%0A//%20one%20line%0Afunction%20show(data)%7B%0A%20%20%20%20console.log(data);%0A%7D%0A%0Afunction%20fnArrow()%20%7B%0A%20%20%5B%5D.map((i)%20=%3E%20i%20*%202)%0A%7D
export const api= {
  "type": "Program",
  "start": 0,
  "end": 1274,
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
      "end": 293,
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
        "end": 293,
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
          }
        ],
        "trailingComments": [
          {
            "type": "Line",
            "value": "printOne()",
            "start": 279,
            "end": 291,
            "loc": {
              "start": {
                "line": 13,
                "column": 0
              },
              "end": {
                "line": 13,
                "column": 12
              }
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 295,
      "end": 301,
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
        "start": 295,
        "end": 301,
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
          "start": 295,
          "end": 299,
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
      "type": "FunctionDeclaration",
      "start": 352,
      "end": 508,
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
        "start": 361,
        "end": 370,
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
          "start": 371,
          "end": 375,
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
        "start": 376,
        "end": 508,
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
            "start": 382,
            "end": 402,
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
                "start": 386,
                "end": 402,
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
                  "start": 386,
                  "end": 389,
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
                  "start": 391,
                  "end": 402,
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
            "start": 407,
            "end": 506,
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
              "start": 410,
              "end": 422,
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
                "start": 410,
                "end": 413,
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
                "start": 418,
                "end": 422,
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
              "start": 423,
              "end": 452,
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
                  "start": 433,
                  "end": 446,
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
                    "start": 440,
                    "end": 446,
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
              "start": 456,
              "end": 506,
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
                  "start": 466,
                  "end": 485,
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
                    "start": 466,
                    "end": 485,
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
                      "start": 466,
                      "end": 470,
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
                        "start": 471,
                        "end": 484,
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
                  "start": 494,
                  "end": 500,
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
                    "start": 494,
                    "end": 500,
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
                      "start": 494,
                      "end": 498,
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
      },
      "comments": [
        {
          "type": "Block",
          "value": "const printOne = () => {\n  console.log(1)\n}",
          "start": 303,
          "end": 350,
          "loc": {
            "start": {
              "line": 18,
              "column": 0
            },
            "end": {
              "line": 20,
              "column": 3
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 510,
      "end": 665,
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
        "start": 519,
        "end": 524,
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
          "start": 525,
          "end": 530,
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
          "start": 531,
          "end": 536,
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
        "start": 537,
        "end": 665,
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
            "start": 543,
            "end": 571,
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
                "start": 549,
                "end": 570,
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
                  "start": 549,
                  "end": 555,
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
                  "start": 557,
                  "end": 570,
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
                    "start": 557,
                    "end": 562,
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
                    "start": 565,
                    "end": 570,
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
            "start": 576,
            "end": 663,
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
              "start": 579,
              "end": 585,
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
              "start": 586,
              "end": 619,
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
                  "start": 596,
                  "end": 613,
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
                    "start": 596,
                    "end": 613,
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
                      "start": 596,
                      "end": 599,
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
                        "start": 600,
                        "end": 605,
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
                        "start": 607,
                        "end": 612,
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
              "start": 623,
              "end": 663,
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
                  "start": 633,
                  "end": 657,
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
                    "start": 633,
                    "end": 657,
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
                      "start": 633,
                      "end": 644,
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
                        "start": 645,
                        "end": 650,
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
                        "start": 651,
                        "end": 656,
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
      "start": 667,
      "end": 749,
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
        "start": 676,
        "end": 679,
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
          "start": 680,
          "end": 681,
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
          "start": 682,
          "end": 683,
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
        "start": 684,
        "end": 749,
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
            "start": 690,
            "end": 710,
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
                "start": 696,
                "end": 709,
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
                  "start": 696,
                  "end": 702,
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
                  "start": 704,
                  "end": 709,
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
                    "start": 704,
                    "end": 705,
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
                    "start": 708,
                    "end": 709,
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
            "start": 715,
            "end": 728,
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
              "start": 715,
              "end": 727,
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
                "start": 715,
                "end": 719,
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
                  "start": 720,
                  "end": 726,
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
            "start": 733,
            "end": 747,
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
              "start": 740,
              "end": 746,
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
      "start": 751,
      "end": 841,
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
        "start": 760,
        "end": 771,
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
          "start": 772,
          "end": 773,
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
          "start": 774,
          "end": 775,
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
        "start": 776,
        "end": 841,
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
            "start": 782,
            "end": 802,
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
                "start": 788,
                "end": 801,
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
                  "start": 788,
                  "end": 794,
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
                  "start": 796,
                  "end": 801,
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
                    "start": 796,
                    "end": 797,
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
                    "start": 800,
                    "end": 801,
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
            "start": 807,
            "end": 820,
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
              "start": 807,
              "end": 819,
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
                "start": 807,
                "end": 811,
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
                  "start": 812,
                  "end": 818,
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
            "start": 825,
            "end": 839,
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
              "start": 832,
              "end": 838,
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
      "start": 843,
      "end": 936,
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
        "start": 852,
        "end": 866,
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
          "start": 867,
          "end": 868,
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
          "start": 869,
          "end": 870,
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
        "start": 871,
        "end": 936,
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
            "start": 877,
            "end": 897,
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
                "start": 883,
                "end": 896,
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
                  "start": 883,
                  "end": 889,
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
                  "start": 891,
                  "end": 896,
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
                    "start": 891,
                    "end": 892,
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
                    "start": 895,
                    "end": 896,
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
            "start": 902,
            "end": 915,
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
              "start": 902,
              "end": 914,
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
                "start": 902,
                "end": 906,
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
                  "start": 907,
                  "end": 913,
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
            "start": 920,
            "end": 934,
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
              "start": 927,
              "end": 933,
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
      "start": 975,
      "end": 1062,
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
        "start": 984,
        "end": 992,
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
          "start": 993,
          "end": 994,
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
          "start": 995,
          "end": 996,
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
        "start": 997,
        "end": 1062,
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
            "start": 1003,
            "end": 1023,
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
                "start": 1009,
                "end": 1022,
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
                  "start": 1009,
                  "end": 1015,
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
                  "start": 1017,
                  "end": 1022,
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
                    "start": 1017,
                    "end": 1018,
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
                    "start": 1021,
                    "end": 1022,
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
            "start": 1028,
            "end": 1041,
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
              "start": 1028,
              "end": 1040,
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
                "start": 1028,
                "end": 1032,
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
                  "start": 1033,
                  "end": 1039,
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
            "start": 1046,
            "end": 1060,
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
              "start": 1053,
              "end": 1059,
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
          "start": 938,
          "end": 974,
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
      "start": 1076,
      "end": 1121,
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
        "start": 1085,
        "end": 1089,
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
          "start": 1090,
          "end": 1094,
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
        "start": 1095,
        "end": 1121,
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
            "start": 1101,
            "end": 1119,
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
              "start": 1101,
              "end": 1118,
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
                "start": 1101,
                "end": 1112,
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
                  "start": 1101,
                  "end": 1108,
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
                  "start": 1109,
                  "end": 1112,
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
                  "start": 1113,
                  "end": 1117,
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
          "start": 1064,
          "end": 1075,
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
      "start": 1123,
      "end": 1168,
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
        "start": 1132,
        "end": 1139,
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
        "start": 1142,
        "end": 1168,
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
            "start": 1146,
            "end": 1166,
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
              "start": 1146,
              "end": 1166,
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
                "start": 1146,
                "end": 1152,
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
                  "start": 1146,
                  "end": 1148,
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
                  "start": 1149,
                  "end": 1152,
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
                  "start": 1153,
                  "end": 1165,
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
                      "start": 1154,
                      "end": 1155,
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
                    "start": 1160,
                    "end": 1165,
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
                      "start": 1160,
                      "end": 1161,
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
                      "start": 1164,
                      "end": 1165,
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
      "start": 1171,
      "end": 1274,
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
        "start": 1180,
        "end": 1190,
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
        "start": 1193,
        "end": 1274,
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
            "start": 1197,
            "end": 1272,
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
              "start": 1197,
              "end": 1272,
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
                "start": 1197,
                "end": 1203,
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
                  "start": 1197,
                  "end": 1199,
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
                  "start": 1200,
                  "end": 1203,
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
                  "start": 1204,
                  "end": 1271,
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
                      "start": 1205,
                      "end": 1206,
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
                    "start": 1211,
                    "end": 1271,
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
                        "start": 1218,
                        "end": 1233,
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
                          "start": 1218,
                          "end": 1233,
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
                            "start": 1218,
                            "end": 1222,
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
                              "start": 1223,
                              "end": 1230,
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
                              "start": 1231,
                              "end": 1232,
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
                        "start": 1234,
                        "end": 1267,
                        "loc": {
                          "start": {
                            "line": 81,
                            "column": 0
                          },
                          "end": {
                            "line": 81,
                            "column": 33
                          }
                        },
                        "argument": {
                          "type": "TemplateLiteral",
                          "start": 1241,
                          "end": 1267,
                          "loc": {
                            "start": {
                              "line": 81,
                              "column": 7
                            },
                            "end": {
                              "line": 81,
                              "column": 33
                            }
                          },
                          "expressions": [
                            {
                              "type": "BinaryExpression",
                              "start": 1251,
                              "end": 1256,
                              "loc": {
                                "start": {
                                  "line": 81,
                                  "column": 17
                                },
                                "end": {
                                  "line": 81,
                                  "column": 22
                                }
                              },
                              "left": {
                                "type": "Literal",
                                "start": 1251,
                                "end": 1252,
                                "loc": {
                                  "start": {
                                    "line": 81,
                                    "column": 17
                                  },
                                  "end": {
                                    "line": 81,
                                    "column": 18
                                  }
                                },
                                "value": 2,
                                "raw": "2"
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "start": 1255,
                                "end": 1256,
                                "loc": {
                                  "start": {
                                    "line": 81,
                                    "column": 21
                                  },
                                  "end": {
                                    "line": 81,
                                    "column": 22
                                  }
                                },
                                "value": 4,
                                "raw": "4"
                              }
                            },
                            {
                              "type": "Identifier",
                              "start": 1264,
                              "end": 1265,
                              "loc": {
                                "start": {
                                  "line": 81,
                                  "column": 30
                                },
                                "end": {
                                  "line": 81,
                                  "column": 31
                                }
                              },
                              "name": "i"
                            }
                          ],
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 1242,
                              "end": 1249,
                              "loc": {
                                "start": {
                                  "line": 81,
                                  "column": 8
                                },
                                "end": {
                                  "line": 81,
                                  "column": 15
                                }
                              },
                              "value": {
                                "raw": "RESULT ",
                                "cooked": "RESULT "
                              },
                              "tail": false
                            },
                            {
                              "type": "TemplateElement",
                              "start": 1257,
                              "end": 1262,
                              "loc": {
                                "start": {
                                  "line": 81,
                                  "column": 23
                                },
                                "end": {
                                  "line": 81,
                                  "column": 28
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
                              "start": 1266,
                              "end": 1266,
                              "loc": {
                                "start": {
                                  "line": 81,
                                  "column": 32
                                },
                                "end": {
                                  "line": 81,
                                  "column": 32
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
