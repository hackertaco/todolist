import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

const CircleButton2 = styled.button `
background: #F8F9F9;
&: hover {
  background: #D98880;
  color: white;
}
&: active {

  background: #F1948A;
}
z-index: 5;
cursor: pointer;
width: 80px;
height: 80px;
display: block;
align-items: center;
justify-content: center;
font-size: 60px;
position: absolute;
left: 50%;
bottom: -20%;
transform: translate(-50%, -50%);
color: #D98880;
border-radius: 50%;
border: none;
outline: none;
transition: 0.125s all ease-in;
display: flex;
${props =>
  props.open &&
  css`
    background: #F8F9F9;
    left: 40%;
    &: hover {
      background: #D98880;
      color: white;
    }
    &: active{
      background: #F1948A;
      color: white;
    }
      transform: translate(-50%, -50%)
    `}

`
const CircleButton = styled.button`
  background: #F8F9F9;
  &: hover {
    background: #D98880;
    color: white;
  }
  &: active {

    background: #F1948A;
  }
  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: -20%;
  transform: translate(-50%, -50%);
  color: #D98880;
  border-radius: 50%;
  border: none;
  outline: none;
  transition: 0.125s all ease-in;
  display: flex;
  ${props =>
    props.open &&
    css`
      background: #F8F9F9;
      left: 60%;
      &: hover {
        background: #D98880;
        color: white;
      }
      &: active{
        background: #F1948A;
        color: white;

      }
      transform: translate(-50%, -50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #FDEDEC
`;

const InputTitle = styled.input`
  padding: 6px;
  border-radius: 4px;
  border: 1px solid #FDEDEC;
  width: 80%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;
const InputText = styled.input`
  padding: 6px;
  border-radius: 4px;
  border: 1px solid #FDEDEC;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;
const InputDate = styled.input`
  padding: 6px;
  border-radius: 4px;
  border: 1px solid #FDEDEC;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [valueTitle, setValueTitle] = useState('');
  const [valueText, setValueText] = useState('');
  const [valueDate, setValueDate] = useState('');
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChangeTitle = e => setValueTitle(e.target.value);
  const onChangeText = e => setValueText(e.target.value);
  const onChangeDate = e => setValueDate(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        title: valueTitle,
        text: valueText,
        date: valueDate,
        done: false
      }
    });
    setValueTitle('');
    setValueText('');
    setValueDate('');
    setOpen(false);
    nextId.current += 1;
  }
  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <InputTitle autoFocus placeholder="할 일을 입력해"
            onChange={onChangeTitle}
            value={valueTitle}
            />
            <InputText placeholder="내용을 입력해"
            onChange={onChangeText}
            value={valueText}
            />
            <InputDate placeholder="언제까지 끝낼거니"
            onChange={onChangeDate}
            value={valueDate}
            />
          </InsertForm>

        </InsertFormPositioner>
      )}
      <CircleButton2 onClick={onSubmit}>
      <MdAdd />
      </CircleButton2>
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>

  );
}

export default React.memo(TodoCreate);
