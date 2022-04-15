import styled from 'styled-components';

export const Heading = styled.div<{ fontSize?: string }>`
  font-weight: 700;
  font-size: ${(props) => props.fontSize ?? '20px'};
  line-height: 23px;
  color: #000000;
`;
export const Box = styled.div`
  display: flex;
  width: 100%;
`;
export const BoxPassword = styled(Box)`
  position: relative;
  align-items: center;
`;
export const ContainerForm = styled.div`
  margin: 0 auto;
  max-width: 316px;
  padding-top: 72px;
`;
export const Button = styled.button`
  background: #ff661a;
  border-radius: 4px;
  width: 100%;
  border: none;
  padding: 12px 24px;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  margin-top: 20px;
`;
export const ButtonCreate = styled(Button)`
  color: #222222;
  background: #f8f8f8;
  border: 1px solid #cccccc;
`;
export const Register = styled.a`
  font-weight: 400;
  font-size: 16px;
  margin: 32px 0 13px 0;
  text-align: center;
  display: block;
  text-decoration: none;
  color: #000000;
`;
export const Required = styled.div`
  height: 10px;
  margin-bottom: 0;
`;
export const TextRequired = styled.i`
  font-size: 10px;
  color: red;
`;
export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  margin-bottom: 8px;
`;
export const Title = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  margin-bottom: 32px;
`;
export const Input = styled.input`
  padding: 10px 30px 10px 12px;
  border-radius: 4px;
  font-size: 14px;
  color: black;
  width: 100%;
  border: 1px solid #cccccc;
`;
export const Icon = styled.i`
  position: absolute;
  right: 0;
  margin-right: 10px;
`;
export const Password = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Link = styled.a`
  font-weight: 400;
  font-size: 12px;
  color: #0075ff;
  margin-top: 32px;
  margin-bottom: 8px;
  text-decoration: none;
  cursor: pointer;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.12);
  padding: 15px;
`;
export const Image = styled.img`
  width: 191px;
`;
