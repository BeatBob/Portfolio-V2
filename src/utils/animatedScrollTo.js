// Example Use
// window.scrollPageTo('#some-section', 2000);
// window.scrollPageTo(document.getElementById('some-section'), 1000);
// window.scrollPageTo(500); // will scroll to 500px in 500ms

export function scrollPageTo(to, duration = 150, mobile = false) {
  //t = current time
  //b = start value
  //c = change in value
  //d = duration
  const easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  return new Promise((resolve, reject) => {
    const element = document.scrollingElement;

    // if (typeof to === "string") {
    //   to = document.querySelector(to) || reject();
    // }
    // if (typeof to !== "number") {
    //   to = to.getBoundingClientRect().top + element.scrollLeft;
    // }

    let start = mobile ? element.scrollTop : element.scrollLeft,
      change = to - start,
      currentTime = 0,
      increment = 20;

    const animateScroll = function () {
      currentTime += increment;
      let val = easeInOutQuad(currentTime, start, change, duration);
      mobile ? (element.scrollTop = val) : (element.scrollLeft = val);
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      } else {
        resolve();
      }
    };
    animateScroll();
  });
}
