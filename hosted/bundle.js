"use strict";

//make react comps
var handleDomo = function handleDomo(e) {
  e.preventDefault();

  $("#domoMessage").animate({ width: "hide" }, 350);

  if ($("#domoName").val() == "" || $("#domoAge").val() == "") {}
};
"use strict";

var handleError = function handleError(message) {
  $("#errorMessage").text(message);
  $("#domoMessage").animate({ width: "toggle" }, 350);
};

var redirect = function redirect(response) {
  $("#domoMessage").animate({ width: "hide" }, 350);
  window.location = response.redirect;
};

var sendAjax = function sendAjax(type, action, data, success) {
  $.ajax({
    cache: false,
    type: type,
    url: action,
    data: data,
    dataType: "json",
    success: success,
    error: function error(xhr, status, _error) {
      var messageObj = JSON.parse(xhr.responseText);
      handleError(messageObj.error);
    }
  });
};
