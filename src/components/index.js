import React from 'react'
import styled from 'styled-components'
import { Text, Box } from 'rebass'

import Link from './Link'

import { urls } from '../utils'

const Divider = styled(Box)`
  height: 1px;
  background: #000000;
`

export const BlockedWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BlockedMessageWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.text3};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  max-width: 80%;
`

export const IconWrapper = styled.div`
  position: absolute;
  right: 0;
  border-radius: 3px;
  height: 16px;
  width: 16px;
  padding: 0px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text1};

  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`

const Hint = ({ children, ...rest }) => (
  <Text fontSize={16} weight={500} {...rest}>
    {children}
  </Text>
)

const Address = ({ address, token, ...rest }) => (
  <Link
    color="button"
    href={token ? urls.showToken(address) : urls.showAddress(address)}
    external
    style={{ wordBreak: 'break-all' }}
    {...rest}
  >
    {address}
  </Link>
)

export const Hover = styled.div`
  :hover {
    cursor: pointer;
    opacity: ${({ fade }) => fade && '0.7'};
  }
`

export const StyledIcon = styled.div`
  color: ${({ theme }) => theme.text1};
`

const EmptyCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  border-radius: 20px;
  color: ${({ theme }) => theme.text1};
  height: ${({ height }) => height && height};
`

export const SideBar = styled.span`
  display: grid;
  grid-gap: 24px;
  position: sticky;
  top: 4rem;
`

export const SubNav = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0;
  margin-bottom: 2rem;
`
export const SubNavEl = styled.li`
  list-style: none;
  display: flex;
  padding-bottom: 0.5rem;
  margin-right: 1rem;
  font-weight: ${({ isActive }) => (isActive ? 600 : 500)};
  border-bottom: 1px solid rgba(0, 0, 0, 0);

  :hover {
    cursor: pointer;
    border-bottom: 1px solid ${({ theme }) => theme.bg3};
  }
`

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  backgroundImage: "url(https://uploads-ssl.webflow.com/64026da2f5eb580978399e37/64026da3f5eb5849ab399e8a_image-hero-v1-cryptocurrency-template-p-2000.png)"
  
  background: url("/background.jpeg");
  background-blend-mode: lighten;
  opacity: 0.9;
 
`

export const ContentWrapper = styled.div`
  display: grid;
  justify-content: start;
  background: rgba(0,0,0,0.7);
  align-items: start;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding-top: 60px;
  box-sizing: border-box;
  @media screen and (max-width: 1180px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`

export const ContentWrapperLarge = styled.div`
  display: grid;
  justify-content: start;
  align-items: start;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  padding: 0 2rem;
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 1440px;
  width: 100%;

  @media screen and (max-width: 1282px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`

export const FullWrapper = styled.div`
  padding-top: 60px;
  background: rgba(0,0,0,0.7);

  display: grid;
  justify-content: start;
  align-items: start;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;
  @media screen and (max-width: 1180px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`

export const FixedMenu = styled.div`
  z-index: 99;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  box-sizing: border-box;
  margin-bottom: 2rem;
  max-width: 100vw;
  background: no-repeat center/80% url("/background.jpeg");
  @media screen and (max-width: 800px) {
    margin-bottom: 0;
  }
`

export { Hint, Divider, Address, EmptyCard }
