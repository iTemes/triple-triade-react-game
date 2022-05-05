const scrollByHash = (hash) => {
  if (!hash) return;

  const selector = decodeURIComponent(hash);
  const element = document.querySelector(selector);

  if (!element) return;

  setTimeout(() => {
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  }, 1200);
};

export default scrollByHash;
