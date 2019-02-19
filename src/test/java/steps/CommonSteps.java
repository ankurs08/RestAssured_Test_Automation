package steps;

import java.util.List;
import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utils.AssertUtils;
import utils.RestUtils;

public class CommonSteps {
	RestUtils restUtils = new RestUtils();
	AssertUtils assertUtils = new AssertUtils();

	@Given("^I have the \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_have_the_and(String base, String endpoint) throws Throwable {
		// To check if the base uri and end points are present for the API
		restUtils.setBaseUri(base, endpoint);

	}

	@When("^I make a call to the REST API GET request$")
	public void i_make_a_call_to_the_REST_API_GET_request() throws Throwable {
		// To hit the GET request
		restUtils.getUri();
	}
	
	@When("^I make a call to the REST API POST request with (.*)$")
	public void i_make_a_call_to_the_REST_API_POST_request(String jsonFileName) throws Throwable {
		// To hit the GET request
		restUtils.postUri(jsonFileName);
	}

	@Then("^the HTTP status code from the response should be \"([^\"]*)\"$")
	public void the_HTTP_status_code_from_the_response_should_be(String statusCode) throws Throwable {
		assertUtils.checkStatusCode(statusCode);
	}

	@Then("^the \"([^\\\"]*)\" is equal to \"([^\"]*)\"$")
	public void the_circuit_numbers_is_equal_to(String key, String expValue) throws Throwable {
		assertUtils.checkKeyJson(key, expValue);
	}

	@Then("^the multiple keys are validated as below from Json$")
	public void validate_multiple_keys(DataTable dataKeys) throws Throwable {
		assertUtils.checkMultipleKeysFromJson(dataKeys);
	}
	
	@Then("^the multiple keys are validated as below from XML$")
	public void validate_multiple_keys_from_xml(DataTable dataKeys) throws Throwable {
		assertUtils.checkMultipleKeysFromXml(dataKeys);
	}
	
	@When("^I make a call to the SOAP API POST request with (.*)$")
	public void i_make_a_call_to_the_SOAP_API_POST_request(String xmlFileName) throws Throwable {
		// To hit the GET request
		restUtils.postSoapUri(xmlFileName);
	}
	

}
