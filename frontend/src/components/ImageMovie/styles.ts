import styled from 'styled-components';

export const Container = styled.div`
  height: 90vh;
  
  .shadow-vertical{
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 60%);
  }
  .shadow-horizontal{
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 5%, transparent 60%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 70px 0 200px 35px;
    
  }
`;
