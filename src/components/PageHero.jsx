export default function PageHero({ title, subtitle }) {
  return (
    <div className="ct_py_70 ct_inner_hero_bg">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="ct_hero_banner_left_cnt text-center">
              <h1 className="ct_fs_44 ct_fw_700">{title}</h1>
              {subtitle && <p className="ct_fs_18 ct_fw_500">{subtitle}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}