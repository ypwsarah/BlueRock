var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

// const name = document.querySelector("#myDiv");

// let canvas = document.getElementById("myCanvas");
// let ctx = canvas.getContext("2d");
// ctx.fillStyle = "blue";
// ctx.beginPath();
// ctx.arc(100, 75, 50, 0, 2 * Math.PI);
// ctx.stroke();

// function helloWorld(){
//    let helloDiv = document.querySelector("#myDiv");
//   console.log(helloDiv);
//   helloDiv.setAttribute("style","background-color:red;");

// }


//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

  function getRockPos(elmnt){
    return {x : elmnt.offsetLeft - pos1 + "px ", y : elmnt.offsetTop - pos2 + "px "};
    // console.log(elmnt.offsetLeft - pos1 + "px ", elmnt.offsetTop - pos2 + "px ");
  }

function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  /* Create magnifier glass: */
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  /* Insert magnifier glass: */
  img.parentElement.insertBefore(glass, img);

  /* Set background properties for the magnifier glass: */
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  /* Execute a function when someone moves the magnifier glass over the image: */
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    // pos = getRockPos(document.getElementById("mydiv"));
    // x = pos.x;
    // y = pos.y;
    x = document.getElementById("mydiv").offsetLeft - pos1 - 160
    y = document.getElementById("mydiv").offsetTop - pos2 + 20
    /* Prevent the magnifier glass from being positioned outside the image: */
    // if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    // if (x < w / zoom) {x = w / zoom;}
    // if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    // if (y < h / zoom) {y = h / zoom;}
    /* Set the position of the magnifier glass: */
    glass.style.left = ("700");
    glass.style.top = ("700");
    /* Display what the magnifier glass "sees": */
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  // function getRockPos(e) {
  //   let elem = document.getElementById(elmnt.id + "header")
  //   var a, x = 0, y = 0;
  //   e = e || window.event;
  //   /* Get the x and y positions of the image: */
  //   a = img.getBoundingClientRect();
  //   /* Calculate the cursor's x and y coordinates, relative to the image: */
  //   x = e.pageX - a.left;
  //   y = e.pageY - a.top;
  //   /* Consider any page scrolling: */
  //   x = x - window.pageXOffset;
  //   y = y - window.pageYOffset;
  //   return {x : x, y : y};
  // }
}