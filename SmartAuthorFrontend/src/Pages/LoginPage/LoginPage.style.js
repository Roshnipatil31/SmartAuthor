import styled from "styled-components";
import theme from "../../theme/Themes";

export const LoginPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`;

export const LoginPageBgImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;

    @media ${theme.media.xs} {
        display: none;
    }
`;

export const Logincontainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    padding: 20px 40px;
    padding-bottom: 70px;
    margin-top:70px;
    position: relative;
    background-color: ${theme.colors.white};
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    z-index: 1;

    @media ${theme.media.xs} {
    width: 300px;
  }
`;  

export const LoginNavbar = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .edit-icon {
        font-size: ${theme.font.size.xxlarge};
        margin-right: 10px;
        color: ${theme.colors.header};
    }
`;

export const LoginPageHeader = styled.h1`
    font-size: ${theme.font.size.xxlarge};
    font-weight: bold;
    margin-bottom: 10px;
    font-family: ${theme.font.Headerfamily};
    color: ${theme.colors.header}; 
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 30px;
`;

export const Label = styled.label`
    font-size: ${theme.font.size.xsmall};
    margin-bottom: 5px; 
    color: ${theme.colors.header};
`;

export const Input = styled.input`
    padding: 10px;
    border-radius: 5px; 
    border: 1px solid ${theme.colors.inputborder};
    outline: none;
    font-size: ${theme.font.size.xsmall};
    background-color:${theme.colors.inputbg};
    color: ${theme.colors.header};
    &:hover{
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2);
    }
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
    &:hover{
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2);
    }
`;

export const AddLogin = styled.p`
    margin-top: 10px;
    font-size: ${theme.font.size.xsmall};
    color: ${theme.colors.header};
    text-align: center;
    .linkToLogin{
        text-decoration: none;
        color: ${theme.colors.navy};
        font-weight: bold;
    }
`;








