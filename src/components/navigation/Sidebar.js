import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import {
    BiBookAlt,
    BiAtom,
    BiChevronRight,
    BiBook,
    BiCalculator, BiMath, BiShapeTriangle, BiLineChart,
} from 'react-icons/bi';
import "../../styles/Sidebar.css"
import {FaCode} from "react-icons/fa";

const Sidebar = () => {
    const location = useLocation();
    const [openMenu, setOpenMenu] = useState(null);

    const menuItems = [
        {
            name: 'Classes',
            path: '/classes',
            icon: <BiBookAlt size={18} className="me-2"/>
        },
        {
            name: 'Disciplines',
            path: '/disciplines',
            icon: <BiAtom size={18} className="me-2"/>,
            subItems: []
        },
      
        // {
        //     name: 'CV',
        //     path: '/cv',
        //     icon: <FaCode size={18} className="me-2"/>,
        // },
        {
            name: 'Outils',
            path: '/outils',
            icon: <BiCalculator size={18} className="me-2"/>,
            subItems: [
                {
                    name: "Résolveur d'équations",
                    path: '/equation-solver',
                    icon: <BiMath size={16} className="me-2"/>
                },
                {
                    name: "Calculateur géométrique",
                    path: '/geometry-calculator',
                    icon: <BiShapeTriangle size={16} className="me-2"/>
                },
                {
                    name: "Grapheur de fonctions",
                    path: '/function-grapher',
                    icon: <BiLineChart size={16} className="me-2"/>
                },
                {
                    name: "Calculatrice",
                    path: '/calculator',
                    icon: <BiCalculator size={16} className="me-2"/>
                },
                // {
                //     name: "¨Python",
                //     path: '/PythonEmulator',
                //     icon: <BiCalculator size={16} className="me-2"/>
                // }
            ]
        }
    ];

    const toggleMenu = (menuName) => {
        setOpenMenu(openMenu === menuName ? null : menuName);
    };


    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h3>Menu Principal</h3>
            </div>

            <Nav.Link as={Link} to="/ccf">
                <BiBook/> CCF
            </Nav.Link>
            <Nav className="flex-column">
                {menuItems.map((item) => (
                    <React.Fragment key={item.name}>
                        <Nav.Item>
                            <Nav.Link
                                as={item.subItems?.length ? 'div' : Link}
                                to={item.subItems?.length ? '#' : item.path}
                                onClick={() => item.subItems?.length && toggleMenu(item.name)}
                                className={`d-flex justify-content-between align-items-center ${
                                    location.pathname === item.path ||
                                    (item.subItems && item.subItems.length > 0 && (item.subItems)) ? 'active' : ''
                                }`}
                            >
                                <span>
                                    {item.icon}
                                    {item.name}
                                </span>
                                {item.subItems && item.subItems.length > 0 && (
                                    <BiChevronRight size={16} className={openMenu === item.name ? 'rotate-90' : ''}/>
                                )}
                            </Nav.Link>
                        </Nav.Item>

                        {item.subItems && item.subItems.length > 0 &&
                            (openMenu === item.name || !openMenu && !(item.subItems)) && (
                                <div className="sub-menu">
                                    {item.subItems.map((subItem) => (
                                        <Nav.Item key={subItem.name}>
                                            <Nav.Link
                                                as={Link}
                                                to={subItem.path}
                                                className={`ps-5 ${location.pathname === subItem.path ? 'sub-active' : ''}`}
                                            >
                                                {subItem.icon}
                                                {subItem.name}
                                            </Nav.Link>
                                        </Nav.Item>
                                    ))}
                                </div>
                            )}
                    </React.Fragment>
                ))}
            </Nav>
        </div>
    );
};

export default Sidebar;