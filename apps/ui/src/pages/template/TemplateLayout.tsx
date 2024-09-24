import { StyledAppContainer } from 'components/Layout/LayoutStyle'
import { useState } from 'react';
import ListHeader from 'routes/components/ListHeader'

import {
  StyledChatWrapper, StyledContainer, StyledLeftColumn, StyledMainWrapper, StyledMenu,
} from 'routes/ChatRouteLayout'
import { useNavigate, useOutlet } from 'react-router-dom'
import Box from '@mui/material/Box'
import TypographyPrimary from '../../components/Typography/Primary';
import { BurgerMenu } from '../../share-ui/components/Icon/Icons';

import TemplateList from './TemplateList'
import useTemplate from './useTemplate'

import CardContentLoader from 'components/ContentLoaders/CardContentLoader'
import TemplateCardLoader from 'components/ContentLoaders/TemplateCardLoader'

const TemplateLayout = () => {
  const navigate = useNavigate()
  const outlet = useOutlet()
  const [showSidebar, setShowSidebar] = useState(false)

  const { templates, template_loading } = useTemplate()

  return (
    <StyledAppContainer>
      <StyledContainer>
        <StyledMainWrapper>
          {templates?.length === 0 && template_loading ? (
            <StyledLeftColumn customWidth={400} showSidebarMobile={showSidebar}>
              <ListHeader
                title={'Templates'}
                onAddClick={() => navigate('/templates/create-template')}
              />

              <Box display={'flex'} flexDirection={'column'} sx={{ paddingRight: 1.5 }}>
                <TemplateCardLoader />
                <TemplateCardLoader />
                <TemplateCardLoader />
              </Box>
            </StyledLeftColumn>
          ) : templates.length > 0 && (
            <>
              <StyledMenu onClick={() => setShowSidebar(prevState => !prevState)} title="Toggle Menu">
                <BurgerMenu size={30} /> <TypographyPrimary value="Toggle Templates" size='small' />
              </StyledMenu>

              <StyledLeftColumn customWidth={400} showSidebarMobile={showSidebar}>
                <Box display={'flex'} flexDirection={'column'} sx={{ paddingRight: 1.5 }}>
                  <ListHeader
                    title={'Templates'}
                    onAddClick={() => navigate('/templates/create-template')}
                  />

                  <TemplateList />
                </Box>
              </StyledLeftColumn>
            </>
          )}

          <StyledChatWrapper>{outlet}</StyledChatWrapper>
        </StyledMainWrapper>
      </StyledContainer>
    </StyledAppContainer>
  )
}

export default TemplateLayout
