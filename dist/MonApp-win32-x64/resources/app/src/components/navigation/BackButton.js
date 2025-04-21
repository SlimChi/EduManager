import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { BiArrowBack } from 'react-icons/bi';

const BackButton = ({ children = "Retour", ...props }) => {
    const navigate = useNavigate();

    return (
        <Button
            variant="outline-primary"
            onClick={() => navigate(-1)}
            className="mb-4 d-flex align-items-center"
            style={{
                padding: '0.5rem 1rem',
                borderRadius: '50px',
                borderWidth: '2px',
                fontWeight: '500'
            }}
            {...props}
        >
            <BiArrowBack className="me-2" size={20} />
            {children}
        </Button>
    );
};

export default BackButton;