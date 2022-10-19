import axios from "./config";
const token = JSON.parse(localStorage.getItem("ADMIN"));
const headersParam = {
   Authorization: `Bearer ${token}`,
};
// Get All users
export const getAll = async () => {
  try {
    const response = await axios.get(`/user/getalluser`);
   // console.log(response.data.postData);
    return response.data;
  } catch (err) {
    //return console.error(err.response);
    return err.response;
  }
};

// Create New user
export const create = async (data) => {
   try {
    const response = await axios.post("/user/create", data);
    //console.log(response);
    return response.data;
  } catch (err) {
    return err.response;
    //return console.error(err);
  }
};

// Show user
export const show = async (id) => {
  try {
    const response = await axios.get(`/user/${id}` );

    return response.data;
  } catch (err) {
    return err.response;
    //return console.error(err.response);
  }
};

// Update user
export const update = async ({ id, data }) => {
  try {
    // console.log('call api'+id);
    //console.log(data);
    const response = await axios.put(`user/${id}`, data,{ headers: headersParam });
    return response.data;
  } catch (err) {
    return err.response;
    //return console.error(err.response);
  }
};

// Delete existed user
export const destory = async (id) => {
  try {
    const response = await axios.delete(`user/${id}`,{ headers: headersParam });
    //console.log("service call",response.data);
    return response.data;
  } catch (err) {
    return err.response;
    //return console.error(err.response);
  }
};

// login users
export const adminLogin = async (data) => {
  try {
  
    const response = await axios.post("user/login", data); 
   // console.log(response.data.postData);
    return response.data;
  } catch (err) {
    //return console.error(err.response);
    return err.response;
  }
};

// Delete existed user
export const adminLogout = async () => {
  try {
    console.log('service logout call');
    const response = await axios.delete(`user/logout`);
    //console.log("service call",response.data);
    return response.data;
  } catch (err) {
    return err.response;
    //return console.error(err.response);
  }
};