import { extendTheme } from "@chakra-ui/react";
import type { ThemeConfig } from "@chakra-ui/react";

const theme: ThemeConfig = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        _active: { transform: "scale(0.95)" },
        _hover: { opacity: "0.8" },
      },
    },
  },
});

export default theme;
