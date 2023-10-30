/* eslint react/no-unescaped-entities */
import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a full-stack developer based in VietNam!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Neco
            </Heading>
            <p>Software Engineer ( Web / Game / App )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/neco.png"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Neco is a developer who studying in FPT University. He looking for
            opportunities to challenge himself in the software industry. His
            ambition extends beyond lines of code. He's driven to positively
            impact the world through technology, striving to create software
            that enhances lives and businesses. Why should we let AI take our
            place when we can use it to make our work simpler? He sees coding
            not only as a skill but as an art form. Each line of code is a
            stroke on the canvas of possibility, and he take pride in crafting
            clean, efficient, and elegant solutions.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2003</BioYear>
            Born in Hanoi, VietNam.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Worked at Apollo English.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Art, Music, Drawing, Playing Piano, Games, Machine Learning
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
