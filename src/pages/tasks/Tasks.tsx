import { Box, Grid, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import apps from 'src/apps'

const Tasks = () => {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        height: '100%',
      }}
    >

      {
        apps?.map((item, index) => {

          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              xl={3}
              key={item?.id}
              sx={{
                // height: '100%',
                // alignItems: 'center',
                // justifyContent: 'center',
                // textAlign: 'center',

                width: '100%',
              }}
            >
              <Box

                sx={{
                  boxShadow: '1px 1px 10px 0px #ccc',
                  p: 1,
                  height: '100%',
                  // width: '300px',
                  borderRadius: 3,
                  flex: 1,
                  display: 'block',
                  textTransform: 'capitalize',
                }}
              >

                <Box style={{ width: '100%', height: '150px', overflow: 'hidden', borderRadius: 3, }}>
                  <img
                    src={`https://picsum.photos/id/${index}/200/300`}
                    alt=""
                    style={{
                      objectFit: 'cover',
                      width: '100%',

                      overflow: 'hidden'
                    }}
                  />
                </Box>

                <Typography
                  component={RouterLink}
                  to={item?.path}
                  sx={{
                    py: 2,
                    display: 'block',
                    textDecoration: 'none',
                    color: '#333',
                  }}
                >
                  {
                    item?.name?.split("-").join(" ")
                  }
                </Typography>
              </Box>
            </Grid>
          )
        })
      }

    </Grid>
  )
}

export default Tasks