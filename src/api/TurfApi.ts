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

  public getBookings = async (page?: string | number, status?: string) => {
    let url = "/api/bookings";
    if (page && status) {
      url = `${url}?page=${page}&status=${status}`
    } else if (page) {
      url = `${url}?page=${page}`
    } else if (status) {
      url = `${url}?status=${status}`
    }
    return await axiosToken.get(url);
  }

  public searchTurfs = async(query?: string) => {
    if (!query) return;
    return await axiosNonToken.get(`/api/turfs/search?query=${query}`);
  }

  public createTurf = async (data: unknown) => {
    if(!data) return;
    return await axiosToken.post("/api/turfs", data);
  }

  public getTurfsByOwner = async (page?: string | number) => {
    let url = "/api/turfs/owner";
    if (page) {
      url = `${url}?page=${page}`
    }
    return await axiosToken.get(url);
  }
} 

export default new TurfApi();