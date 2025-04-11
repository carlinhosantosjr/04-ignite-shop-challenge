import { styled } from '..'

export const HeaderContainer = styled('header', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
})

export const ShoppingBagButton = styled('button', {
  position: 'relative',
  backgroundColor: '$gray800',
  height: '46px',
  width: '46px',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',

  '&:disabled': {
    opacity: 0.5,
    cursor: 'default',
  },

  variants: {
    isFooter: {
      true: {
        backgroundColor: '$green500',
        height: '54px',
        width: '54px',
      },
    },
  },
})

export const BadgeBag = styled('span', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$green300',
  border: 'none',
  borderRadius: '9999px',
  width: '20px',
  height: '20px',
  position: 'absolute',
  color: '$gray100',
  fontSize: '$sm',
  top: '-5px',
  right: '-5px',
})
