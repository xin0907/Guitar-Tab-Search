import Api from "@/services/Api";

export default {
  // 传邮箱 + 密码对象
  register(credentials) {
    // url data config
    return Api().post("register", credentials);
  }
};
