import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/types';
import Cart from 'src/components/cart/Cart';

export default function CartPage() {
  const productCart = useSelector((state: RootState) => state.productReducer.cart);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>STT</TableCell>
            <TableCell align='right'>TÊN SẢN PHẨM</TableCell>
            <TableCell align='right'>SỐ LƯỢNG</TableCell>
            <TableCell align='right'>GIÁ</TableCell>
            <TableCell align='right'>TỔNG TIỀN</TableCell>
            <TableCell align='right'>XÓA SẢN PHẨM</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productCart.map((item, index) => (
            <Cart key={index} index={index} item={item.product} count={item.count} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
