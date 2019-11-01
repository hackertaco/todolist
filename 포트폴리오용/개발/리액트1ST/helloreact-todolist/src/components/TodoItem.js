import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete, MdExpandMore, MdExpandLess, MdEdit
} from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';


const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &: hover {
    color: #F1948A;
  }
  display: none;
`;

const Edit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &: hover {
    color: #F1948A;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &: hover {
    ${Remove}, ${Edit}{
      display:initial;

    }
  }
`;
const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #F1948A;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
  css`
    border: 1px solid #D98880;
    color: #D98880;
    `}

`;
const Title = styled.div`
  flex:1;
  font-size: 21px;
  color : #495057;
  ${props =>
    props.done &&
    css `
      color: #ced4da;
    `}
`;
const Text = styled.div`
  flex:1;
  font-size: 18px;
  color : #495057;
  ${props =>
    props.done &&
    css `
      color: #ced4da;
    `}
`;
const DueDate = styled.div`
  flex:1;
  font-size: 18px;
  color : #495057;
  ${props =>
    props.done &&
    css `
      color: #ced4da;
    `}
`;
const Expand = styled.div`
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #808B96;
  &: hover {
    color: #F1948A;
  }

`;

function TodoItem({ id, done, title, text, date }){
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({type: 'TOGGLE', id});
  const onRemove = () => dispatch({type: 'REMOVE', id});
  const onEdit = () => dispatch({type: 'EDIT', id});
  const [visible, setVisible] = useState(false);
  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>{done && <MdDone />}
      </CheckCircle>
      <Title done={done} onClick={onToggle}>
        {title}{visible && <Text done={done}>{text}</Text>}
        {visible && <DueDate done={done}>{date}</DueDate>}
      </Title>
      <Edit onClick={onEdit}>
        <MdEdit />
      </Edit>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
      <Expand onClick={() => {
        setVisible(!visible);
      }}>
      {visible ? <MdExpandLess /> : <MdExpandMore />}
      </Expand>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);
