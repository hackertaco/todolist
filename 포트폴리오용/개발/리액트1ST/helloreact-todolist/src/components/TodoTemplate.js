import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 400px;
  position: relative;
  background:#FAE5D3;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0,0,0,0.2);
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  flex-direction: column;
  `;

  function TodoTemplate({ children }){
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>
  }

  export default TodoTemplate;
