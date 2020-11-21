import React from "react";

export default function DataBinding() {
  const title = "cybersoft";
  const imgSrc = "http://picsum.photos/200/200";
  const sinhVien = {
    maSV: "0001",
    tenSinhVien: "Nguyen Van A",
    hinhAnh: "http://picsum.photos/200/200",
  };

  //   Binding ham
  const renderImg = () => {
    // gia tri phai tra ve 1 chuoi, so, jsx(1 doan code html duoc bao phu boi 1 the)
    return (
      <div>
        <h3>Hinh Anh</h3>
        <img src={sinhVien.hinhAnh} width="200" height="200" />
      </div>
    );
  };
  return (
    <div className="container">
      <h3>DataBinding</h3>
      <p id="title" className="display-4">
        tieu de: {title}
      </p>

      <img src={imgSrc} width="200" height="200" alt="123.jpg"></img>
      <input className="form-control w-25" value={title} />
      <hr />

      <h3>Thong tin sinh vien</h3>
      <div className="card text-white bg-primary">
        <img
          className="card-img-top"
          src={sinhVien.hinhAnh}
          style={{ width: 200, height: 200 }}
        />
        <div className="card-body">
          <h4 className="card-title">{sinhVien.tenSinhVien}</h4>
          <p className="card-text">{sinhVien.maSV}</p>
        </div>
      </div>

      <hr />

      <div className="mt-5">{renderImg()}</div>
    </div>
  );
}
