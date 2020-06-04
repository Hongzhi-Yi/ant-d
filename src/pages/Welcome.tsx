import React from 'react';
import {
  Card,
  Input,
  Tabs,
  Typography,
} from 'antd';
import FormSizeDemo from "@/pages/FormSizeDemo";
import styles from './Welcome.less';
import JokeDemo from "@/pages/JokeDemo";


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
/*const tabs=[<TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>,
  <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>,
  <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>]

;*/
function callback(key) {
  console.log(key);
}

//export default (): React.ReactNode => (
export default class CardPage extends React.Component{
  /*componentDidMount() {
    this.props.onDidMount();
  }*/
  state={
    visible:true
  }

  render(){
    //const {cardList}=this.props;
    return (
      <Card
        /*style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <PlayCircleOutlined />,
          <ShareAltOutlined   />
        ]}*/
      >
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Tab 1" key="1">Content of Tab Pane 1
            <JokeDemo/>
          </TabPane>
          <TabPane tab="Tab 2" key="2">Content of Tab Pane 2
           {/* <Modal
              visible={this.state.visible}
              onOk={okHandle}>


            </Modal>*/}
            <FormSizeDemo />
          </TabPane>
          <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>


      </Card>
    );
  }

}
 /*
*/
  //<Card title="小测试">


  //</Card>
