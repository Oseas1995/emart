import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'


function VentanaModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
      <button class="button" onClick={onOpen}>Abrir modal</button>
      <Modal isOpen={isOpen} onClose ={onClose}>
        <ModalOverlay>
            <ModalContent>
              <ModalHeader>Politicas </ModalHeader>
              <ModalCloseButton></ModalCloseButton>
              <ModalBody>
                <lorem count={2}></lorem>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, velit asperiores tenetur, corporis rerum voluptatum facere quidem inventore, sequi et enim deleniti neque dolorem mollitia minus perferendis atque! Optio, voluptatem!</p>
              </ModalBody>
              <ModalFooter>
                <button colorScheme='blue' mr={3} onClick={onclose}>
                  Aceptar
                </button>
                <button variant='guost'  >No aceptar</button>
              </ModalFooter>
            </ModalContent>
        </ModalOverlay>
      </Modal>
    </div>
  )
}
export default VentanaModal
