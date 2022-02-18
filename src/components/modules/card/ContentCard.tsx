import { Stack, Flex, Text, Image, Heading, Box } from "@chakra-ui/react";
import { Emoji } from "emoji-mart";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Recruit } from "@/types/wanted.type";

interface Props {
  recruit: Recruit;
}

export const ContentCard: NextPage<Props> = ({ recruit }) => {
  const router = useRouter();

  return (
    <Box
      p="6"
      // maxW='32%'
      // minW='350px'
      onClick={() => router.push(`/wanted/${recruit.id}`)}
      boxShadow='xl'
      rounded='xl'

    >
        <Box
          p="6"
          my="4"
          border="1px"
          rounded="md"
          borderColor="gray.200"
          textAlign="center"
        >
          <Emoji emoji={recruit.thumbnail} size={52} />
        </Box>
        <Heading color="gray.700" fontSize="lg" fontFamily="body" mb="2">
          {recruit.title}
        </Heading>
        <Text color="gray.500" fontSize="sm">
          Chakra UI is a simple, modular and accessible component library that
          gives you the building blocks you need to build your React
          applications.
        </Text>
        <Flex mt="6" gap={2} align="center">
          <Image
            borderRadius="full"
            boxSize="50px"
            src={recruit.user.picture}
            alt={recruit.user.nickname}
          />
          <Box fontSize="sm">
            <Text fontWeight="bold">{recruit.user.nickname}</Text>
            <Text color="gray.500">Aug 12, 2021 · 15min read</Text>
          </Box>
        </Flex>
    </Box>
  );
};
