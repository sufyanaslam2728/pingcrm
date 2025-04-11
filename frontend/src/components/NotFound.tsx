import React from "react";
import "../App.css";
// import { Button, Result } from "antd";
// import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  // const navigate = useNavigate();
  return (
    <div className="notFound">
      {/* <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button
            type="primary"
            onClick={() => {
              if (localStorage.getItem("token")) {
                navigate("/home");
              } else {
                navigate("/login");
              }
            }}
          >
            Back Home
          </Button>
        }
      /> */}
      Not Found 404
    </div>
  );
};

export default NotFound;
