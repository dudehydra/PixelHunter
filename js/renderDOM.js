const renderDOM = (element) => {
  const main = document.querySelector('main.central');
  main.innerHTML = '';
  main.appendChild(element);
};
export default renderDOM;
