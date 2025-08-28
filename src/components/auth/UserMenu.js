import React, {useState} from 'react';
import {NavDropdown} from 'react-bootstrap';
import {FiUser, FiLogOut, FiSettings} from 'react-icons/fi';
import {motion} from 'framer-motion';
import {useAuth} from '../../components/hooks/useAuth';

const UserMenu = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const {logout} = useAuth();

    const handleLogout = () => {
        console.log('🔐 Déclenchement déconnexion');
        setShowDropdown(false);
        logout(); // Appel à la fonction logout du hook
    };

    const handleProfile = () => {
        setShowDropdown(false);
        // navigation vers profil
    };

    const dropdownVariants = {
        hidden: {opacity: 0, y: -10},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div initial="hidden" animate="visible" variants={dropdownVariants}>
            <NavDropdown
                title={
                    <div className="d-flex align-items-center">
                        <FiUser className="me-1"/>
                        <span>Admin</span>
                    </div>
                }
                id="user-dropdown"
                show={showDropdown}
                onToggle={(isOpen) => setShowDropdown(isOpen)}
                className="user-dropdown"
                align="end"
            >

                <NavDropdown.Item onClick={handleLogout}>
                    <FiLogOut className="me-2"/>
                    Déconnexion
                </NavDropdown.Item>
            </NavDropdown>
        </motion.div>
    );
};

export default UserMenu;