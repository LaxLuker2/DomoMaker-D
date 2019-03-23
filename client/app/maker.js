//make react comps
const handleDomo = e => {
  e.preventDefault();

  $("#domoMessage").animate({ width: "hide" }, 350);

  if ($("#domoName").val() == "" || $("#domoAge").val() == "") {
  }
};
