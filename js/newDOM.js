const getElementFromTemplate = (html) => {
  return new DOMParser().parseFromString(html, `text/html`).querySelector(`div`);
};

export default getElementFromTemplate;

