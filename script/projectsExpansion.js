function toggleContent(c_id) {
  let projectContainer = document.getElementById("pc-" + c_id);
  let projectBanner = projectContainer.parentNode;
  let toggleButton = projectBanner.getElementsByTagName("BUTTON")[0];

  let text = toggleButton.innerHTML;

  const OPEN = "+";
  const CLOSE = "-";

  if ( text.localeCompare(OPEN) === 0 ) {
    projectContainer.style.display = "block";
    toggleButton.innerHTML = "-";
  }else if ( text.localeCompare(CLOSE) === 0 ) {
    projectContainer.style.display = "none";
    toggleButton.innerHTML = "+";
  }

}
