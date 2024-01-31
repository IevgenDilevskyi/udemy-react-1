export default function Tabs({ children, buttons, buttonsContainer }) {
  const ButtonsContainer = buttonsContainer // OR can accept ButtonsContainer directly as a prop, but need to pass it from a parent component as ButtonsContainer too
  return (
    <>
      <ButtonsContainer>
        {buttons}
      </ButtonsContainer>
      {children}
    </>
  )
}
