import http from "../services/Config";

//this class connect to the "database" , we have the option to : insert or get
class BasicService {
  get(lastnamefind,ascendingselected) {
    return http.get("/findPerson/",{
        params: {
            lastName: lastnamefind,
            Ascending:ascendingselected
        }
    });
  }



  create(data) {

    return http.post("/insertPerson/", data);
  }




}

export default new BasicService();