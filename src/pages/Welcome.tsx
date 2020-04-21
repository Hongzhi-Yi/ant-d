import React from 'react';
import { PlayCircleOutlined, ShareAltOutlined } from '@ant-design/icons';
import {Button, Card, Checkbox, Form, Input, Tabs, Typography} from 'antd';
import styles from './Welcome.less';

const { Meta } = Card;
const TabPane =Tabs.TabPane;
const CodePreview: React.FC<{}> = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);
const gridStyle = {
  width: '25%',
};
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
const tabs=[<TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>,
  <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>,
  <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>]

;
function callback(key) {
  console.log(key);
}
export default (): React.ReactNode => (
  <Tabs defaultActiveKey="1" onChange={callback}>
    {tabs}
  </Tabs>
  /**/
  /*<Card title="小测试">
   <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <PlayCircleOutlined />,
      <ShareAltOutlined   />
    ]}
  >
     <Input placeholder="Basic usage" />
    <Meta
      title="XX倾向测试"
      description="测试你的XX倾向"
    />
  </Card>
  </Card>*/
);
