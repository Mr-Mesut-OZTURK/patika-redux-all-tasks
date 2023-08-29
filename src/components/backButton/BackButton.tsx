import { ButtonBase, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const BackButton = () => {

    const navigate = useNavigate()

    return (
        <ButtonBase
            onClick={() => navigate("/tasks")}
            sx={{
                fontSize: 16,
                color: '#000',
                position: 'absolute',
                left: 0,
                top: 0,
                p: 1,
                borderRadius: 2,
                backgroundColor: '#f1f1f1'
            }}
        >
            <ArrowBackIcon sx={{ fontSize: 22 }} /> Back
        </ButtonBase>
    )
}

export default BackButton