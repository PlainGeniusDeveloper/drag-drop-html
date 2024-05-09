// Call getDataIndexData function on page load
$(document).ready(function () {
  getDataIndexData()
    .then(function () {
      // All AJAX calls have completed
      // Call the other function here
      //This should be called at the last base on data fetched from Server
      another_function();
    })
    .catch(function () {
      // Handle failure of any AJAX call
      console.error("One or more AJAX calls failed");
    });
});

function getDataIndexData() {
  // Array to store promises for each AJAX call
  var promises = [];

  // Send AJAX requests individually and handle their promises
  var call1_Promise = sendAjaxRequest(
    "../../WebServices/IndexData.asmx/GetCall1"
  )
    .then(handleSuccess_GetCall1)
    .catch(handleError);
  promises.push(call1_Promise);

  var call2_Promise = sendAjaxRequest(
    "../../WebServices/IndexData.asmx/GetCall2"
  )
    .then(handleSuccess_GetCall2)
    .catch(handleError);
  promises.push(call2_Promise);

  // Return a promise that resolves when all AJAX calls are complete
  return Promise.all(promises);
}

function sendAjaxRequest(url) {
  // Send an AJAX request and return a promise
  return $.ajax({
    url: url,
    type: "POST",
    contentType: "application/json",
  });
}

function getDetailsWithDateRange(url, fromDate, toDate) {
  // Send an AJAX request to fetch income details with date range and return a promise
  return $.ajax({
    url: url,
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({ fromDate: fromDate, toDate: toDate }),
  });
}

function handleSuccess_GetCall1(response) {
  // Handle the successful response from the first API call
  // Perform further processing or UI updates here
}

function handleSuccess_GetCall2(response) {
  // Handle the successful response from the second API call
  // Perform further processing or UI updates here
}

function handleError(error) {
  // Handle any errors that occur during the AJAX requests
  console.error("At least one request failed:", error);
  // Display error messages or take appropriate actions here
}

function another_function() {}
