import axios from "axios";

const url = "https://fakestoreapi.com/products";
async function GetCall() {
  return await axios({
    method: "GET",
    url: url,
    })
    .then((res) => {
      console.log(res)
      return res.data;
    })
    .catch((e) => console.log(e));
}

async function PutCall() {
  return await axios({
    method: "PUT",
    url: url + "/7",
    body: JSON.stringify({
      title: "test product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    }),
  })
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.log(e));
}

async function PatchCall(id,prod) {
  return await axios({
    method: "PATCH",
    url: 'https://fakestoreapi.com/products/'+id,
    body: JSON.stringify(prod)
  })
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.log(e));
}

async function PostCall(itemData) {
  return await axios({
    method: "POST",
    url: url,
    body:JSON.stringify(itemData)
  })
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.log(e));
}

async function DeleteCall(id) {
  return await axios({
    method: "DELETE",
    url:'https://fakestoreapi.com/products/'+id ,
  })
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.log(e));
}

async function GetSingleCall(id) {
  return await axios({
    method: "GET",
    url: 'https://fakestoreapi.com/products/'+id,
    })
    .then((res) => {
      console.log(res)
      return res.data;
    })
    .catch((e) => console.log(e));
}

export {PatchCall, PostCall, PutCall, DeleteCall,GetCall,GetSingleCall };
