import { Suspense } from 'react';
 import { Button, Space, DatePicker, Card } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';


export default function Clients() {
    const onChange = () => {};
  return (
      <section>
              {/* <Space direction="vertical">
                  <Button type="primary">Primary Button</Button>
                  <Button type="ghost">Ghost Button</Button>
                  <DatePicker onChange={onChange} />
                  <SearchOutlined style={{ fontSize: 60, color: 'green' }} />
               
              </Space> */}
          
          <Card>
              <p>Card content</p>
          </Card>
      </section>
  )
}
