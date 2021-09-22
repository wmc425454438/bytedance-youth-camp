import "./App.css";
import { Input, Menu, Row, Col, Button } from "antd";
import {
  UnorderedListOutlined,
} from "@ant-design/icons";
import { AnimateIcon } from './Animate-icon.js'

const { SubMenu } = Menu;
const { Search } = Input;

function App() {
  return (
    <div>
      
      <header>
        <Row>
          <Col flex="0 0 auto">
            <h1>
              <a id="logo" href="/index-cn">
                <img
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                />
                Ant Design
              </a>
            </h1>
          </Col>
          <Col flex="auto" className="menu-row">
            <Search placeholder="搜索"/>
          </Col>
          <Col flex="300px" className="menu-row">
            <Menu mode="horizontal" className="menu-class">
              <Menu.Item>设计</Menu.Item>
              <Menu.Item>文档</Menu.Item>
              <Menu.Item>组件</Menu.Item>
              <Menu.Item>资源</Menu.Item>
              <Menu.Item>国内镜像</Menu.Item>
              <SubMenu icon={<UnorderedListOutlined />}>
                  <Menu.Item>子菜单项</Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
        </Row>
      </header>

      <div className="home-banner">
        <div className="home-banner-background">
          <img alt="background" src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*kJM2Q6uPXCAAAAAAAAAAAABkARQnAQ" />
        </div>
        <div className="home-banner-holder">
          <div className="home-banner-content">
            <div className="home-card-logo">
              <div className="home-card-logo-icon">
                <AnimateIcon />
              </div>
              {/* <img alt="Ant Design" src="https://gw.alipayobjects.com/zos/basement_prod/80e7d303-aa05-4c2d-94e9-2255ab5cea6c.svg" className="home-banner-mini" /> */}
              <img width="500" height="87" alt="Ant Design" src="https://gw.alipayobjects.com/zos/antfincdn/6UYtAUYPXE/AntDesign.svg" className="home-banner-normal" />
            </div>
            <p>企业级产品设计体系，创造高效愉悦的工作体验</p>
            <div className="home-banner-content-operations">
              <Button className="operations-use" type="primary" shape="round" size="large">开始使用</Button>
              <Button shape="round" size="large">设计语言</Button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <DatePicker />
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
