import axios from "axios";

// 使用自定义配置新建一个实例
export default () => {
  return axios.create({
    baseURL: `http://localhost:8081/`
  });
};
