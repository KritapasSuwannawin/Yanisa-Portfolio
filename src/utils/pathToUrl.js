export default function pathToUrl(path) {
  return process.env.REACT_APP_storageURL + path.replaceAll('/', '%2F') + '?alt=media';
}
