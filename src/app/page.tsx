// Así se puede poner las propiedades de un componente 
type ButtonProps = {
  title: string,
  subtitle?: string, // optional
  color?: string // optional
  backgroundcolor?: "red" | "blue" | "green" | "yellow", // Union Type
  size?: "small" | "medium" | "large", // Union Type
  onClick?: () => void // Function Type
}


// una Forma de pasar propiedades a un componente
/* function Button(props: ButtonProps) {

  const { title } = props

  return (
    <button>{title}</button>
  )
} */1
// otra forma de pasar propiedades a un componente usando destructurización
function Button({ title, subtitle, color }: ButtonProps) {


  return (
    <button>{title}</button>
  )
}

function page() {
  return (
    <div><Button
      title="Click me Emill"
    /></div>
  )
}

export default page