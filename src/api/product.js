import { api } from './axios';
import SweetAlert from '../components/sweetAlert';

export async function getCategorizedProducts(offset = 0, limit = 2) {
  const response = await api.get(`/api/v1/imports?offset=${offset}&limit=${limit}`)
    .then((res) => res.data )
    .catch((err)=> {
      SweetAlert.error(err.response.data.error);
    })
  
  return response;
}

export async function importProducts(formData) {
  const response = await api.post('/api/v1/imports', formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      SweetAlert.success(res.data.message);
    })
    .catch((err)=> {
      SweetAlert.error(err.response.data.error);
    })

  return response;
}

export async function getMoreProducts(categoryId, offset, limit = 5) {
  const response = await api.get(`/api/v1/imports/${categoryId}?offset=${offset}&limit=${limit}`)
    .then((res) => res.data )
    .catch((err)=> {
      SweetAlert.error(err.response.data.error);
    })
  
  return response;
}

