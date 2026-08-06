import Header from "@/components/Header";

export default function Loading() {
  return (
    <div style={{ backgroundColor: "#020202", minHeight: "100vh", width: "100%" }}>
      <Header />
      <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "70vh", background: "transparent" }}>
        <div 
          className="spinner-border" 
          role="status" 
          style={{ width: "3.5rem", height: "3.5rem", color: "#5d5cff" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3 text-white ct_fs_18">Loading Blog Content...</p>
      </div>
    </div>
  );
}
