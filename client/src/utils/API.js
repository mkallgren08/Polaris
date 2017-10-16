import axios from "axios";

<<<<<<< HEAD
//Setting up front end routes

=======
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
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
<<<<<<< HEAD
    return axios.post("/api/users/profile", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    }).then(response => {
      console.log(JSON.stringify(response, null, 2));
    }).catch(err => {
      console.log(err);
    });
  },

  // Save Emergency Form Data
  saveForm: function(token, data) {
    return axios.post("/api/users/emergencyform", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    }).then(response => {
      console.log(JSON.stringify(response, null, 2));
    }).catch(err => {
      console.log(err);
    });
  }
}

=======
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
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
