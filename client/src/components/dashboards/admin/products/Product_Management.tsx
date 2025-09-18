"use client";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  DropdownMenu,
  Button,
  Input,
  Label,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../../ui";
import {
  Plus,
  IndianRupee,
  Download,
  Package,
  CheckCircle,
  AlertTriangle,
  XCircle,
  MoreHorizontal,
} from "lucide-react";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import api from "@/utils/api"; // your axios instance
import { Product } from "@/types/Product";

export function ProductsManagement() {
  const [products, setProducts] = useState<Product[]>([]);
  const [showProductDialog, setShowProductDialog] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [deleteProduct, setDeleteProduct] = useState<Product | null>(null);

  const handleRowAction = (action: string, product: Product) => {
    if (action === "edit") {
      setEditingProduct(product);
      setShowProductDialog(true); // ✅ open the same dialog
    } else if (action === "delete") {
      setDeleteProduct(product);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");
      setProducts(res.data);
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Failed to load products");
    }
  };

  const handleSaveProduct = async (productData: any) => {
    try {
      const formData = new FormData();
      for (const key in productData) {
        formData.append(key, productData[key]);
      }

      let res: { data: Product };
      if (editingProduct) {
        res = await api.put(`/products/${editingProduct._id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setProducts((prev) =>
          prev.map((p) => (p._id === editingProduct._id ? res.data : p))
        );
        toast.success("Product updated successfully");
      } else {
        res = await api.post("/products", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setProducts((prev) => [...prev, res.data]);
        toast.success("Product added successfully");
      }
      resetForm();
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Failed to save product");
    }
  };

  const handleDeleteProduct = async () => {
    if (!deleteProduct) return;
    try {
      await api.delete(`/products/${deleteProduct._id}`);
      setProducts((prev) => prev.filter((p) => p._id !== deleteProduct._id));
      toast.success(`Product "${deleteProduct.name}" deleted successfully`);
      setDeleteProduct(null);
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Failed to delete product");
    }
  };

  const resetForm = () => {
    setEditingProduct(null);
    setShowProductDialog(false);
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between ">
              <div>
                <p className="text-sm text-muted-foreground">Total Products</p>
                <p className="text-2xl font-bold">{products.length}</p>
              </div>
              <div className="w-8 h-8 bg-blue-100 rounded-lg  flex items-center justify-center">
                <Package className="w-4 h-4 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">In Stock</p>
                <p className="text-2xl font-bold text-green-600">
                  {products.filter((p) => p.status === "in_stock").length}
                </p>
              </div>
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Low Stock</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {products.filter((p) => p.status === "low_stock").length}
                </p>
              </div>
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Out of Stock</p>
                <p className="text-2xl font-bold text-red-600">
                  {products.filter((p) => p.status === "out_of_stock").length}
                </p>
              </div>
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <XCircle className="w-4 h-4 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1>Products Management</h1>
          <p className="text-muted-foreground">
            Manage your product catalog and inventory
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Dialog open={showProductDialog} onOpenChange={setShowProductDialog}>
            <DialogTrigger asChild>
              <Button
                onClick={() => {
                  setEditingProduct(null); // ✅ reset for Add
                }}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Product
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl max-h-[90vh] bg-white overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingProduct ? "Edit Product" : "Add New Product"}
                </DialogTitle>
                <DialogDescription>
                  {editingProduct
                    ? "Update product information"
                    : "Add a new product to your catalog"}
                </DialogDescription>
              </DialogHeader>
              <ProductForm
                product={editingProduct}
                onSave={handleSaveProduct}
                onCancel={() => setShowProductDialog(false)}
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Product Cards */}
      <div className="overflow-x-auto rounded-md border border-color">
        <Table>
          <TableHeader>
            <TableRow className="border border-color">
              <TableHead>id</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price&Oldprice</TableHead>

              <TableHead>Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((p) => (
              <TableRow key={p._id}>
                <TableCell>{p._id}</TableCell>
                <TableCell>
                  <img
                    src={
                      p.image
                        ? `http://localhost:8000${p.image}`
                        : "/placeholder.png"
                    }
                    alt={p.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                </TableCell>
                <TableCell className="max-w-[200px] truncate">
                  <h4 className="truncate cursor-pointer" title={p.name}>
                    {p.name}
                  </h4>
                </TableCell>

                <TableCell>{p.category}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center font-medium text-green-600">
                      <IndianRupee className="w-3 h-3 mr-1" />
                      {p.price}
                    </span>
                    {p.oldprice ? (
                      <span className="flex items-center text-sm text-gray-500 line-through">
                        <IndianRupee className="w-3 h-3 mr-1" />
                        {p.oldprice}
                      </span>
                    ) : null}
                    {(p.discount ?? 0) > 0 && (
                      <span className="text-xs font-bold text-red-600">
                        -{p.discount ?? 0}%
                      </span>
                    )}
                  </div>
                </TableCell>

                <TableCell>{p.stock}</TableCell>
                <TableCell>
                  <span
                    className={
                      p.status === "in_stock"
                        ? "text-green-600 font-semibold"
                        : p.status === "low_stock"
                        ? "text-yellow-600 font-semibold"
                        : "text-red-600 font-semibold"
                    }
                  >
                    {p.status.replace("_", " ")}
                  </span>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute -translate-y-1/2"
                      >
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white z-10 relative">
                      <DropdownMenuItem
                        onClick={() => handleRowAction("edit", p)}
                      >
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleRowAction("delete", p)}
                      >
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Delete Confirmation */}
      <AlertDialog
        open={!!deleteProduct}
        onOpenChange={() => setDeleteProduct(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Product</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete "{deleteProduct?.name}"? This
              action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteProduct}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

interface ProductFormProps {
  product: Product | null;
  onSave: (productData: any) => void;
  onCancel: () => void;
}

function ProductForm({ product, onSave, onCancel }: ProductFormProps) {
  const validationSchema = Yup.object({
    name: Yup.string().required("Product name is required"),
    category: Yup.string().required("Category is required"),
    price: Yup.number().required("Price required").min(0),
    stock: Yup.number().required("Stock required").min(0),
    oldprice: Yup.number().min(0),
  });

  return (
    <Formik
      initialValues={{
        name: product?.name || "",
        category: product?.category || "",
        price: product?.price || 0,
        stock: product?.stock || 0,
        oldprice: product?.oldprice || 0,
        status: product?.status || "in_stock",

        image: null,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onSave(values);
      }}
    >
      {({ setFieldValue }) => (
        <Form className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Field as={Input} name="name" placeholder="Product name" />
            <ErrorMessage
              name="name"
              component="p"
              className="text-sm text-destructive"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Field
              as="select"
              name="category"
              className="w-full border rounded p-2"
            >
              <option value="">Select category</option>
              <option value="Electronics">Electronics</option>
              <option value="Furniture">Furniture</option>

              <option value="Jewellery & Accessories">
                Jewellery & Accessories
              </option>
              <option value="Home & Garden">Home & Garden</option>
            </Field>
            <ErrorMessage
              name="category"
              component="p"
              className="text-sm text-destructive"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Product Image</Label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFieldValue("image", e.target.files?.[0])}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Field
              as="select"
              name="status"
              className="w-full border rounded p-2"
            >
              <option value="in_stock">In Stock</option>
              <option value="low_stock">Low Stock</option>
              <option value="out_of_stock">Out of Stock</option>
            </Field>
            <ErrorMessage
              name="status"
              component="p"
              className="text-sm text-destructive"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="oldprice">Old Price</Label>
            <Field as={Input} name="oldprice" placeholder="oldprice" />
            <ErrorMessage
              name="oldprice"
              component="p"
              className="text-sm text-destructive"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Field as={Input} type="number" name="price" />
            <ErrorMessage
              name="price"
              component="p"
              className="text-sm text-destructive"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="stock">Stock</Label>
            <Field as={Input} type="number" name="stock" />
            <ErrorMessage
              name="stock"
              component="p"
              className="text-sm text-destructive"
            />
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline" type="button" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit">{product ? "Update" : "Add"} Product</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
