$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RestApiExample.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: ankurs08@outlook.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary : REST API"
    },
    {
      "line": 3,
      "value": "#Feature: The feature is to check the REST API using the rest assured library"
    }
  ],
  "line": 5,
  "name": "Validate REST API using the rest assured library",
  "description": "I want to the cucumber BDD with the rest assured library to test the REST APIs",
  "id": "validate-rest-api-using-the-rest-assured-library",
  "keyword": "Feature",
  "tags": [
    {
      "line": 4,
      "name": "@restGet"
    }
  ]
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Validate multiple response keys",
  "description": "",
  "id": "validate-rest-api-using-the-rest-assured-library;validate-multiple-response-keys",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@multiple"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I have the \"\u003cbaseUrl\u003e\" and \"\u003cendPoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I make a call to the REST API GET request",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the HTTP status code from the response should be \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "the multiple keys are validated as below",
  "rows": [
    {
      "cells": [
        "actualKey",
        "expectedValue"
      ],
      "line": 24
    },
    {
      "cells": [
        "MRData.total",
        "20"
      ],
      "line": 25
    },
    {
      "cells": [
        "MRData.limit",
        "30"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "validate-rest-api-using-the-rest-assured-library;validate-multiple-response-keys;",
  "rows": [
    {
      "cells": [
        "baseUrl",
        "endPoint",
        "statusCode"
      ],
      "line": 29,
      "id": "validate-rest-api-using-the-rest-assured-library;validate-multiple-response-keys;;1"
    },
    {
      "cells": [
        "ergastDev",
        "2017circuits",
        "200"
      ],
      "line": 30,
      "id": "validate-rest-api-using-the-rest-assured-library;validate-multiple-response-keys;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "Validate multiple response keys",
  "description": "",
  "id": "validate-rest-api-using-the-rest-assured-library;validate-multiple-response-keys;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@multiple"
    },
    {
      "line": 4,
      "name": "@restGet"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I have the \"ergastDev\" and \"2017circuits\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I make a call to the REST API GET request",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the HTTP status code from the response should be \"200\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "the multiple keys are validated as below",
  "rows": [
    {
      "cells": [
        "actualKey",
        "expectedValue"
      ],
      "line": 24
    },
    {
      "cells": [
        "MRData.total",
        "20"
      ],
      "line": 25
    },
    {
      "cells": [
        "MRData.limit",
        "30"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "ergastDev",
      "offset": 12
    },
    {
      "val": "2017circuits",
      "offset": 28
    }
  ],
  "location": "CommonSteps.i_have_the_and(String,String)"
});
formatter.result({
  "duration": 490598835,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_make_a_call_to_the_REST_API_GET_request()"
});
formatter.result({
  "duration": 2958388593,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "CommonSteps.the_HTTP_status_code_from_the_response_should_be(String)"
});
formatter.result({
  "duration": 695748,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.validate_multiple_keys(DataTable)"
});
formatter.result({
  "duration": 405482406,
  "status": "passed"
});
});