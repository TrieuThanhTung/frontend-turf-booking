import axiosNonToken from "./ApiNonToken";
import axiosToken from "./ApiToken";

class TurfApi {
  public signin = async (data: {
    email: string,
    password: string,
  }) => {
    return await axiosNonToken.post("/api/auth/login", data);
  }

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
    return await axiosToken.post("/api/bookings", data);
  }

  public getUserProfile = async () => {
    return await axiosToken.get("/api/users");
  }
} 

export default new TurfApi();