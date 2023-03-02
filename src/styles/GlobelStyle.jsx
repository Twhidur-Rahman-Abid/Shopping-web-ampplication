import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  
}
body{
    background: #f2f4f3;
}
.container{
    width: 80%;
    margin: 0 auto;
}

.row{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    
}
.col-4{
    flex-basis: 22%;
}

button{
    cursor: pointer;
}
@media (max-width: 768px){
    .col-4{
    flex-basis: 45%;
}


}


`;
