import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #f1f1f1;
  height: 10vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 26px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin: 0;
  line-height: 30px;
  font-weight: normal;
`;

const Avatar = styled.img`
  display: block;
  border-radius: 50%;
  max-width: 35px;
  max-height: 35px;
  margin-left: auto;
  margin-right: 10vh;
  visibility: ${(props) => props.visibility || true};

  @media (max-width: 768px) {
    margin-right: 2vh;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 60%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    width: 98%;
    margin-left: 0;
    margin-right: 0;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #bdbdbd;
  margin: 25px 0px;
`;

const Filter = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  box-shadow: none;
  outline: none;
  width: 100%;
  text-align: center;
  margin-bottom: 12px;
`;

const ItemArea = styled.section`
  display: flex;
  flex-flow: row wrap;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 66px;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
`;

const ItemImg = styled.img``;

const ItemTitle = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 18px;
  text-align: center;
`;

const ItemLabel = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #8d8d8d;
`;

const ItemSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 25%;
  width: 70px;
`;

const ItemSelector = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const ItemPrice = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-size: 21px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
`;

const ItemButton = styled.button`
  background-color: #6b8067;
  border-radius: 4.5px;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  font-family: 'Open Sans';
  font-weight: bold;
  margin: 0 10px 10px 10px;
  width: -webkit-fill-available;
  height: 5vh;
`;

export const SearchIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.8657 20.5695L15.4749 14.1787C16.687 12.6822 17.4167 10.7797 17.4167 8.70836C17.4167 3.9066 13.5101 0 8.70832 0C3.90655 0 0 3.9066 0 8.70836C0 13.5101 3.9066 17.4167 8.70837 17.4167C10.7797 17.4167 12.6822 16.687 14.1787 15.4749L20.5695 21.8658C20.7486 22.0447 21.0387 22.0447 21.2178 21.8658L21.8658 21.2177C22.0447 21.0387 22.0447 20.7485 21.8657 20.5695ZM8.70837 15.5834C4.91727 15.5834 1.83335 12.4995 1.83335 8.70836C1.83335 4.91727 4.91727 1.83335 8.70837 1.83335C12.4995 1.83335 15.5834 4.91727 15.5834 8.70836C15.5834 12.4995 12.4995 15.5834 8.70837 15.5834Z"
      fill="#787878"
    />
  </svg>
);

export const Store = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await fetch(
          'https://cors-anywhere.herokuapp.com/https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json',
          {
            headers: {
              'content-type': 'application/json',
              origin: 'localhost',
            },
          }
        );
        const data = await res.json();
        setItems(data.results);
      } catch (e) {
        console.log(e);
      }
    };
    getItems();
  }, []);
  console.log(items);
  return (
    <div className="Store">
      <Header>
        <Avatar
          src={
            'https://s3-alpha-sig.figma.com/img/76c0/3f58/3b70eb4dfa556b26490c7a00d6ea6662?Expires=1597622400&Signature=fpseR0pkF8RBd4IUWYmXklXpUlYyV~MK0kL44hV2mF46qY4~i7MvPvBkLXeKhe4xtQ2f1Pt~NDrCNUCmfAKyXObQKZWkT~9erLSCp1IP-AOS33XR2eEJJB4NaulIQ2-4jKILwFbu8A4SEmF4KramqxRwHx-nI1TbzC8i6NKoOkdcmSog1lbCaDMO7feZSDtqd6pU4j0sG6qYnS3U1bOb3wJGuJT7rzLj3BcRnMoijujUmuXWFLXF2TMN~CmzLWxlsQQO4A~eSAk8yuMoLvAeKiGdMMn3REXxSAaD5n7sKhvNThfctyoZ5kAncWmVNh4XTHg8qXffCrRu6mu51zlGJg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
          }
          alt={'Person Avatar'}
          visibility="hidden"
        />
        <Title>Sneakers</Title>
        <Avatar
          src={
            'https://s3-alpha-sig.figma.com/img/76c0/3f58/3b70eb4dfa556b26490c7a00d6ea6662?Expires=1597622400&Signature=fpseR0pkF8RBd4IUWYmXklXpUlYyV~MK0kL44hV2mF46qY4~i7MvPvBkLXeKhe4xtQ2f1Pt~NDrCNUCmfAKyXObQKZWkT~9erLSCp1IP-AOS33XR2eEJJB4NaulIQ2-4jKILwFbu8A4SEmF4KramqxRwHx-nI1TbzC8i6NKoOkdcmSog1lbCaDMO7feZSDtqd6pU4j0sG6qYnS3U1bOb3wJGuJT7rzLj3BcRnMoijujUmuXWFLXF2TMN~CmzLWxlsQQO4A~eSAk8yuMoLvAeKiGdMMn3REXxSAaD5n7sKhvNThfctyoZ5kAncWmVNh4XTHg8qXffCrRu6mu51zlGJg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
          }
          alt={'Person Avatar'}
        />
      </Header>
      <Main>
        <FilterContainer>
          <SearchIcon />
          <Filter placeholder="Search for your sneaker"></Filter>
        </FilterContainer>

        <ItemArea>
          {items.map((sneaker) => {
            return (
              <Item key={sneaker.id}>
                <ItemImg
                  src={sneaker.thumbnailURL}
                  alt={`This sneaker have a ${sneaker.color} color.`}
                ></ItemImg>
                <ItemTitle>{sneaker.description}</ItemTitle>
                <ItemSelector>
                  <ItemLabel>Size</ItemLabel>
                  <ItemSelect>
                    <option>41</option>
                  </ItemSelect>
                  <ItemLabel>Quantity</ItemLabel>
                  <ItemSelect>
                    <option>1</option>
                  </ItemSelect>
                </ItemSelector>
                <ItemPrice>$ {sneaker.price}</ItemPrice>
                <ItemButton>Add to Cart</ItemButton>
              </Item>
            );
          })}
        </ItemArea>
      </Main>
    </div>
  );
};

export default Store;
