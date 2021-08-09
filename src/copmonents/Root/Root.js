import React from 'react';
import styled from 'styled-components';

import logo from './../../assets/logo.png';
import placeholder from './../../assets/placeholder.png';

import MainNavigationBox from './MainNavigationBox';
import MainNavigationItem from '../MainNavigationItem';
import MainNavigationBoxExtras from "./MainNavigationBoxExtras";

const MainNavigation = styled.nav`
  align-items: center;
  background-color: #333333;
  display: flex;
  flex-flow: row nowrap;
  -webkit-font-smoothing: antialiased;
  height: 56px;
  padding: 0 30px;
`;

const MainNavigationBoxes = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 0 20px 0 13px;
`;

const MainNavigationBoxesExtras = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const MainNavigationLogoLink = styled.a.attrs({
    href: "#",
    onClick: evt => {
        evt.preventDefault();
    }
})`
  display: flex;
  height: 100%;
  margin-right: 20px;
  transition: opacity 0.2s ease;

  :hover {
    cursor: pointer;
    opacity: 0.6;
  }

  > img {
    margin: auto;
    //height: 100%;
  }
`;

const Root = () => {
    return (
        <MainNavigation>
            <MainNavigationLogoLink>
                <img src={logo} alt={'logo'}/>
            </MainNavigationLogoLink>
            <MainNavigationItem
                dropdowmContent={
                    <MainNavigationBoxesExtras>
                        <MainNavigationBoxes>
                            <MainNavigationBox
                                descriptor={'Get inspired with designs shared by our talented community'}
                                imageSrc={placeholder}
                                title={'Shots'}
                            />
                            <MainNavigationBox
                                descriptor={'Get inspired with designs shared by our talented community'}
                                imageSrc={placeholder}
                                title={'Shots'}
                            />
                            <MainNavigationBox
                                descriptor={'Get inspired with designs shared by our talented community'}
                                imageSrc={placeholder}
                                title={'Shots'}
                            />
                            <MainNavigationBox
                                descriptor={'Get inspired with designs shared by our talented community'}
                                imageSrc={placeholder}
                                title={'Shots'}
                            />
                        </MainNavigationBoxes>
                        <MainNavigationBoxExtras links={[
                                {
                                    label: 'Teams',
                                    to: '#'
                                },
                                null,
                                {
                                    label: 'Goods for Sale',
                                    to: '#'
                                },
                                {
                                    label: 'Meetups',
                                    to: '#'
                                },
                                null,
                                {
                                    label: 'Dribble Shop',
                                    to: '#'
                                },
                                {
                                    label: 'About Dribble',
                                    to: '#'
                                },
                                {
                                    label: 'Advertise',
                                    to: '#'
                                },
                            ]}
                        />
                    </MainNavigationBoxesExtras>
                }
                label={'Explore'}
            />
            <MainNavigationItem label={'For Designers'} />
        </MainNavigation>
    )
};

export default Root;