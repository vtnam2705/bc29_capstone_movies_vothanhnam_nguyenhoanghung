import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CartDetail() {
    const selector = useSelector((state) => state.userReducer);
    const { cartList } = selector;
    const navigate = useNavigate();

    const renderTableBody = () => {
        return cartList.map((ele) => {
            return (
                <tr>
                    <td>{ele.tenPhim}</td>
                    <td>
                        {ele.danhSachVe.map((ele) => {
                            return (
                                <button className="badge badge-success m-1">
                                    {ele.tenGhe}
                                </button>
                            );
                        })}
                    </td>
                    <td>{ele.gioChieu}</td>
                    <td>{ele.ngayChieu}</td>
                    <td>
                        {ele.danhSachVe
                            .reduce((previousValue, currentValue) => {
                                previousValue += currentValue.giaVe;
                                return previousValue;
                            }, 0)
                            .toLocaleString()}
                    </td>
                </tr>
            );
        });
    };

    const bookingTicket = async () => {
        const dataTicket = cartList.map((ele) => {
            return ele.danhSachVe.map((ele) => {
                return {
                    maGhe: ele.maGhe,
                    giaVe: ele.giaVe,
                };
            });
        });

        const dataLichChieu = cartList.map((ele) => {
            return { maLichChieu: ele.maLichChieu };
        });

        const submit = {
            dataTicket,
            dataLichChieu,
        };

        console.log(submit);
        // await bookingTicket(submit);

        alert("Bạn đặt thành công");

        // navigate("/");
    };

    return (
        <div className="modal-body">
            <form>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>Tên Phim</th>
                            <th>Ghế</th>
                            <th>Giờ chiếu</th>
                            <th>Ngày chiếu</th>
                            <th>Tổng tiền</th>
                        </tr>
                    </thead>
                    <tbody id="cartBody">{renderTableBody()}</tbody>
                </table>
                <div className="modal-footer">
                    <button
                        onClick={() => {
                            bookingTicket();
                        }}
                        type="button"
                        className="btn btn-primary"
                    >
                        Đặt vé
                    </button>
                </div>
            </form>
        </div>
    );
}