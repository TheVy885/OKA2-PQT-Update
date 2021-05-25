import { React } from "react";
import { Nav } from "react-bootstrap";
import "./NavPartner.css";
import traveloka from "../../images/traveloka.png";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';
 import images from '../../images/importImages';
 import PartnerLoginForm from '../../Compoment/Partner/PartnerLoginForm';
const NavPartner = (props) => {
  return (
    <div className="NavBar">
      <div className="navBarChinh">
        <Nav className="row justify-content-start">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">
                <img id="logo" src={traveloka}  />
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link id="khuyenMai">
              <Link to="/partner">
                <span className="fas fa-percent"></span>
                Hợp tác
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/voucherlist">
                <span className="far fa-handshake"></span>
                Voucher List
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <span className="far fa-bookmark"></span>
              Đã lưu
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <span className="fas fa-book"></span>
              Đặt chỗ của tôi
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{
                  backgroundColor: "#f6f6f6",
                  color: "blue",
                  border: "none",
                  borderRadius: "15px 15px",
                }}
              >
                <span class="fas fa-portrait"></span>
                Đăng nhập
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ width: "300px" }}>
                <Dropdown.Header>
                  <strong style={{ fontSize: "20px" }}>
                    Đăng nhập tài khoản
                  </strong>
                </Dropdown.Header>
                <Dropdown.Item>
                  <Form>
                    <Form.Group controlId="tenDangNhap">
                      <Form.Label>Email hoặc số di động</Form.Label>
                      <Form.Control />
                    </Form.Group>
                    <Form.Group controlId="matKhau">
                      <Form.Label>Mật khẩu</Form.Label>
                      <Form.Control />
                      <Form.Label>
                        <Nav.Link>Quên mật khẩu?</Nav.Link>
                      </Form.Label>
                    </Form.Group>
                  </Form>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Button id="btnDangKy">Đăng Ký</Button>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>



      

      {props.children}
    </div>
  );
};

export default NavPartner;
