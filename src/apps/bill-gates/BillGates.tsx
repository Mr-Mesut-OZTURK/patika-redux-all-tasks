/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from 'react'
import { Box, Button, Card, CardContent, Chip, Grid, ListItemText, Stack, Typography } from '@mui/material'

import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { addToChart, removeFromChart, setProductList } from 'src/redux/slices/billGatesSlice'



const BillGates = () => {

    const dispatch = useAppDispatch()
    const { totalMoney, productList, chart } = useAppSelector(state => state?.billGates)


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => dispatch(setProductList(json?.map((item: object) => ({ count: 10, ...item })))))
    }, [dispatch])

    console.log({ totalMoney })
    return (
        <Box>

            {/* ################ header ################ */}
            <Stack
                component={Card}
                textAlign="center"
                spacing={2}
                p={3}
            >
                <Box>
                    <img
                        alt="mesut"
                        src="https://avatars.githubusercontent.com/u/80154062?v=4"
                        style={{
                            borderRadius: '50%',
                            objectFit: 'cover',
                            width: '200px',
                        }}
                    />
                </Box>

                <Typography variant='h4'>
                    Mesut Öztürk
                </Typography>
            </Stack>

            <Box
                component={Card}
                sx={{
                    p: 3,
                    mt: 3,
                    position: 'sticky',
                    top: 90,
                    // background: "rgb(46,113,7)",
                    background: "linear-gradient(0deg, rgba(46,113,7,1), rgba(0,255,145,0.8) 100%) ",
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: "22px",
                    fontWeight: 'bold',
                    zIndex: 10,

                }}
            >
                {totalMoney}
            </Box>

            {/* ################ product ################ */}
            <Grid container spacing={2} sx={{ my: 3 }}>
                {
                    productList?.map((product, index) => {
                        return (
                            <Grid item xs={12} sm={6} md={3} lg={4} key={index}>
                                <Card sx={{ p: 1, bgcolor: "#f1f1f1" }}>

                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: '200px',
                                            overflow: 'hidden',
                                            borderRadius: 2,
                                            mb: 2
                                        }}
                                    >
                                        <img src={product?.image} alt="" style={{ width: "100%", objectFit: 'cover' }} />
                                    </Box>

                                    <CardContent>
                                        <ListItemText
                                            primary={product?.title?.slice(0, 20)}
                                            secondary={product?.description?.slice(0, 90) + "..."}
                                        />
                                        <Stack direction="row" justifyContent="space-between">
                                            <Chip color='primary' label={product?.category} />
                                            <Chip color='secondary' label={`${product?.price} $`} />
                                        </Stack>

                                    </CardContent>

                                    <Stack direction="row" spacing={3} justifyContent="center" alignItems="center" sx={{ py: 3 }}>
                                        <Button
                                            onClick={() => dispatch(removeFromChart(product))}
                                            variant='contained'
                                            disabled={!chart?.find(item => item?.product.id === product.id)?.count}
                                            sx={{
                                                flex: 1
                                            }}
                                        >
                                            -
                                        </Button>

                                        <Box
                                            sx={{
                                                flex: 1,
                                                backgroundColor: '#ccc',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                height: '100%',
                                                p: '6px',
                                                borderRadius: 1
                                            }}
                                        >
                                            {
                                                chart?.find(item => item?.product.id === product.id)?.count || 0
                                            }
                                        </Box>

                                        <Button
                                            onClick={() => dispatch(addToChart(product))}

                                            variant='contained'
                                            disabled={
                                                chart?.filter(item => item?.product.id === product.id)[0]?.count >= 10
                                                ||
                                                (
                                                    (productList?.filter(item => item.id === product.id)[0]?.price > totalMoney)
                                                )
                                            }
                                            sx={{
                                                flex: 1
                                            }}
                                        >
                                            +
                                        </Button>

                                    </Stack>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>


            {/* ################ footer ################ */}



        </Box>
    )
}

export default BillGates