import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <FooterPC>
      <Terms className="terms">
        <LinkCommon>Privacy Policies</LinkCommon>
        <Divider />
        <LinkCommon>Terms and Conditions</LinkCommon>
      </Terms>
      <Company className="company">
        <p style={{ margin: 0 }}>©Kaiho Industry Co., Ltd. All Rights Reserved.</p>
      </Company>
    </FooterPC>
  );
};
const FooterPC = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;
const Terms = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.1);
  padding: 16px 0;
  {...props}
`;

const LinkCommon = styled.a`
  font-size: 14px;
  color: #111111;
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
