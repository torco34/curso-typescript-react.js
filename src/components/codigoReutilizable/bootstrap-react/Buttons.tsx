import Button from 'react-bootstrap/Button';
interface IButtonProps {
  id: number;
  text: string;
  onClick: () => void;
  variant: string;

}
export const Buttons = ({ id, text, onClick, variant }: IButtonProps) => {
  return (
    <>
      <Button variant={variant} id={id.toString()} onClick={() => { onClick() }}>{text}</Button>
    </>
  )
}
