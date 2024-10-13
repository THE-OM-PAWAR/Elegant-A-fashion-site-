var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});
// var swiper2 = new Swiper(".mySwiper2", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     freeMode: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });
var swiper2 = new Swiper('.swiper2', {
  slidesPerView: 5,  // Show 3 slides at once
  spaceBetween: 20,  // Space between slides
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

let scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  // smoothMobile: true,
  getSpeed: true,
  multiplier: 1,
  lerp: 0.2,
});

let home_bg_img = document.getElementById("home_bg_img");
let info_box = document.getElementsByClassName("info_box");

function loading_animation() {
  gsap.from(home_bg_img, {
    y: 150,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    delay: 0.3,
    scale: 20,
  });
  gsap.from("#background>div", {
    y: 150,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
    delay: 1.5,
    scale: 0,
  });
  gsap.from(info_box, {
    y: 10,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    delay: 1,
    // scale:20
  });
  gsap.from("#navigation_bar", {
    y: -10,
    opacity: 0,
    duration: 0.5,
    stagger: 0.6,
    delay: 1,
    // scale:20
  });
}
loading_animation();

function mousemove_ani() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#coursor", {
      opacity: 1,
      left: dets.x,
      top: dets.y,
    });
  });

  document
    .querySelector("#main_about_box")
    .addEventListener("mouseenter", function () {
      gsap.to("#coursor", {
        transform: "translate(-50% ,-50%) scale(0)",
      });
    });
  document
    .querySelector("#main_about_box")
    .addEventListener("mouseleave", function () {
      gsap.to("#coursor", {
        transform: "translate(-50% ,-50%) scale(1)",
      });
    });
  document
    .querySelector(".main_projects_box")
    .addEventListener("mouseenter", function () {
      gsap.to("#coursor", {
        transform: "translate(-50% ,-50%) scale(0)",
      });
    });
  document
    .querySelector(".main_projects_box")
    .addEventListener("mouseleave", function () {
      gsap.to("#coursor", {
        transform: "translate(-50% ,-50%) scale(1)",
      });
    });

  document
    .querySelector("#card_box")
    .addEventListener("mouseenter", function () {
      gsap.to("#coursor", {
        scale: 3,
        transform: "translate(-50% ,-50%) scale(1)",
      });
    });
  document
    .querySelector("#card_box")
    .addEventListener("mouseleave", function () {
      gsap.to("#coursor", {
        scale: 1,
        transform: "translate(-50% ,-50%) scale(1)",
      });
    });
  document
    .querySelector("footer>div>svg")
    .addEventListener("mouseenter", function () {
      gsap.to("#coursor", {
        scale: 2.5,
        transform: "translate(-50% ,-50%) scale(1)",
      });
    });

  document
    .querySelector("footer>div>svg")
    .addEventListener("mouseleave", function () {
      gsap.to("#coursor", {
        scale: 1,
        transform: "translate(-50% ,-50%) scale(1)",
      });
    });
  document
    .querySelector("#menuBTN")
    .addEventListener("mouseenter", function () {
      gsap.to("#coursor", {
        scale: 0.05,
        transform: "translate(-50% ,-50%) scale(1)",
      });
    });

  document
    .querySelector("#menuBTN")
    .addEventListener("mouseleave", function () {
      gsap.to("#coursor", {
        scale: 1,
        transform: "translate(-50% ,-50%) scale(1)",
      });
    });
}
mousemove_ani();

