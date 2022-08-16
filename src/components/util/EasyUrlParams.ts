export default class EasyUrlParams {
  param: string

  constructor(param: string) {
    this.param = param
  }

  set(value: string) {
    const url = this.url()
    let get = this.get()
    let getAll = this.getAll()
    if (get === undefined) {
      //no existe el parametro
      if (getAll.length > 0) {
        const newUrl = url + "&" + this.param + "=" + value
        window.history.pushState({}, "repo", newUrl)
      } else {
        const newUrl = url + "?" + this.param + "=" + value
        window.history.pushState({}, "repo", newUrl)
      }
    } else {
      //el parametro existe
      const newUrl = url.replace(
        new RegExp(`${get.param}=${get.value}`, "g"),
        `${get.param}=${value}`
      )
      window.history.pushState({}, "repo", newUrl)
    }
  }

  getAll() {
    const url = this.url()
    // eslint-disable-next-line
    let regex = /\?|\&/g
    let fragment = url.split(regex)
    if (fragment.length === 1) {
      return []
    } else {
      let urlParams = fragment.map((e) => {
        // eslint-disable-next-line
        let param_value: string | string[] = e.replace(/\=/, "...###...")
        param_value = param_value.split("...###...")
        return { param: param_value[0], value: param_value[1] }
      })
      urlParams.shift()
      return urlParams
      //si el parametro ya existe y tiene el mismo valor
      // let exist= (new RegExp(this.param + "=")).test(url)
    }
  }

  get() {
    const urlParams = this.getAll()
    if (urlParams === undefined) {
    } else {
      let result = urlParams.find((e) => {
        return e.param === this.param
      })
      return result
    }
  }

  remove() {
    let url = encodeURI(this.url())
    let get = this.get()

    if (get !== undefined) {
      const evaluation = new RegExp(
        `(${"\\?"}|${"\\&"})${encodeURI(get.param)}=${encodeURI(get.value)}`,
        "g"
      )

      const reorder = url.replace(evaluation, "")
      // eslint-disable-next-line
      const regex = /\?|\&/g
      const fragment: string | string[] = reorder.split(regex)
      window.history.pushState({}, "repo", fragment.join("&").replace(/&/, "?"))
    }
  }

  url() {
    return window.location.href
  }
}
