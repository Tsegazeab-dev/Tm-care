import Image from 'next/image'
import {Button} from './ui/button'
interface BUttonProps {
    isLoading : boolean,
    className?:  string,
    children: React.ReactNode,
}
function SubmitButton({isLoading, className, children}: BUttonProps) {
  return (
   <Button type='submit' disabled={isLoading} className={className ?? 'shad-primary-btn w-full'}>
    {
        isLoading ? (
            <div className='flex items-center gap-4'>
             <Image
             src='/assets/icons/loader.svg'
             height={24}
             width={24}
             alt='loader'
             className='animate-spin'
             />
             Loading ...
            </div>
        ) : children
    }
   </Button>
  )
}

export default SubmitButton