import { Image, Text, useDisclosure } from "@chakra-ui/react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react"

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
      <span onClick={onOpen}>{children}</span>

      <Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent h="410px">
          <ModalHeader fontSize="40px" m="0 auto">
            {user.displayName}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody m="0 auto">
            <Image
              borderRadius="full"
              boxSize="150px"
              src={user.avatarImage}
              alt={user.displayName}
              m="0 auto 10px auto"
            ></Image>

            <Text fontSize={{ base: "24px", md: "26px" }}>
              <b>Email:</b> {user.email}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default ProfileModal
