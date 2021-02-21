define({ "api": [
  {
    "type": "post",
    "url": "/login",
    "title": "User Login",
    "name": "userLogin",
    "group": "Auth",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email id of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\" : \"somebody@example.com\",\n    \"password\" : \"supersecurepassword\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\" : false,\n    \"message\" : \"User Authenticated\",\n    \"token\" : \"asd.sdf.asw\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx|5xx": [
          {
            "group": "4xx|5xx",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": ""
          },
          {
            "group": "4xx|5xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/rest/auth/login.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/v1/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "/signup",
    "title": "User Signup",
    "name": "userSignup",
    "group": "Auth",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Full name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone number of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email id of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "image",
            "description": "<p>Profile image of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\" : \"somebody@example.com\",\n    \"password\" : \"supersecurepassword\",\n    \"phone\" : \"9038549891\",\n    \"name\" : \"Indrajit Roy\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\" : false,\n    \"message\" : \"User created successfully\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx|5xx": [
          {
            "group": "4xx|5xx",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": ""
          },
          {
            "group": "4xx|5xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/rest/auth/signup.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/v1/signup"
      }
    ]
  },
  {
    "type": "post",
    "url": "/post",
    "title": "Create a new post",
    "name": "postCreate",
    "group": "Posts",
    "version": "1.0.0",
    "permission": [
      {
        "name": "users"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The <code>token</code> which was generated at the time of login. Example: <code>Bearer &lt;token&gt;</code></p>"
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
            "field": "email",
            "description": "<p>Email id of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\" : \"somebody@example.com\",\n    \"password\" : \"supersecurepassword\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "posts",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\" : false,\n    \"message\" : \"User Authenticated\",\n    \"token\" : \"asd.sdf.asw\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx|5xx": [
          {
            "group": "4xx|5xx",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": ""
          },
          {
            "group": "4xx|5xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/rest/posts.js",
    "groupTitle": "Posts",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/v1/post"
      }
    ]
  },
  {
    "type": "get",
    "url": "/post/:id",
    "title": "Post Details",
    "name": "postDetails",
    "group": "Posts",
    "version": "1.0.0",
    "permission": [
      {
        "name": "users"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The <code>token</code> which was generated at the time of login. Example: <code>Bearer &lt;token&gt;</code></p>"
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
            "field": "id",
            "description": "<p>Post's _id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\" : \"somebody@example.com\",\n    \"password\" : \"supersecurepassword\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "post",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\" : false,\n    \"message\" : \"User Authenticated\",\n    \"token\" : \"asd.sdf.asw\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx|5xx": [
          {
            "group": "4xx|5xx",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": ""
          },
          {
            "group": "4xx|5xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/rest/posts.js",
    "groupTitle": "Posts",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/v1/post/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/posts",
    "title": "Fetch All Posts",
    "name": "postsFetch",
    "group": "Posts",
    "version": "1.0.0",
    "permission": [
      {
        "name": "users"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The <code>token</code> which was generated at the time of login. Example: <code>Bearer &lt;token&gt;</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "posts",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\" : false,\n    \"message\" : \"Success\",\n    \"posts\" : {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx|5xx": [
          {
            "group": "4xx|5xx",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": ""
          },
          {
            "group": "4xx|5xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/rest/posts.js",
    "groupTitle": "Posts",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/v1/posts"
      }
    ]
  },
  {
    "type": "post",
    "url": "/login",
    "title": "User Details",
    "name": "userDetails",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email id of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\" : \"somebody@example.com\",\n    \"password\" : \"supersecurepassword\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\" : false,\n    \"message\" : \"User Authenticated\",\n    \"token\" : \"asd.sdf.asw\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx|5xx": [
          {
            "group": "4xx|5xx",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": ""
          },
          {
            "group": "4xx|5xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/rest/users.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/v1/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Fetch user's list",
    "name": "userFetch",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email id of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\" : \"somebody@example.com\",\n    \"password\" : \"supersecurepassword\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\" : false,\n    \"message\" : \"User Authenticated\",\n    \"token\" : \"asd.sdf.asw\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx|5xx": [
          {
            "group": "4xx|5xx",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": ""
          },
          {
            "group": "4xx|5xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/rest/users.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/v1/login"
      }
    ]
  }
] });
