import axios from "axios";

export default {
  getProfile: function(token) {
    return axios.get("/api/users/profile", {
      headers: {
        Authorization: "Bearer " + token
      }
    });
  },

  //Save user profile to the database - auth required
  saveProfile: function(token, data) {
    return axios
      .post("/api/users/profile", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
        }
      })
      .then(response => {
        console.log(JSON.stringify(response, null, 2));
      })
      .catch(err => {
        console.log(err);
      });
  },

  // Save Emergency Form Data
  saveForm: function(token, id) {
    return axios.post("/api/users/" + id + "/emergencyform", {
      headers: {
        Authorization: "Bearer " + token
      }
    });
  }
};
