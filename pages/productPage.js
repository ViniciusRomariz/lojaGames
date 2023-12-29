import React from "react";
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import config from "../config.json";
import styled from 'styled-components';
import { StyledQuantityOfProductsButton } from '../src/components/Button'


const StyledProductSection = styled.section`

  display: flex;
  justify-content: space-around;
  margin: 8rem 2rem 4rem 2rem;
  position: fixed;
  top: 0;

  img {
    width: 50%;
    margin-right: 1rem;
    border: 1px solid #fff;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.ColorTitle};
  }

  P {
    color: ${({ theme }) => theme.ColorTitle};
  }

`;

const FooterForm = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 1rem;
    font-weight: bold;
    color: ${({theme}) => theme.ColorTitle}
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    display: block;
    margin-bottom: 1rem;
    font-size: 1.8rem;
    color: ${({theme}) => theme.mainStyles.white || "#fff"};
    font-family: ${({theme}) => theme.PrimaryColorBlue || "var(--cor-1)"};
  }

  input {
    display: block;
    width: 100%;
    padding: 15px 0 15px 8px;
    border: none;
    background-color: #fff;
    outline: none;
    font-family: ${({theme}) => theme.PrimaryColorBlue || "var(--cor-1)"};
  }

  textarea {
    display: block;
    width: 99%;
    height: 100px;
    padding: 8px;
    border: none;
    background-color: ${({theme}) => theme.mainStyles.white || "#fff"};
    outline: none;
    resize: none;
    font-family: ${({theme}) => theme.PrimaryColorBlue || "var(--cor-1)"};
  }

  @media (min-width: 360px) and (max-width: 767px) {
    width: 100%;

  }

`;

const PriceViewer = styled.p`

  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.ColorTitle};

`;

const SectionQuantityOfProducts = styled.div`

  display: flex;
  align-items: center;
  margin: 1rem 0 1rem 0;

`;

const QuantityOfProducts = styled.p`

margin: 0 0.5rem 0 0.5rem;
color: ${({ theme }) => theme.PrimaryColorBlue || "var(--cor-1)"};

`;

export default function ProductPage(isLoginSuccessful) {
  const [quantProduct, setQuantProduct] = React.useState(1);
  const router = useRouter()
  const productName = router.query.product
  const ProductListNames = Object.keys(config.productsList)
  const isUserLogged = isLoginSuccessful;
  return (
    <>
      {ProductListNames.map((ProductListNames) => {
        const produtos = config.productsList[ProductListNames]

        return (
          <StyledProductSection>
            {
              produtos.filter((produto) => {
                const titleNormalized = produto.title;
                const productActive = productName;
                return titleNormalized == productActive
              }).map((produto) => {
                const [productPriceViewer, setProductPriceViewer] = React.useState(produto.price)
                return (
                  <>
                    <img src={produto.image} />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div>
                        <h2>{produto.title}</h2>
                        <PriceViewer>{"R$ " + parseFloat(productPriceViewer).toFixed(2)}</PriceViewer>
                        <p>{produto.description}</p>
                        <SectionQuantityOfProducts>
                          <StyledQuantityOfProductsButton secondary onClick={() => {
                            if (quantProduct == 1) {
                              setQuantProduct(1)
                            } else {
                              setQuantProduct(quantProduct - 1);
                              setProductPriceViewer(productPriceViewer - produto.price)
                            }
                          }}>
                            <Icon icon="ant-design:arrow-left-outlined" />
                          </StyledQuantityOfProductsButton>
                          <QuantityOfProducts>{quantProduct}</QuantityOfProducts>
                          <StyledQuantityOfProductsButton secondary onClick={() => {
                            setQuantProduct(quantProduct + 1);
                            setProductPriceViewer(productPriceViewer + produto.price)
                          }}>
                            <Icon icon="ant-design:arrow-right-outlined" />
                          </StyledQuantityOfProductsButton>
                        </SectionQuantityOfProducts>
                      </div>
                      <div style={isUserLogged ? { display: 'flex', flexDirection: 'column' } : { display: 'none' }}>
                        <FooterForm>
                          <h3>Fale conosco</h3>

                          <form action="submit">
                            <label>
                              <input type="text" name="Nome" placeholder="Seu nome" required />
                            </label>

                            <label>
                              <input
                                type="email"
                                name="Email"
                                placeholder="seuemail@email.com"
                                required
                              />
                            </label>

                            <label>
                              <textarea
                                name="Mensagem"
                                placeholder="Deixe sua mensagem"
                                required
                              ></textarea>
                            </label>

                            <button secondary type="submit">Enviar mensagem</button>
                          </form>
                        </FooterForm>
                          //criar um LI com text salvando usuario e o comentario
                      </div>
                    </div>
                  </>
                )
              })
            }
          </StyledProductSection>
        )

      })}

    </>
  )
}
