import styled from 'styled-components';
import { useRouter } from 'next/router';

const SectionProducts = styled.section`
  margin: 2rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    font-size: 2rem;
    color: ${({theme}) => theme.ColorTitle };
  }

  button, a {
    border: none;
    background: transparent;
    font-size: 0.9rem;
    color: ${({theme}) => theme.PrimaryColorBlue || "var(--cor-1)"};
    transition: all 300ms ease-out;

    &:hover {
      color: ${({theme}) => theme.SecondaryColorBlue || "var(--cor-2)"};
      font-size: 1rem;
    }
  }

  ul {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
  }

  li {
    padding-right: 0.5rem;
  }

  img {
    width: 12rem;
    border-radius: 1rem;
    margin-top: 0.5rem;
  }

  h3 {
    font-size: 0.8rem;
    margin: 0.5rem 0 0.5rem 0;
    color: ${({theme}) => theme.ColorTitle };
  }

  p {
    font-size: 0.7rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: ${({theme}) => theme.ColorTitle };
  }

  @media (min-width: 360px) and (max-width: 767px) {
    h2 {
      font-size: 1rem;
    }

    ul {
      justify-content: center;
    }
  }

`;

export function ProductList({searchValue, ...propriedades}) {
  const ProductListNames = Object.keys(propriedades.ProductsList)
  const router = useRouter()
  return (
    <>
      {ProductListNames.map((ProductListNames) => {
        const produtos = propriedades.ProductsList[ProductListNames]

        return (
          <SectionProducts key={ProductListNames}>
            <div>
              <h2>{ProductListNames}</h2>
            </div>

            <ul>
              {produtos
                .filter((produto) => {
                  const titleNormalized = produto.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized);
                })
                .map((produto) => (
                  <li key={produto.title} style={{ listStyle: 'none', marginBottom: '20px' }}>
                      <a href={`/productPage?product=${produto.title}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                        <div>
                          <img
                            src={produto.image}
                            alt={produto.title}
                            onClick={(e) => {
                              e.preventDefault();
                              router.push(`/productPage?product=${produto.title}`);
                            }}
                            style={{ cursor: 'pointer', maxWidth: '100%', maxHeight: '8rem'}}
                          />
                        </div>
                        <div style={{ marginTop: '10px', display:  'flex',  flexDirection: 'column' }}>
                          <p>{produto.title}</p>
                          <p>{"R$ " + parseFloat(produto.price).toFixed(2)}</p>
                        </div>
                     </a>
                  </li>
                ))}
            </ul>

          </SectionProducts>
        )

      })}

    </>
  )
}
