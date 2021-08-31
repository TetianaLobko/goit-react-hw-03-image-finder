
function imagesFetch(nameImage, page) {
  const KEY = "key=21324053-9f61ed863564998c3c32e619e";
  const GENERAL_LINK = "https://pixabay.com/api/";

  return fetch(
    `${GENERAL_LINK}?${KEY}&q=${nameImage}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((r) => {
    if (r.ok) {
      return r.json();
    }
    return Promise.reject(new Error("There are no images for your request"));
  });
}
const api = {
  imagesFetch,
};

export default api;