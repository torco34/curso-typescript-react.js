import Button from 'react-bootstrap/Button';
export const Boton = ({ handleOnClick }: any) => {
    return (
        <div>
            <Button onClick={handleOnClick}>boton padre</Button>
        </div>
    )
}
