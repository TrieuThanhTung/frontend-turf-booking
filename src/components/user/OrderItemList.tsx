import { OrderType } from "../../utils/commonType";
import OrderItem from "./OrderItem";

type Props = {
  orders: OrderType[],
}
const OrderItemList: React.FC<Props> = ({ orders }) => {
  return (
    <div>
      {orders?.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrderItemList;
