import React from 'react';
import { Box, Text, Button, Flex, Divider, Link } from '@chakra-ui/react';
import { Link as RRDLink } from 'react-router-dom';

import GridContainer from './GridContainer';
import Icon from './Icon';

import content from '../content/footer';

import { getLinkPropsFromLink } from '../helpers';

const { about, links, copyright } = content;

const FooterSection = ({ title, children, ...props }) => (
  <Box mr={16} {...props}>
    <Text my={4} color="gray.50" fontFamily="heading" fontSize="20px">
      {title}
    </Text>
    {children}
  </Box>
);

export default (props) => (
  <Box
    position="relative"
    bg="gray.900"
    color="white"
    px={[0, null, 8, 16]}
    py={8}
    {...props}
  >
    <GridContainer>
      <Flex direction={['column', null, null, 'row']} justify="space-between">
        <FooterSection width={['100%', null, null, 1 / 2]} title={about.title}>
          <Text color="gray.400" my={4}>
            {about.description}
          </Text>
          <Button
            mt={4}
            as="a"
            href={about.button.link}
            target="_blank"
            rel="noopener noreferrer"
            color="gray.200"
            bgColor="gray.800"
            colorScheme="black"
            boxShadow="0px 4px 16px rgba(0, 0, 0, 0.3)"
          >
            <Text mr={2}>{about.button.text}</Text>
            <Icon
              color="gray.200"
              icon={about.button.icon}
              ml={2}
              boxSize={4}
            />
          </Button>
        </FooterSection>
        <Flex direction={['column', null, 'row']} justify="space-between">
          {links.map((group) => (
            <FooterSection
              mt={[4, null, null, 0]}
              title={group.title}
              key={group.title}
            >
              <Flex direction="column">
                {group.links.map((item, i) => (
                  <Link
                    key={i}
                    variant="flat"
                    {...getLinkPropsFromLink(item.link)}
                    color="gray.400"
                    _hover={{ color: 'white' }}
                    mt={i === 0 ? 0 : 2}
                  >
                    {item.title}
                  </Link>
                ))}
              </Flex>
            </FooterSection>
          ))}
        </Flex>
      </Flex>
      <Flex
        direction={['column', null, null, 'row']}
        pt={16}
        justify="space-between"
      >
        <Text fontSize="sm" color="gray.600">
          {copyright.title}
        </Text>
        <Flex pt={[4, null, null, 0]}>
          {copyright.links.map((item, i) => (
            <React.Fragment key={i}>
              <Link
                as={RRDLink}
                to={item.link}
                fontSize="sm"
                variant="flat"
                color="gray.600"
                _hover={{ color: 'white' }}
              >
                {item.title}
              </Link>
              {i !== copyright.links.length - 1 && (
                <Divider orientation="vertical" mx={[2, null, null, 4]} />
              )}
            </React.Fragment>
          ))}
        </Flex>
      </Flex>
    </GridContainer>
  </Box>
);
