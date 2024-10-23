export type ProductType = {
  id: number;
  imgSource: string;
  title: string;
  brand: string;
  price: number;
}

export type PreviewImageType = {
  id: string;
  imgSource: string;
}

export interface TurfField {
  id: number;
  name: string;
  description: string;
  address: string;
  location_lat: number;
  location_lon: number;
  rating: number;
  status: "ENABLE" | "DISABLE"; // Use a string literal type for status
  images: Image[];
  prices: Price[];
  createdAt: string; // Assuming format remains the same
  updatedAt: string; // Assuming format remains the same
}

export interface Image {
  id: number;
  url: string;
}
 
export interface Price {
  id: number;
  start_time: string;
  end_time: string;
  price: number;
  createdAt: string; // Assuming format remains the same
  updatedAt: string; // Assuming format remains the same
}
