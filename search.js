;(function() {
  var
    nodes = document.getElementById("content").getElementsByTagName("p"),
    nodesLen = nodes.length,
    search = document.getElementById("search"),
    submit = document.getElementById("search-submit"),
    i, data;

  function preventSubmit(e) {
    e.preventDefault();
  }

  function keyupSearch(e) {
    var that = this;
    data = that.value.toLowerCase();

    for (i = 0; i < nodesLen; i++) {
      nodes[i].className = "dn";
      if (nodes[i].textContent.toLowerCase().indexOf(data) !== -1) {
        nodes[i].className = "";
      }
    }
  }

  submit.addEventListener("click", preventSubmit, false);
  search.addEventListener("keyup", keyupSearch, false);
})();

