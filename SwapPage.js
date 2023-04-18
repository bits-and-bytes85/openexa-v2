import React, { useState, useMemo, useEffect, useCallback } from 'react'

import styled from 'styled-components'
import {
    useUserTransactions,
    useUserPositions,
    useMiningPositions,
} from '../contexts/User'
import TxnList from '../components/TxnList'
import Panel from '../components/Panel'
import { formattedNum } from '../utils'
import Row, { AutoRow, RowFixed, RowBetween } from '../components/Row'
import { AutoColumn } from '../components/Column'
import UserChart from '../components/UserChart'
import PairReturnsChart from '../components/PairReturnsChart'
import PositionList from '../components/PositionList'
import MiningPositionList from '../components/MiningPositionList'
import { TYPE } from '../Theme'
import { ButtonDropdown, ButtonLight } from '../components/ButtonStyled'
import { PageWrapper, ContentWrapper, StyledIcon } from '../components'
import DoubleTokenLogo from '../components/DoubleLogo'
import { Bookmark, Activity } from 'react-feather'
import Link from '../components/Link'
import { FEE_WARNING_TOKENS } from '../constants'
import { BasicLink } from '../components/Link'
import { useMedia } from 'react-use'
import Search from '../components/Search'
import { useSavedAccounts } from '../contexts/LocalStorage'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, react/prop-types
function SwapPage({ account }) {
    useEffect(() => {
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
        })
    }, [])

    return (
        <PageWrapper>           
        <div style={{
           background: "#000000",
        }}>
            < AutoColumn style={{ paddingTop: '46px', marginRight: '130px', marginLeft: '130px'}} >
            <Search style={{ backgroundcolor: "#5A5A5A"}}/>
            </AutoColumn>

            <iframe 
                paddingTop= '0px'
                title='Swap Widget'
                style={{marginRight: 0}}
                src='https://shriya-widgetsapp-wmn5n7rc5q-uc.a.run.app'
                frameBorder='{0}'
                height='860px'
                width='100%'
                sandbox='allow-scripts'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            ></iframe>
        </div>
        </PageWrapper>
    )
}

export default SwapPage
