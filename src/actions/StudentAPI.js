import axios from "axios";

const baseUrl = "https://springbootsenu.herokuapp.com";

export default {
  students(url = baseUrl + "/students") {
    return {
      fetchAll: () => axios.get(url),
      fetchById: (id) => axios.get(url + "/" + id),
      create: (newStudent) =>
        axios.post(baseUrl + "/createstudent", newStudent),
      update: (id, updateStudent) => axios.put(url + "/" + id, updateStudent),
      delete: (id) => axios.delete(url + "/" + id),
    };
  },
};
