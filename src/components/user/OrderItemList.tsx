import { BookingsType, OrderType } from "../../utils/commonType";
import OrderItem from "./OrderItem";

type Props = {
  orders?: OrderType[],
  bookings: BookingsType
}
const OrderItemList: React.FC<Props> = ({ bookings }) => {
  return (
    <div>
      {bookings.bookings?.map((booking) => (
        <OrderItem key={booking.id} booking={booking}/>
      ))}
    </div>
  );
};

export default OrderItemList;
