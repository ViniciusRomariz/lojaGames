import config from "../../../config.json"
import styled from 'styled-components';

const StyledBanner = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${config.imageBanner});
  height: 25rem;
  width: 100wh;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  color: ${({theme}) => theme.mainStyles.white || "#fff"};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }

  p {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }

  @media (min-width: 360px) and (max-width: 767px) {
  }
`;

export function Banner() {
  return (
    <>
      <StyledBanner>
        <h2>A Sua Loja de Games</h2>
        <p>Confira as nossas promoções</p>
      </StyledBanner>
    </>
  )
}
