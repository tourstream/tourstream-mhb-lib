
export function translateCurrentUrl (i18n) {
  const currentPath = window.location.pathname
  let currentPage = ''
  const urls = {}

  if (i18n.store.data
    && i18n.store.data[i18n.language]
    && i18n.store.data[i18n.language][i18n.options.ns]) {
    const store = i18n.store.data
    const links = store[i18n.language][i18n.options.ns].link

    let hotels = null
    try {
      hotels = JSON.parse(store[i18n.language][i18n.options.ns].hotels)
    } catch (e) {
      console.log('hotels', e.message)
    }

    if (hotels && currentPath.indexOf(`/${i18n.language}/hotels/`) === 0) {
      // we are on a hotel detail page
      const provided_edv_code = currentPath.split('/')[3]
      // find current hotel
      const hotel = hotels.filter(hotel => hotel.edv_code === provided_edv_code).shift()
      if (hotel) {
        // iterate through available langs
        Object.keys(store).map(key => {
          try {
            // translate and parse hotels array
            const translated_hotels = JSON.parse(i18n.getFixedT(key)('hotels'))
            const translated_hotel = translated_hotels
              .filter(hotel => hotel.edv_code === provided_edv_code).shift()
            // add translated url to returned list
            urls[key] = translated_hotel.details_page_url
          } catch (e) {
            console.log('translateUrl hotels', e.message)
          }
          return null
        })
      }
    } else {
      // we are on a content page
      // get current page key
      if (i18n.store.data[i18n.language][i18n.options.ns].link) {
        Object.keys(links).map(key => {
          if (links[key].url && currentPath === `/${i18n.language}${links[key].url}`) {
            currentPage = `link.${key}.url`
          }
          return null
        })
      }
      // find translations for current page if available
      if (currentPage.length) {
        Object.keys(store).map(key => {
          urls[key] = `/${key + i18n.getFixedT(key)(currentPage)}`
          return null
        })
      }
    }
  }
  return { urls }
}
