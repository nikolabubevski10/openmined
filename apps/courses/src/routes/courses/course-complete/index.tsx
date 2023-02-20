import React from 'react';
import {
  Box,
  Button,
  Circle,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { Link as RRDLink } from 'react-router-dom';
import { faBookOpen, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faSlack } from '@fortawesome/free-brands-svg-icons';
import { CoursePagesProp } from '@openmined/shared/types';

import GridContainer from '../../../components/GridContainer';
import Icon from '../../../components/Icon';
import { slackLink } from '../../../content/links';
import projectIcon from '../../../assets/project-icon.svg';

export default ({ page }: CoursePagesProp) => {
  const {
    title,
    certification: { link: certificationLink },
  } = page;

  const learningBoxes = [
    {
      bg: 'cyan.50',
      icon: faCertificate,
      iconBg: 'cyan.100',
      iconColor: 'cyan.700',
      title: 'Get Certified',
      description:
        'You are now ready for your certification exam! Click the link below to begin.',
      link: {
        title: 'Take Exam',
        link: certificationLink,
        color: 'cyan.700',
        _hover: { color: 'cyan.800' },
      },
    },
    {
      bg: 'green.50',
      icon: faBookOpen,
      iconBg: 'green.100',
      iconColor: 'green.600',
      title: 'Find Another Course',
      description: 'Take a deeper dive. Click below for a list of courses.',
      link: {
        title: 'Go to Courses',
        link: '/courses',
        color: 'green.600',
        _hover: { color: 'green.700' },
      },
    },
    {
      bg: 'magenta.50',
      icon: faSlack,
      iconBg: 'magenta.100',
      iconColor: 'magenta.500',
      title: 'Get Involved',
      description:
        'From meetups to bootcamps, our community is ready to welcome you.',
      link: {
        title: 'Join the Community',
        link: slackLink,
        color: 'magenta.500',
        _hover: { color: 'magenta.700' },
      },
    },
  ];

  const navigateLinkProps = (link) => {
    const isExternal = link.includes('http://') || link.includes('https://');

    return isExternal
      ? {
          as: 'a',
          href: link,
          target: '_blank',
          rel: 'noopener noreferrer',
        }
      : {
          as: RRDLink,
          to: link,
        };
  };

  return (
    <Box bg="gray.900" color="white">
      <GridContainer isInitial py={[8, null, null, 16]}>
        <Flex
          direction="column"
          align="center"
          textAlign="center"
          maxW={960}
          mx="auto"
        >
          <Image
            src="https://emojis.slackmojis.com/emojis/images/1572027767/6892/blob_party.png?1572027767"
            mb={4}
            boxSize={16}
          />
          <Heading as="p" size="xl" mb={4}>
            Course Complete!
          </Heading>
          <Heading as="p" size="lg">
            {title}
          </Heading>
          <Divider my={6} />
          <Heading as="p" size="md" mb={8}>
            Continue Learning
          </Heading>
          <SimpleGrid columns={[1, null, null, 3]} spacing={8} mb={8}>
            {learningBoxes.map(
              ({
                icon,
                iconBg,
                iconColor,
                title,
                description,
                link: { title: linkTitle, link, ...linkProps },
                ...props
              }: any) => (
                <Flex
                  direction="column"
                  justify="space-between"
                  align="center"
                  p={6}
                  width="full"
                  borderRadius="lg"
                  key={title}
                  {...props}
                >
                  <Flex
                    direction="column"
                    justify="space-between"
                    align="center"
                  >
                    <Circle p={1} mb={2} bg={iconBg} boxSize={12}>
                      <Icon icon={icon} boxSize={5} color={iconColor} />
                    </Circle>
                    <Text
                      color="gray.800"
                      fontWeight="bold"
                      fontSize="sm"
                      mb={1}
                    >
                      {title}
                    </Text>
                    <Text color="gray.700" fontSize="sm" mb={2}>
                      {description}
                    </Text>
                  </Flex>
                  <Link {...navigateLinkProps(link)} {...linkProps}>
                    {linkTitle}
                  </Link>
                </Flex>
              )
            )}
          </SimpleGrid>
          <Button as={RRDLink} to="/users/dashboard" colorScheme="white">
            Go to Dashboard
          </Button>
        </Flex>
      </GridContainer>
    </Box>
  );
};
