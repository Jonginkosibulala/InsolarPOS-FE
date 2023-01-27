import SidePane from "../src/pages/page_templates/side_pane";
import HeaderTemplate from "../src/pages/page_templates/header_template";

const Temp = () => {
  return (
    <>
      <div
        className="position-absolute d-flex"
        style={{ width: "100%", height: "100%" }}
      >
        <SidePane />
        <div className="col-12 col-lg-10 overflow-auto">
          <HeaderTemplate />
          <div className="p-3">
            <table className=""></table>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Temp;
