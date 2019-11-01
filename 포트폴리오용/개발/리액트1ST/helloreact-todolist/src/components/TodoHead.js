import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  h1 {
    margin: 0;
    padding-bottom: 24px;
    font-size: 36px;
    color: #273746;
    text-align: center;
    border-bottom: 1px solid #E6B0AA;
  }
`;

function TodoHead(){
    return (
    <TodoHeadBlock>
      <h1>승가리의 투두리스트</h1>
    </TodoHeadBlock>
  );
}

export default TodoHead;
