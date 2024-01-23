// to create my functions for the random generator

function toggleCollapse(id) {
    var content = document.getElementById(id);
    if (content.style.display === "none") {
      content.style.display = "block"; // Show the content
    } else {
      content.style.display = "none"; // Hide the content
    }
  }