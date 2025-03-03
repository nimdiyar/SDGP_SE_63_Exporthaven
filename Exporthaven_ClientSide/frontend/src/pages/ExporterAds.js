import ImageUploader from "../components/ImageUploader";
// ...inside the component
const [showModal, setShowModal] = useState(false);
const [selectedFiles, setSelectedFiles] = useState([]);
const [formData, setFormData] = useState({
  title: "",
  description: "",
  category: "",
  location: "",
  price: "",
  certifications: "",
});
const [errors, setErrors] = useState({});

const handleFilesChange = (files) => setSelectedFiles(files);

const validate = () => {
  const newErrors = {};
  if (!formData.title.trim()) newErrors.title = "Title is required";
  if (!formData.description.trim()) newErrors.description = "Description is required";
  if (!formData.category.trim()) newErrors.category = "Category is required";
  if (!formData.location.trim()) newErrors.location = "Location is required";
  if (!formData.price || isNaN(formData.price)) newErrors.price = "Valid price is required";
  if (!selectedFiles || selectedFiles.length === 0) newErrors.images = "At least one image is required";
  return newErrors;
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validate();
  setErrors(validationErrors);
  if (Object.keys(validationErrors).length > 0) {
    toast.error("Please fix the errors in the form.");
    return;
  }
  try {
    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    Array.from(selectedFiles).forEach((file) => data.append("images", file));
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    await axios.post(`${API_BASE_URL}/api/ads`, data, config);
    toast.success("Ad posted successfully!");
    setShowModal(false);
    setFormData({
      title: "",
      description: "",
      category: "",
      location: "",
      price: "",
      certifications: "",
    });
    setSelectedFiles([]);
    // Optionally refresh ads list
  } catch (error) {
    toast.error(
      "Failed to post ad: " + (error.response?.data?.message || error.message)
    );
  }
};

return (
  <div>
    {/* Existing filters and ads list */}
    {showModal && (
      <div className="modal-overlay">
        <div className="modal">
          <h2>Post New Ad</h2>
          <form onSubmit={handleSubmit} className="ad-form">
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
              {errors.title && <span className="error">{errors.title}</span>}
            </label>
            {/* Additional fields for description, category, location, etc. */}
            <label>
              Images:
              <ImageUploader onFilesChange={handleFilesChange} />
              {errors.images && <span className="error">{errors.images}</span>}
            </label>
            <div className="form-buttons">
              <button type="submit">Post Ad</button>
              <button type="button" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    )}
    <ToastContainer />
  </div>
);
