import styled from "styled-components"

export default function Button() {

    const Button = styled.button`
      background-color: rgba(3, 113, 67, 1);
      color: #FFF;
      padding: 15px 35px;
      border-radius: 30px;
      border: none;
      text-align: center;
      font-weight: bold;
      margin-top: 15px;
      cursor: pointer;

      &:hover {
        background-color: rgba(0, 211, 123, 0.8);
      }
    `;
        
    
    return (
        <Button>SAIBA MAIS</Button>
    )
};
