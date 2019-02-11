#Author: ankurs08@outlook.com
#Keywords Summary : REST API
#Feature: The feature is to check the REST API using the rest assured library
@restGet
Feature: Validate REST API using the rest assured library
  I want to the cucumber BDD with the rest assured library to test the REST APIs
  
@singleKey
  Scenario Outline: Check the number of circuit records
    Given I have the "<baseUrl>" and "<endPoint>"
    When I make a call to the REST API GET request
    Then the HTTP status code from the response should be "<statusCode>"
    And the "<key>" is equal to "<circuitNo>"

    Examples: 
      | baseUrl   | endPoint     | statusCode | key          | circuitNo |
      | ergastDev | 2017circuits |        200 | MRData.total |        10 |
      
@multiple
  Scenario Outline: Validate multiple response keys
    Given I have the "<baseUrl>" and "<endPoint>"
    When I make a call to the REST API GET request
    Then the HTTP status code from the response should be "<statusCode>"
    And the multiple keys are validated as below
      | actualKey | expectedValue |
      | MRData.total   | 20             |
      | MRData.limit   | 30             |

    Examples: 
      | baseUrl   | endPoint     | statusCode |
      | ergastDev | 2017circuits |        200 |
