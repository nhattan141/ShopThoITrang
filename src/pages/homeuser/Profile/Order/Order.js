import * as React from 'react';
import PropTypes from 'prop-types';

import {
    Grid,
    Box,
    Collapse,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Avatar,
    Paper
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

//import img demo
import img1 from 'assets/images/hot/image-category-1.png';
import img2 from 'assets/images/hot/image-category-2.png';

const Order = () => {
    function createData(orderId, otherDate, otherTotal, otherStatus) {
        return {
            orderId,
            otherDate,
            otherTotal,
            otherStatus,
            detail: [
                {
                    productName: '11091700',
                    productImg: img1,
                    amount: 3,
                    productPrice: 800
                },
                {
                    productName: 'Anonymous',
                    productImg: img2,
                    amount: 1,
                    productPrice: 600
                }
            ]
        };
    }

    function Row(props) {
        const { row } = props;
        const [open, setOpen] = React.useState(false);

        return (
            <React.Fragment>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                    <TableCell>
                        <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.orderId}
                    </TableCell>
                    <TableCell align="right">{row.otherDate}</TableCell>
                    <TableCell align="right">{row.otherTotal}</TableCell>
                    <TableCell align="right">{row.otherStatus}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Typography variant="h6" gutterBottom component="div">
                                    Detail
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Product Name</TableCell>
                                            <TableCell>Image</TableCell>
                                            <TableCell align="right">Amount</TableCell>
                                            <TableCell align="right">Total Price</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {row.detail.map((historyRow, index) => (
                                            <TableRow key={index}>
                                                <TableCell component="th" scope="row">
                                                    {historyRow.productName}
                                                </TableCell>
                                                <TableCell>
                                                    <Avatar alt="Product Image" variant="rounded" src={historyRow.productImg} />
                                                    {/* {historyRow.productImg} */}
                                                </TableCell>
                                                <TableCell align="right">{historyRow.amount}</TableCell>
                                                <TableCell align="right">{historyRow.amount * historyRow.productPrice}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </React.Fragment>
        );
    }

    Row.propTypes = {
        row: PropTypes.shape({
            otherDate: PropTypes.string.isRequired,
            otherStatus: PropTypes.string.isRequired,
            otherTotal: PropTypes.string.isRequired,
            detail: PropTypes.arrayOf(
                PropTypes.shape({
                    amount: PropTypes.number.isRequired,
                    productName: PropTypes.string.isRequired,
                    productImg: PropTypes.string.isRequired,
                    productPrice: PropTypes.number.isRequired
                })
            ).isRequired
        }).isRequired
    };

    const rows = [
        createData('OID13112022', '13/11/2022', '60000', 'Received'),
        createData('OID12112022', '12/11/2022', '90000', 'Delivering'),
        createData('OID11112022', '11/11/2022', '160000', 'Confirming'),
        createData('OID10112022', '10/11/2022', '30000', 'Delivering'),
        createData('OID09112022', '09/11/2022', '160000', 'Canceled')
    ];

    return (
        <Grid
            container
            spacing={0}
            sx={{
                border: '1px solid rgba(0, 0, 0, 0.25)',
                height: '100%',
                mt: 0,
                borderRadius: '5px'
            }}
        >
            <TableContainer component={Paper} sx={{ boxShadow: '0' }}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Order Code</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Total</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.orderId} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
};

export default Order;
