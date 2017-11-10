var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
var container = document.getElementById("container");

var addNode = function() {
    var div = document.createElement("div");
    div.innerHTML = "<h1 title='The header'><span>Added node</span></h1>";
    container.appendChild(div);
};

var removeNode = function() {
    if (!container.hasChildNodes()) {
      alert("There is no node...");
      return;
    }
    container.removeChild(container.firstChild);
};

var observer = new MutationObserver(function(mutations) {
 mutations.forEach(function(mutation) {
   console.log(mutation.type + ". New: " + mutation.target.textContent + ". Old: " + mutation.oldValue);
 });    
});

var config = { attributes: true, childList: true, characterData: true, attributeOldValue : true, characterDataOldValue: true };

observer.observe(container, config);