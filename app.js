(() => {
  const $doc = document;
  const $tab = $doc.getElementById("js-tab");
  const $nav = $tab.querySelectorAll("[data-nav]");
  const $content = $tab.querySelectorAll("[data-content]");
  const ACTIVE_CLASS = "is-active";
  const navLen = $nav.length;

  const modalImg = [
    '<img src="./images/spring.png" width="480px" height="480px" alt="Spring" />',
    '<img src="./images/summer.png" width="480px" height="480px" alt="Summer" />',
    '<img src="./images/autumn.png" width="480px" height="480px" alt="Autumn" />',
    '<img src="./images/winter.png" width="480px" height="480px" alt="Winter" />',
  ];
  const $btn = $doc.querySelector("#js-btn");
  const $modal = $doc.querySelector("#js-modal");
  // const $modalImg = $modal.querySelectorAll("[data-img]");

  const $modalCloseBtn = $doc.querySelector("#js-close-btn");
  const $modalContents = $doc.querySelector("#js-modal-contents");

  //初期化
  const init = () => {
    $content[0].style.display = "block";
  };
  init();

  //クリックしたら起こるイベント
  const handleClick = (e) => {
    e.preventDefault();

    //クリックされたnavとそのdataを取得
    const $this = e.target;
    const targetVal = $this.dataset.nav;

    //対象外のnav, content全て一旦リセットする
    let index = 0;
    while (index < navLen) {
      $content[index].style.display = "none";
      $nav[index].classList.remove(ACTIVE_CLASS);
      index++;
    }

    //対象のコンテンツをアクティブ化する
    $tab.querySelectorAll(
      '[data-content="' + targetVal + '"]'
    )[0].style.display = "block";
    $modalContents.innerHTML = modalImg[targetVal];
    $nav[targetVal].classList.add(ACTIVE_CLASS);
  };

  //全nav要素に対して関数を適応・発火
  let index = 0;
  while (index < navLen) {
    $nav[index].addEventListener("click", (e) => handleClick(e));
    // $modalImg[index].addEventListener("click", () => {
    //   $modalImg[index].style.display = "none";
    // });
    // $modalContents.innerHTML = modalImg[index];
    index++;
  }
  $btn.addEventListener("click", () => {
    $modal.style.display = "block";
  });
  $modalCloseBtn.addEventListener("click", () => {
    $modal.style.display = "none";
  });
  $modal.addEventListener("click", () => {
    $modal.style.display = "none";
  });
  $modalContents.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
  });

  class Accordion {
    //初期化
    constructor(obj) {
      console.log("obj", obj.hookName);

      const $elm = document.querySelector(obj.hookName);
      const $trigger = $elm.getElementsByTagName(obj.tagName);

      const triggerLen = $trigger.length;
      let index = 0;
      while (index < triggerLen) {
        $trigger[index].addEventListener("click", (e) => this.clickHandler(e));
        index++;
      }
    }

    //
    clickHandler(e) {
      e.preventDefault();

      const $target = e.currentTarget;
      const $content = $target.nextElementSibling;

      if ($content.style.display === "block") {
        $content.style.display = "none";
      } else {
        $content.style.display = "block";
      }
    }
  }

  const SpringAccordion = new Accordion({
    hookName: "#js-faq",
    tagName: "p",
  });

  const SummerAccordion = new Accordion({
    hookName: "#js-faq1",
    tagName: "p",
  });

  const AutumnAccordion = new Accordion({
    hookName: "#js-faq2",
    tagName: "p",
  });

  const WinterAccordion = new Accordion({
    hookName: "#js-faq3",
    tagName: "p",
  });
})();
