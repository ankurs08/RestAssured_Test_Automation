$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SoapApiExample.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    }
  ],
  "line": 5,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 4,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Validate the post request for REST API",
  "description": "",
  "id": "title-of-your-feature;validate-the-post-request-for-rest-api",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@soap"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I have the \"\u003cbaseUrl\u003e\" and \"\u003cendPoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I make a call to the SOAP API POST request with \u003cpostDataFile\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the HTTP status code from the response should be \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "the multiple keys are validated as below from XML",
  "rows": [
    {
      "cells": [
        "actualKey"
      ],
      "line": 14
    },
    {
      "cells": [
        "Code"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;validate-the-post-request-for-rest-api;",
  "rows": [
    {
      "cells": [
        "baseUrl",
        "endPoint",
        "statusCode",
        "postDataFile"
      ],
      "line": 18,
      "id": "title-of-your-feature;validate-the-post-request-for-rest-api;;1"
    },
    {
      "cells": [
        "soapBase",
        "soapEndPoint",
        "200",
        "soapPostData.xml"
      ],
      "line": 19,
      "id": "title-of-your-feature;validate-the-post-request-for-rest-api;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Validate the post request for REST API",
  "description": "",
  "id": "title-of-your-feature;validate-the-post-request-for-rest-api;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@soap"
    },
    {
      "line": 4,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I have the \"soapBase\" and \"soapEndPoint\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I make a call to the SOAP API POST request with soapPostData.xml",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the HTTP status code from the response should be \"200\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "the multiple keys are validated as below from XML",
  "rows": [
    {
      "cells": [
        "actualKey"
      ],
      "line": 14
    },
    {
      "cells": [
        "Code"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "soapBase",
      "offset": 12
    },
    {
      "val": "soapEndPoint",
      "offset": 27
    }
  ],
  "location": "CommonSteps.i_have_the_and(String,String)"
});
formatter.result({
  "duration": 530295478,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "soapPostData.xml",
      "offset": 48
    }
  ],
  "location": "CommonSteps.i_make_a_call_to_the_SOAP_API_POST_request(String)"
});
formatter.result({
  "duration": 2886003473,
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
  "duration": 778522,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.validate_multiple_keys_from_xml(DataTable)"
});
formatter.result({
  "duration": 359680102,
  "status": "passed"
});
});