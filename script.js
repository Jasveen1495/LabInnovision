Waypoint;

function onClick() {
  let menu = document.querySelector(".topNav");
  menu.classList.toggle("toggleCls");
}
var waypoint = new Waypoint({
  element: document.getElementById('headerElement'),
  handler: function (direction) {
    document.getElementById('topNavElement').style.position = "absolute";
  }
})

var j = 0;
var waypoint = new Waypoint({
  element: document.getElementById('introDivElement'),
  handler: function (direction) {
    if (j % 2 === 0) {
      document.getElementById('topNavElement').style.position = "sticky";
      j = j + 1;
      console.log(j)
      console.log("Entered Sticky")
    }
    else {
      document.getElementById('topNavElement').style.position = "absolute";
      j = j + 1;
      console.log(j)
      console.log("Entered Absolute")
    }

  }
})