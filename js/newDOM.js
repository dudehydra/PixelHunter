const getElementFromTemplate = (html) => {
  const container = document.createElement(`template`);
  container.innerHTML = html;
  return container.content;
};
export default getElementFromTemplate;
