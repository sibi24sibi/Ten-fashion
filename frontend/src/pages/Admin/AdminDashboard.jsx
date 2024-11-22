import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "flowbite-react";

function AdminDashboard() {
  const adminActions = [
    {
      title: "Products",
      description: "Create, update and delete products.",
      link: "/admin/products",
      buttonText: "Go to Products",
    },
    {
      title: "Orders",
      description: "Track and update the status of orders.",
      link: "/admin/orders",
      buttonText: "Go to Orders",
    },
    {
      title: "Queries",
      description: "Respond to customer mails.",
      link: "/admin/contacts",
      buttonText: "Go to Contacts",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Welcome to Admin Dashboard.</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {adminActions.map((action, index) => (
          <Card key={index}>
            <h2 className="text-lg font-bold">{action.title}</h2>
            <p className="text-gray-600">{action.description}</p>
            <Link to={action.link}>
              <Button color="info" className="mt-4">
                {action.buttonText}
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
