# RestAssured_Test_Automation
Rest Assured test automation framework for testing REST and SOAP APIs using Cucumber BDD

This is a java maven API test automation framework

# Dependencies Included

- BDD powered by cucumber
- Rest Assured dependencies to tackle APIs
- Hamcrest Libraries for assertion

# Features

REST API Automation
- Supports Rest API testing using the RestAssured library
- API end-points are configurable through properties file
- Supports BDD using Cucumber
- Able to verify basic status code from the response
- Able to verify single or multiple keys from the JSON response
- Able to send XML or JSON request body with post operation

SOAP API Automation
- Supports SOAP API testing using the RestAssured library
- API end-points are configurable through properties file
- Supports BDD using Cucumber
- Able to verify basic status code from the response
- Able to traverse through the XML response using XMLPath
- Able to send the XML request body with the post operation

# Utilities and Functions

AssertUtils
- checkStatusCode
- checkKeyJson
- checkMultipleKeysFromJson
- checkMultipleKeysFromXml

PropertiesUtils
- getPropValue

RestUtils
- setBaseUri
- getUri
- postUri
- postSoapUri
	
