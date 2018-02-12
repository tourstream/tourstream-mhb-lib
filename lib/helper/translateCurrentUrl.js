export function translateCurrentUrl (i18n) {
  const currentPath = window.location.pathname
  let currentPage = ''
  const urls = {}

  // set a default
  if (i18n.language) {
    urls[i18n.language] = `/${i18n.language}`
  } else {
    urls.xx = '/'
  }

  if (i18n.store.data
    && i18n.store.data[i18n.language]
    && i18n.store.data[i18n.language][i18n.options.ns]
    && i18n.store.data[i18n.language][i18n.options.ns].link) {
    const store = i18n.store.data
    const links = store[i18n.language][i18n.options.ns].link

    // get current page key
    Object.keys(links).map(key => {
      if (links[key].url && currentPath === `/de${links[key].url}`) {
        currentPage = `link.${key}.url`
      }
      return null
    })

    // find translations for current page if available
    if (currentPage.length) {
      Object.keys(store).map(key => {
        urls[key] = `/${key + i18n.getFixedT(key)(currentPage)}`
        return null
      })
    }
  }
  return { urls, currentPage }
}
