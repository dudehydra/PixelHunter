const getElementFromTemplate = (html) => {
  const element = document.createElement(`div`);
  element.innerHTML = html;
  return element;
};

export default getElementFromTemplate;

