// let titleStickyScoll = gsap.titmeline({
//   scrollTrigger: {
//     trigger: ".title-sticky",
//     start: "bottom top",
//     end: "0",
//     scrub: true,
//     pin: true,
//   }
// })


// ScrollTrigger.create({
//   trigger: ".title-sticky",
//   start: "top top",
//   end: "bottom bottom",
//   pin: ".banner-head",
//   scrub: true
// });


// let st = ScrollTrigger.create({
//   trigger: ".banner-head",
//   pin: ".title-sticky",
//   start: "top top",
//   end: "bottom bottom",
//   onToggle: self => console.log("toggled. active?", self.isActive),
//   onUpdate: self => console.log("progress:", self.progress)
// });

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  // toggleActions: "restart pause resume none",
  markers: true
})

// gsap.to(".title-item", {
//   // !這裡可轉換至 timeline
//   scrollTrigger: {
//     trigger: ".title-container",
//     toggleActions: "restart none none none",
//     start: "top 40%",
//     end: "bottom bottom",
//     pin: "#banner",
//     pinSpacing: false,
//     scrub: true,
//     markers: true
//   },
//   y: -200,
//   duration: 0.3
// })

// const bannerHead = document.querySelector(".banner-head")
// console.log(bannerHead.getAttribute("class").includes("banner-head--fixed"));

// const isBannerHeadEnter = () => {
//   console.log("enter")
//   if (bannerHead.getAttribute("class").includes("banner-head--fixed")) return
//   bannerHead.classList.remove("banner-head--leave")
//   bannerHead.classList.add("banner-head--fixed")
// }

// const isBannerHeadLeave = () => {
//   console.log("leave")
//   bannerHead.classList.remove("banner-head--fixed")
//   bannerHead.classList.add("banner-head--leave")
// }

// ScrollTrigger.create({
//   trigger: ".title-container",
//   start: "top top",
//   end: "bottom bottom",
//   // pin: ".banner-head",
//   // pinSpacing: false,
//   scrub: true,
//   // onEnter: () => isBannerHeadEnter(),
//   // onLeave: () => isBannerHeadLeave(),
//   // onEnterBack: () => isBannerHeadEnter(),
//   // onLeaveBack: () => console.log("leaveBack"),
//   toggleClass: "active",
// });

// ScrollTrigger.create({
//   trigger: ".title-container",
//   start: "top top",
//   end: "bottom bottom",
//   scrub: true,
//   onEnter: () => console.log("enter"),
//   onLeave: () => console.log("leave"),
//   onEnterBack: () => console.log("enterBack"),
//   onLeaveBack: () => console.log("leaveBack"),
//   onUpdate: (self) => console.log("update", self.progress.toFixed(3)),
//   onToggle: (self) => console.log("toggled", self.isActive),
//   toggleClass: "active",
// });

// !start top top 前面為元素的 top 後為頁面的 top
// !scub 如果用數字是延遲幾秒抓取反應

// TODO Enter/enterBack (show) opacity 1
// TODO Leave (noshow) opacity 0

const isItemShow = (item) => {
  console.log(item.trigger.getAttribute("class").includes("noShow"));
  item.trigger.getAttribute("class").includes("noShow") ? item.trigger.classList.remove("title-item--noShow") : item.trigger.classList.add("title-item--noShow")
}

gsap.utils.toArray(".title-item").forEach((item, idx) => {
  ScrollTrigger.create({
    trigger: item,
    start: "top 53%",
    end: "bottom 58%",
    scrub: true,
    onEnter: (self) => isItemShow(self),
    onLeave: () => console.log("leave"),
    onEnterBack: (self) => isItemShow(self),
    onLeaveBack: () => console.log("leaveBack"),
    // onUpdate: (self) => console.log("update", self.progress.toFixed(3)),
    // onToggle: (self) => console.log("toggled", self.isActive),
    // toggleClass: "title-item--noShow",
  });
})