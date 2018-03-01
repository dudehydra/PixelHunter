const renderDOM = (element) => {
  const main = document.querySelector('main.central');
  main.innerHTML = element.innerHTML;
};
export default renderDOM;
