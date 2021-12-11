import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center" textAlign="right">
            {showProfileData && (
                <Box mr="4">
                    <Text>João Pedro</Text>
                    <Text color="gray.300" fontSize="small">joaaopedro.inbox@gmail.com</Text>
                </Box>
            )}

            <Avatar size="md" name="João Pedro" src="https://github.com/devjpvr.png" />
        </Flex>
    )
}