import React from 'react';
import { Box, Heading, Text, SimpleGrid, Flex, Link } from '@chakra-ui/react';
import { useUser } from 'reactfire';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import { faSlack } from '@fortawesome/free-brands-svg-icons';

import GridContainer from '../../components/GridContainer';
import Signup from '../../components/forms/users/SignUp';
import Icon from '../../components/Icon';
import { blogLink, slackLink } from '../../content/links';

export default ({ signup, signedup }) => {
  const user = useUser();
  const { title, description } = user ? signedup : signup;

  const signedupLinks = [
    {
      icon: faRss,
      title: 'Check out our Blog!',
      link: blogLink,
    },
    {
      icon: faSlack,
      title: 'Join our Slack Community!',
      link: slackLink,
    },
  ];

  return (
    <GridContainer py={[16, null, null, 32]}>
      <SimpleGrid columns={[1, null, null, 2]} spacing={[4, null, 8]}>
        <Box alignSelf="center" mr={{ base: 0, md: 8 }}>
          <Heading as="h2" size="2xl" mb={4}>
            {title}
          </Heading>
          <Text color="gray.700" fontSize="lg">
            {description}
          </Text>
        </Box>
        {!user && <Signup />}
        {user && (
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align={{ base: 'flex-start', md: 'center' }}
            justify="space-around"
          >
            {signedupLinks.map(({ icon, title, link }) => (
              <Link
                key={title}
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                href={link}
                mt={{ base: 4, md: 0 }}
                variant="flat"
              >
                <Flex
                  direction={{ base: 'row', md: 'column' }}
                  align="center"
                  justify="center"
                >
                  <Icon icon={icon} boxSize={8} />
                  <Text
                    fontWeight="bold"
                    fontSize="lg"
                    ml={{ base: 4, md: 0 }}
                    mt={{ base: 0, md: 4 }}
                  >
                    {title}
                  </Text>
                </Flex>
              </Link>
            ))}
          </Flex>
        )}
      </SimpleGrid>
    </GridContainer>
  );
};
