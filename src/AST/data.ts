//https://david.bonnet.cc/astring/demo/#function%20main()%7B%0A%20%20%20%20const%20n1=%202;%0A%20%20%20%20const%20n2=%204;%0A%20%20%20%20const%20logica=%20n1%20%3C%20n2;%0A%20%20%20%20if(logica)%7B%0A%20%20%20%20%20%20%20%20suma(n1,n2)%0A%20%20%20%20%7Delse%7B%0A%20%20%20%20%20%20%20%20resta%20(n1,n2)%0A%20%20%20%20%7D%0A%20%20%20%20console.log(%22hello%20word%22)%0A%20%20%20%20show(%22n1:%22+n1)%0A%20%20%20%20show(%22n2:%22+n2)%0A%20%20%20%20return%20%20n1%20+%20n2%0A%7D%0A%0A/*other%20function*/%0Amain();%0A%0Afunction%20suma(a,b)%7B%0A%20%20%20%20show(%20a%20+%20b%20)%0A%20%20%20%20return%20a%20+%20b;%0A%7D%0A%0Afunction%20resta(a,b)%7B%0A%20%20%20%20show(%20a%20-%20b%20)%0A%20%20%20%20return%20a%20-%20b;%0A%7D%0A%0A//this%20a%20comment%0Afunction%20show(data)%7B%0A%20%20%20%20console.log(data)%0A%7D

