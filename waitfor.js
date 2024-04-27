function waitFor(selector) {
  return new Promise((resolve, reject) => {
    const e = document.querySelector(selector);
    if (e) {
      resolve(e);
      return;
    }
    new MutationObserver((m, o) => {
      Array.from(document.querySelectorAll(selector)).forEach((element) => {
        resolve(element);
        o.disconnect();
      });
    }).observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  });
}
