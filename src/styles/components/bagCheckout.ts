import { Dialog } from 'radix-ui'
import { keyframes, styled } from '..'

const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const fadeOut = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

export const BagCheckoutContainer = styled(Dialog.Content, {
  zIndex: 999,
  display: 'flex',
  paddingLeft: '36px',
  paddingTop: '16px',
  paddingRight: '36px',
  paddingBottom: '36px',
  fontSize: '$sm',
  flexDirection: 'column',
  position: 'absolute',
  backgroundColor: '$gray800',
  height: 'calc(100% + 656px)',
  overflow: 'auto',
  boxShadow: '-0px 0px 10px 8px rgba(0, 0, 0, 0.3)',
  borderRadius: '6px 0 0 6px',
  minWidth: '40%',
  right: 0,
  top: 20,
  animation: `${fadeIn} 0.5s ease-out`,

  '&[data-state="closed"]': {
    animation: `${fadeOut} 0.5s ease-out`,
  },
  '&[data-state="open"]': {
    opacity: 1,
  },
})

export const ModalCloseButton = styled(Dialog.Close, {
  backgroundColor: 'transparent',
  marginRight: '-20px',
  marginBottom: '14px',
  alignSelf: 'end',
  color: '$gray300',
  border: 'none',
  cursor: 'pointer',
  transition: 'color 0.3s ease',

  '&:hover': {
    color: '$gray100',
  },
})

export const ProductBagContainer = styled('div', {
  flexGrow: '1',
})

export const ProductBag = styled('div', {
  display: 'flex',
  marginTop: '24px',
  flexGrow: '1',
})

export const ImageProductBagContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  maxWidth: 110,
  maxHeight: 100,
  display: 'flex',
  justifyContent: 'center',
  borderRadius: 8,
})

export const InfoProductBagContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '20px',
  fontSize: '$md',
  gap: '1rem',

  p: {
    color: '$gray300',
  },
  span: {
    fontWeight: 'bold',
  },
})

export const RemoveButtonInfoProduct = styled('button', {
  fontSize: '$sm',
  fontWeight: 'bold',
  color: '$green500',
  width: 'fit-content',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  transition: 'color 0.3s ease',

  '&:hover': {
    color: '$green300',
  },
})

export const ProductBagContainerFooter = styled('footer', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '0.5rem',

  span: {
    fontSize: '$sm',
    color: '$gray300',
  },
  p: {
    color: '$gray100',
    fontSize: '$md',
    fontWeight: 'bold',
  },

  'span:nth-of-type(2)': {
    justifySelf: 'end',
  },
  'p:nth-of-type(2)': {
    fontSize: '$lg',
    justifySelf: 'end',
  },
})

export const FinishCheckoutButton = styled('button', {
  marginTop: '24px',
  gridColumn: 'span 2',
  backgroundColor: '$green500',
  border: 'none',
  color: '$gray100',
  height: '60px',
  borderRadius: '8px',
  fontSize: '$md',
  fontWeight: 'bold',
  transition: 'background-color 0.3s ease',
  cursor: 'pointer',

  '&:disabled': {
    opacity: 0.5,
    cursor: 'default',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
  },
})