export const api= {
  "type": "Program",
  "start": 0,
  "end": 452,
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 32,
      "column": 1
    }
  },
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 242,
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
        "end": 242,
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
            "end": 33,
            "loc": {
              "start": {
                "line": 2,
                "column": 4
              },
              "end": {
                "line": 2,
                "column": 16
              }
            },
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 27,
                "end": 32,
                "loc": {
                  "start": {
                    "line": 2,
                    "column": 10
                  },
                  "end": {
                    "line": 2,
                    "column": 15
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
                  "end": 32,
                  "loc": {
                    "start": {
                      "line": 2,
                      "column": 14
                    },
                    "end": {
                      "line": 2,
                      "column": 15
                    }
                  },
                  "value": 2,
                  "raw": "2"
                }
              }
            ],
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 38,
            "end": 50,
            "loc": {
              "start": {
                "line": 3,
                "column": 4
              },
              "end": {
                "line": 3,
                "column": 16
              }
            },
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 44,
                "end": 49,
                "loc": {
                  "start": {
                    "line": 3,
                    "column": 10
                  },
                  "end": {
                    "line": 3,
                    "column": 15
                  }
                },
                "id": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 46,
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
                  "start": 48,
                  "end": 49,
                  "loc": {
                    "start": {
                      "line": 3,
                      "column": 14
                    },
                    "end": {
                      "line": 3,
                      "column": 15
                    }
                  },
                  "value": 4,
                  "raw": "4"
                }
              }
            ],
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 55,
            "end": 77,
            "loc": {
              "start": {
                "line": 4,
                "column": 4
              },
              "end": {
                "line": 4,
                "column": 26
              }
            },
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 61,
                "end": 76,
                "loc": {
                  "start": {
                    "line": 4,
                    "column": 10
                  },
                  "end": {
                    "line": 4,
                    "column": 25
                  }
                },
                "id": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 67,
                  "loc": {
                    "start": {
                      "line": 4,
                      "column": 10
                    },
                    "end": {
                      "line": 4,
                      "column": 16
                    }
                  },
                  "name": "logica"
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 69,
                  "end": 76,
                  "loc": {
                    "start": {
                      "line": 4,
                      "column": 18
                    },
                    "end": {
                      "line": 4,
                      "column": 25
                    }
                  },
                  "left": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 71,
                    "loc": {
                      "start": {
                        "line": 4,
                        "column": 18
                      },
                      "end": {
                        "line": 4,
                        "column": 20
                      }
                    },
                    "name": "n1"
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 76,
                    "loc": {
                      "start": {
                        "line": 4,
                        "column": 23
                      },
                      "end": {
                        "line": 4,
                        "column": 25
                      }
                    },
                    "name": "n2"
                  }
                }
              }
            ],
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 82,
            "end": 152,
            "loc": {
              "start": {
                "line": 5,
                "column": 4
              },
              "end": {
                "line": 9,
                "column": 5
              }
            },
            "test": {
              "type": "Identifier",
              "start": 85,
              "end": 91,
              "loc": {
                "start": {
                  "line": 5,
                  "column": 7
                },
                "end": {
                  "line": 5,
                  "column": 13
                }
              },
              "name": "logica"
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 92,
              "end": 119,
              "loc": {
                "start": {
                  "line": 5,
                  "column": 14
                },
                "end": {
                  "line": 7,
                  "column": 5
                }
              },
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 102,
                  "end": 113,
                  "loc": {
                    "start": {
                      "line": 6,
                      "column": 8
                    },
                    "end": {
                      "line": 6,
                      "column": 19
                    }
                  },
                  "expression": {
                    "type": "CallExpression",
                    "start": 102,
                    "end": 113,
                    "loc": {
                      "start": {
                        "line": 6,
                        "column": 8
                      },
                      "end": {
                        "line": 6,
                        "column": 19
                      }
                    },
                    "callee": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 106,
                      "loc": {
                        "start": {
                          "line": 6,
                          "column": 8
                        },
                        "end": {
                          "line": 6,
                          "column": 12
                        }
                      },
                      "name": "suma"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 107,
                        "end": 109,
                        "loc": {
                          "start": {
                            "line": 6,
                            "column": 13
                          },
                          "end": {
                            "line": 6,
                            "column": 15
                          }
                        },
                        "name": "n1"
                      },
                      {
                        "type": "Identifier",
                        "start": 110,
                        "end": 112,
                        "loc": {
                          "start": {
                            "line": 6,
                            "column": 16
                          },
                          "end": {
                            "line": 6,
                            "column": 18
                          }
                        },
                        "name": "n2"
                      }
                    ],
                    "optional": false
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 123,
              "end": 152,
              "loc": {
                "start": {
                  "line": 7,
                  "column": 9
                },
                "end": {
                  "line": 9,
                  "column": 5
                }
              },
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 133,
                  "end": 146,
                  "loc": {
                    "start": {
                      "line": 8,
                      "column": 8
                    },
                    "end": {
                      "line": 8,
                      "column": 21
                    }
                  },
                  "expression": {
                    "type": "CallExpression",
                    "start": 133,
                    "end": 146,
                    "loc": {
                      "start": {
                        "line": 8,
                        "column": 8
                      },
                      "end": {
                        "line": 8,
                        "column": 21
                      }
                    },
                    "callee": {
                      "type": "Identifier",
                      "start": 133,
                      "end": 138,
                      "loc": {
                        "start": {
                          "line": 8,
                          "column": 8
                        },
                        "end": {
                          "line": 8,
                          "column": 13
                        }
                      },
                      "name": "resta"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 140,
                        "end": 142,
                        "loc": {
                          "start": {
                            "line": 8,
                            "column": 15
                          },
                          "end": {
                            "line": 8,
                            "column": 17
                          }
                        },
                        "name": "n1"
                      },
                      {
                        "type": "Identifier",
                        "start": 143,
                        "end": 145,
                        "loc": {
                          "start": {
                            "line": 8,
                            "column": 18
                          },
                          "end": {
                            "line": 8,
                            "column": 20
                          }
                        },
                        "name": "n2"
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
            "start": 157,
            "end": 182,
            "loc": {
              "start": {
                "line": 10,
                "column": 4
              },
              "end": {
                "line": 10,
                "column": 29
              }
            },
            "expression": {
              "type": "CallExpression",
              "start": 157,
              "end": 182,
              "loc": {
                "start": {
                  "line": 10,
                  "column": 4
                },
                "end": {
                  "line": 10,
                  "column": 29
                }
              },
              "callee": {
                "type": "MemberExpression",
                "start": 157,
                "end": 168,
                "loc": {
                  "start": {
                    "line": 10,
                    "column": 4
                  },
                  "end": {
                    "line": 10,
                    "column": 15
                  }
                },
                "object": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 164,
                  "loc": {
                    "start": {
                      "line": 10,
                      "column": 4
                    },
                    "end": {
                      "line": 10,
                      "column": 11
                    }
                  },
                  "name": "console"
                },
                "property": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 168,
                  "loc": {
                    "start": {
                      "line": 10,
                      "column": 12
                    },
                    "end": {
                      "line": 10,
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
                  "type": "Literal",
                  "start": 169,
                  "end": 181,
                  "loc": {
                    "start": {
                      "line": 10,
                      "column": 16
                    },
                    "end": {
                      "line": 10,
                      "column": 28
                    }
                  },
                  "value": "hello word",
                  "raw": "\"hello word\""
                }
              ],
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 187,
            "end": 201,
            "loc": {
              "start": {
                "line": 11,
                "column": 4
              },
              "end": {
                "line": 11,
                "column": 18
              }
            },
            "expression": {
              "type": "CallExpression",
              "start": 187,
              "end": 201,
              "loc": {
                "start": {
                  "line": 11,
                  "column": 4
                },
                "end": {
                  "line": 11,
                  "column": 18
                }
              },
              "callee": {
                "type": "Identifier",
                "start": 187,
                "end": 191,
                "loc": {
                  "start": {
                    "line": 11,
                    "column": 4
                  },
                  "end": {
                    "line": 11,
                    "column": 8
                  }
                },
                "name": "show"
              },
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 192,
                  "end": 200,
                  "loc": {
                    "start": {
                      "line": 11,
                      "column": 9
                    },
                    "end": {
                      "line": 11,
                      "column": 17
                    }
                  },
                  "left": {
                    "type": "Literal",
                    "start": 192,
                    "end": 197,
                    "loc": {
                      "start": {
                        "line": 11,
                        "column": 9
                      },
                      "end": {
                        "line": 11,
                        "column": 14
                      }
                    },
                    "value": "n1:",
                    "raw": "\"n1:\""
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 200,
                    "loc": {
                      "start": {
                        "line": 11,
                        "column": 15
                      },
                      "end": {
                        "line": 11,
                        "column": 17
                      }
                    },
                    "name": "n1"
                  }
                }
              ],
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 206,
            "end": 220,
            "loc": {
              "start": {
                "line": 12,
                "column": 4
              },
              "end": {
                "line": 12,
                "column": 18
              }
            },
            "expression": {
              "type": "CallExpression",
              "start": 206,
              "end": 220,
              "loc": {
                "start": {
                  "line": 12,
                  "column": 4
                },
                "end": {
                  "line": 12,
                  "column": 18
                }
              },
              "callee": {
                "type": "Identifier",
                "start": 206,
                "end": 210,
                "loc": {
                  "start": {
                    "line": 12,
                    "column": 4
                  },
                  "end": {
                    "line": 12,
                    "column": 8
                  }
                },
                "name": "show"
              },
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 211,
                  "end": 219,
                  "loc": {
                    "start": {
                      "line": 12,
                      "column": 9
                    },
                    "end": {
                      "line": 12,
                      "column": 17
                    }
                  },
                  "left": {
                    "type": "Literal",
                    "start": 211,
                    "end": 216,
                    "loc": {
                      "start": {
                        "line": 12,
                        "column": 9
                      },
                      "end": {
                        "line": 12,
                        "column": 14
                      }
                    },
                    "value": "n2:",
                    "raw": "\"n2:\""
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 217,
                    "end": 219,
                    "loc": {
                      "start": {
                        "line": 12,
                        "column": 15
                      },
                      "end": {
                        "line": 12,
                        "column": 17
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
            "type": "ReturnStatement",
            "start": 225,
            "end": 240,
            "loc": {
              "start": {
                "line": 13,
                "column": 4
              },
              "end": {
                "line": 13,
                "column": 19
              }
            },
            "argument": {
              "type": "BinaryExpression",
              "start": 233,
              "end": 240,
              "loc": {
                "start": {
                  "line": 13,
                  "column": 12
                },
                "end": {
                  "line": 13,
                  "column": 19
                }
              },
              "left": {
                "type": "Identifier",
                "start": 233,
                "end": 235,
                "loc": {
                  "start": {
                    "line": 13,
                    "column": 12
                  },
                  "end": {
                    "line": 13,
                    "column": 14
                  }
                },
                "name": "n1"
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 238,
                "end": 240,
                "loc": {
                  "start": {
                    "line": 13,
                    "column": 17
                  },
                  "end": {
                    "line": 13,
                    "column": 19
                  }
                },
                "name": "n2"
              }
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 263,
      "end": 270,
      "loc": {
        "start": {
          "line": 17,
          "column": 0
        },
        "end": {
          "line": 17,
          "column": 7
        }
      },
      "expression": {
        "type": "CallExpression",
        "start": 263,
        "end": 269,
        "loc": {
          "start": {
            "line": 17,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 6
          }
        },
        "callee": {
          "type": "Identifier",
          "start": 263,
          "end": 267,
          "loc": {
            "start": {
              "line": 17,
              "column": 0
            },
            "end": {
              "line": 17,
              "column": 4
            }
          },
          "name": "main"
        },
        "arguments": [],
        "optional": false
      },
      "comments": [
        {
          "type": "Block",
          "value": "other function",
          "start": 244,
          "end": 262,
          "loc": {
            "start": {
              "line": 16,
              "column": 0
            },
            "end": {
              "line": 16,
              "column": 18
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 272,
      "end": 329,
      "loc": {
        "start": {
          "line": 19,
          "column": 0
        },
        "end": {
          "line": 22,
          "column": 1
        }
      },
      "id": {
        "type": "Identifier",
        "start": 281,
        "end": 285,
        "loc": {
          "start": {
            "line": 19,
            "column": 9
          },
          "end": {
            "line": 19,
            "column": 13
          }
        },
        "name": "suma"
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 286,
          "end": 287,
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
          "name": "a"
        },
        {
          "type": "Identifier",
          "start": 288,
          "end": 289,
          "loc": {
            "start": {
              "line": 19,
              "column": 16
            },
            "end": {
              "line": 19,
              "column": 17
            }
          },
          "name": "b"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 290,
        "end": 329,
        "loc": {
          "start": {
            "line": 19,
            "column": 18
          },
          "end": {
            "line": 22,
            "column": 1
          }
        },
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 296,
            "end": 309,
            "loc": {
              "start": {
                "line": 20,
                "column": 4
              },
              "end": {
                "line": 20,
                "column": 17
              }
            },
            "expression": {
              "type": "CallExpression",
              "start": 296,
              "end": 309,
              "loc": {
                "start": {
                  "line": 20,
                  "column": 4
                },
                "end": {
                  "line": 20,
                  "column": 17
                }
              },
              "callee": {
                "type": "Identifier",
                "start": 296,
                "end": 300,
                "loc": {
                  "start": {
                    "line": 20,
                    "column": 4
                  },
                  "end": {
                    "line": 20,
                    "column": 8
                  }
                },
                "name": "show"
              },
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 302,
                  "end": 307,
                  "loc": {
                    "start": {
                      "line": 20,
                      "column": 10
                    },
                    "end": {
                      "line": 20,
                      "column": 15
                    }
                  },
                  "left": {
                    "type": "Identifier",
                    "start": 302,
                    "end": 303,
                    "loc": {
                      "start": {
                        "line": 20,
                        "column": 10
                      },
                      "end": {
                        "line": 20,
                        "column": 11
                      }
                    },
                    "name": "a"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 306,
                    "end": 307,
                    "loc": {
                      "start": {
                        "line": 20,
                        "column": 14
                      },
                      "end": {
                        "line": 20,
                        "column": 15
                      }
                    },
                    "name": "b"
                  }
                }
              ],
              "optional": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 314,
            "end": 327,
            "loc": {
              "start": {
                "line": 21,
                "column": 4
              },
              "end": {
                "line": 21,
                "column": 17
              }
            },
            "argument": {
              "type": "BinaryExpression",
              "start": 321,
              "end": 326,
              "loc": {
                "start": {
                  "line": 21,
                  "column": 11
                },
                "end": {
                  "line": 21,
                  "column": 16
                }
              },
              "left": {
                "type": "Identifier",
                "start": 321,
                "end": 322,
                "loc": {
                  "start": {
                    "line": 21,
                    "column": 11
                  },
                  "end": {
                    "line": 21,
                    "column": 12
                  }
                },
                "name": "a"
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 325,
                "end": 326,
                "loc": {
                  "start": {
                    "line": 21,
                    "column": 15
                  },
                  "end": {
                    "line": 21,
                    "column": 16
                  }
                },
                "name": "b"
              }
            }
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 331,
      "end": 389,
      "loc": {
        "start": {
          "line": 24,
          "column": 0
        },
        "end": {
          "line": 27,
          "column": 1
        }
      },
      "id": {
        "type": "Identifier",
        "start": 340,
        "end": 345,
        "loc": {
          "start": {
            "line": 24,
            "column": 9
          },
          "end": {
            "line": 24,
            "column": 14
          }
        },
        "name": "resta"
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 346,
          "end": 347,
          "loc": {
            "start": {
              "line": 24,
              "column": 15
            },
            "end": {
              "line": 24,
              "column": 16
            }
          },
          "name": "a"
        },
        {
          "type": "Identifier",
          "start": 348,
          "end": 349,
          "loc": {
            "start": {
              "line": 24,
              "column": 17
            },
            "end": {
              "line": 24,
              "column": 18
            }
          },
          "name": "b"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 350,
        "end": 389,
        "loc": {
          "start": {
            "line": 24,
            "column": 19
          },
          "end": {
            "line": 27,
            "column": 1
          }
        },
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 356,
            "end": 369,
            "loc": {
              "start": {
                "line": 25,
                "column": 4
              },
              "end": {
                "line": 25,
                "column": 17
              }
            },
            "expression": {
              "type": "CallExpression",
              "start": 356,
              "end": 369,
              "loc": {
                "start": {
                  "line": 25,
                  "column": 4
                },
                "end": {
                  "line": 25,
                  "column": 17
                }
              },
              "callee": {
                "type": "Identifier",
                "start": 356,
                "end": 360,
                "loc": {
                  "start": {
                    "line": 25,
                    "column": 4
                  },
                  "end": {
                    "line": 25,
                    "column": 8
                  }
                },
                "name": "show"
              },
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 362,
                  "end": 367,
                  "loc": {
                    "start": {
                      "line": 25,
                      "column": 10
                    },
                    "end": {
                      "line": 25,
                      "column": 15
                    }
                  },
                  "left": {
                    "type": "Identifier",
                    "start": 362,
                    "end": 363,
                    "loc": {
                      "start": {
                        "line": 25,
                        "column": 10
                      },
                      "end": {
                        "line": 25,
                        "column": 11
                      }
                    },
                    "name": "a"
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "start": 366,
                    "end": 367,
                    "loc": {
                      "start": {
                        "line": 25,
                        "column": 14
                      },
                      "end": {
                        "line": 25,
                        "column": 15
                      }
                    },
                    "name": "b"
                  }
                }
              ],
              "optional": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 374,
            "end": 387,
            "loc": {
              "start": {
                "line": 26,
                "column": 4
              },
              "end": {
                "line": 26,
                "column": 17
              }
            },
            "argument": {
              "type": "BinaryExpression",
              "start": 381,
              "end": 386,
              "loc": {
                "start": {
                  "line": 26,
                  "column": 11
                },
                "end": {
                  "line": 26,
                  "column": 16
                }
              },
              "left": {
                "type": "Identifier",
                "start": 381,
                "end": 382,
                "loc": {
                  "start": {
                    "line": 26,
                    "column": 11
                  },
                  "end": {
                    "line": 26,
                    "column": 12
                  }
                },
                "name": "a"
              },
              "operator": "-",
              "right": {
                "type": "Identifier",
                "start": 385,
                "end": 386,
                "loc": {
                  "start": {
                    "line": 26,
                    "column": 15
                  },
                  "end": {
                    "line": 26,
                    "column": 16
                  }
                },
                "name": "b"
              }
            }
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 408,
      "end": 452,
      "loc": {
        "start": {
          "line": 30,
          "column": 0
        },
        "end": {
          "line": 32,
          "column": 1
        }
      },
      "id": {
        "type": "Identifier",
        "start": 417,
        "end": 421,
        "loc": {
          "start": {
            "line": 30,
            "column": 9
          },
          "end": {
            "line": 30,
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
          "start": 422,
          "end": 426,
          "loc": {
            "start": {
              "line": 30,
              "column": 14
            },
            "end": {
              "line": 30,
              "column": 18
            }
          },
          "name": "data"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 427,
        "end": 452,
        "loc": {
          "start": {
            "line": 30,
            "column": 19
          },
          "end": {
            "line": 32,
            "column": 1
          }
        },
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 433,
            "end": 450,
            "loc": {
              "start": {
                "line": 31,
                "column": 4
              },
              "end": {
                "line": 31,
                "column": 21
              }
            },
            "expression": {
              "type": "CallExpression",
              "start": 433,
              "end": 450,
              "loc": {
                "start": {
                  "line": 31,
                  "column": 4
                },
                "end": {
                  "line": 31,
                  "column": 21
                }
              },
              "callee": {
                "type": "MemberExpression",
                "start": 433,
                "end": 444,
                "loc": {
                  "start": {
                    "line": 31,
                    "column": 4
                  },
                  "end": {
                    "line": 31,
                    "column": 15
                  }
                },
                "object": {
                  "type": "Identifier",
                  "start": 433,
                  "end": 440,
                  "loc": {
                    "start": {
                      "line": 31,
                      "column": 4
                    },
                    "end": {
                      "line": 31,
                      "column": 11
                    }
                  },
                  "name": "console"
                },
                "property": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 444,
                  "loc": {
                    "start": {
                      "line": 31,
                      "column": 12
                    },
                    "end": {
                      "line": 31,
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
                  "start": 445,
                  "end": 449,
                  "loc": {
                    "start": {
                      "line": 31,
                      "column": 16
                    },
                    "end": {
                      "line": 31,
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
          "value": "this a comment",
          "start": 391,
          "end": 407,
          "loc": {
            "start": {
              "line": 29,
              "column": 0
            },
            "end": {
              "line": 29,
              "column": 16
            }
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
