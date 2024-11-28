import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Card, Spinner, Table } from "flowbite-react";
import AdminDashboard from "../AdminDashboard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        // todo: connect backend
        // await axios.delete(`http://localhost:8000/api/products/${id}`);
        console.log(`Product with id: ${id} is deleted`);
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Failed to delete the product.");
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner size="xl" />
      </div>
    );
  }

  return (
    <div className="w-[100%] flex justify-between max-md:flex-wrap">
      {/* AdminDashboard Section */}
      <div className="w-[25%] max-md:w-[100%] max-md:mb-5">
        <AdminDashboard />
      </div>

      {/* Product Table */}
      <div className="w-[72%] max-md:w-[100%]">
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Product List</h2>
            <Link to="/admin/products/new">
              <Button color="success">Add New Product</Button>
            </Link>
          </div>

          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>#</Table.HeadCell>
              <Table.HeadCell>Title</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Actions</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {products.map((product, index) => (
                <Table.Row key={product._id}>
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{product.productTitle}</Table.Cell>
                  <Table.Cell>${product.price}</Table.Cell>
                  <Table.Cell>{product.category}</Table.Cell>
                  <Table.Cell className="flex space-x-2">
                    <Link to={`/admin/products/${product._id}/edit`}>
                      <Button color="warning" size="xs">
                        Edit
                      </Button>
                    </Link>
                    <Button
                      color="failure"
                      size="xs"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>

          {products.length === 0 && (
            <p className="text-center text-gray-500 mt-4">No products found.</p>
          )}
        </Card>
      </div>
    </div>
  );
};

export default ProductList;
