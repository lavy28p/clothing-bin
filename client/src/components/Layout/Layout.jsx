import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import './Layout.css';

const Layout = (props) => (
    <div className='layout'>
      <div className="layout-nav">
        <Nav user={props.user}/>
      </div>
        <div className="layout-children">
            {props.children}
        </div>
        <div className="layout-footer">
          <Footer />
        </div>
    </div>
)

export default Layout;