import React from 'react';
import styled from 'styled-components';
import { DownloadIcon, Exit } from '../svg/iconsproductions';

const src =
    "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";

const Modal = ({ state, setState }) => {
    const screenWidth = window.innerWidth;

    return (
        <>
            {state &&
                <OverLay>
                    <ContainerModal>
                        <video controls width="100%">
                            <source src={src} type="video/mp4" />
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                        <ButtonModal onClick={() => setState(false)}>
                            <Exit width={screenWidth <= 540 && 19} />
                        </ButtonModal>
                        <DownloadModal>
                            <LabelModal>
                                video | video adaptation
                            </LabelModal>
                            <DownloadIcon />
                        </DownloadModal>
                    </ContainerModal>
                </OverLay>
            }
        </>
    )
}
export default Modal;

const OverLay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    z-index: 999;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.8);
    
`;
const ContainerModal = styled.div`
    position: relative;
    padding: 15px;
    padding-bottom: 5px;
    // top: 50px;
    // margin: auto;
    // margin-top: 20vh;
    width: 50vw;
    background-color: rgb(255, 255, 255);
    @media (max-width: 820px) {
        width: 85%;
    }
`;
const DownloadModal = styled.div`
    font-family: 'Montserrat';
    display: flex;
    justify-content: space-between;
    margin: 20px 0px;
    align-items: center;

`;
const LabelModal = styled.div`
    background: #EBFFFF;
    padding: 5px;
    width: 31%;
    text-align: center;
    @media (max-width: 1024px) {
        width: 45%;
    }
    @media (max-width: 1024px) {
        width: 61%;
    }
`;

const ButtonModal = styled.button`
    position: absolute;
    top: -40px;
    right:-40px;
    background: none;
    border: none;
    cursor: pointer;
    @media (max-width: 820px) {
        right:-14px;
    }
`;