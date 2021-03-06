define({ "api": [
  {
    "type": "post",
    "url": "/register",
    "title": "",
    "version": "1.0.0",
    "name": "Registra_um_usuario",
    "group": "Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-api-key",
            "description": "<p>75e8efc1-3858-4778-bafb-1a744b1da3b7</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>nome do usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>e-mail do usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "senha",
            "description": "<p>senha do usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "telefone",
            "description": "<p>telefone do usuario sem dd</p>"
          }
        ]
      }
    },
    "description": "<p>Essa API salva um usuario</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"statusCode\": 201,\n    \"message\": \"Created\",\n    \"users\": {\n        \"id\": 1,\n        \"nome\": \"example\",\n        \"mail\": \"example@hotmail.com\",\n        \"senha\": \"$a6541/asa664\"  \n        \"telefone\": 169894,\n     },\n     \"location\": \"https://example.com/users/1\"  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"statusCode\": 400,\n    \"message\": \"bad request\",\n    \"totalErrors\": 2,\n        \"errors\": [\n             {\n                 \"field\": \"mail\",\n                 \"message\": \"Campo Vazio, Por Favor Preencha o Campo E-Mail\"\n             },\n             {\n                 \"field\": \"mail\",\n                 \"message\": \"Campo Invalido,Por Favor Digite um E-mail Valido\"\n             }\n         ]\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/confirm",
    "title": "",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-api-key",
            "description": "<p>75e8efc1-3858-4778-bafb-1a744b1da3b7</p>"
          }
        ]
      }
    },
    "name": "autentica_um_usuario",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>e-mail do usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "senha",
            "description": "<p>senha do usuario</p>"
          }
        ]
      }
    },
    "description": "<p>Essa API autentica o usuario</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok \n{\n  \"statusCode\": 200,\n  \"message\": \"Ok\",\n  \"auth\": true,\n  \"mail\": \"example@hotmail.com\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unautorized\n{\n   \"statusCode\": 401,\n   \"message\": \"Unautorized\",\n   \"auth\": false\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"message\": \"Internal Server Error\",\n   \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "delete",
    "url": "/avaliacoes/:id",
    "title": "",
    "group": "Avalia????es",
    "version": "1.0.0",
    "description": "<p>essa API deleta um registro da tabela avalia??oes</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-api-key",
            "description": "<p>75e8efc1-3858-4778-bafb-1a744b1da3b7</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>chave primaria da tabela avaliacoes</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Reponse:",
          "content": "HTTP/1.1 200 Ok{\n   \"statusCode\": 200,\n   \"message\": \"Ok\",\n   \"recordDeleted\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"statusCode\": 404,\n   \"messsage\": \"Not Found\",\n   \"recordDeleted\": 0  \n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unautorized\n{\n   \"statusCode\": 401,\n   \"message\": \"Unautorized\",\n   \"auth\": false\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/avaliacao.js",
    "groupTitle": "Avalia????es",
    "name": "DeleteAvaliacoesId"
  },
  {
    "type": "get",
    "url": "/avaliacoes",
    "title": "",
    "group": "Avalia????es",
    "version": "1.0.0",
    "description": "<p>essa API listapidoc -i ./routes -o public/apidoca registros da tabela de avalia??oes</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-api-key",
            "description": "<p>75e8efc1-3858-4778-bafb-1a744b1da3b7</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Reponse:",
          "content": "HTTP/1.1 200 Ok{\n   \"statusCode\": 200,\n   \"message\": \"Ok\",\n   \"totalResults\": 1,\n   \"avaliacao\": [\n      {\n       \"id\": 3,\n       \"nota\": 10,\n       \"feedback\": \"Muito bom\",\n       \"recomendacao\": true,\n       \"services_id\": 4,\n       \"services\": {\n           \"id\": 4,\n           \"titulo\": \"asa\",\n           \"descricao\": \"asa\",\n           \"valor\": \"111.00\",\n           \"disponibilidade\": true,\n           \"categorias_id\": 1,\n           \"user_id\": 1\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"statusCode\": 404,\n   \"messsage\": \"Not Found\",\n   \"totalResults\":0   \n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unautorized\n{\n   \"statusCode\": 401,\n   \"message\": \"Unautorized\",\n   \"auth\": false\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 500 Internal Server Error\n  {\n      \"message\": \"Internal Server Error\",\n      \"statusCode\": 500\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/avaliacao.js",
    "groupTitle": "Avalia????es",
    "name": "GetAvaliacoes"
  },
  {
    "type": "get",
    "url": "/avaliacoes/:id",
    "title": "",
    "group": "Avalia????es",
    "version": "1.0.0",
    "description": "<p>essa API busca um registro da tabela avaliacao</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-api-key",
            "description": "<p>75e8efc1-3858-4778-bafb-1a744b1da3b7</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>chave primaria do servi??o</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Reponse:",
          "content": "HTTP/1.1 200 Ok{\n   \"statusCode\": 200,\n   \"message\": \"ok\",\n   \"totalResults\": 1,\n   \"avaliacao\": {\n      \"id\": 3,\n      \"nota\": 10,\n      \"feedback\": \"Muito bom\",\n      \"recomendacao\": true,\n      \"services_id\": 4,\n   \"services\": {\n       \"id\": 4,\n       \"titulo\": \"asa\",\n       \"descricao\": \"asa\",\n       \"valor\": \"111.00\",\n       \"disponibilidade\": true,\n       \"categorias_id\": 1,\n       \"user_id\": 1\n   }\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"statusCode\": 404,\n   \"messsage\": \"Not Found\",\n   \"totalResults\":0   \n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unautorized\n{\n   \"statusCode\": 401,\n   \"message\": \"Unautorized\",\n   \"auth\": false\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/avaliacao.js",
    "groupTitle": "Avalia????es",
    "name": "GetAvaliacoesId"
  },
  {
    "type": "post",
    "url": "/avaliacoes",
    "title": "",
    "group": "Avalia????es",
    "version": "1.0.0",
    "description": "<p>essa api salva um registro na tabela de avalia????es</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-api-key",
            "description": "<p>75e8efc1-3858-4778-bafb-1a744b1da3b7</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nota",
            "description": "<p>esse campo ?? a nota do servi??o</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "feedback",
            "description": "<p>comentario sobre o servi??o</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "recomendacao",
            "description": "<p>recomedaria ou nao true ou false</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "services_id",
            "description": "<p>chave primearia da tabela de servi??os</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created{\n   \"statusCode\": 201,\n   \"message\": \"Created\",\n   \"avaliacao\": {\n      \"id\": 4,\n      \"nota\": 8,\n      \"feedback\": \"Bom\",\n      \"recomendacao\": true,\n      \"services_id\": 4\n    },\n      \"location\": \"http://localhost:3333/avaliacoes/4\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"statusCode\": 400,\n   \"message\": \"Bad Request\",\n   \"totalErros\": 2,\n   \"errors\":[\n      {\n         \"field\": \"tipo\",\n         \"message\": \"Campo Vazio, Por favor preencha o campo tipo\"\n      }\n      {\n         \"field\": \"descricao\",\n         \"message\": \"Campo Vazio, Por favor preencha o campo descricao\"\n      }\n   ]       \n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unautorized\n{\n   \"statusCode\": 401,\n   \"message\": \"Unautorized\",\n   \"auth\": false\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/avaliacao.js",
    "groupTitle": "Avalia????es",
    "name": "PostAvaliacoes"
  },
  {
    "type": "put",
    "url": "/avaliacoes/:id",
    "title": "",
    "group": "Avalia????es",
    "version": "1.0.0",
    "description": "<p>essa api atualiza um registro na tabela de avalia????es</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-api-key",
            "description": "<p>75e8efc1-3858-4778-bafb-1a744b1da3b7</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "nota",
            "description": "<p>esse campo ?? a nota do servi??o</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>chave primaria da tabela avaliacao</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "feedback",
            "description": "<p>comentario sobre o servi??o</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "recomendacao",
            "description": "<p>recomedaria ou nao true ou false</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "services_id",
            "description": "<p>chave primearia da tabela de servi??os</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Ok{\n   \"statusCode\": 200,\n   \"message\": \"ok\",\n   \"location\": \"http://localhost:3333/avaliacoes/3\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"statusCode\": 400,\n   \"message\": \"Bad Request\",\n   \"totalErros\": 2,\n   \"errors\":[\n      {\n         \"field\": \"tipo\",\n         \"message\": \"Campo Vazio, Por favor preencha o campo tipo\"\n      }\n      {\n         \"field\": \"descricao\",\n         \"message\": \"Campo Vazio, Por favor preencha o campo descricao\"\n      }\n   ]       \n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unautorized\n{\n   \"statusCode\": 401,\n   \"message\": \"Unautorized\",\n   \"auth\": false\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/avaliacao.js",
    "groupTitle": "Avalia????es",
    "name": "PutAvaliacoesId"
  },
  {
    "type": "delete",
    "url": "/categorias/:id",
    "title": "",
    "group": "Categorias",
    "version": "1.0.0",
    "description": "<p>essa API deleta um registro da tabela categorias</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-api-key",
            "description": "<p>75e8efc1-3858-4778-bafb-1a744b1da3b7</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>chave primaria da tabela categorias</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Reponse:",
          "content": "HTTP/1.1 200 Ok{\n   \"statusCode\": 200,\n   \"message\": \"Ok\",\n   \"recordDeleted\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"statusCode\": 404,\n   \"messsage\": \"Not Found\",\n   \"recordDeleted\": 0  \n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unautorized\n{\n   \"statusCode\": 401,\n   \"message\": \"Unautorized\",\n   \"auth\": false\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/categoria.js",
    "groupTitle": "Categorias",
    "name": "DeleteCategoriasId"
  },
  {
    "type": "get",
    "url": "/categorias",
    "title": "",
    "group": "Categorias",
    "version": "1.0.0",
    "description": "<p>essa API lista registros da tabela de categorias</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-api-key",
            "description": "<p>75e8efc1-3858-4778-bafb-1a744b1da3b7</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Reponse:",
          "content": "HTTP/1.1 200 Ok{\n   \"statusCode\": 200,\n   \"message\": \"Ok\",\n   \"totalResults\": 2,\n   \"categories\": [\n       {\n          \"id\": 3,\n          \"tipo\": \"Encanador\",\n          \"descricao\": \"porfisional que cria e mantem rede de esgoto\",\n         \n      },\n      {\n          \"id\": 4,\n          \"tipo\": \"Eletricista\",\n          \"descricao\": \"profisional responsavel pela redes eletricas\",\n     \n      },\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"statusCode\": 404,\n   \"messsage\": \"Not Found\",\n   \"totalResults\":0   \n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unautorized\n{\n   \"statusCode\": 401,\n   \"message\": \"Unautorized\",\n   \"auth\": false\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/categoria.js",
    "groupTitle": "Categorias",
    "name": "GetCategorias"
  },
  {
    "type": "get",
    "url": "/categorias/:id",
    "title": "",
    "group": "Categorias",
    "version": "1.0.0",
    "description": "<p>essa API busca um registro da tabela categorias</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-api-key",
            "description": "<p>75e8efc1-3858-4778-bafb-1a744b1da3b7</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>chave primaria da tabela categorias</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Reponse:",
          "content": "HTTP/1.1 200 Ok{\n   \"statusCode\": 200,\n   \"message\": \"Ok\",\n   \"totalResults\": 1,\n   \"categories\":{\n      \"id\": 3,\n      \"tipo\": \"Encanador\",\n      \"descricao\": \"porfisional que cria e mantem rede de esgoto\",\n   },\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"statusCode\": 404,\n   \"messsage\": \"Not Found\",\n   \"totalResults\":0   \n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unautorized\n{\n   \"statusCode\": 401,\n   \"message\": \"Unautorized\",\n   \"auth\": false\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/categoria.js",
    "groupTitle": "Categorias",
    "name": "GetCategoriasId"
  },
  {
    "type": "post",
    "url": "/categorias",
    "title": "",
    "group": "Categorias",
    "version": "1.0.0",
    "description": "<p>essa api salva um registro na tabela de categorias de servi??o</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-api-key",
            "description": "<p>75e8efc1-3858-4778-bafb-1a744b1da3b7</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipo",
            "description": "<p>esse campo ?? a fun????o do servi??o</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descricao",
            "description": "<p>descreve o tipo de fun????o da categoria</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created{\n  \"statusCode\": 201,\n  \"message\": \"Created\",\n  \"categorias\":{\n     \"id\": 4,\n     \"tipo\": \"Encanador\",\n     \"descricao\": \"Encanador e o profissional que instala e mantem a rede de esgoto\"  \n  }    \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"statusCode\": 400,\n   \"message\": \"Bad Request\",\n   \"totalErros\": 2,\n   \"errors\":[\n      {\n         \"field\": \"tipo\",\n         \"message\": \"Campo Vazio, Por favor preencha o campo tipo\"\n      }\n      {\n         \"field\": \"descricao\",\n         \"message\": \"Campo Vazio, Por favor preencha o campo descricao\"\n      }\n   ]       \n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unautorized\n{\n   \"statusCode\": 401,\n   \"message\": \"Unautorized\",\n   \"auth\": false\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/categoria.js",
    "groupTitle": "Categorias",
    "name": "PostCategorias"
  },
  {
    "type": "put",
    "url": "/categorias/:id",
    "title": "",
    "group": "Categorias",
    "version": "1.0.0",
    "description": "<p>essa API atualiza um registro na tabela de categorias</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-api-key",
            "description": "<p>75e8efc1-3858-4778-bafb-1a744b1da3b7</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>chave primaria da tabela categorias</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipo",
            "description": "<p>esse campo ?? a fun????o do servi??o</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descricao",
            "description": "<p>descreve o tipo de fun????o</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Reponse:",
          "content": "HTTP/1.1 200 Ok{\n   \"statusCode\": 200,\n   \"message\": \"Ok\",\n   \"location\": \"http://localhost:3333/categorias/3\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"statusCode\": 400,\n   \"message\": \"Bad Request\",\n   \"totalErros\": 2,\n   \"errors\":[\n      {\n         \"field\": \"tipo\",\n         \"message\": \"Campo Vazio, Por favor preencha o campo tipo\"\n      }\n      {\n         \"field\": \"descricao\",\n         \"message\": \"Campo Vazio, Por favor preencha o campo descricao\"\n      }\n   ]       \n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"statusCode\": 404,\n   \"messsage\": \"Not Found\",\n   \"totalResults\":0   \n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unautorized\n{\n   \"statusCode\": 401,\n   \"message\": \"Unautorized\",\n   \"auth\": false\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/categoria.js",
    "groupTitle": "Categorias",
    "name": "PutCategoriasId"
  },
  {
    "type": "get",
    "url": "/service/filter/categoria",
    "title": "",
    "group": "Filter",
    "version": "1.0.0",
    "description": "<p>essa API lista registros de servi??os pelo sua categoria</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-api-key",
            "description": "<p>75e8efc1-3858-4778-bafb-1a744b1da3b7</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipo",
            "description": "<p>esse campo sera informado a categoria do servi??o</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Reponse:",
          "content": " HTTP/1.1 200 Ok{\n    \"statusCode\": 200,\n    \"message\": \"Ok\",\n    \"totalResults\": 1,\n    \"service\": [\n       {\n        \"id\": 7,\n        \"titulo\": \"asas\",\n        \"descricao\": \"asa\",\n        \"valor\": \"12.00\",\n        \"disponibilidade\": true,\n        \"user\": {\n            \"id\": 1,\n            \"nome\": \"Sergio Moro\",\n            \"mail\": \"sergiomoro@hotmail.com\",\n            \"telefone\": 123456789\n        },\n       \"categorias\": {\n            \"id\": 1,\n            \"tipo\": \"Encanador\",\n            \"descricao\": \"profissional responsavel por instalar canos e fazer manuten??ao de esgoto\"\n        }\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"statusCode\": 404,\n   \"messsage\": \"Not Found\",\n   \"totalResults\":0   \n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unautorized\n{\n   \"statusCode\": 401,\n   \"message\": \"Unautorized\",\n   \"auth\": false\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/filterService.js",
    "groupTitle": "Filter",
    "name": "GetServiceFilterCategoria"
  },
  {
    "type": "get",
    "url": "/service/filter/descricao",
    "title": "",
    "group": "Filter",
    "version": "1.0.0",
    "description": "<p>essa API lista registros de servi??os pela descri????o</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-api-key",
            "description": "<p>75e8efc1-3858-4778-bafb-1a744b1da3b7</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descricao",
            "description": "<p>esse campo sera informado a descri????o</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Reponse:",
          "content": " HTTP/1.1 200 Ok{\n    \"statusCode\": 200,\n    \"message\": \"Ok\",\n    \"totalResults\": 1,\n    \"service\": [\n       {\n        \"id\": 7,\n        \"titulo\": \"asas\",\n        \"descricao\": \"asa\",\n        \"valor\": \"12.00\",\n        \"disponibilidade\": true,\n        \"user\": {\n            \"id\": 1,\n            \"nome\": \"Sergio Moro\",\n            \"mail\": \"sergiomoro@hotmail.com\",\n            \"telefone\": 123456789\n        },\n       \"categorias\": {\n            \"id\": 1,\n            \"tipo\": \"Encanador\",\n            \"descricao\": \"profissional responsavel por instalar canos e fazer manuten??ao de esgoto\"\n        }\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"statusCode\": 404,\n   \"messsage\": \"Not Found\",\n   \"totalResults\":0   \n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unautorized\n{\n   \"statusCode\": 401,\n   \"message\": \"Unautorized\",\n   \"auth\": false\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/filterService.js",
    "groupTitle": "Filter",
    "name": "GetServiceFilterDescricao"
  },
  {
    "type": "get",
    "url": "/service/filter/disponibilidade",
    "title": "",
    "group": "Filter",
    "version": "1.0.0",
    "description": "<p>essa API lista registros de servi??os pela sua disponiblidade</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-api-key",
            "description": "<p>75e8efc1-3858-4778-bafb-1a744b1da3b7</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "disponibilidade",
            "description": "<p>esse campo sera informado a disponibilidade do servi??o</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Reponse:",
          "content": " HTTP/1.1 200 Ok{\n    \"statusCode\": 200,\n    \"message\": \"Ok\",\n    \"totalResults\": 1,\n    \"service\": [\n       {\n        \"id\": 7,\n        \"titulo\": \"asas\",\n        \"descricao\": \"asa\",\n        \"valor\": \"12.00\",\n        \"disponibilidade\": true,\n        \"user\": {\n            \"id\": 1,\n            \"nome\": \"Sergio Moro\",\n            \"mail\": \"sergiomoro@hotmail.com\",\n            \"telefone\": 123456789\n        },\n       \"categorias\": {\n            \"id\": 1,\n            \"tipo\": \"Encanador\",\n            \"descricao\": \"profissional responsavel por instalar canos e fazer manuten??ao de esgoto\"\n        }\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"statusCode\": 404,\n   \"messsage\": \"Not Found\",\n   \"totalResults\":0   \n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unautorized\n{\n   \"statusCode\": 401,\n   \"message\": \"Unautorized\",\n   \"auth\": false\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/filterService.js",
    "groupTitle": "Filter",
    "name": "GetServiceFilterDisponibilidade"
  },
  {
    "type": "get",
    "url": "/service/filter/valor",
    "title": "",
    "group": "Filter",
    "version": "1.0.0",
    "description": "<p>essa API lista registros de servi??os pelo seu valor</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-api-key",
            "description": "<p>75e8efc1-3858-4778-bafb-1a744b1da3b7</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "valor",
            "description": "<p>esse campo sera informado o valor do servi??o</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Reponse:",
          "content": " HTTP/1.1 200 Ok{\n    \"statusCode\": 200,\n    \"message\": \"Ok\",\n    \"totalResults\": 1,\n    \"service\": [\n       {\n        \"id\": 7,\n        \"titulo\": \"asas\",\n        \"descricao\": \"asa\",\n        \"valor\": \"12.00\",\n        \"disponibilidade\": true,\n        \"user\": {\n            \"id\": 1,\n            \"nome\": \"Sergio Moro\",\n            \"mail\": \"sergiomoro@hotmail.com\",\n            \"telefone\": 123456789\n        },\n       \"categorias\": {\n            \"id\": 1,\n            \"tipo\": \"Encanador\",\n            \"descricao\": \"profissional responsavel por instalar canos e fazer manuten??ao de esgoto\"\n        }\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"statusCode\": 404,\n   \"messsage\": \"Not Found\",\n   \"totalResults\":0   \n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unautorized\n{\n   \"statusCode\": 401,\n   \"message\": \"Unautorized\",\n   \"auth\": false\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/filterService.js",
    "groupTitle": "Filter",
    "name": "GetServiceFilterValor"
  },
  {
    "type": "delete",
    "url": "/services/:id",
    "title": "",
    "group": "Servi??os",
    "version": "1.0.0",
    "description": "<p>essa API deleta registro da tabela de servi??o</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-api-key",
            "description": "<p>75e8efc1-3858-4778-bafb-1a744b1da3b7</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>chave primaria da tabela servi??os</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Reponse:",
          "content": "HTTP/1.1 200 Ok{\n   \"statusCode\": 200,\n   \"message\": \"Ok\",\n   \"recordDeleted\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"statusCode\": 404,\n   \"messsage\": \"Not Found\",\n   \"recordDeleted\": 0  \n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unautorized\n{\n   \"statusCode\": 401,\n   \"message\": \"Unautorized\",\n   \"auth\": false\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/services.js",
    "groupTitle": "Servi??os",
    "name": "DeleteServicesId"
  },
  {
    "type": "get",
    "url": "/services",
    "title": "",
    "group": "Servi??os",
    "version": "1.0.0",
    "description": "<p>essa API lista registros de servios</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-api-key",
            "description": "<p>75e8efc1-3858-4778-bafb-1a744b1da3b7</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Reponse:",
          "content": " HTTP/1.1 200 Ok{\n    \"statusCode\": 200,\n    \"message\": \"Ok\",\n    \"totalResults\": 2,\n     \"service\": [\n    {\n        \"id\": 1,\n        \"titulo\": \"manuten????o em encanamento hidraulico\",\n        \"descricao\": \"cano\",\n        \"valor\": \"20000.00\",\n        \"disponibilidade\": false,\n        \"user\": {\n            \"id\": 1,\n            \"nome\": \"leopoldo\",\n            \"mail\": \"lopoldo@hotmail.com\",\n            \"telefone\": 123456789\n        },\n        \"categorias\": {\n            \"id\": 1,\n            \"tipo\": \"Encanador\",\n            \"descricao\": \"profissional responsavel por instalar canos e fazer manuten??ao de esgoto\"\n        }\n    }\n]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"statusCode\": 404,\n   \"messsage\": \"Not Found\",\n   \"totalResults\":0   \n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unautorized\n{\n   \"statusCode\": 401,\n   \"message\": \"Unautorized\",\n   \"auth\": false\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/services.js",
    "groupTitle": "Servi??os",
    "name": "GetServices"
  },
  {
    "type": "get",
    "url": "/services/:id",
    "title": "",
    "group": "Servi??os",
    "version": "1.0.0",
    "description": "<p>essa API busca registros de servi??o</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-api-key",
            "description": "<p>75e8efc1-3858-4778-bafb-1a744b1da3b7</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>chave primaria</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Reponse:",
          "content": " HTTP/1.1 200 Ok {\n   \"statusCode\": 200,\n   \"message\": \"Ok\",\n   \"totalResults\": 1,\n   \"service\": {\n   \"id\": 1,\n   \"titulo\": \"manuten????o em encanamento hidraulico\",\n   \"descricao\": \"cano\",\n   \"valor\": \"20000.00\",\n   \"disponibilidade\": false,\n   \"user\": {\n        \"id\": 1,\n        \"nome\": \"leopoldo\",\n        \"mail\": \"lopoldo@hotmail.com\",\n        \"telefone\": 123456789\n    },\n    \"categorias\": {\n        \"id\": 1,\n        \"tipo\": \"Encanador\",\n        \"descricao\": \"profissional responsavel por instalar canos e fazer manuten??ao de esgoto\"\n    }\n}\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"statusCode\": 404,\n   \"messsage\": \"Not Found\",\n   \"totalResults\":0   \n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unautorized\n{\n   \"statusCode\": 401,\n   \"message\": \"Unautorized\",\n   \"auth\": false\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/services.js",
    "groupTitle": "Servi??os",
    "name": "GetServicesId"
  },
  {
    "type": "post",
    "url": "/services",
    "title": "",
    "group": "Servi??os",
    "version": "1.0.0",
    "description": "<p>essa api salva um registro de servi??o</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-api-key",
            "description": "<p>75e8efc1-3858-4778-bafb-1a744b1da3b7</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "titulo",
            "description": "<p>titulo do anuncio</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descricao",
            "description": "<p>descricao do anuncio</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "valor",
            "description": "<p>valor da mao de obra</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "disponibilidade",
            "description": "<p>disponivel retorna true se sim e false se nao</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "categorias_id",
            "description": "<p>chave primaria da categoria</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>chave primaria de usuario</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 201 Created{\n   \"statusCode\": 201,\n   \"message\": \"Created\",\n   \"services\": {\n      \"id\": 5,\n       \"titulo\": \"Reparo de bomba da agua\",\n       \"descricao\": \"realizo instala????es e reparo em equipamento de bom da agua\",\n       \"valor\": \"10000.00\",\n       \"disponibilidade\": true,\n       \"categorias_id\": 1,\n       \"user_id\": 1\n},\n\"location\": \"http://localhost:3333/services/5\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 400 Bad Request\n {\n     \"statusCode\": 400,\n     \"message\": \"bad request\",\n     \"totalErrors\": 2,\n     \"errors\": [\n        {\n           \"field\": \"titulo\",\n           \"message\": \"Campo Vazio, por favor preencha o campo de titulo\"\n        },\n        {\n           \"field\": \"valor\",\n           \"message\": \"Campo Invalido, Por Favor Digite Somente Numeros em valor\"\n        }\n]\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unautorized\n{\n   \"statusCode\": 401,\n   \"message\": \"Unautorized\",\n   \"auth\": false\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/services.js",
    "groupTitle": "Servi??os",
    "name": "PostServices"
  },
  {
    "type": "put",
    "url": "/services/:id",
    "title": "",
    "group": "Servi??os",
    "version": "1.0.0",
    "description": "<p>essa api atualiza um registro de servi??o</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-api-key",
            "description": "<p>75e8efc1-3858-4778-bafb-1a744b1da3b7</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>chave primaria do servi??o</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "titulo",
            "description": "<p>titulo do anuncio</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descricao",
            "description": "<p>descricao do anuncio</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "valor",
            "description": "<p>valor da mao de obra</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "disponibilidade",
            "description": "<p>disponivel retorna true se sim e false se nao</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "categorias_id",
            "description": "<p>chave primaria da categoria</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>chave primaria de usuario</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 201 Ok{\n   \"statusCode\": 201,\n   \"message\": \"Ok\",\n   \"services\": {\n      \"id\": 5,\n       \"titulo\": \"Reparo de bomba da agua\",\n       \"descricao\": \"realizo instala????es e reparo em equipamento de bom da agua\",\n       \"valor\": \"500.00\",\n       \"disponibilidade\": false,\n       \"categorias_id\": 1,\n       \"user_id\": 1\n},\n\"location\": \"http://localhost:3333/services/5\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 400 Bad Request\n {\n     \"statusCode\": 400,\n     \"message\": \"bad request\",\n     \"totalErrors\": 2,\n     \"errors\": [\n        {\n           \"field\": \"titulo\",\n           \"message\": \"Campo Vazio, por favor preencha o campo de titulo\"\n        },\n        {\n           \"field\": \"valor\",\n           \"message\": \"Campo Invalido, Por Favor Digite Somente Numeros em valor\"\n        }\n]\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unautorized\n{\n   \"statusCode\": 401,\n   \"message\": \"Unautorized\",\n   \"auth\": false\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/services.js",
    "groupTitle": "Servi??os",
    "name": "PutServicesId"
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-api-key",
            "description": "<p>75e8efc1-3858-4778-bafb-1a744b1da3b7</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Atualizar_um_usuario",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id do usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>E-mail do usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "senha",
            "description": "<p>senha do usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "telefone",
            "description": "<p>telefone do usuario</p>"
          }
        ]
      }
    },
    "group": "Usuario",
    "description": "<p>Essa API atualiza um registro na tabela usuario</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n    \"statusCode\": 200,\n    \"message\": \"Ok\",\n    \"location\": \"https://example/users/1\"      \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"statusCode\": 404,\n    \"message\": \"not found\",\n    \"totalResult\": 0  \n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"statusCode\": 400,\n    \"message\": \"bad request\",\n    \"totalErrors\": 4,\n        \"errors\": [{\n             \"field\": \"nome\",\n             \"message\": \"Campo Vazio, Por Favor Preencha o Campo Nome\"\n         },\n             \"field\": \"mail\",\n             \"message\": \"Campo Vazio, Por Favor Preencha o Campo E-Mail\"\n         },\n         {\n             \"field\": \"mail\",\n             \"message\": \"Campo Invalido,Por Favor Digite um E-mail Valido\"\n         }\n      ]\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unautorized\n{\n   \"statusCode\": 401,\n   \"message\": \"Unautorized\",\n   \"auth\": false\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Usuario"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-api-key",
            "description": "<p>75e8efc1-3858-4778-bafb-1a744b1da3b7</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "busca_um_usuario_por_seu_id_da_tabela",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id da tabela de usuario</p>"
          }
        ]
      }
    },
    "group": "Usuario",
    "description": "<p>Essa API lista registros da tabela usuario seu id informado</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"statusCode\": 200,\n    \"message\": \"Ok\",\n    \"totalResults\": 1,\n    \"users\":{\n        \"id\": 1,\n        \"nome\": \"example\",\n        \"mail\": \"example@hotmail.com\",\n    }       \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"statusCode\": 404,\n    \"message\": \"not found\",\n    \"totalResults\": 0,\n    \"users\":{\n       \n    }\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unautorized\n{\n   \"statusCode\": 401,\n   \"message\": \"Unautorized\",\n   \"auth\": false\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Usuario"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-api-key",
            "description": "<p>75e8efc1-3858-4778-bafb-1a744b1da3b7</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "listagem_de_registro_da_tabela_usuarios",
    "group": "Usuario",
    "description": "<p>Essa API lista registros da tabela de usuario</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"statusCode\": 200,\n    \"message\": \"Ok\",\n    \"totalResults\": 2,\n    \"users\":[{\n         \"id\": 1,\n         \"nome\": \"example\",\n         \"mail\": \"example@hotmail.com\",\n         \"telefone\": 123456\n            \n     },\n     {\n         \"id\": 2,\n         \"nome\": \"example2\",\n         \"mail\": \"example2@hotmail.com\",\n         \"telefone\": 149867 \n        \n     }]       \n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"statusCode\": 404,\n    \"message\": \"not found\",\n    \"totalResults\": 0,\n    \"users\":[\n         {}\n     ]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unautorized\n{\n   \"statusCode\": 401,\n   \"message\": \"Unautorized\",\n   \"auth\": false\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Usuario"
  }
] });
