import { React, useEffect, useState } from "react";
import {Button, Table} from 'react-bootstrap'



const ShowListVoucher = () =>  {
    const [ShowListVoucher, setShowVoucher] = useState([])

    // can sua duong dan
    const getListVoucher=()=>fetch("http://localhost:9000/voucher/cardlist").then(res=>res.json()).then(res=>setShowVoucher(res));

    const handleDelete = async (id) =>{

    }
    const renderListVoucher = (listvoucher, index) => {       
    return (
        <tr key={index}>
                <td>{index}</td>
                <td>{listvoucher.id}</td>
                <td>{listvoucher.ten}</td>
                <td>{listvoucher.chu_thich_don_gian}</td>
                <td>{listvoucher.chu_thich_day_du}</td>
                <td>{listvoucher.ngay_bat_dau}</td>
                <td>{listvoucher.ngay_ket_thuc}</td>
                <td>{listvoucher.code_voucher}</td>
                <td>{listvoucher.gia_tri}</td>
                <td>{listvoucher.loai_voucher_id}</td>                                                                                                                                                                                                                                    v
                <td>{listvoucher.so_luong}</td>               
                <td>{listvoucher.trang_thai}</td>
                <td>{listvoucher.hinh_anh}</td>
                <td>{listvoucher.doi_tac_id}</td>
                <td>{listvoucher.diem_toi_thieu}</td>
                <td><img src={listvoucher.hinh_anh}/></td>
                <td>{listvoucher.dich_vu_id}</td>
                {/* <td>{<Button variant="success" onClick={()=>handlePublish(voucher.id)}>Publish</Button>}</td> */}
                <td>{<Button variant="danger" onClick={()=>handleDelete(listvoucher.id)}>Delete</Button>}</td>
            </tr>
    )
    }
    useEffect(() => {
        getListVoucher();
      }, [])

    return (
        <div>
            <Table striped bordered hover>
            <thead style={{textAlign:'center'}} >
                <tr>
                <th>#</th>
                <th>T??n Voucher</th>
                <th>Ch?? th??ch ????n gi???n</th>
                <th>Ch?? th??ch ?????y ?????</th>
                <th>Ng??y b???t ?????u</th>
                <th>Ng??y k???t th??c</th>
                <th>Code Voucher</th>
                <th>Gi?? Tr???</th>
                <th>Lo???i Voucher ID</th>
                <th>S??? l?????ng </th>
                <th>Tr???ng th??i</th>
                <th>H??nh ???nh</th>
                <th>?????i t??c ID</th>
                <th>??i???m t???i thi???u</th>
                <th>D???ch v??? ID</th>
                <th colSpan='2'>Action</th>
                </tr>
            </thead>
            <tbody>
               {ShowListVoucher.map(renderListVoucher)}
            </tbody>
            </Table>
            
        </div>
    )
      

    }
    

export default ShowListVoucher;


