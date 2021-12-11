import { FormControl, FormLabel, Input as ChackraInput, InputProps as ChakraInputProps, FormErrorMessage } from '@chakra-ui/react'
import { FieldError } from 'react-hook-form'
import { forwardRef, ForwardRefRenderFunction } from 'react'

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError;
}

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error = null, ...rest }, ref) => {
    return (
        <FormControl isInvalid={!!error}>
          { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

            <ChackraInput 
              name={name}
              id={name}
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled" //estilo do input
              _hover={{
                bgColor: 'gray.900'
              }}
              size="lg"
              ref={ref}
            {...rest}
            />

            { !! error && (
              <FormErrorMessage>
                {error.message}
              </FormErrorMessage>
            ) }
          </FormControl>
    )
}

export const Input = forwardRef(InputBase) //encaminhamento de ref