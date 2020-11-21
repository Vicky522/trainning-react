// rfc : react function component
import React from "react";

export default function demoFunctionComponent() {
  return (
    // nội dung thẻ chứa trong lệnh return, lưu ý nội dung phải bao bọc bởi 1 thẻ
    <div className="container bg-dark text-white mt-2">
      <div className="display-4">component</div>
      <div className="p-5">nội dung component</div>
    </div>
  );
}
