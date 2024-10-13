// section2 logics //
let sec2_btn = document.getElementById("sec2_btn");
function section2_ani() {
  let info_sec2 = [
    `            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus exercitationem repellendus error perferendis asperiores necessitatibus, voluptatibus similique reprehenderit nobis voluptates at incidunt earum officiis. Dignissimos id doloribus ea, nobis magni numquam iciendis laboriosam fuga ullam vitae natus. Iusto, exercitationem architecto!
`,
    `            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus exercitationem repellendus error perferendis asperiores simos id doloribus ea, nobis magni numquam vel commodi autem molestiae itaque accusantium repellendus vero aspernatur ratione  `,
  ];

  let start = () => {
    sec2_btn.classList.add("second");
    document.getElementById("main_content_box").firstElementChild.innerHTML =
      info_sec2[0];
  };
  start();

  sec2_btn.addEventListener("click", function () {
    if (sec2_btn.classList.contains("second")) {
      document.getElementById(
        "main_content_box"
      ).firstElementChild.style = ` transform: translateX(200rem) scale(.8);
                  opacity: 0;`;
      setTimeout(() => {
        document.getElementById(
          "main_content_box"
        ).firstElementChild.style = ` transform: translateX(-200rem) scale(.8);
            opacity: 0;`;
        document.getElementById(
          "slide_btn"
        ).style = `transform: rotate(180deg);`;
      }, 300);
      setTimeout(() => {
        document.getElementById(
          "main_content_box"
        ).firstElementChild.innerHTML = info_sec2[1];
        sec2_btn.classList.toggle("second");
        document.getElementById(
          "main_content_box"
        ).firstElementChild.style = ` transform: translateX(0rem) scale(1);
                              opacity: 1;`;
      }, 400);
    } else {
      document.getElementById(
        "main_content_box"
      ).firstElementChild.style = ` transform: translateX(-200rem) scale(.8);
              opacity: 0;`;
      setTimeout(() => {
        document.getElementById(
          "main_content_box"
        ).firstElementChild.style = ` transform: translateX(200rem) scale(.8);
              opacity: 0;`;
        document.getElementById("slide_btn").style = `transform: rotate(0deg);`;
      }, 300);

      setTimeout(() => {
        document.getElementById(
          "main_content_box"
        ).firstElementChild.innerHTML = info_sec2[0];
        sec2_btn.classList.toggle("second");
        document.getElementById(
          "main_content_box"
        ).firstElementChild.style = ` transform: translate(0rem) scale(1);
                  opacity: 1;`;
      }, 500);
    }
  });
}
section2_ani();

// section3 project //

let nav_btn_right = document.getElementById("nav_btn_right");
let nav_btn_left = document.getElementById("nav_btn_left");
let value = main_projects_box.offsetHeight;

let idt2 = false;
nav_btn_right.addEventListener("click", function () {
  let idt = false;
  if (value > main_projects_box.scrollTop + main_projects_box.offsetHeight) {
    value = main_projects_box.scrollTop;
    idt = true;
    idt2 = true;
  }
  if (idt2 == false) {
    value = main_projects_box.scrollTop + main_projects_box.offsetHeight;
  }
  main_projects_box.scroll({
    top: value,
    left: 0,
    behavior: "smooth",
  });
  console.log(value + ":scrolled value" + main_projects_box.scrollTop);
  value += main_projects_box.offsetHeight;
  if (idt == true) {
    value = main_projects_box.scrollTop + 1;
  }
});
nav_btn_left.addEventListener("click", function () {
  if (value < 0) {
    value = main_projects_box.offsetHeight;
  }
  if (idt2 == true) {
    value = main_projects_box.scrollTop;
  }
  if (idt2 == false) {
    value = main_projects_box.scrollTop;
  }
  main_projects_box.scroll({
    top: value - main_projects_box.offsetHeight,
    left: 0,
    behavior: "smooth",
  });
  console.log(value - main_projects_box.offsetHeight + ":scrolled value");
  value -= main_projects_box.offsetHeight;
  if (value < 0) {
    value = main_projects_box.offsetHeight;
  }
});

let slider_btn1 = document.getElementById("slider_btn1");
let slider_btn2 = document.getElementById("slider_btn2");
let width = document.getElementById("info_box1").offsetWidth;
let width_container = document.getElementById("info_box_container").offsetWidth;
let info_box_container = document.getElementById("info_box_container");

function slider_visibilty() {
  info_box_container.addEventListener("mouseenter", () => {
    info_box_container.addEventListener("mousemove", function (dets) {
      console.log(dets.x + " " + (width_container - width * 1.5));
      if (dets.x < width * 1.5) {
        slider_btn1.style.opacity = 1;
      }
      if (dets.x > width * 1.5) {
        slider_btn1.style.opacity = 0;
      }
      if (dets.x > width_container - width * 1.5) {
        slider_btn2.style.opacity = 1;
      }
      if (dets.x < width_container - width * 1.5) {
        slider_btn2.style.opacity = 0;
      }
    });
  });
  info_box_container.addEventListener("mouseleave", () => {
    slider_btn1.style.opacity = 0;
    slider_btn2.style.opacity = 0;
  });
}
slider_visibilty();

slider_btn2.addEventListener("click", () => {
  document.getElementById("info_box_container").scrollLeft += width;
});
slider_btn1.addEventListener("click", () => {
  document.getElementById("info_box_container").scrollLeft -= width;
});

function isOverflowing(element) {
  return element.scrollWidth > element.offsetWidth;
}

function alertOverflow(element) {
  if (!isOverflowing(element)) {
    slider_btn1.style.display = "none";
    slider_btn2.style.display = "none";
  }
}
alertOverflow(document.getElementById("info_box_container"));







// copy system


const mobile_no_pre = document.getElementById("CTC1");


let text = document.getElementById('information1').innerHTML;

const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);
    modal('type1', 'Number Copied', "mobile number has been successfully copied to the clipboard" ,"Close")
  } catch (err) {
    console.error('Failed to copy: ', err);
    modal('type1', 'Something went wrong', "mobile number has not been copied to the clipboard" ,"Close")
  }
}

mobile_no_pre.onclick = function () {
  copyContent()
};




// mobile_no_pre.addEventListener("copy", function (event) {
// event.preventDefault();
// console.log(event + "ok");
// if (event.clipboardData) {
//   event.clipboardData.setData("text/plain", mobile_no.textContent);
//   alert("mobile number is copyed");
// }
// });


const mobile_no_pre2 = document.getElementById("CTC2");
let text2 = document.getElementById('information2').innerHTML;


const copyContent2 = async () => {
  try {
    await navigator.clipboard.writeText(text2);
    modal('type1', 'E-mail Copied', "E-mail has been successfully copied to the clipboard" ,"Close")
  } catch (err) {
    console.error('Failed to copy: ', err);
    modal('type1', 'Something went wrong', "E-mail has not been copied to the clipboard" ,"Close")
  }
}

mobile_no_pre2.onclick = function () {
  copyContent2()
};



// mobile_no_pre2.onclick = function () {
// document.execCommand("copy");
// };



// mobile_no_pre2.addEventListener("copy", function (event) {
// event.preventDefault();
// console.log(event + "ok");
// if (event.clipboardData) {
//   event.clipboardData.setData("text/plain", mobile_no2.textContent);
//   alert("mobile number is copyed");
// }
// });
