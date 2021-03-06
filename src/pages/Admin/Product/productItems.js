import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';
import styled from 'styled-components';
import { formatDate } from 'helpers/FormatDate';

const Img = styled.img`
  max-width: 100px;
  height: auto;
`;

const TableData = styled.td``;

const PriceTableData = styled.td`
  width: 10rem;
  word-break: break-all;
`;

const DescriptionTableData = styled.td`
  width: 20rem;
  word-break: break-all;
`;

const ProductItems = props => {
  const { createdAt } = props;

  return(
    <tr>
      <TableData className="text-center">{ props.productNo + 1 }</TableData>
      <TableData>{props.name}</TableData>
      <PriceTableData>{props.price}</PriceTableData>
      <DescriptionTableData>{props.description}</DescriptionTableData>
      <TableData>
        {
          props.image
            ? <Img src={`${props.image}`} alt={`${props.name}`} />
            : <p>No image</p>
        }
      </TableData>
      <TableData>{ formatDate(createdAt) }</TableData>
      <TableData className="text-center">
        <Link
          to="/"
          role="button"
          className="pt-button pt-intent-success"
          tabIndex="0"
        >
          <Icon iconName="edit" iconSize="inherit" />
          Edit
        </Link>
        &nbsp;
        <Link
          to="/"
          role="button"
          className="pt-button pt-intent-danger"
          tabIndex="0"
        >
          <Icon iconName="delete" iconSize="inherit" />
          Delete
        </Link>
      </TableData>
    </tr>
  );

};

ProductItems.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  price: PropTypes.number,
  description: PropTypes.string,
  createdAt: PropTypes.number,
};

export default ProductItems;
