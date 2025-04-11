import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ProductsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  paddingBottom: '3rem',

  '& div:nth-child(n+2)': {
    marginLeft: '-60px',
  },
})

export const ImageContainer = styled('div', {
  width: 145,
  height: 145,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 9999,
  padding: '0.25rem',
  marginTop: '4rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '-0px 0px 10px 8px rgba(0, 0, 0, 0.3)',
  borderColor: '$gray800',

  img: {
    objectFit: 'cover',
  },
})
