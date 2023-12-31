'use client'
import {Table, TableContainer, Tbody, Th, Thead, Tr} from "@chakra-ui/table";
import {IoCheckmarkDoneCircleSharp} from "react-icons/io5";
import {TaskItem} from "@/components/TaskItem/TaskItem";
import {useDisclosure} from "@chakra-ui/react-use-disclosure";
import {Modal, ModalContent, ModalOverlay} from "@chakra-ui/react";
import {ModalEditTask} from "@/components/Modal/ModalEditTask/ModalEditTask";
import {ITodosTypes, ITodoTypes} from "@/types/TaskItemTypes/TaskItemTypes";

export function TaskPageTable({todos} : ITodosTypes) {
    const {isOpen, onOpen, onClose} = useDisclosure()
    return (
        <>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th><IoCheckmarkDoneCircleSharp  fontSize={'1.5rem'}/></Th>
                            <Th>Due Date</Th>
                            <Th>Task</Th>
                            <Th>Edit</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {todos?.map((item : ITodoTypes) =>
                            <TaskItem todos={item} onClick={onOpen}/>
                        )}
                    </Tbody>
                </Table>
            </TableContainer>
            <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalEditTask onClose={onClose} title={'Edit task'}/>
                </ModalContent>
            </Modal>
        </>
    )
}