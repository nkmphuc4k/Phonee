export const selectCustomStyles = {
  control: (base) => ({
    ...base,

    // the next lines remove the blue outline when focused: https://stackoverflow.com/a/57250211/9787887
    borderColor: '#ddd',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#aaa',
    },
    minHeight: 0, // (1)
  }),

  dropdownIndicator: (base) => ({
    ...base,
    padding: 3, // (2)
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

// NOTE: To truncate the default padding of <Select/>, need (1) and (2) (Take me days to find out)
