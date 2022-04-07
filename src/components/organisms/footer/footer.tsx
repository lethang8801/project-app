import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <>
      <Terms className="terms">
        <LinkCommon>Privacy Policy</LinkCommon>
        <Divider />
        <LinkCommon>Terms and Conditions</LinkCommon>
      </Terms>
      <Company className="company">
        <p>©Kaiho Industry Co., Ltd. All Rights Reserved.</p>
      </Company>
    </>
  );
};
const Terms = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.1);
  padding: 16px 0;
  {...props}
`;

interface ILink {
  color?: string;
  margin?: string;
  fontSize?: string;
}
const LinkCommon = styled.a<ILink>`
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  fontsize: ${(props) => props.fontSize};
`;
const Divider = styled.div`
  width: 1px;
  height: 12px;
  background-color: #c4c4c4;
  margin: 0 20px;
`;
const Company = styled.div`
  background: #111111;
  color: #ffffff;
  text-align: center;
  padding: 8px 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`;
