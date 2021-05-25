import {React,useState,useEffect} from 'react'
import {Form,Button} from 'react-bootstrap'
import './PartnerLoginForm.css'
import axios from 'axios';


const PartnerLoginForm = () => {

    const initialState = {
        "email":"",
        "mat_khau":""
    }

    const initialToken ={
        "Token":"",
        "id":""
    }

    const [values,setValues]=useState(initialState)
    const [token,setToken]=useState(initialToken);

    
    const handleSubmit = async e =>
    {
        e.preventDefault();

        console.log(values)
        
        await axios.post("http://localhost:9000/partner/login",values)
            .then(res => {
                if(res.data=='Failed')
                    window.alert('Đăng nhập không thành công')
                else if(res.data=='Server Failed')
                    window.alert('Lỗi server')
                else{           
                    setToken(res.data)
                    console.log(res.data)
                }
                
        });
        
    }

    const handleInputChange=e=>{
        let {name,value}=e.target;
        setValues({
                ...values,
                [name]:value,
                
            }
        )   
    }
    

    //Sau khi login r thì click vào đây để log out
    const handleClick = ()=>{
        axios.post('http://localhost:9000/partner/logout'
        ).then(res => {
            console.log(res.data)
            setToken(res.data)
        })
        .catch((error) => {
            console.error(error)
        })
    }

    

    return (
        <div style={{width:'375px'}}>
            <Form id="formPartner" onSubmit={handleSubmit}>

                <Form.Group controlId="formPartnerEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Nhập email doanh nghiệp" name='email' onChange={handleInputChange} />
                </Form.Group>

                <Form.Group controlId="formPartnerPassword">
                    <Form.Label>Mật khẩu</Form.Label>
                    <Form.Control type="password" placeholder="Nhập mật khẩu" name='mat_khau' onChange={handleInputChange} />
                </Form.Group>
                
                
                <Button variant="primary" type="submit">
                    Login
                </Button>
                
               
            </Form>

            
        </div>
    )
}

export default PartnerLoginForm
