import { MdContentCopy } from 'react-icons/md';

interface CopyButtonProps {
  textToCopy: string,
}

export function CopyButton({textToCopy}: CopyButtonProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)
  }

  return (
    <button onClick={handleCopy}>
      <MdContentCopy title='Clique aqui para copiar!'/>
    </button>
  )
}