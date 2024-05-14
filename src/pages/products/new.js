import ProductForm from "@/components/ProductForm";
import Layout from "@/components/Layout";

export default function NewProduct() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">New Product</h1>
      <ProductForm />
    </Layout>
  );
}