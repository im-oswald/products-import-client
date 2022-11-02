import { api } from './base';

export async function getAllProducts() {
  const response = await api.get('/api/v1/imports')
    .then((res) => res.data )
    .catch((err)=> console.log(err))
  
  return response;
}

export async function importProducts(formData) {
  const response = await api.post('/api/v1/imports', formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data )
    .catch((err)=> console.log(err))
  
  return response;
}