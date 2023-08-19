import { Box } from '@mui/material'


const MainFooter = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#444',
                height: '200px',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            All rights reserved.
        </Box>
    )
}

export default MainFooter