function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");
    function activateTab(index) {
      tabContent.forEach((el) => {
        el.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((el, index) => {
      el.addEventListener("click", () => {
        activateTab(index);
      });
    });
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

function initScroll() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

  function scrolltoSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  linksInternos.forEach((item) => {
    item.addEventListener("click", scrolltoSection);
  });
}
initScroll();

function initAnimaScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const telaTam = window.innerHeight * 0.8;
    function animatedScroll() {
      sections.forEach((item) => {
        const sectionTop = item.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - telaTam < 0;
        if (isSectionVisible) {
          item.classList.add("ativo");
        } else {
          item.classList.remove("ativo");
        }
      });
    }
    animatedScroll();
    window.addEventListener("scroll", animatedScroll);
  }
}
initAnimaScroll();
