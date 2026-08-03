export default function SolutionColumns({ title, columns = [] }) {
  return (
    <section className="complete_sol_project">
      <div className="container">
      <div className="ct_home_titles_cnt">
          <h2 className=" mx-auto text-center mb-5">{title}</h2>
      </div>

        <div className="row">
          {columns.map((col, idx) => (
            <div className="col-lg-6 mb-4" key={col.heading}>
              <div className={idx === 0 ? "complete_sol_box_1" : "complete_sol_box_2"}>
                <h5
                  className={`ct_fs_30 ct_fw_400 ct_delight_regular mb-4 ${
                    idx === 0 ? "text-white" : ""
                  }`}
                >
                  {col.heading}
                </h5>
                <div className="row">
                  <div className="col-md-8">
                    <ul className={`cust_sol_list ps-0 ${idx === 0 ? "text-white" : ""}`}>
                      {col.items.map((item) => (
                        <li key={item}>
                          <i className="fa-solid fa-circle-check me-2"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <div className="comp_sol_icon_box_sec">
                      {col.icons?.map((icon, i) => (
                        <div className="comp_sol_icon_box" key={i}>
                          {icon}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}