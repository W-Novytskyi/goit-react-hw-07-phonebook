import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/filtersSlice';
import { getStatusFilter } from 'redux/selectors';
import { Container, Label, Input } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const changeFilter = event => {
    dispatch(setStatusFilter(event.currentTarget.value));
  };

  return (
    <Container>
      <Label>
        Find contacts by name
        <Input type="text" value={filter} onChange={changeFilter} />
      </Label>
    </Container>
  );
}
