import React from "react";
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import avatarImage from "../assets/avatarImage.jpeg";
import { cardStyle, cardStyles } from "./ReusableStyles";

export default function Transfers() {
  const transactions = [
    {
      image: avatarImage,
      name: "From Vinita Nandode",
      time: "Today, 16:36",
      amount: "+$50",
    },
    {
      image: avatarImage,
      name: "To Lauras Santos",
      time: "Today, 08:49",
      amount: "-$25",
    },
    {
      image: avatarImage,
      name: "From Jadon S.",
      time: "Yesterday, 14:36",
      amount: "+$150",
    },
  ];
  return (
    <Section>
      <div className="title">
        <h2>your Transfers</h2>
      </div>
      <div className="transactions">
        {transactions.map((transaction, index) => {
          return (
            <div className="transaction" key={index}>
              <div className="transaction__title">
                <div className="transaction__title__image">
                  <img src={transaction.image} alt="transaction image" />
                </div>
                <div className="transaction__title__details">
                  <h3>{transaction.name}</h3>
                  <h5>{transaction.time}</h5>
                </div>
              </div>
              <div className="transaction__amount">
                <span>{transaction.amount}</span>
              </div>
            </div>
          );
        })}
      </div>
      <a href="#" className="view">
        View all <HiArrowNarrowRight />
      </a>
    </Section>
  );
}

const Section = styled.section`
  ${cardStyle};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .title {
    h2 {
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
  }
  .transactions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .transaction {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &__title {
        display: flex;
        gap: 1rem;
        &__image {
          img {
            height: 2.5rem;
            border-radius: 3rem;
          }
        }
      }
      &__amount {
        background-color: #d7e41e1d;
        padding: 0.2rem 0.5rem;
        width: 4rem;
        border-radius: 1rem;
        text-align: center;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #ffc107;
          span {
            color: black;
          }
        }
        span {
          color: #ffc107;
        }
      }
    }
  }
  .view {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: #ffc107;
    font-weight: bold;
    margin-top: 1rem;
    gap: 0.5rem;
    svg {
      transition: 0.3s ease-in-out;
      font-size: 1.4rem;
    }
    &:hover {
      svg {
        transform: translateX(0.5rem);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .transactions {
      .transaction {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`;
