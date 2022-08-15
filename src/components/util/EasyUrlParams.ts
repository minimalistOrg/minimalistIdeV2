export default class EasyUrlParams {
  param: string;

  constructor(param: string) {
    this.param = param;
  }

  set(value: string) {
    let url = this.url();
    let get = this.get();
    let getAll = this.getAll();
    if (get === undefined) {
      //no existe el parametro
      if (getAll.length > 0) {
        let add = url + "&" + this.param + "=" + value;
        window.history.pushState({}, "repo", add);
      } else {
        let add = url + "?" + this.param + "=" + value;
        window.history.pushState({}, "repo", add);
      }
    } else {
      //el parametro existe
      let set = url.replace(
        new RegExp(`${get.param}=${get.value}`, "g"),
        `${get.param}=${value}`
      );
      window.history.pushState({}, "repo", set);
    }
    //}
  }

  getAll() {
    let url = this.url();
    // eslint-disable-next-line
    let regex = /\?|\&/g;
    let fragment = url.split(regex);
    if (fragment.length === 1) {
      // No hay Parametros
      return [];
    } else {
      //hay uno o mas Parametros
      let All = fragment.map((e) => {
        // eslint-disable-next-line
        let param_value: string | string[] = e.replace(/\=/, "...###...");
        param_value = param_value.split("...###...");
        return { param: param_value[0], value: param_value[1] };
      });
      All.shift();
      return All;
      //si el parametro ya existe y tiene el mismo valor
      // let exist= (new RegExp(this.param + "=")).test(url)
    }
  }

  get() {
    let All = this.getAll();
    if (All === undefined) {
    } else {
      let result = All.find((e) => {
        return e.param === this.param;
      });
      return result;
    }
  }

  remove() {
    let url = this.url();
    url = encodeURI(url);
    let get = this.get();
    if (get === undefined) {
      // console.error("param not exist");
    } else {
      const evaluation = new RegExp(
        `(${"\\?"}|${"\\&"})${encodeURI(get.param)}=${encodeURI(get.value)}`,
        "g"
      );

      let reorder = url.replace(evaluation, "");
      // eslint-disable-next-line
      let regex = /\?|\&/g;
      let fragment: string | string[] = reorder.split(regex);
      fragment = fragment.join("&");
      // eslint-disable-next-line
      fragment = fragment.replace(/\&/, "?");
      window.history.pushState({}, "repo", fragment);
    }
  }

  url() {
    return window.location.href;
  }
}
