import React, { useEffect } from 'react'
import 'feather-icons'

import TopTokenList from '../components/TokenList'
import { TYPE } from '../Theme'
import Panel from '../components/Panel'
import { useAllTokenData } from '../contexts/TokenData'
import { PageWrapper, FullWrapper } from '../components'
import { RowBetween } from '../components/Row'
import Search from '../components/Search'
import { useMedia } from 'react-use'
// import CheckBox from '../components/Checkbox'
// import QuestionHelper from '../components/QuestionHelper'

function AllTokensPage() {
  const allTokens = useAllTokenData()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const below600 = useMedia('(max-width: 800px)')

  // const [useTracked, setUseTracked] = useState(true)

  return (
    <PageWrapper>
      <div style={{
          backgroundImage: "url(https://uploads-ssl.webflow.com/64026da2f5eb580978399e37/64026da3f5eb5849ab399e8a_image-hero-v1-cryptocurrency-template-p-2000.png)"
        }}>
      <FullWrapper>
          <RowBetween style={{ marginTop: '50px'}}>
            <TYPE.largeHeader>Top Tokens</TYPE.largeHeader>
            {!below600 && <Search small={true} />}
          </RowBetween>
          {/* <AutoRow gap="4px">
            <CheckBox checked={useTracked} setChecked={() => setUseTracked(!useTracked)} text={'Hide untracked tokens'} />
            <QuestionHelper text="USD amounts may be inaccurate in low liquiidty pairs or pairs without ETH or stablecoins." />
          </AutoRow> */}
          <Panel style={{ marginTop: '20px', padding: below600 && '1rem 0 0 0 ' }}>
            <TopTokenList tokens={allTokens} itemMax={50} />
          </Panel>
      </FullWrapper>
      </div>
    </PageWrapper>
  )
}

export default AllTokensPage
