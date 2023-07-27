import FooterSection from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Layout, theme } from 'antd';

const RootLayouts = ({children}) => {

  return (
    <Layout className="layout">
     <div style={{display: 'flex', flexDirection:'column',minHeight:'100vh'}}>
        <Navbar/>
        <div style={{flexGrow:1}}>
        {children}
        </div>
     <FooterSection/>
     </div>
    </Layout>
    );
};

export default RootLayouts;