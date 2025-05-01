import React, { useState } from "react";

const products = [
  { id: 1, name: "Apple Watch", category: "Gadget" },
  { id: 2, name: "Denim Jacket", category: "Fashion" },
  { id: 3, name: "Wireless Mouse", category: "Gadget" },
  { id: 4, name: "Running Shoes", category: "Sport" },
  { id: 5, name: "Bluetooth Speaker", category: "Gadget" },
  { id: 6, name: "Yoga Pants", category: "Fashion" },
  { id: 7, name: "Football Jersey", category: "Sport" },
  { id: 8, name: "Smartphone Stand", category: "Gadget" },
  { id: 9, name: "Baseball Cap", category: "Fashion" },
  { id: 10, name: "Basketball Shoes", category: "Sport" },
];

const getCategoryStyle = (category) => {
  switch (category) {
    case "Gadget":
      return "bg-blue-100 text-blue-800";
    case "Fashion":
      return "bg-purple-100 text-purple-800";
    case "Sport":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-8xl">
        <input
          type="text"
          placeholder="Search product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-6 py-4 border border-gray-300 rounded-2xl mb-10 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
        />

        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500">Produk tidak ditemukan.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="p-6 border border-gray-200 rounded-2xl shadow-sm bg-white"
              >
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full mb-2 inline-block ${getCategoryStyle(
                    product.category
                  )}`}
                >
                  {product.category}
                </span>
                <h2 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h2>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
