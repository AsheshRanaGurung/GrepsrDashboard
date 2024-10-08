import { NAVIGATION_ROUTES } from '@grepsr/routes/routes.constants';
import { Box, Button, Divider, Flex, Text, VStack } from '@chakra-ui/react';
import { grepsr_colors } from '../../theme/Color';
import { svgs } from '../../assets/svgs';
import Item from './NavItem';
import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import { GetSidebarState } from '@grepsr/utils/GetSidebarState';

const navItems = [
  {
    id: 1,
    icon: svgs.DataSet,
    name: 'DataSets',
    path: NAVIGATION_ROUTES.DATASETS
  },
  {
    id: 2,
    icon: svgs.Workflow,
    name: 'Workflows',
    path: NAVIGATION_ROUTES.WORKFLOWS
  },
  { id: 3, icon: svgs.CreditUsage, name: 'Credit Usage', path: NAVIGATION_ROUTES.CREDIT_USAGE }
];

type ISidebarProps = {
  sidebarWidth: string;
};
const Sidebar = ({ sidebarWidth }: ISidebarProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { showSidebar } = GetSidebarState();

  return (
    <Box
      borderRight={`2px solid ${grepsr_colors.gray}`}
      height={'full'}
      fontWeight={700}
      letterSpacing={'0.1px'}
      color={grepsr_colors.black}
      bg={grepsr_colors.white}
      position={'fixed'}
      transition={'0.2s ease-in-out'}
      width={sidebarWidth}>
      <Text
        textAlign={'left'}
        fontSize={'xl'}
        my={4}
        ml={showSidebar ? 10 : 2}
        transition={'0.2s ease-in-out'}
        cursor={'pointer'}
        onClick={() => navigate(NAVIGATION_ROUTES.BASE)}>
        Grepsr
      </Text>

      <Divider border={'1px'} opacity={0.1} />
      <Box height="full" mt={6}>
        <Flex
          direction={'column'}
          height="full"
          transition={'0.2s ease-in-out'}
          maxH={`calc(100% - 225px)`}
          overflowY={'scroll'}
          width={showSidebar ? '240px' : '78px'}
          css={{
            scrollbarGutter: 'stable',
            '&::-webkit-scrollbar': {
              width: '0.2rem',
              height: '0.6rem',
              position: 'absolute'
            },
            '&::-webkit-scrollbar-track': {
              position: 'absolute',
              background: `${grepsr_colors.white}`,
              opacity: 0.1
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#EDF2F7',
              borderRadius: 20
            }
          }}>
          <VStack align={'left'} gap={1} justifyContent={'flex-start'} px={4}>
            {navItems?.map((item) => (
              <React.Fragment key={item.id}>
                <Item item={item} isSelected={pathname === item.path} />
              </React.Fragment>
            ))}
          </VStack>
        </Flex>
        <VStack bg={grepsr_colors.gray_300} mx={4} px={6} py={4} borderRadius={8}>
          {showSidebar && (
            <Text size={'xs'} fontWeight={'medium'} my={2}>
              Need any help?
            </Text>
          )}
          <Button variant={'secondary'}>{showSidebar ? `Contact Support` : 'CS'}</Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Sidebar;
