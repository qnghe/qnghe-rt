import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";


function ColorScheme() {
  const {colorScheme, toggleColorScheme} = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant="outline"
      size='md'
      onClick={() => toggleColorScheme()}
      title={dark ? 'Dark' : "Light"}
      sx={{borderColor: dark ? '#373a40' : '#dee2e6'}}
    >
      {dark ? <IconSun size={20} /> : <IconMoonStars size={20} />}
    </ActionIcon>
  );
}
export default ColorScheme;