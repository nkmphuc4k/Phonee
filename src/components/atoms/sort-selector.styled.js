export const selectCustomStyles = {
  control: (base) => ({
    ...base,

    // the next lines remove the blue outline when focused: https://stackoverflow.com/a/57250211/9787887
    borderColor: '#ddd',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#aaa',
    },
    minHeight: 0,
  }),

  dropdownIndicator: (base) => ({
    ...base,
    padding: 3,
  }),

  container: (base) => ({
    ...base,
    width: '11em',
    zIndex: '10',
  }),

  option: (base) => ({
    ...base,
    padding: '0.1em 0.2em',
  }),

  menuList: (base) => ({
    ...base,
    padding: 2,
  }),
};
