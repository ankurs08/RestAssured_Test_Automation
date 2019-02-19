package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/features", glue = { "steps" }, tags = { "@soap" }, plugin = { "pretty",
		"html:target/cucumber" }, monochrome = false)

public class TestRunner {

}
