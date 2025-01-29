import styled from "styled-components";
import bgimage from '../../assets/BgAuthImage.png';
import theme  from "../../theme/Themes";

export const SignUpPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    height: 100vh;
`;

export const SignUpBgImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
`;
 

export const SignUpcontainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    position: relative;
    background-color: #fff;
    margin-top: 5rem;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    z-index: 1;
`;

export const SignUpHeader = styled.h1`
    font-size: ${theme.font.size.xxlarge};
    color: ${theme.colors.header};
    font-weight: bold;
    font-family: ${theme.font.Headerfamily};
    margin-bottom: 0px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
`;

export const Label = styled.label`  
    font-size: ${theme.font.size.xsmall};
    color: ${theme.colors.header};
    margin-bottom: 5px;
`;  

export const Input = styled.input`
    padding: 10px;
    border-radius: 5px;
    border: 1px solid ${theme.colors.inputborder};
    outline: none;
    font-size: ${theme.font.size.xsmall};
    background-color:${theme.colors.inputbg};
    &:hover{
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2);
    }
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
`;  

export const Button = styled.button`
    padding: 10px 20px;
    width: 100%;
    border-radius: 5px; 
    border: none;
    font-size: ${theme.font.size.xsmall};
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    margin-top: 5px;
    cursor: pointer;
    background-color: ${theme.colors.navy};
    color: ${theme.colors.white};    
`;

export const AddLogin = styled.p`
    font-size: ${theme.font.size.xsmall};
    color: ${theme.colors.header};

    .linkToLogin{
        text-decoration: none;
        color: ${theme.colors.navy};
        font-weight: bold;
    }
`;

