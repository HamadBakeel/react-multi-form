import {Form, Input} from "antd";

export default function UserInfo(){

    return(
        <Form
            name="basic"
            initialValues={{ remember: true }}
            autoComplete="off"
            layout={"vertical"}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!', type: "email" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Phone Number"
                name="phone"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
                <Input style={{ width: '100%' }} />
            </Form.Item>
        </Form>
    )
}