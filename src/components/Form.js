import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { toast } from 'react-toastify';

const FormCantainer = styled.form`
    display: flex;
    align-itens: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #ffffff;
    padding: 20px;
    box-shadow: 0 0 5px #ccc;
    border-radius: 5px;
`;
const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`;
const Label = styled.label`
`;
const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: #ffffff;
    heigth: 42px;
`;
const Form = ({ getUsers, onEdit, setOnEdit }) => {
    const ref = useRef()

    // useEffect(() => {
    //     if (onEdit) {
    //         const user = ref.current

    //         user.resp.value = onEdit.resp
    //         user.tarefa.value = onEdit.tarefa
    //         user.datafinal.value = onEdit.datafinal
    //     }
    // }, [onEdit]);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const user = ref.current

    //     if (!user.resp.value || !user.tarefa.value || !user.datafinal.value) {
    //         return toast.warn("Preencha")
    //     }
    //     if (onEdit) {
    //         await axios.put("http://localhost:8084" + onEdit.id, {
    //             resp: user.resp.value,
    //             tarefa: user.resp.tarefa,
    //             datafinal: user.resp.vdatafinalalue,
    //         })
    //         .then(({ data }) => {
    //             toast.success(data)
    //         })
    //         .catch(({ data }) => {
    //             toast.error(data)
    //         })
    //     } else {
    //         await axios.post("http://localhost:8084", {
    //             resp: user.resp.value,
    //             tarefa: user.resp.tarefa,
    //             datafinal: user.resp.vdatafinalalue,
    //         })
    //         .then(({ data }) => {
    //             toast.success(data)
    //         })
    //         .catch(({ data }) => {
    //             toast.error(data)
    //         })
    //     }

    //     user.resp.value = ""
    //     user.tarefa.value = ""
    //     user.datafinal.value = ""
    //     setOnEdit(null)
    //     getUsers()
    // }
    return (
        <FormCantainer ref={ref}>
            <InputArea>
                <Label>Responsavel</Label>
                <Input name="resp" />
            </InputArea>
            <InputArea>
                <Label>Responsavel</Label>
                <Input name="tarefa" />
            </InputArea>
            <InputArea>
                <Label>Responsavel</Label>
                <Input name="datafinal" type="data"/>
            </InputArea>
            <Button type="submit">Salvar</Button>
        </FormCantainer>
    );
}

export default Form 