let menuBTN = document.getElementById("menuBTN");
menuBTN.onclick = () => {
  menu_work();
};
function menu_work() {
  if (menuBTN.classList.contains("not_clicked")) {
    menuBTN.classList.remove("not_clicked");
    document.body.style.overflow = "hidden";
    scroll.stop();
    document.querySelector("menu").style.zIndex = "34";
    document.querySelector("menu").style.height = "100vh";
    document.querySelectorAll(".link").forEach((element) => {
      element.style.color = "#fff";
    });
    gsap.from("menu >ul>li", {
      y: 20,
      opacity: 0.5,
      duration: 0.5,
      stagger: 0.2,
      delay: 0.5,
    });

    document.querySelector("#nav_part1").innerHTML = `        <svg width="141" height="39" viewBox="0 0 141 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M140.35 15.344C140.265 16.1547 140.201 16.944 140.158 17.712C140.137 18.4587 140.126 19.0347 140.126 19.44C140.126 19.952 140.137 20.432 140.158 20.88C140.179 21.328 140.201 21.7227 140.222 22.064H139.486C139.337 20.5707 139.134 19.3973 138.878 18.544C138.622 17.6693 138.174 17.04 137.534 16.656C136.894 16.272 135.902 16.08 134.558 16.08H132.83V34.288C132.83 35.1413 132.905 35.7813 133.054 36.208C133.225 36.6347 133.545 36.9227 134.014 37.072C134.483 37.2213 135.166 37.3173 136.062 37.36V38C135.507 37.9573 134.803 37.936 133.95 37.936C133.097 37.9147 132.233 37.904 131.358 37.904C130.398 37.904 129.491 37.9147 128.638 37.936C127.806 37.936 127.134 37.9573 126.622 38V37.36C127.518 37.3173 128.201 37.2213 128.67 37.072C129.139 36.9227 129.449 36.6347 129.598 36.208C129.769 35.7813 129.854 35.1413 129.854 34.288V16.08H128.126C126.803 16.08 125.811 16.272 125.15 16.656C124.51 17.04 124.062 17.6693 123.806 18.544C123.55 19.3973 123.347 20.5707 123.198 22.064H122.462C122.505 21.7227 122.526 21.328 122.526 20.88C122.547 20.432 122.558 19.952 122.558 19.44C122.558 19.0347 122.537 18.4587 122.494 17.712C122.473 16.944 122.419 16.1547 122.334 15.344C123.23 15.3653 124.201 15.3867 125.246 15.408C126.313 15.4293 127.379 15.44 128.446 15.44C129.513 15.44 130.483 15.44 131.358 15.44C132.233 15.44 133.193 15.44 134.238 15.44C135.305 15.44 136.371 15.4293 137.438 15.408C138.505 15.3867 139.475 15.3653 140.35 15.344Z" fill="white"/>
<path d="M120.252 15.344V15.984C119.527 16.0053 118.972 16.112 118.588 16.304C118.226 16.496 117.98 16.8053 117.852 17.232C117.724 17.6587 117.66 18.2667 117.66 19.056V38.16C117.532 38.16 117.404 38.16 117.276 38.16C117.17 38.16 117.052 38.16 116.924 38.16L103.484 17.392V34.288C103.484 35.056 103.548 35.664 103.676 36.112C103.826 36.5387 104.103 36.848 104.508 37.04C104.935 37.2107 105.564 37.3173 106.396 37.36V38C106.012 37.9573 105.511 37.936 104.892 37.936C104.274 37.9147 103.687 37.904 103.132 37.904C102.599 37.904 102.055 37.9147 101.5 37.936C100.967 37.936 100.519 37.9573 100.156 38V37.36C100.882 37.3173 101.426 37.2107 101.788 37.04C102.172 36.848 102.428 36.5387 102.556 36.112C102.684 35.664 102.748 35.056 102.748 34.288V18.736C102.748 17.9467 102.684 17.3707 102.556 17.008C102.428 16.624 102.172 16.368 101.788 16.24C101.426 16.0907 100.882 16.0053 100.156 15.984V15.344C100.519 15.3653 100.967 15.3867 101.5 15.408C102.055 15.4293 102.599 15.44 103.132 15.44C103.602 15.44 104.05 15.4293 104.476 15.408C104.903 15.3867 105.287 15.3653 105.628 15.344L116.924 32.752V19.056C116.924 18.2667 116.85 17.6587 116.7 17.232C116.572 16.8053 116.295 16.496 115.868 16.304C115.463 16.112 114.844 16.0053 114.012 15.984V15.344C114.396 15.3653 114.898 15.3867 115.516 15.408C116.156 15.4293 116.743 15.44 117.276 15.44C117.831 15.44 118.375 15.4293 118.908 15.408C119.463 15.3867 119.911 15.3653 120.252 15.344Z" fill="white"/>
<path d="M96.6242 15.344C96.5389 16.0907 96.4749 16.816 96.4323 17.52C96.4109 18.224 96.4002 18.7573 96.4002 19.12C96.4002 19.504 96.4109 19.8773 96.4323 20.24C96.4536 20.5813 96.4749 20.8693 96.4962 21.104H95.7602C95.6322 19.8453 95.4509 18.8533 95.2162 18.128C94.9816 17.3813 94.5763 16.8587 94.0003 16.56C93.4456 16.24 92.6029 16.08 91.4723 16.08H88.8162C88.0909 16.08 87.5362 16.144 87.1522 16.272C86.7896 16.3787 86.5443 16.624 86.4163 17.008C86.2883 17.3707 86.2243 17.9467 86.2243 18.736V34.608C86.2243 35.376 86.2883 35.952 86.4163 36.336C86.5443 36.72 86.7896 36.976 87.1522 37.104C87.5362 37.2107 88.0909 37.264 88.8162 37.264H91.1522C92.4962 37.264 93.5096 37.0827 94.1923 36.72C94.8963 36.3573 95.3976 35.7707 95.6963 34.96C96.0163 34.128 96.2509 33.008 96.4002 31.6H97.1363C97.0723 32.176 97.0402 32.944 97.0402 33.904C97.0402 34.3093 97.0509 34.896 97.0723 35.664C97.1149 36.4107 97.1789 37.1893 97.2643 38C96.1763 37.9573 94.9496 37.936 93.5843 37.936C92.2189 37.9147 91.0029 37.904 89.9362 37.904C89.4669 37.904 88.8589 37.904 88.1123 37.904C87.3869 37.904 86.5976 37.9147 85.7442 37.936C84.8909 37.936 84.0269 37.9467 83.1522 37.968C82.2776 37.968 81.4456 37.9787 80.6562 38V37.36C81.3816 37.3173 81.9256 37.232 82.2882 37.104C82.6722 36.976 82.9283 36.72 83.0563 36.336C83.1843 35.952 83.2482 35.376 83.2482 34.608V18.736C83.2482 17.9467 83.1843 17.3707 83.0563 17.008C82.9283 16.624 82.6722 16.368 82.2882 16.24C81.9256 16.0907 81.3816 16.0053 80.6562 15.984V15.344C81.4456 15.3653 82.2776 15.3867 83.1522 15.408C84.0269 15.408 84.8909 15.4187 85.7442 15.44C86.5976 15.44 87.3869 15.44 88.1123 15.44C88.8589 15.44 89.4669 15.44 89.9362 15.44C90.9176 15.44 92.0269 15.44 93.2643 15.44C94.5229 15.4187 95.6429 15.3867 96.6242 15.344ZM91.1202 26.288C91.1202 26.288 91.1202 26.3947 91.1202 26.608C91.1202 26.8213 91.1202 26.928 91.1202 26.928H85.2643C85.2643 26.928 85.2643 26.8213 85.2643 26.608C85.2643 26.3947 85.2643 26.288 85.2643 26.288H91.1202ZM92.0482 22.064C91.9629 23.28 91.9202 24.208 91.9202 24.848C91.9416 25.488 91.9522 26.0747 91.9522 26.608C91.9522 27.1413 91.9629 27.728 91.9842 28.368C92.0056 29.008 92.0589 29.936 92.1442 31.152H91.4082C91.3229 30.4693 91.2162 29.808 91.0882 29.168C90.9816 28.5067 90.7256 27.9733 90.3203 27.568C89.9363 27.1413 89.2749 26.928 88.3363 26.928V26.288C89.0403 26.288 89.5736 26.1493 89.9362 25.872C90.3202 25.5733 90.5976 25.2 90.7682 24.752C90.9389 24.304 91.0562 23.8453 91.1202 23.376C91.1842 22.8853 91.2482 22.448 91.3122 22.064H92.0482Z" fill="white"/>
<path d="M68.845 14.896C70.2317 14.896 71.3517 15.1093 72.205 15.536C73.0583 15.9413 73.8583 16.4213 74.605 16.976C74.8823 17.1893 75.0957 17.296 75.245 17.296C75.6503 17.296 75.917 16.6453 76.045 15.344H76.781C76.7384 16.1333 76.7063 17.0933 76.685 18.224C76.6637 19.3547 76.653 20.848 76.653 22.704H75.917C75.7677 21.808 75.5863 20.944 75.373 20.112C75.1597 19.28 74.8077 18.5653 74.317 17.968C73.6983 17.1787 72.8877 16.5707 71.885 16.144C70.8823 15.696 69.8477 15.472 68.781 15.472C67.7144 15.472 66.7437 15.7387 65.869 16.272C65.0157 16.784 64.2797 17.5307 63.661 18.512C63.0423 19.4933 62.5623 20.6773 62.221 22.064C61.901 23.4293 61.741 24.976 61.741 26.704C61.741 30.544 62.3597 33.36 63.597 35.152C64.8343 36.9227 66.7543 37.808 69.357 37.808C70.125 37.808 70.7863 37.7013 71.341 37.488C71.917 37.2533 72.365 37.0293 72.685 36.816C73.0904 36.5387 73.3463 36.2827 73.453 36.048C73.5597 35.792 73.613 35.4613 73.613 35.056V31.984C73.613 31.1093 73.5277 30.4587 73.357 30.032C73.1863 29.6053 72.8663 29.3173 72.397 29.168C71.949 29.0187 71.277 28.9333 70.381 28.912V28.272C70.765 28.2933 71.213 28.3147 71.725 28.336C72.237 28.336 72.7703 28.3467 73.325 28.368C73.901 28.368 74.4237 28.368 74.893 28.368C75.597 28.368 76.2264 28.3573 76.781 28.336C77.357 28.3147 77.837 28.2933 78.221 28.272V28.912C77.7517 28.9333 77.3997 29.008 77.165 29.136C76.9304 29.264 76.7703 29.52 76.685 29.904C76.621 30.288 76.589 30.8747 76.589 31.664V38H75.949C75.9277 37.6373 75.8424 37.2427 75.693 36.816C75.565 36.3893 75.3624 36.176 75.085 36.176C74.957 36.176 74.829 36.208 74.701 36.272C74.573 36.336 74.349 36.4853 74.029 36.72C73.325 37.2533 72.5783 37.68 71.789 38C70.9997 38.2987 70.0823 38.448 69.037 38.448C66.8397 38.448 64.9517 38 63.373 37.104C61.8157 36.1867 60.621 34.8747 59.789 33.168C58.957 31.4613 58.541 29.424 58.541 27.056C58.541 24.56 58.989 22.4053 59.885 20.592C60.781 18.7787 61.997 17.3813 63.533 16.4C65.0903 15.3973 66.861 14.896 68.845 14.896Z" fill="white"/>
<path d="M54.6242 15.344C54.5389 16.0907 54.4749 16.816 54.4323 17.52C54.4109 18.224 54.4002 18.7573 54.4002 19.12C54.4002 19.504 54.4109 19.8773 54.4323 20.24C54.4536 20.5813 54.4749 20.8693 54.4962 21.104H53.7602C53.6322 19.8453 53.4509 18.8533 53.2162 18.128C52.9816 17.3813 52.5762 16.8587 52.0002 16.56C51.4456 16.24 50.6029 16.08 49.4722 16.08H46.8162C46.0909 16.08 45.5362 16.144 45.1522 16.272C44.7896 16.3787 44.5442 16.624 44.4162 17.008C44.2882 17.3707 44.2242 17.9467 44.2242 18.736V34.608C44.2242 35.376 44.2882 35.952 44.4162 36.336C44.5442 36.72 44.7896 36.976 45.1522 37.104C45.5362 37.2107 46.0909 37.264 46.8162 37.264H49.1522C50.4962 37.264 51.5096 37.0827 52.1922 36.72C52.8962 36.3573 53.3976 35.7707 53.6963 34.96C54.0163 34.128 54.2509 33.008 54.4002 31.6H55.1362C55.0722 32.176 55.0402 32.944 55.0402 33.904C55.0402 34.3093 55.0509 34.896 55.0723 35.664C55.1149 36.4107 55.1789 37.1893 55.2643 38C54.1763 37.9573 52.9496 37.936 51.5842 37.936C50.2189 37.9147 49.0029 37.904 47.9362 37.904C47.4669 37.904 46.8589 37.904 46.1122 37.904C45.3869 37.904 44.5976 37.9147 43.7442 37.936C42.8909 37.936 42.0269 37.9467 41.1522 37.968C40.2776 37.968 39.4456 37.9787 38.6562 38V37.36C39.3816 37.3173 39.9256 37.232 40.2882 37.104C40.6723 36.976 40.9282 36.72 41.0562 36.336C41.1842 35.952 41.2482 35.376 41.2482 34.608V18.736C41.2482 17.9467 41.1842 17.3707 41.0562 17.008C40.9282 16.624 40.6723 16.368 40.2882 16.24C39.9256 16.0907 39.3816 16.0053 38.6562 15.984V15.344C39.4456 15.3653 40.2776 15.3867 41.1522 15.408C42.0269 15.408 42.8909 15.4187 43.7442 15.44C44.5976 15.44 45.3869 15.44 46.1122 15.44C46.8589 15.44 47.4669 15.44 47.9362 15.44C48.9176 15.44 50.0269 15.44 51.2642 15.44C52.5229 15.4187 53.6429 15.3867 54.6242 15.344ZM49.1202 26.288C49.1202 26.288 49.1202 26.3947 49.1202 26.608C49.1202 26.8213 49.1202 26.928 49.1202 26.928H43.2642C43.2642 26.928 43.2642 26.8213 43.2642 26.608C43.2642 26.3947 43.2642 26.288 43.2642 26.288H49.1202ZM50.0482 22.064C49.9629 23.28 49.9202 24.208 49.9202 24.848C49.9416 25.488 49.9522 26.0747 49.9522 26.608C49.9522 27.1413 49.9629 27.728 49.9842 28.368C50.0056 29.008 50.0589 29.936 50.1442 31.152H49.4082C49.3229 30.4693 49.2162 29.808 49.0882 29.168C48.9816 28.5067 48.7256 27.9733 48.3202 27.568C47.9362 27.1413 47.2749 26.928 46.3363 26.928V26.288C47.0403 26.288 47.5736 26.1493 47.9362 25.872C48.3202 25.5733 48.5976 25.2 48.7682 24.752C48.9389 24.304 49.0562 23.8453 49.1202 23.376C49.1842 22.8853 49.2482 22.448 49.3122 22.064H50.0482Z" fill="white"/>
<path d="M28.0038 15.344V15.984C27.2784 16.0053 26.7238 16.0907 26.3398 16.24C25.9771 16.368 25.7318 16.624 25.6038 17.008C25.4757 17.3707 25.4118 17.9467 25.4118 18.736V34.608C25.4118 35.376 25.4757 35.952 25.6038 36.336C25.7318 36.72 25.9771 36.976 26.3398 37.104C26.7238 37.2107 27.2784 37.264 28.0038 37.264H30.3398C31.3424 37.264 32.1531 37.1573 32.7717 36.944C33.4117 36.7307 33.9131 36.4 34.2758 35.952C34.6598 35.4827 34.9477 34.864 35.1397 34.096C35.3317 33.328 35.4811 32.3893 35.5878 31.28H36.3238C36.2598 31.9413 36.2278 32.816 36.2278 33.904C36.2278 34.3093 36.2384 34.896 36.2598 35.664C36.3024 36.4107 36.3664 37.1893 36.4518 38C35.3638 37.9573 34.1371 37.936 32.7717 37.936C31.4064 37.9147 30.1904 37.904 29.1238 37.904C28.6544 37.904 28.0464 37.904 27.2997 37.904C26.5744 37.904 25.7851 37.9147 24.9317 37.936C24.0784 37.936 23.2144 37.9467 22.3398 37.968C21.4651 37.968 20.6331 37.9787 19.8438 38V37.36C20.5691 37.3173 21.1131 37.232 21.4757 37.104C21.8598 36.976 22.1157 36.72 22.2437 36.336C22.3717 35.952 22.4358 35.376 22.4358 34.608V18.736C22.4358 17.9467 22.3717 17.3707 22.2437 17.008C22.1157 16.624 21.8598 16.368 21.4757 16.24C21.1131 16.0907 20.5691 16.0053 19.8438 15.984V15.344C20.2917 15.3653 20.8784 15.3867 21.6038 15.408C22.3291 15.4293 23.1078 15.44 23.9398 15.44C24.6864 15.44 25.4224 15.4293 26.1478 15.408C26.8944 15.3867 27.5131 15.3653 28.0038 15.344Z" fill="white"/>
<path d="M16.3118 15.344C16.2264 16.0907 16.1624 16.816 16.1198 17.52C16.0984 18.224 16.0878 18.7573 16.0878 19.12C16.0878 19.504 16.0984 19.8773 16.1198 20.24C16.1411 20.5813 16.1624 20.8693 16.1838 21.104H15.4478C15.3198 19.8453 15.1384 18.8533 14.9038 18.128C14.6691 17.3813 14.2638 16.8587 13.6878 16.56C13.1331 16.24 12.2904 16.08 11.1598 16.08H8.50375C7.77842 16.08 7.22375 16.144 6.83975 16.272C6.47708 16.3787 6.23175 16.624 6.10375 17.008C5.97575 17.3707 5.91175 17.9467 5.91175 18.736V34.608C5.91175 35.376 5.97575 35.952 6.10375 36.336C6.23175 36.72 6.47708 36.976 6.83975 37.104C7.22375 37.2107 7.77842 37.264 8.50375 37.264H10.8398C12.1838 37.264 13.1971 37.0827 13.8798 36.72C14.5838 36.3573 15.0851 35.7707 15.3838 34.96C15.7038 34.128 15.9384 33.008 16.0878 31.6H16.8238C16.7598 32.176 16.7278 32.944 16.7278 33.904C16.7278 34.3093 16.7384 34.896 16.7598 35.664C16.8024 36.4107 16.8664 37.1893 16.9518 38C15.8638 37.9573 14.6371 37.936 13.2718 37.936C11.9064 37.9147 10.6904 37.904 9.62375 37.904C9.15442 37.904 8.54642 37.904 7.79975 37.904C7.07442 37.904 6.28508 37.9147 5.43175 37.936C4.57842 37.936 3.71442 37.9467 2.83975 37.968C1.96508 37.968 1.13308 37.9787 0.34375 38V37.36C1.06908 37.3173 1.61308 37.232 1.97575 37.104C2.35975 36.976 2.61575 36.72 2.74375 36.336C2.87175 35.952 2.93575 35.376 2.93575 34.608V18.736C2.93575 17.9467 2.87175 17.3707 2.74375 17.008C2.61575 16.624 2.35975 16.368 1.97575 16.24C1.61308 16.0907 1.06908 16.0053 0.34375 15.984V15.344C1.13308 15.3653 1.96508 15.3867 2.83975 15.408C3.71442 15.408 4.57842 15.4187 5.43175 15.44C6.28508 15.44 7.07442 15.44 7.79975 15.44C8.54642 15.44 9.15442 15.44 9.62375 15.44C10.6051 15.44 11.7144 15.44 12.9518 15.44C14.2104 15.4187 15.3304 15.3867 16.3118 15.344ZM10.8078 26.288C10.8078 26.288 10.8078 26.3947 10.8078 26.608C10.8078 26.8213 10.8078 26.928 10.8078 26.928H4.95175C4.95175 26.928 4.95175 26.8213 4.95175 26.608C4.95175 26.3947 4.95175 26.288 4.95175 26.288H10.8078ZM11.7358 22.064C11.6504 23.28 11.6078 24.208 11.6078 24.848C11.6291 25.488 11.6398 26.0747 11.6398 26.608C11.6398 27.1413 11.6504 27.728 11.6718 28.368C11.6931 29.008 11.7464 29.936 11.8318 31.152H11.0958C11.0104 30.4693 10.9038 29.808 10.7758 29.168C10.6691 28.5067 10.4131 27.9733 10.0078 27.568C9.62375 27.1413 8.96242 26.928 8.02375 26.928V26.288C8.72775 26.288 9.26108 26.1493 9.62375 25.872C10.0078 25.5733 10.2851 25.2 10.4558 24.752C10.6264 24.304 10.7438 23.8453 10.8078 23.376C10.8718 22.8853 10.9358 22.448 10.9998 22.064H11.7358Z" fill="white"/>
<circle cx="5" cy="5" r="5" fill="#D9D9D9"/>
<circle cx="20" cy="5" r="5" fill="#D9D9D9"/>
<circle cx="35" cy="5" r="5" fill="white"/>
</svg>`;
  } else {
    menuBTN.classList.add("not_clicked");
    document.body.style.overflow = "initial";
    scroll.start();
    document.querySelector("menu").style.zIndex = "0";
    document.querySelector("menu").style.height = "0vh";
    document.querySelectorAll(".link").forEach((element) => {
      element.style.color = "#000";
    });
    document.querySelector("#nav_part1").innerHTML = `       <svg width="141" height="39" viewBox="0 0 141 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M140.35 15.344C140.265 16.1547 140.201 16.944 140.158 17.712C140.137 18.4587 140.126 19.0347 140.126 19.44C140.126 19.952 140.137 20.432 140.158 20.88C140.179 21.328 140.201 21.7227 140.222 22.064H139.486C139.337 20.5707 139.134 19.3973 138.878 18.544C138.622 17.6693 138.174 17.04 137.534 16.656C136.894 16.272 135.902 16.08 134.558 16.08H132.83V34.288C132.83 35.1413 132.905 35.7813 133.054 36.208C133.225 36.6347 133.545 36.9227 134.014 37.072C134.483 37.2213 135.166 37.3173 136.062 37.36V38C135.507 37.9573 134.803 37.936 133.95 37.936C133.097 37.9147 132.233 37.904 131.358 37.904C130.398 37.904 129.491 37.9147 128.638 37.936C127.806 37.936 127.134 37.9573 126.622 38V37.36C127.518 37.3173 128.201 37.2213 128.67 37.072C129.139 36.9227 129.449 36.6347 129.598 36.208C129.769 35.7813 129.854 35.1413 129.854 34.288V16.08H128.126C126.803 16.08 125.811 16.272 125.15 16.656C124.51 17.04 124.062 17.6693 123.806 18.544C123.55 19.3973 123.347 20.5707 123.198 22.064H122.462C122.505 21.7227 122.526 21.328 122.526 20.88C122.547 20.432 122.558 19.952 122.558 19.44C122.558 19.0347 122.537 18.4587 122.494 17.712C122.473 16.944 122.419 16.1547 122.334 15.344C123.23 15.3653 124.201 15.3867 125.246 15.408C126.313 15.4293 127.379 15.44 128.446 15.44C129.513 15.44 130.483 15.44 131.358 15.44C132.233 15.44 133.193 15.44 134.238 15.44C135.305 15.44 136.371 15.4293 137.438 15.408C138.505 15.3867 139.475 15.3653 140.35 15.344Z" fill="black"/>
          <path d="M120.252 15.344V15.984C119.527 16.0053 118.972 16.112 118.588 16.304C118.226 16.496 117.98 16.8053 117.852 17.232C117.724 17.6587 117.66 18.2667 117.66 19.056V38.16C117.532 38.16 117.404 38.16 117.276 38.16C117.17 38.16 117.052 38.16 116.924 38.16L103.484 17.392V34.288C103.484 35.056 103.548 35.664 103.676 36.112C103.826 36.5387 104.103 36.848 104.508 37.04C104.935 37.2107 105.564 37.3173 106.396 37.36V38C106.012 37.9573 105.511 37.936 104.892 37.936C104.274 37.9147 103.687 37.904 103.132 37.904C102.599 37.904 102.055 37.9147 101.5 37.936C100.967 37.936 100.519 37.9573 100.156 38V37.36C100.882 37.3173 101.426 37.2107 101.788 37.04C102.172 36.848 102.428 36.5387 102.556 36.112C102.684 35.664 102.748 35.056 102.748 34.288V18.736C102.748 17.9467 102.684 17.3707 102.556 17.008C102.428 16.624 102.172 16.368 101.788 16.24C101.426 16.0907 100.882 16.0053 100.156 15.984V15.344C100.519 15.3653 100.967 15.3867 101.5 15.408C102.055 15.4293 102.599 15.44 103.132 15.44C103.602 15.44 104.05 15.4293 104.476 15.408C104.903 15.3867 105.287 15.3653 105.628 15.344L116.924 32.752V19.056C116.924 18.2667 116.85 17.6587 116.7 17.232C116.572 16.8053 116.295 16.496 115.868 16.304C115.463 16.112 114.844 16.0053 114.012 15.984V15.344C114.396 15.3653 114.898 15.3867 115.516 15.408C116.156 15.4293 116.743 15.44 117.276 15.44C117.831 15.44 118.375 15.4293 118.908 15.408C119.463 15.3867 119.911 15.3653 120.252 15.344Z" fill="black"/>
          <path d="M96.6242 15.344C96.5389 16.0907 96.4749 16.816 96.4323 17.52C96.4109 18.224 96.4002 18.7573 96.4002 19.12C96.4002 19.504 96.4109 19.8773 96.4323 20.24C96.4536 20.5813 96.4749 20.8693 96.4962 21.104H95.7602C95.6322 19.8453 95.4509 18.8533 95.2162 18.128C94.9816 17.3813 94.5763 16.8587 94.0003 16.56C93.4456 16.24 92.6029 16.08 91.4723 16.08H88.8162C88.0909 16.08 87.5362 16.144 87.1522 16.272C86.7896 16.3787 86.5443 16.624 86.4163 17.008C86.2883 17.3707 86.2243 17.9467 86.2243 18.736V34.608C86.2243 35.376 86.2883 35.952 86.4163 36.336C86.5443 36.72 86.7896 36.976 87.1522 37.104C87.5362 37.2107 88.0909 37.264 88.8162 37.264H91.1522C92.4962 37.264 93.5096 37.0827 94.1923 36.72C94.8963 36.3573 95.3976 35.7707 95.6963 34.96C96.0163 34.128 96.2509 33.008 96.4002 31.6H97.1363C97.0723 32.176 97.0402 32.944 97.0402 33.904C97.0402 34.3093 97.0509 34.896 97.0723 35.664C97.1149 36.4107 97.1789 37.1893 97.2643 38C96.1763 37.9573 94.9496 37.936 93.5843 37.936C92.2189 37.9147 91.0029 37.904 89.9362 37.904C89.4669 37.904 88.8589 37.904 88.1123 37.904C87.3869 37.904 86.5976 37.9147 85.7442 37.936C84.8909 37.936 84.0269 37.9467 83.1522 37.968C82.2776 37.968 81.4456 37.9787 80.6562 38V37.36C81.3816 37.3173 81.9256 37.232 82.2882 37.104C82.6722 36.976 82.9283 36.72 83.0563 36.336C83.1843 35.952 83.2482 35.376 83.2482 34.608V18.736C83.2482 17.9467 83.1843 17.3707 83.0563 17.008C82.9283 16.624 82.6722 16.368 82.2882 16.24C81.9256 16.0907 81.3816 16.0053 80.6562 15.984V15.344C81.4456 15.3653 82.2776 15.3867 83.1522 15.408C84.0269 15.408 84.8909 15.4187 85.7442 15.44C86.5976 15.44 87.3869 15.44 88.1123 15.44C88.8589 15.44 89.4669 15.44 89.9362 15.44C90.9176 15.44 92.0269 15.44 93.2643 15.44C94.5229 15.4187 95.6429 15.3867 96.6242 15.344ZM91.1202 26.288C91.1202 26.288 91.1202 26.3947 91.1202 26.608C91.1202 26.8213 91.1202 26.928 91.1202 26.928H85.2643C85.2643 26.928 85.2643 26.8213 85.2643 26.608C85.2643 26.3947 85.2643 26.288 85.2643 26.288H91.1202ZM92.0482 22.064C91.9629 23.28 91.9202 24.208 91.9202 24.848C91.9416 25.488 91.9522 26.0747 91.9522 26.608C91.9522 27.1413 91.9629 27.728 91.9842 28.368C92.0056 29.008 92.0589 29.936 92.1442 31.152H91.4082C91.3229 30.4693 91.2162 29.808 91.0882 29.168C90.9816 28.5067 90.7256 27.9733 90.3203 27.568C89.9363 27.1413 89.2749 26.928 88.3363 26.928V26.288C89.0403 26.288 89.5736 26.1493 89.9362 25.872C90.3202 25.5733 90.5976 25.2 90.7682 24.752C90.9389 24.304 91.0562 23.8453 91.1202 23.376C91.1842 22.8853 91.2482 22.448 91.3122 22.064H92.0482Z" fill="black"/>
          <path d="M68.845 14.896C70.2317 14.896 71.3517 15.1093 72.205 15.536C73.0583 15.9413 73.8583 16.4213 74.605 16.976C74.8823 17.1893 75.0957 17.296 75.245 17.296C75.6503 17.296 75.917 16.6453 76.045 15.344H76.781C76.7384 16.1333 76.7063 17.0933 76.685 18.224C76.6637 19.3547 76.653 20.848 76.653 22.704H75.917C75.7677 21.808 75.5863 20.944 75.373 20.112C75.1597 19.28 74.8077 18.5653 74.317 17.968C73.6983 17.1787 72.8877 16.5707 71.885 16.144C70.8823 15.696 69.8477 15.472 68.781 15.472C67.7144 15.472 66.7437 15.7387 65.869 16.272C65.0157 16.784 64.2797 17.5307 63.661 18.512C63.0423 19.4933 62.5623 20.6773 62.221 22.064C61.901 23.4293 61.741 24.976 61.741 26.704C61.741 30.544 62.3597 33.36 63.597 35.152C64.8343 36.9227 66.7543 37.808 69.357 37.808C70.125 37.808 70.7863 37.7013 71.341 37.488C71.917 37.2533 72.365 37.0293 72.685 36.816C73.0904 36.5387 73.3463 36.2827 73.453 36.048C73.5597 35.792 73.613 35.4613 73.613 35.056V31.984C73.613 31.1093 73.5277 30.4587 73.357 30.032C73.1863 29.6053 72.8663 29.3173 72.397 29.168C71.949 29.0187 71.277 28.9333 70.381 28.912V28.272C70.765 28.2933 71.213 28.3147 71.725 28.336C72.237 28.336 72.7703 28.3467 73.325 28.368C73.901 28.368 74.4237 28.368 74.893 28.368C75.597 28.368 76.2264 28.3573 76.781 28.336C77.357 28.3147 77.837 28.2933 78.221 28.272V28.912C77.7517 28.9333 77.3997 29.008 77.165 29.136C76.9304 29.264 76.7703 29.52 76.685 29.904C76.621 30.288 76.589 30.8747 76.589 31.664V38H75.949C75.9277 37.6373 75.8424 37.2427 75.693 36.816C75.565 36.3893 75.3624 36.176 75.085 36.176C74.957 36.176 74.829 36.208 74.701 36.272C74.573 36.336 74.349 36.4853 74.029 36.72C73.325 37.2533 72.5783 37.68 71.789 38C70.9997 38.2987 70.0823 38.448 69.037 38.448C66.8397 38.448 64.9517 38 63.373 37.104C61.8157 36.1867 60.621 34.8747 59.789 33.168C58.957 31.4613 58.541 29.424 58.541 27.056C58.541 24.56 58.989 22.4053 59.885 20.592C60.781 18.7787 61.997 17.3813 63.533 16.4C65.0903 15.3973 66.861 14.896 68.845 14.896Z" fill="black"/>
          <path d="M54.6242 15.344C54.5389 16.0907 54.4749 16.816 54.4323 17.52C54.4109 18.224 54.4002 18.7573 54.4002 19.12C54.4002 19.504 54.4109 19.8773 54.4323 20.24C54.4536 20.5813 54.4749 20.8693 54.4962 21.104H53.7602C53.6322 19.8453 53.4509 18.8533 53.2162 18.128C52.9816 17.3813 52.5762 16.8587 52.0002 16.56C51.4456 16.24 50.6029 16.08 49.4722 16.08H46.8162C46.0909 16.08 45.5362 16.144 45.1522 16.272C44.7896 16.3787 44.5442 16.624 44.4162 17.008C44.2882 17.3707 44.2242 17.9467 44.2242 18.736V34.608C44.2242 35.376 44.2882 35.952 44.4162 36.336C44.5442 36.72 44.7896 36.976 45.1522 37.104C45.5362 37.2107 46.0909 37.264 46.8162 37.264H49.1522C50.4962 37.264 51.5096 37.0827 52.1922 36.72C52.8962 36.3573 53.3976 35.7707 53.6963 34.96C54.0163 34.128 54.2509 33.008 54.4002 31.6H55.1362C55.0722 32.176 55.0402 32.944 55.0402 33.904C55.0402 34.3093 55.0509 34.896 55.0723 35.664C55.1149 36.4107 55.1789 37.1893 55.2643 38C54.1763 37.9573 52.9496 37.936 51.5842 37.936C50.2189 37.9147 49.0029 37.904 47.9362 37.904C47.4669 37.904 46.8589 37.904 46.1122 37.904C45.3869 37.904 44.5976 37.9147 43.7442 37.936C42.8909 37.936 42.0269 37.9467 41.1522 37.968C40.2776 37.968 39.4456 37.9787 38.6562 38V37.36C39.3816 37.3173 39.9256 37.232 40.2882 37.104C40.6723 36.976 40.9282 36.72 41.0562 36.336C41.1842 35.952 41.2482 35.376 41.2482 34.608V18.736C41.2482 17.9467 41.1842 17.3707 41.0562 17.008C40.9282 16.624 40.6723 16.368 40.2882 16.24C39.9256 16.0907 39.3816 16.0053 38.6562 15.984V15.344C39.4456 15.3653 40.2776 15.3867 41.1522 15.408C42.0269 15.408 42.8909 15.4187 43.7442 15.44C44.5976 15.44 45.3869 15.44 46.1122 15.44C46.8589 15.44 47.4669 15.44 47.9362 15.44C48.9176 15.44 50.0269 15.44 51.2642 15.44C52.5229 15.4187 53.6429 15.3867 54.6242 15.344ZM49.1202 26.288C49.1202 26.288 49.1202 26.3947 49.1202 26.608C49.1202 26.8213 49.1202 26.928 49.1202 26.928H43.2642C43.2642 26.928 43.2642 26.8213 43.2642 26.608C43.2642 26.3947 43.2642 26.288 43.2642 26.288H49.1202ZM50.0482 22.064C49.9629 23.28 49.9202 24.208 49.9202 24.848C49.9416 25.488 49.9522 26.0747 49.9522 26.608C49.9522 27.1413 49.9629 27.728 49.9842 28.368C50.0056 29.008 50.0589 29.936 50.1442 31.152H49.4082C49.3229 30.4693 49.2162 29.808 49.0882 29.168C48.9816 28.5067 48.7256 27.9733 48.3202 27.568C47.9362 27.1413 47.2749 26.928 46.3363 26.928V26.288C47.0403 26.288 47.5736 26.1493 47.9362 25.872C48.3202 25.5733 48.5976 25.2 48.7682 24.752C48.9389 24.304 49.0562 23.8453 49.1202 23.376C49.1842 22.8853 49.2482 22.448 49.3122 22.064H50.0482Z" fill="black"/>
          <path d="M28.0038 15.344V15.984C27.2784 16.0053 26.7238 16.0907 26.3398 16.24C25.9771 16.368 25.7318 16.624 25.6038 17.008C25.4757 17.3707 25.4118 17.9467 25.4118 18.736V34.608C25.4118 35.376 25.4757 35.952 25.6038 36.336C25.7318 36.72 25.9771 36.976 26.3398 37.104C26.7238 37.2107 27.2784 37.264 28.0038 37.264H30.3398C31.3424 37.264 32.1531 37.1573 32.7717 36.944C33.4117 36.7307 33.9131 36.4 34.2758 35.952C34.6598 35.4827 34.9477 34.864 35.1397 34.096C35.3317 33.328 35.4811 32.3893 35.5878 31.28H36.3238C36.2598 31.9413 36.2278 32.816 36.2278 33.904C36.2278 34.3093 36.2384 34.896 36.2598 35.664C36.3024 36.4107 36.3664 37.1893 36.4518 38C35.3638 37.9573 34.1371 37.936 32.7717 37.936C31.4064 37.9147 30.1904 37.904 29.1238 37.904C28.6544 37.904 28.0464 37.904 27.2997 37.904C26.5744 37.904 25.7851 37.9147 24.9317 37.936C24.0784 37.936 23.2144 37.9467 22.3398 37.968C21.4651 37.968 20.6331 37.9787 19.8438 38V37.36C20.5691 37.3173 21.1131 37.232 21.4757 37.104C21.8598 36.976 22.1157 36.72 22.2437 36.336C22.3717 35.952 22.4358 35.376 22.4358 34.608V18.736C22.4358 17.9467 22.3717 17.3707 22.2437 17.008C22.1157 16.624 21.8598 16.368 21.4757 16.24C21.1131 16.0907 20.5691 16.0053 19.8438 15.984V15.344C20.2917 15.3653 20.8784 15.3867 21.6038 15.408C22.3291 15.4293 23.1078 15.44 23.9398 15.44C24.6864 15.44 25.4224 15.4293 26.1478 15.408C26.8944 15.3867 27.5131 15.3653 28.0038 15.344Z" fill="black"/>
          <path d="M16.3118 15.344C16.2264 16.0907 16.1624 16.816 16.1198 17.52C16.0984 18.224 16.0878 18.7573 16.0878 19.12C16.0878 19.504 16.0984 19.8773 16.1198 20.24C16.1411 20.5813 16.1624 20.8693 16.1838 21.104H15.4478C15.3198 19.8453 15.1384 18.8533 14.9038 18.128C14.6691 17.3813 14.2638 16.8587 13.6878 16.56C13.1331 16.24 12.2904 16.08 11.1598 16.08H8.50375C7.77842 16.08 7.22375 16.144 6.83975 16.272C6.47708 16.3787 6.23175 16.624 6.10375 17.008C5.97575 17.3707 5.91175 17.9467 5.91175 18.736V34.608C5.91175 35.376 5.97575 35.952 6.10375 36.336C6.23175 36.72 6.47708 36.976 6.83975 37.104C7.22375 37.2107 7.77842 37.264 8.50375 37.264H10.8398C12.1838 37.264 13.1971 37.0827 13.8798 36.72C14.5838 36.3573 15.0851 35.7707 15.3838 34.96C15.7038 34.128 15.9384 33.008 16.0878 31.6H16.8238C16.7598 32.176 16.7278 32.944 16.7278 33.904C16.7278 34.3093 16.7384 34.896 16.7598 35.664C16.8024 36.4107 16.8664 37.1893 16.9518 38C15.8638 37.9573 14.6371 37.936 13.2718 37.936C11.9064 37.9147 10.6904 37.904 9.62375 37.904C9.15442 37.904 8.54642 37.904 7.79975 37.904C7.07442 37.904 6.28508 37.9147 5.43175 37.936C4.57842 37.936 3.71442 37.9467 2.83975 37.968C1.96508 37.968 1.13308 37.9787 0.34375 38V37.36C1.06908 37.3173 1.61308 37.232 1.97575 37.104C2.35975 36.976 2.61575 36.72 2.74375 36.336C2.87175 35.952 2.93575 35.376 2.93575 34.608V18.736C2.93575 17.9467 2.87175 17.3707 2.74375 17.008C2.61575 16.624 2.35975 16.368 1.97575 16.24C1.61308 16.0907 1.06908 16.0053 0.34375 15.984V15.344C1.13308 15.3653 1.96508 15.3867 2.83975 15.408C3.71442 15.408 4.57842 15.4187 5.43175 15.44C6.28508 15.44 7.07442 15.44 7.79975 15.44C8.54642 15.44 9.15442 15.44 9.62375 15.44C10.6051 15.44 11.7144 15.44 12.9518 15.44C14.2104 15.4187 15.3304 15.3867 16.3118 15.344ZM10.8078 26.288C10.8078 26.288 10.8078 26.3947 10.8078 26.608C10.8078 26.8213 10.8078 26.928 10.8078 26.928H4.95175C4.95175 26.928 4.95175 26.8213 4.95175 26.608C4.95175 26.3947 4.95175 26.288 4.95175 26.288H10.8078ZM11.7358 22.064C11.6504 23.28 11.6078 24.208 11.6078 24.848C11.6291 25.488 11.6398 26.0747 11.6398 26.608C11.6398 27.1413 11.6504 27.728 11.6718 28.368C11.6931 29.008 11.7464 29.936 11.8318 31.152H11.0958C11.0104 30.4693 10.9038 29.808 10.7758 29.168C10.6691 28.5067 10.4131 27.9733 10.0078 27.568C9.62375 27.1413 8.96242 26.928 8.02375 26.928V26.288C8.72775 26.288 9.26108 26.1493 9.62375 25.872C10.0078 25.5733 10.2851 25.2 10.4558 24.752C10.6264 24.304 10.7438 23.8453 10.8078 23.376C10.8718 22.8853 10.9358 22.448 10.9998 22.064H11.7358Z" fill="black"/>
          <circle class="developer" cx="5" cy="5" r="5" fill="#D9D9D9"/>
          <circle class="developer" cx="20" cy="5" r="5" fill="#D9D9D9"/>
          <circle class="developer" cx="35" cy="5" r="5" fill="black"/>
        </svg>`;
  }
}


