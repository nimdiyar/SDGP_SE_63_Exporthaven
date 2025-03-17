import React from "react";
import ImageUploader from "../ImageUploader";
import CategoryDropdown from "../CategoryDropdown";
import LocationDropdown from "../LocationDropdown";
import {
  X,
  DollarSign,
  FileText,
  MapPin,
  Tag,
  Award,
  ImagePlus,
} from "lucide-react";

const PostAdModal = ({
  showModal,
  setShowModal,
  formData,
  handleChange,
  handleFilesChange,
  handleSubmit,
  errors,
  categories,
}) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
        <div className="sticky top-0 bg-blue-800 p-6 rounded-t-2xl flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-white">
            Create New Listing
          </h2>
          <button
            onClick={() => setShowModal(false)}
            className="text-white hover:bg-teal-600 p-2 rounded-full transition-all"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-800">
                <FileText size={20} />
                <label className="text-sm font-semibold">Title</label>
              </div>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="What are you selling?"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800 text-gray-700 placeholder-gray-300"
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title}</p>
              )}
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-800">
                <Tag size={20} />
                <label className="text-sm font-semibold">Description</label>
              </div>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your item in detail..."
                rows="4"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800 text-gray-700 placeholder-gray-300"
              />
              {errors.description && (
                <p className="text-red-500 text-sm">{errors.description}</p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-800">
                  <Tag size={20} />
                  <label className="text-sm font-semibold">Category</label>
                </div>
                <CategoryDropdown
                  categories={categories}
                  value={formData.category}
                  onChange={(value) =>
                    handleChange({ target: { name: "category", value } })
                  }
                  placeholder="Select Category"
                />
                {errors.category && (
                  <p className="text-red-500 text-sm">{errors.category}</p>
                )}
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-800">
                  <MapPin size={20} />
                  <label className="text-sm font-semibold">Location</label>
                </div>
                <LocationDropdown
                  value={formData.location}
                  onChange={(value) =>
                    handleChange({ target: { name: "location", value } })
                  }
                  placeholder="Select Location"
                />
                {errors.location && (
                  <p className="text-red-500 text-sm">{errors.location}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-800">
                  <DollarSign size={20} />
                  <label className="text-sm font-semibold">Price Range (USD)</label>
                </div>
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700">$</span>
                    <input
                      type="number"
                      name="minPrice"
                      value={formData.minPrice}
                      onChange={handleChange}
                      min="0"
                      step="0.01"
                      placeholder="From"
                      className="w-full pl-8 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800 text-gray-700 placeholder-gray-300"
                    />
                  </div>
                  <div className="relative flex-1">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700">$</span>
                    <input
                      type="number"
                      name="maxPrice"
                      value={formData.maxPrice}
                      onChange={handleChange}
                      min="0"
                      step="0.01"
                      placeholder="To"
                      className="w-full pl-8 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800 text-gray-700 placeholder-gray-300"
                    />
                  </div>
                </div>
                <input
                  type="text"
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                  placeholder="Unit (e.g., per meter, each)"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800 text-gray-700 placeholder-gray-300"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-800">
                  <Award size={20} />
                  <label className="text-sm font-semibold">Certifications</label>
                </div>
                <input
                  type="text"
                  name="certifications"
                  value={formData.certifications}
                  onChange={handleChange}
                  placeholder="e.g., Organic, Fair Trade"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800 text-gray-700 placeholder-gray-300"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-800">
                <ImagePlus size={20} />
                <label className="text-sm font-semibold">Images</label>
              </div>
              <ImageUploader onFilesChange={handleFilesChange} />
              {errors.images && (
                <p className="text-red-500 text-sm">{errors.images}</p>
              )}
            </div>
            <div className="flex gap-4 pt-6">
              <button
                type="submit"
                className="flex-1 px-6 py-3.5 bg-blue-800 text-white font-semibold rounded-xl hover:bg-teal-600 transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                Post Listing
              </button>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="flex-1 px-6 py-3.5 border-2 border-gray-200 text-blue-800 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostAdModal;