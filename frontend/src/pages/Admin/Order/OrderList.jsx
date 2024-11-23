import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Badge, Button } from "flowbite-react";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get("http://localhost:8000/api/orders");
      setOrders(response.data);
    };
    fetchOrders();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      <Table>
        <Table.Head>
          <Table.HeadCell>Order ID</Table.HeadCell>
          <Table.HeadCell>Customer</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {orders.map((order) => (
            <Table.Row key={order._id}>
              <Table.Cell>{order._id}</Table.Cell>
              <Table.Cell>{order.customerName}</Table.Cell>
              <Table.Cell>
                <Badge
                  color={order.status === "Delivered" ? "success" : "warning"}
                >
                  {order.status}
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <Link to={`/admin/orders/${order._id}`}>
                  <Button color="info" size="sm" className="mr-2">
                    Update
                  </Button>
                </Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default OrderList;
