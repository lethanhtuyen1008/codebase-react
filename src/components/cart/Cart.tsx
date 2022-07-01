import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { ON_REMOVE_TO_CART } from 'src/redux/product/type';
import { Product } from 'src/types/product';
export default function Cart({
  item,
  index,
  count,
}: {
  item: Product;
  index: number;
  count: number;
}) {
  const disptach = useDispatch();
  const onDeleteCart = () => {
    disptach({ type: ON_REMOVE_TO_CART, product: item });
  };
  return (
    <TableRow>
      <TableCell component='th' scope='row'>
        {index + 1}
      </TableCell>
      <TableCell align='right'>{item.name}</TableCell>
      <TableCell align='right'>{count}</TableCell>
      <TableCell align='right'>{item.price}</TableCell>
      <TableCell align='right'>{count * item.price}</TableCell>
      <TableCell align='right'>
        <button onClick={() => onDeleteCart()}>Xóa</button>
      </TableCell>
    </TableRow>
  );
}
