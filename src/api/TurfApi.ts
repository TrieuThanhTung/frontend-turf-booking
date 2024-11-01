import axiosNonToken from "./ApiNonToken";

class TurfApi {
  public getTurfs = async (page?: string) => {
    let url = "/api/turfs";
    if (page) {
      url = `/api/turfs?page=${page}`
    }
    return await axiosNonToken.get(url);
  }

  public getTurfById = async (id: string | number) => {
    return await axiosNonToken.get(`/api/turfs/${id}`);
  }

  public createBooking = async (data: {
    turfId: number,
    turfPriceId: number,
    dateBooking: string,
  }) => {
    return await axiosNonToken.post("/api/bookings", data);
  }
} 

export default new TurfApi();