import * as Dialog from "@radix-ui/react-dialog";
import StyleVideoModal from "./styles";



export default function VideoModal() {
  return (
    <Dialog.Root>
      <StyleVideoModal>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content>
            <h1>ABRIU</h1>
          </Dialog.Content>
        </Dialog.Portal>
      </StyleVideoModal>
    </Dialog.Root>
        
  )
}