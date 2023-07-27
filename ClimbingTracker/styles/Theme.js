import { extendTheme } from "native-base";

const Theme = extendTheme({
  colors: {
    white: "white",
    black: "black",
    rose: {
      50: "#fff1f2",
      100: "#ffe4e6",
      200: "#fecdd3",
      300: "#fda4af",
      400: "#fb7185",
      500: "#f43f5e",
      600: "#e11d48",
      700: "#be123c",
      800: "#9f1239",
    },
    indigo: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81",
    },
    light: {//white with indigo
        primary: "#6366f1", //500
        secondary: "#c7d2fe",//200
        light: "#e0e7ff", //100
        background: "#6366f1",
        dark: "#3730a3",
    },
    dark: {//black with rose

      primary: "#f43f5e", //500
      secondary: "#fecdd3", //200
      light:  "#ffe4e6", //100
      background: "#f43f5e",
      dark: "#9f1239",
    },
  },
  components: {
    Box: {
      variants: {
        safeArea: {
          _light: {
            bg: "gray.100",
          },
          _dark: {
            bg: "black",
          },
        },
      },
    },
    View: {
      baseStyle: {
        _light: {
          bg: "gray.100",
        },
        _dark: {
          bg: "black",
        },
      },
    },
    Button: {
      defaultProps: {
        colorScheme: "trueGray",
        borderWidth: 1,
      },
      baseStyle: {
        _dark: {
          borderColor: "white",
        },
        _light: {
          borderColor: "black",
        },
      },
    },
  },
  config: {
    initialColorMode: "light",
  },
});

/* 
  components: {
    View: {
        baseStyle: {
            backgroundColor: 'red.200'
        },
        defaultProps: {
            bg: {
                light: 'gray.100',
                darkk: 'gray.700'
            },
        },
    },
    Box: {
      defaultProps: {
        borderColor: {
            light: 'red',
            dark: 'blue'
        },
        bg: {
            light: 'primaryYellow',
            dark: 'red'
        }
      },
    },
  },

*/
export default Theme;
