import { Layout } from "antd";
import Link from "next/link";

const { Footer } = Layout;

const FooterSection = () => {
    return (
        
      <Footer
      style={{
        textAlign: 'center',
        marginTop: '10px',
        backgroundColor:'black',
        color:"white"
      }}
    >
      <Link href='http://asaduzzaman599.netlify.app/' target="_blank">copyright ©2023 Created by asaduzzaman599</Link>
    </Footer>
    );
};

export default FooterSection;