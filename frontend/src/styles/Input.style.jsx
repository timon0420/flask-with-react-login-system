import styled from 'styled-components'

export const InputForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const Input = styled.input`
    width: 200px;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 10px;
    letter-spacing: 1px;
`
export const Button = styled.button`
    width: 200px;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 10px;
    letter-spacing: 1px;
    transition: 0.3s ease-in-out;
    &:hover {
        cursor: pointer;
        transform: scaleX(1.05);
    }
`
export const TextArea = styled.textarea`
    width: 200px;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 10px;
    letter-spacing: 1px;
    resize: vertical;
`