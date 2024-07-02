import axios from 'axios';

export default class RezervationsServices {
  getAllCoordinates() {
    return axios.get(
      'https://668305a14102471fa4c8fc0f.mockapi.io/sharznet/coordinates',
    );
  }

  getAllRezervations() {
    return axios.get(
      'https://668305a14102471fa4c8fc0f.mockapi.io/sharznet/rezervations',
    );
  }

  updateRezervationDetail(id: any, data: any) {
    return axios.put(
      `https://668305a14102471fa4c8fc0f.mockapi.io/sharznet/rezervations/${id}`,
      data,
    );
  }

  addRezervation(data: any) {
    return axios.post(
      `https://668305a14102471fa4c8fc0f.mockapi.io/sharznet/rezervations`,
      data,
    );
  }

  deleteRezervation(id: any) {
    return axios.delete(
      `https://668305a14102471fa4c8fc0f.mockapi.io/sharznet/rezervations/${id}`,
    );
  }
}
