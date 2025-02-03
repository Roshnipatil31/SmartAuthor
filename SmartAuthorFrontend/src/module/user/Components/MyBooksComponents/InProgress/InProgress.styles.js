import styled from "styled-components";
import theme from "../../../../../theme/Themes";

export const InProgressContainer = styled.div`
  margin-top: 20px;
`;

export const BookCard = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.colors.inputbg};
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px ${theme.colors.lightblur};

  @media ${theme.media.md} {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;
    justify-content: center;
    align-items: center;

  }

  @media ${theme.media.sm} {
    align-items: center;
    text-align: center;
  }
`;

export const BookCover = styled.img`
  width: 100px;
  height: auto;
  border-radius: 5px;
  border: 2px solid ${theme.colors.inputborder};

  @media ${theme.media.lg} {
    width: 90px;
  }

  @media ${theme.media.md} {
    width: 80px;
  }

  @media ${theme.media.sm} {
    width: 70px;
  }
`;

export const BookDetails = styled.div`
  flex-grow: 1;
  padding: 0 15px;
  font-family: ${theme.font.family};

  h3 {
    margin: 0;
    font-size: ${theme.font.size.large};
    color: ${theme.colors.black};

    @media ${theme.media.md} {
      font-size: ${theme.font.size.medium};
    }

    @media ${theme.media.sm} {
      font-size: ${theme.font.size.small};
    }
  }

  p {
    margin: 5px 0;
    font-size: ${theme.font.size.medium};
    color: ${theme.colors.header};

    @media ${theme.media.md} {
      font-size: ${theme.font.size.small};
    }

    @media ${theme.media.sm} {
      font-size: ${theme.font.size.xsmall};
    }
  }
`;

export const ProgressBar = styled.div`
  background: ${theme.colors.lightblur};
  width: 100%;
  height: 12px;
  border-radius: 5px;
  margin-top: 5px;

  div {
    height: 100%;
    background: ${theme.colors.Green};
    border-radius: 5px;
  }

  @media ${theme.media.md} {
    height: 10px;
  }

  @media ${theme.media.sm} {
    height: 8px;
  }
`;

export const ContinueButton = styled.button`
  background-color: ${theme.colors.navy};
  color: ${theme.colors.white};
  border: none;
  padding: 12px 15px;
  cursor: pointer;
  border-radius: 8px;
  font-size: ${theme.font.size.medium};
  margin-top: 10px;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${theme.colors.blue};
  }

  @media ${theme.media.md} {
    font-size: ${theme.font.size.small};
    padding: 10px;
  }

  @media ${theme.media.sm} {
    font-size: ${theme.font.size.xsmall};
    padding: 8px;
  }
`;
