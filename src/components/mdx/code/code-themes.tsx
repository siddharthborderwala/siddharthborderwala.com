import { PrismTheme } from 'prism-react-renderer';

export const rosePineMoon = {
  plain: {
    color: '#e0def4',
    backgroundColor: '#232136',
  },
  styles: [
    {
      types: ['comment'],
      style: {
        color: 'rgb(89, 84, 109)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['constant', 'punctuation'],
      style: {
        color: 'rgb(62, 143, 176)',
      },
    },
    {
      types: ['number', 'builtin'],
      style: {
        color: 'rgb(234, 154, 151)',
      },
    },
    {
      types: ['tag'],
      style: {
        color: 'rgb(156, 207, 216)',
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: 'rgb(196, 167, 231)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['string'],
      style: {
        color: 'rgb(246, 193, 119)',
      },
    },
    {
      types: ['variable'],
      style: {
        color: 'rgb(234, 154, 151)',
        fontStyle: 'italic',
      },
    },
  ],
};

export const rosePineDawn: PrismTheme = {
  plain: {
    color: '#575279',
    fontWeight: '400',
    backgroundColor: '#faf4ed',
  },
  styles: [
    {
      types: ['comment'],
      style: {
        color: 'rgb(152, 147, 165)',
        fontWeight: '400',
        fontStyle: 'italic',
      },
    },
    {
      types: ['constant', 'punctuation'],
      style: {
        color: 'rgb(40, 105, 131)',
        fontWeight: '400',
      },
    },
    {
      types: ['number', 'builtin'],
      style: {
        color: 'rgb(215, 130, 126)',
        fontWeight: '400',
      },
    },
    {
      types: ['tag'],
      style: {
        color: 'rgb(86, 148, 159)',
        fontWeight: '400',
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: 'rgb(144, 122, 169)',
        fontWeight: '400',
        fontStyle: 'italic',
      },
    },
    {
      types: ['string'],
      style: {
        color: 'rgb(234, 157, 52)',
        fontWeight: '400',
      },
    },
    {
      types: ['variable', 'function', 'method', 'property-access'],
      style: {
        color: 'rgb(215, 130, 126)',
        fontWeight: '400',
      },
    },
  ],
};
