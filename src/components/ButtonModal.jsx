export default function ButtonModal({modal_name, children}) {
  return (
    <label htmlFor={modal_name}>
        {children}
  </label>
  )
}
