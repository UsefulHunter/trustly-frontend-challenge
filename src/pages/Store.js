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
  border-radius: 25px;
  width: 70px;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #8d8d8d;
  cursor: pointer;
  background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Ctitle%3Edown-arrow%3C%2Ftitle%3E%3Cg%20fill%3D%22%236B8067%22%3E%3Cpath%20d%3D%22M10.293%2C3.293%2C6%2C7.586%2C1.707%2C3.293A1%2C1%2C0%2C0%2C0%2C.293%2C4.707l5%2C5a1%2C1%2C0%2C0%2C0%2C1.414%2C0l5-5a1%2C1%2C0%2C1%2C0-1.414-1.414Z%22%20fill%3D%22%23000000%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E');
  background-size: 0.6em;
  background-position: right 5px top 50%;
  background-repeat: no-repeat;
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

//Mocked data for the Size of the Shoes, that do not came on the API object
const ShoesSize = [
  {
    value: 36,
  },
  {
    value: 37,
  },
  {
    value: 38,
  },
  {
    value: 39,
  },
  {
    value: 40,
  },
  {
    value: 41,
  },
  {
    value: 42,
  },
  {
    value: 43,
  },
  {
    value: 44,
  },
];

const ShoesQuantity = [
  {
    value: 1,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: 4,
  },
  {
    value: 5,
  },
  {
    value: 6,
  },
  {
    value: 7,
  },
  {
    value: 8,
  },
  {
    value: 9,
  },
];

export const Store = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState(items);
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
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
  useEffect(() => {
    const filterResults = items.filter((sneaker) =>
      sneaker.color.includes(search)
    );
    setSearchResults(filterResults);
  }, [search, items]);
  console.log('items:', items);
  console.log('searchResults', searchResults);
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
          <Filter
            type="text"
            placeholder="Search for your sneaker"
            value={search}
            onChange={handleChange}
          ></Filter>
        </FilterContainer>

        <ItemArea>
          {searchResults.map((sneaker) => {
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
                    {ShoesSize.map((size) => {
                      return (
                        <option key={size.value} value={size.value}>
                          {size.value}
                        </option>
                      );
                    })}
                  </ItemSelect>
                  <ItemLabel>Quantity</ItemLabel>
                  <ItemSelect>
                    {ShoesQuantity.map((quantity) => {
                      return (
                        <option key={quantity.value} value={quantity.value}>
                          {quantity.value}
                        </option>
                      );
                    })}
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
