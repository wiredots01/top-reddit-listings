import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button } from "@chakra-ui/react";
import React, { useState } from "react";


interface DeleteConfirmationProps {
  onDelete: () => void;
  onClose: () => void;
  title: string;
  subTitle: string;
  show: boolean;
}

export const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({ onClose, onDelete, show = false, title, subTitle }) => {
  const [isOpen, setIsOpen] = useState<boolean>(show);
  const cancelRef = React.useRef(null);

  const onCloseDialog = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onCloseDialog}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {title}
          </AlertDialogHeader>

          <AlertDialogBody>
            {subTitle}
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onCloseDialog}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={onDelete} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
