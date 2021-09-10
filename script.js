document.addEventListener("DOMContentLoaded", function (event) {
  var modal = document.getElementById("myModal");

  var thumbnails = document.querySelectorAll("article img");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");

  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener(
      "click",
      function () {
        modal.style.display = "block";
        modalImg.src = this.src.replace(/-w\d+/, "");
        captionText.innerHTML = this.alt;
      },
      false
    );
  }

  var span = document.getElementsByClassName("close")[0];

  span.onclick = function () {
    modal.style.display = "none";
  };
});
