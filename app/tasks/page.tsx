'use client'
import {todoList} from "@/consts/todo-list";
import {CustomSelector} from "@/components/CustomSelector/CustomSelector";
import {Table, TableContainer, Tbody, Th, Thead, Tr} from "@chakra-ui/table";
import {IoCheckmarkDoneCircleSharp} from "react-icons/io5";
import {TaskItem} from "@/components/TaskItem/TaskItem";
import {useDisclosure} from "@chakra-ui/react-use-disclosure";
import {Modal, ModalContent, ModalOverlay} from "@chakra-ui/react";
import {ModalAddTask} from "@/components/Modal/ModalAddTask/ModalAddTask";

export default function TasksPage() {
    const {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <div className={'w-full mt-10'}>
            <header className={'flex items-center justify-between'}>
                <h2 className={'text-sky-950 text-xl font-bold font-[\'Inter\']'}>Total : {todoList.length} task/s</h2>
                <div>
                    <CustomSelector/>
                </div>
            </header>
            <main className={'mt-10'}>
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
                            {todoList.map((item) =>
                                <TaskItem todos={item} onClick={onOpen}/>
                            )}
                        </Tbody>
                    </Table>
                </TableContainer>
            </main>
            <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalAddTask onClose={onClose} title={'Add new task'}/>
                </ModalContent>
            </Modal>
        </div>
    )
}