let pdfUrl = "assets/OM-Resume.pdf"
function link(element) {
  let text  = element.innerHTML.toString()
  if (menuBTN.classList.contains("not_clicked")) {
    console.log("hello");
  } else {
    console.log("hello2");
    menu_work();
  }
  
  if (element.innerHTML == "CONTACT") {
    scroll.scrollTo(document.getElementById("section5"));
    modal('type2', "", "click on G-mail to send Mail.", "close" , 6000)
  } else if (element.innerHTML == "PROJECTS") {
    scroll.scrollTo(document.getElementById("section3"));
    modal('type2', "", "Hover between images to check description.", "close" , 6000)
  } else if (element.innerHTML == "ABOUT") {
    scroll.scrollTo(document.getElementById("section2"));
    modal('type2', "", "hey what's up", "hey!" , 4000 )
  } else if (text.includes("resume")) {
    window.open(pdfUrl);
  }
}




// Define the URL of the PDF file
// var pdfUrl = "http://example.com/path/to/your/pdf.pdf";

// Function to trigger the download
function downloadPdf() {
  fetch(pdfUrl)
    .then(response => response.blob())
    .then(blob => {
      // Create a blob URL for the PDF data
      var url = window.URL.createObjectURL(blob);

      // Create a link element to trigger the download
      var a = document.createElement("a");
      a.href = url;
      a.download = "OM-resume.pdf"; // Set the desired file name
      document.body.appendChild(a);

      // Trigger a click event on the link element to initiate the download
      a.click();

      // Clean up by revoking the blob URL and removing the link element
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      return complete = true
    }).then(e=>{
      modal('type1', 'Downloaded', "Resume PDF file is downloaded successfully. <br> you can excess from download folder.")
    })
    .catch(error => {
      console.error("Failed to download the PDF file: ", error);
      modal('type1', 'No internet connection', "turn on your internet connection to download the file.")

    });
}

// Call the downloadPdf() function when needed, e.g., in response to a button click
document.querySelector("#meun_link3 > span").addEventListener("click", downloadPdf);